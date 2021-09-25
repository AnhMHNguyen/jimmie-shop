from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.serializers import Serializer
from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import OrderSerializer
from datetime import datetime

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
  user = request.user 
  data = request.data 
  orderItems = data['orderItems']
  if orderItems and len(orderItems) == 0: 
    return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
  else:
    # 1. Create order
    order = Order.objects.create(
      user = user,
      paymentMethod=data['paymentMethod'],
      itemsPrice=data['itemsPrice'],
      taxPrice=data['taxPrice'],
      shippingPrice = data['shippingPrice'],
      totalPrice = data['totalPrice'],
      isPaid = data['isPaid'],
      paidAt = datetime.now()
    )
    # 2. Create shipping address
    if 'address2' in data['shippingAddress']:
      address2 = data['shippingAddress']['address2']
    else: 
      address2 = ''
    print(data['shippingAddress'])
    shipping = ShippingAddress.objects.create(
      order = order,
      fName = data['shippingAddress']['fName'],
      lName = data['shippingAddress']['lName'],
      phoneNumber = data['shippingAddress']['phoneNumber'],
      address1 = data['shippingAddress']['address1'],
      address2 = address2,
      city = data['shippingAddress']['city'],
      postalCode = data['shippingAddress']['postalCode'],
      country = data['shippingAddress']['country']
    )
    # 3. Create Order Item and set order to order to orderItem relationship
    for i in orderItems:
      product = Product.objects.get(_id=i['_id'])
      item = OrderItem.objects.create(
        product=product,
        order=order,
        name=product.name,
        qty=i['quantity'],
        price=i['price'],
        image=product.image.url
      )
    
      # 4. Update stock
      product.countInStock -= item.qty 
      product.save()
    serializer = OrderSerializer(order, many=False)
    return Response('Thank you for your order')
  

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):
  user = request.user
  try: 
    order= Order.objects.get(_id=pk)
    if user.is_staff or order.user == user:
      serializer = OrderSerializer(order, many=False)
      return Response(serializer.data)
    else:
      return Response({'detail': 'Not authorized to view this order'}, status=status.HTTP_400_BAD_REQUEST)
  except:
    return Response({'detail': 'Order does not exists'}, status=status.HTTP_400_BAD_REQUEST)
  
  
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
  user = request.user
  orders = user.order_set.all()
  Serializer = OrderSerializer(orders, many=True)
  return Response(Serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrders(request):
  orders = Order.objects.all()
  Serializer = OrderSerializer(orders, many=True)
  return Response(Serializer.data)
  


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToDelivered(request, pk):
  order = Order.objects.get(_id=pk)
  order.isDelivered = True
  order.deliveredAt = datetime.now()
  order.save()

  return Response('Order was updated')
