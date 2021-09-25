import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrderDetails, selectIsOrderLoading, selectOrderError } from '../../redux/order/order.selectors'
import Spinner from '../../components/spinner/spinner.component'
import ErrorFallBack from '../../components/error-boundary/error-boundary.component'
import { orderDetailsStart } from '../../redux/order/order.actions'
import {CgMoreVertical} from 'react-icons/cg'
import { OrderPageContainer, ContentContainer, TitleContainer, PriceDetailsContainer, OrderDetailsContainer, OrderHeader, Divider, HeaderBlockContainer, DetailsContainer, DetailsBlockContainer, ItemContainer,ImageContainer, ItemTitle, ItemQty, ItemPrice, ItemDetails, SubTitleContainer, PriceContainer, TotalPrice } from './orderPage.styles'

const OrderPage = ({ match }) => {
  const orderId = match.params.id
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsOrderLoading)
  const error = useSelector(selectOrderError)
  const order = useSelector(selectOrderDetails)

  useEffect(() => {
    dispatch(orderDetailsStart(orderId))
  }, [dispatch, orderId])

  return error ? <ErrorFallBack error={error} /> : 
  (error === null && order === null ) ? <Spinner /> : (
    <OrderPageContainer>
      <ContentContainer>
        <OrderDetailsContainer>
          <TitleContainer>Order Details</TitleContainer>
          <OrderHeader>
            <HeaderBlockContainer>
              Information
            </HeaderBlockContainer>
            <HeaderBlockContainer>
              Shipping To
            </HeaderBlockContainer>
            <HeaderBlockContainer>
              Payment Methods
            </HeaderBlockContainer>
          </OrderHeader>

          <DetailsContainer>
            <DetailsBlockContainer>
              <span>Date Ordered: {order.createdAt.split('T')[0]}</span>
              <span>Order Status: {order.isDelivered ? `Delivered ${order.deliveredAt.split('T')[0]}` : 'Processing'}</span>
              <span>Order Number: {order._id}</span>
            </DetailsBlockContainer>
            <DetailsBlockContainer>
              <span>{order.shippingAddress.fName} {order.shippingAddress.lName}</span>
              <span>{order.shippingAddress.phoneNumber}</span>
              {order.shippingAddress.address2 && <span>{order.shippingAddress.address2}</span>}
              <span>{order.shippingAddress.address1}</span>
              <span>{order.shippingAddress.city} {order.shippingAddress.province} {order.shippingAddress.country} {order.shippingAddress.postalCode}</span>
            </DetailsBlockContainer>
            <DetailsBlockContainer>
              <span>{order.paymentMethod}</span>
              <span>Paid Status: {order.isPaid ? order.paidAt.split('T')[0] : 'Not Paid / Problem with payment'}</span>
              <span>Amount: ${order.totalPrice}</span>
            </DetailsBlockContainer>
          </DetailsContainer>
         <Divider />
          {order.orderItems.map( item => 
            <ItemContainer key={item._id}>
              <ImageContainer>
                <img src={item.image} alt="item" />
              </ImageContainer>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemQty>x {item.qty}</ItemQty>
              <ItemPrice>CAD${item.price}</ItemPrice>
              <ItemDetails to={`/product/${item._id}`}><CgMoreVertical/></ItemDetails>
            </ItemContainer>  
          )}
        </OrderDetailsContainer>

        <PriceDetailsContainer>
            <SubTitleContainer>Payment Total</SubTitleContainer>
            <PriceContainer>
              <span><strong>Subtotal:</strong></span>
              <span>${order.itemsPrice}</span>
            </PriceContainer>
            <PriceContainer>
              <span><strong>Tax(13%):</strong></span>
              <span>${order.taxPrice}</span>
            </PriceContainer>
            <PriceContainer>
              <span><strong>Shipping:</strong></span>
              <span>{order.shippingPrice === 0 ? 'Free Shipping' : `$${order.shippingPrice}`}</span>
            </PriceContainer>
            <Divider />
            <PriceContainer>
              <TotalPrice><strong>TOTAL</strong></TotalPrice>
              <TotalPrice>CAD${order.totalPrice}</TotalPrice>
            </PriceContainer>
        </PriceDetailsContainer>
      </ContentContainer>
    </OrderPageContainer>
  )
}

export default OrderPage
