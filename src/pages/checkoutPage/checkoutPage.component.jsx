import React,{ useState, useEffect } from 'react'
import CheckoutStep from '../../components/checkout-step/checkout-step.component';
import Shipping from '../../components/shipping/shipping.component';
import PaymentMethod from '../../components/payment-method/payment-method.component'
import CheckoutReview from '../../components/checkout-review/checkout-review.component'
import SummaryCart from '../../components/summary-cart/summary-cart.component';
import {
  CheckoutPageContainer,
  ContentContainer
} from './checkoutPage.styles';

const CheckoutPage = ({location}) => {
  const [step, setStep] = useState('')
  useEffect(() => {
    setStep(new URLSearchParams(location.search).get('step'))
  }, [location])
  return (
    <CheckoutPageContainer>
      <CheckoutStep step={step}/>
      <ContentContainer>
        {(step === 'shipping' || step===null)  && <Shipping/>}
        {step === 'payment'  && <PaymentMethod />}
        {step === 'review' && <CheckoutReview />}
        <SummaryCart />
      </ContentContainer>
  </CheckoutPageContainer>
  )
}

export default CheckoutPage
