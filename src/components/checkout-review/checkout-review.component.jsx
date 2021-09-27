import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router';
import { PayPalButton } from "react-paypal-button-v2";
import Spinner from '../spinner/spinner.component'
import { selectShippingAddress, selectPaymentMethod, selectCartTotal ,selectCartAllPrice, selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectOrderMessage } from '../../redux/order/order.selectors'
import { clearCart } from '../../redux/cart/cart.actions';
import { createOrderStart } from '../../redux/order/order.actions';
import { CheckoutReviewContainer, DetailsContainer,TitleContainer } from './checkout-review.styles'


const CheckoutReview = ({ history }) => {
  const dispatch = useDispatch()
  const [sdkReady, setSdkReady] = useState(false)
  const message = useSelector(selectOrderMessage)
  const cartItems = useSelector(selectCartItems)
  const currentUser = useSelector(selectCurrentUser)
  const address = useSelector(selectShippingAddress)
  const payment = useSelector(selectPaymentMethod)
  const total = useSelector(selectCartTotal)
  const { subtotal, taxPrice, shippingPrice } = useSelector(selectCartAllPrice)

  useEffect(() => {
    if (message){
      alert({message})
      dispatch(clearCart())
      // dispatch(resetOrder())
      // dispatch(resetCart())
      history.push(`/`)
    }
    if (window.paypal) {
      setSdkReady(true)
    }
  }, [ dispatch, message, history])

  const successPaymentHandler = ({ status }) => {
    // dispatch(payOrder(orderId, paymentResult))
    console.log('payment', status)
    if (status === 'COMPLETED'){
      dispatch(createOrderStart({
        orderItems: cartItems,
        shippingAddress: address,
        paymentMethod: payment,
        itemsPrice: subtotal,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: total,
        isPaid: true
      }))
    }
  }

  return (
    <CheckoutReviewContainer>
      <TitleContainer>Contact Information</TitleContainer>
      <DetailsContainer>
        <span><strong>{currentUser.email}</strong></span>
      </DetailsContainer>

      <TitleContainer>Shipping Information</TitleContainer>
      <DetailsContainer>
        <span><strong>{address.fName} {address.lName}</strong></span>
        <span>+1{address.phoneNumber}</span>
        <span>{address.address1}</span>
        {address.address2 && <span>{address.address2}</span>}
        <span>{address.city} {address.province} {address.country} {address.postalCode}</span>
      </DetailsContainer>

      <TitleContainer>Payment Method</TitleContainer>
      <DetailsContainer>
        <span><strong>{payment.toUpperCase()}</strong></span>
      </DetailsContainer>
      <TitleContainer style={{ marginBottom:'20px'}}>Pay and Place My Order</TitleContainer>
      {!sdkReady ? (
          <Spinner />
      ) : (
          <PayPalButton
              amount={total}
              currency='CAD'
              shippingPreference='NO_SHIPPING'
              onSuccess={successPaymentHandler}
          />
      )}
    </CheckoutReviewContainer>
  )
}

export default withRouter(CheckoutReview)
