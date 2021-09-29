from django.core import paginator
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from base.models import Product, Review, Category, Order, OrderItem
from base.serializers import ProductSerializer, CategorySerializer


@api_view(['GET'])
def getCategory(request):
  category = Category.objects.all()
  serializer = CategorySerializer(category, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def getProducts(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)
  # query = request.query_params.get('category')
  # print(query)
  # if query == None:
  #   query = ''
  # products = Product.objects.filter(name__icontains=query)
  # page = request.query_params.get('page')
  # paginator = Paginator(products, 4)
  
  # try:
  #   products = paginator.page(page)
  # except PageNotAnInteger:
  #   products = paginator.page(1)
  # except EmptyPage:
  #   products = paginator.page(paginator.num_pages)
  
  # if page == None:
  #   page = 1 
  
  # page = int(page)
  
  # serializer = ProductSerializer(products, many=True)
  # return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})

@api_view(['GET'])
def getProduct(request, pk):
  try:
    product = Product.objects.get(_id=pk)
  except:
    return Response({'detail': 'Product does not exist'}, status=status.HTTP_400_BAD_REQUEST)
  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
  user = request.user
  product = Product.objects.create(
    user = user,
    name = 'Sample Name',
    price = 0,
    brand='sample brand',
    category=Category.objects.get(_id=1),
    countInStock = 0,
    description=''
  )
  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
  data = request.data
  product = Product.objects.get(_id=pk)
  serializer = ProductSerializer(product, many=False)
  
  product.name = data['name']
  product.price = data['price']
  product.brand = data['brand']
  product.category = Category.objects.get(name=data['category'])
  product.countInStock = data['countInStock']
  product.description = data['description']
  
  product.save()
  return Response('Product was updated')


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
  product = Product.objects.get(_id=pk)
  product.delete()
  return Response('Product was deleted')


@api_view(['POST'])
def uploadImage(request):
  data = request.data 
  product_id = data['product_id']
  product = Product.objects.get(_id=product_id)
  product.image = request.FILES.get('image')
  product.save()
  return Response('Image was uploaded')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
  user = request.user
  data = request.data
  product = Product.objects.get(_id=pk)
  
  def verifedBuyer(product, user):
    orders = Order.objects.filter(user=user)
    for order in orders:
      if product.orderitem_set.filter(order=order).exists():
        return True
    return False  
  #1. Review already exists
  alreadyExists = product.review_set.filter(user=user).exists()
  
  if alreadyExists: 
    return Response({'detail': 'Product already reviews'}, status=status.HTTP_400_BAD_REQUEST)
  
  #2. Not verified buyer
  
  
  
  elif not verifedBuyer(product, user):
    return Response({'detail': 'Sorry! You need to purchase product to leave a review'}, status=status.HTTP_400_BAD_REQUEST)
  
  #3. Create review
  else:
    review = Review.objects.create(
      user=user,
      product=product,
      name=user.first_name,
      rating=data['rating'],
      comment=data['comment'],
      title=data['title']
    )
    reviews = product.review_set.all()
    product.numReviews = len(reviews)
    total = 0
    for i in reviews:
      total += i.rating
    product.rating = total / len(reviews)
    product.save()
    
    return Response('Your review was added')
  
  