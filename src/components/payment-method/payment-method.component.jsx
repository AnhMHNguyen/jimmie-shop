import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router';
import CardPayment from '../card-payment/card-payment.component'
import { savePaymentMethod } from '../../redux/cart/cart.actions'
import { selectPaymentMethod } from '../../redux/cart/cart.selectors'
import { PaymentMenthodContainer, TitleContainer, OptionContainer, RadioButton, RadioButtonLabel, Fill, NextButton } from './payment-method.styles'

const PaymentMethod = ({history}) => {
  const dispatch = useDispatch()
  const [ paymentMethod, setPaymentMethod ] = useState(useSelector(selectPaymentMethod))
  const [ card, setCard ] = useState(false)

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/checkout?step=review')
  }

  return (
    <PaymentMenthodContainer>
      <TitleContainer>Payment Method</TitleContainer>
      <OptionContainer>
        <RadioButton 
          type='radio' 
          name='payment' 
          value='paypal' 
          checked={paymentMethod==='paypal'} 
          onClick={() => setCard(false)} 
          onChange={e => setPaymentMethod(e.target.value)}
        />
        <Fill />
        <RadioButtonLabel>PayPal</RadioButtonLabel>
      </OptionContainer>
      <OptionContainer>
        <RadioButton 
          type='radio' 
          name='payment' 
          value='card' 
          checked={paymentMethod==='card'}
          onClick={() => setCard(true)}  
          onChange={e => setPaymentMethod(e.target.value)}/>
        <Fill />
        <RadioButtonLabel>Credit/MasterCard</RadioButtonLabel>
      </OptionContainer>
    <CardPayment show={card}/>
    <NextButton onClick={submitHandler}>CONTINUING TO REVIEW</NextButton>
    </PaymentMenthodContainer>
  )
}

export default withRouter(PaymentMethod)
