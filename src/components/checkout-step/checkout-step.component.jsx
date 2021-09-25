import React from 'react'
import { StepContainer, LinkContainer } from './checkout-step.styles'

const CheckoutStep = ({step}) => {
  
  return (
    <StepContainer>
      <LinkContainer to="/cart">Bag</LinkContainer>
      <LinkContainer to="/checkout?step=shipping" className={(step === undefined || step==='shipping') ? "active" : ""}>Shipping</LinkContainer>
      <LinkContainer to="/checkout?step=payment" className={(step==='payment') ? "active" : ""}>Payment</LinkContainer>
      <LinkContainer to="/checkout?step=review" className={(step==='review') ? "active" : ""}>Review</LinkContainer>
    </StepContainer>
  )
}

export default CheckoutStep
