import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingBagItem from '../shopping-bag-item/shopping-bag-item.component'
import { selectCartItems, selectCartTotal, selectCartAllPrice } from '../../redux/cart/cart.selectors'
import { SummaryCartContainer, PriceContainer, Divider, TotalPrice } from './summary-cart.styles'

const SummaryCart = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const { subtotal, taxPrice, shippingPrice } = useSelector(selectCartAllPrice)
  
  return (
    <SummaryCartContainer>
      { cartItems.map(cartItem => 
        <ShoppingBagItem key={cartItem._id} cartItem={cartItem} />
      )}
      <PriceContainer>
        <span><strong>Subtotal:</strong></span>
        <span>${subtotal}</span>
      </PriceContainer>
      <PriceContainer>
        <span><strong>Tax(13%):</strong></span>
        <span>${taxPrice}</span>
      </PriceContainer>
      <PriceContainer>
        <span><strong>Shipping:</strong></span>
        <span>{shippingPrice === 0 ? 'Free Shipping' : `$${shippingPrice}`}</span>
      </PriceContainer>
      <Divider />
      <PriceContainer>
        <TotalPrice><strong>TOTAL</strong></TotalPrice>
        <TotalPrice>${total}</TotalPrice>
      </PriceContainer>
    </SummaryCartContainer>
  )
}

export default SummaryCart
