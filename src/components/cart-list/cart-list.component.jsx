import React from 'react'
import { withRouter } from 'react-router';
import CartItem from '../cart-item/cart-item.component'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartSubtotal, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartListContainer,
  CartHeaderContainer,
  CartListButton,
  EmptyMessageContainer,
  CartItemsContainer,
  CartTotal
} from './cart-list.styles';
const CartList = ({ history, close }) => {
  const cartItems = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartSubtotal)
  const count = useSelector(selectCartItemsCount)

  const clickHandler = (cart) => {
    if(cart)  history.push('/cart')
    else history.push('/checkout?step=shipping')
    close()
  }

  return (
    <CartListContainer>
      <CartHeaderContainer>My Bag({count})</CartHeaderContainer>
    <CartItemsContainer>
      { cartItems.length ? 
          cartItems.map(cartItem => (
            <CartItem key={cartItem._id} item={cartItem} />
          ))
          :
          <EmptyMessageContainer>
            Your cart is empty
          </EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartTotal>Subtotal: CAD${subtotal}</CartTotal>
    <CartListButton onClick={() =>clickHandler(false)}>
      Go to checkout
    </CartListButton>
    <CartListButton onClick={() =>clickHandler(true)} inverted>
      View Cart
    </CartListButton>
  </CartListContainer>
);
  
}

export default withRouter(CartList)
