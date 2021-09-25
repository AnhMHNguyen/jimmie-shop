import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'
import FormInput from '../form-input/form-input.component'
// import { savePaymentMethod } from '../../redux/cart/cart.actions'
import { CardPaymentContainer, RowContainer, TitleContainer, InputContainer } from './card-payment.styles'

const CardPayment = ({show}) => {
  // const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState ({
    name: '',
    number: '',
    expired: '',
    cvv:''
  });
  const { name, number, expired, cvv } = userCredentials;

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <CardPaymentContainer className={show ? "active" : ""}>
      <TitleContainer>Card Information</TitleContainer>
        <form onSubmit={handleSubmit}>
          <FormInput 
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            label='Name on Card'
            required />
          <FormInput 
            type='text'
            name='number'
            value={number}
            onChange={handleChange}
            label='Card Number'
            required />
            
          <RowContainer>
            <InputContainer>
            <span>Epired MM/YY</span>
            <input 
              type="text" 
              name="expired" 
              value={expired} 
              onChange={handleChange}
              pattern="([0-9]{2}[/]?){2}"
              required />
            </InputContainer>
            <InputContainer>
              <span>CVV</span>
              <input 
                type="number" 
                name="cvv" 
                value={cvv} 
                onChange={handleChange}
                min="1"
                max="999"
                required />
            </InputContainer>
          </RowContainer>
           
        </form>
    </CardPaymentContainer>
  )
}

export default CardPayment
