import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import {
  ShoppingBagItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
  PriceContainer
} from './shopping-bag-item.styles';

const ShoppingBagItem = ({ cartItem, history }) => {
  const { name, image, price, quantity, _id } = cartItem
  const dispatch = useDispatch()
  return (
    <ShoppingBagItemContainer>
    <ImageContainer>
      <img src={image} alt="item" />
    </ImageContainer>
    <TextContainer onClick={() => history.push(`/product/${_id}`)}>{name}</TextContainer>
    <QuantityContainer>
      <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
      <span>{quantity}</span>
      <div onClick={() => dispatch(addItem({cartItemToAdd: cartItem, quantity: 1}))}>&#10095;</div>
    </QuantityContainer>
    <PriceContainer>${price}</PriceContainer>
    <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButtonContainer>
  </ShoppingBagItemContainer>
  )
}

export default withRouter(ShoppingBagItem)