import React from 'react'
import { UserOrdersItemContainer, OrderHeader, HeaderContainer, LinkContainer, OrderDetails, RowContainer, InfoContainer, ItemInfo, ItemButton, Divider } from './user-orders-item.styles'

const UserOrdersItem = ({ order, index }) => {
  const {orderItems, shippingAddress} = order
  return (
    <UserOrdersItemContainer>
      <OrderHeader>
        <HeaderContainer>Order #{index}</HeaderContainer>
        <LinkContainer to={`/order/${order._id}`}>Order Details</LinkContainer>
      </OrderHeader>
      <OrderDetails>
        <span>Date Ordered:</span>
        <span>Order Status:</span>
        <span>Order Number: {order._id}</span>
        <span>Order Total: CAD${order.totalPrice} </span>
        <RowContainer>
        <InfoContainer>
          <span style={{ marginBottom: '5px'}}>Shipped to:</span>
          <span>{shippingAddress.fName} {shippingAddress.lName}</span>
          <span>{shippingAddress.phoneNumber}</span>
          {shippingAddress.address2 && <span>{shippingAddress.address2}</span>}
          <span>{shippingAddress.address1}</span>
          <span>{shippingAddress.city}, {shippingAddress.province}</span>
          <span>{shippingAddress.country} {shippingAddress.postalCode}</span>
          <span>Shipping fee: ${order.shippingPrice}</span>
        </InfoContainer>
        <InfoContainer>
          <span style={{ marginBottom: '5px'}}>Items: </span>
          { orderItems.map( item => 
            <ItemInfo key={item._id}>
              <span>{item.name}</span>
              <ItemButton to={`/product/${item._id}`}>Item Details</ItemButton>
            </ItemInfo>)}
        </InfoContainer>

      </RowContainer>
      </OrderDetails>
      <Divider />
    </UserOrdersItemContainer>
  )
}

export default UserOrdersItem
