import React from 'react';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveButtonContainer,
  QuantityContainer,
  TextContainer
} from './cart-item.styles';

const CartItem = ({ item}) => {
  const { name, image, price, quantity } = item
  const dispatch = useDispatch()
  return (
    <CartItemContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</RemoveButtonContainer>
      <CartItemImage src={image} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <QuantityContainer>
          <div onClick={() => dispatch(removeItem(item))}>&#10094;</div>
          <span>{quantity}</span>
          <div onClick={() => dispatch(addItem({cartItemToAdd: item, quantity: 1}))}>&#10095;</div>
        </QuantityContainer>
      </ItemDetailsContainer>
      <TextContainer>CAD${price}</TextContainer>
    </CartItemContainer>
  )
};

export default CartItem;