import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../components/spinner/spinner.component'
import ErrorFallBack from '../../components/error-boundary/error-boundary.component'
import { selectOrderList, selectOrderMessage, selectOrderError } from '../../redux/order/order.selectors.js'
import { allOrdersStart, deliveredOrderStart } from '../../redux/order/order.actions.js'
import { AdminOrderPageContainer, ContentContainer, TitleContainer, HeaderContainer, HeaderBlock, DetailsContainer, DetailsBlock, OrderedItemContainer, DetailsButton } from './adminOrderPage.styles'

const AdminOrderPage = () => {
  const dispatch = useDispatch()
  const orderList = useSelector(selectOrderList)
  const message = useSelector(selectOrderMessage)
  const error = useSelector(selectOrderError)
  const [ delivered, setDelivered] = useState(false)

  useEffect(() => {
    dispatch(allOrdersStart())
    if (message) alert(message)
  },[dispatch, message])

  const deliveredHandler = (orderId) => {
    if (window.confirm('Are you sure this order is delivered ?')) {
      setDelivered(true)
      dispatch(deliveredOrderStart(orderId))
    }
  }

  return error ? <ErrorFallBack error={error} /> : 
    (error === null && orderList === null) ? <Spinner /> : (
    <AdminOrderPageContainer>
      <ContentContainer>
        <TitleContainer>Order List</TitleContainer>
        <HeaderContainer>
          <HeaderBlock>Id</HeaderBlock>
          <HeaderBlock>Status</HeaderBlock>
          <HeaderBlock>Shipping</HeaderBlock>
          <HeaderBlock>Ordered Items</HeaderBlock>
          <HeaderBlock>Payment</HeaderBlock>
          <HeaderBlock></HeaderBlock>
        </HeaderContainer>
        { orderList.map(order => 
          <DetailsContainer key={order._id}>
            <DetailsBlock>{order._id}</DetailsBlock>
            <DetailsBlock>
              <span>Date Ordered: {order.createdAt.split('T')[0]}</span>
              <span>User Email: {order.user.email}</span>
              <span>Order Status: {order.isDelivered ? `Delivered on ${order.deliveredAt.split('T')[0]}` : 
                <select name="delivered" value={delivered} onChange={() => deliveredHandler(order._id)} disabled={delivered}>
                  <option value="false">Processing</option>
                  <option value="true">Delivered</option>
                </select>
              }
              </span>
            </DetailsBlock>
            <DetailsBlock>
              <span>{order.shippingAddress.fName} {order.shippingAddress.lName}</span>
              <span>{order.shippingAddress.phoneNumber}</span>
              {order.shippingAddress.address2 && <span>{order.shippingAddress.address2}</span>}
              <span>{order.shippingAddress.address1}</span>
              <span>{order.shippingAddress.city} {order.shippingAddress.province} {order.shippingAddress.country} {order.shippingAddress.postalCode}</span>
            </DetailsBlock>
            <DetailsBlock>
              {order.orderItems.map(item => 
                <OrderedItemContainer key={item._id}>
                  <span>{item.name}</span>
                  <span>x {item.qty}</span>
                </OrderedItemContainer>  
              )}
            </DetailsBlock>
            <DetailsBlock>
              <span>Payment Method: {order.paymentMethod}</span>
              <span>Paid Status: {order.isPaid ? order.paidAt.split('T')[0] : 'Not Paid / Problem with payment'}</span>
              <span>Subtotal: ${order.itemsPrice}</span>
              <span>Shipping Fee: ${order.shippingPrice}</span>
              <span>Tax: ${order.taxPrice}</span>
              <span><strong>Total Amount:</strong> ${order.totalPrice}</span>
            </DetailsBlock>
            <DetailsBlock>
              <Link to={`/order/${order._id}`}><DetailsButton /></Link>
            </DetailsBlock>
          </DetailsContainer>  
        )}
      </ContentContainer>
      
    </AdminOrderPageContainer>
  )
}

export default AdminOrderPage
