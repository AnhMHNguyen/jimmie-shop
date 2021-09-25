import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import FormInput from '../form-input/form-input.component'
import { saveShippingAddress } from '../../redux/cart/cart.actions';
import { selectShippingAddress } from '../../redux/cart/cart.selectors';
import { ShippingContainer, FormContainer, NextButton, TitleContainer, RowContainer, SelectContainer } from './shipping.styles';


const Shipping = ({history, next}) => {
  const dispatch = useDispatch();
  const shipping = useSelector(selectShippingAddress)
  const [userCredentials, setCredentials] = useState ({
    fName: shipping.fName,
    lName: shipping.lName,
    phoneNumber: shipping.phoneNumber,
    address1: shipping.address1,
    address2: shipping.address2,
    city: shipping.city,
    country: shipping.country,
    province: shipping.province,
    postalCode: shipping.postalCode
  });
  const { fName, lName, phoneNumber, address1, address2, city, country, province, postalCode } = userCredentials;
  const provinceArray = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT']

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({fName, lName, phoneNumber, address1, address2, city, country, province, postalCode}))
    history.push('/checkout?step=payment')
    
  }
  return (
    <ShippingContainer>
      <TitleContainer>Shipping Information</TitleContainer>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <FormContainer>
            <FormInput 
              type='text'
              name='fName'
              value={fName}
              onChange={handleChange}
              label='First Name'
              required />
            <FormInput 
              type='text'
              name='lName'
              value={lName}
              onChange={handleChange}
              label='Last Name'
              required />
          </FormContainer>
          <FormInput 
            type='tel'
            name='phoneNumber'
            value={phoneNumber}
            onChange={handleChange}
            label='Phone Number'
            required />
          <FormInput 
            type='text'
            name='address1'
            value={address1}
            onChange={handleChange}
            label='Address Line 1'
            required />
          <FormInput 
            type='text'
            name='address2'
            value={address2}
            onChange={handleChange}
            label='Address Line 2'
          />
          <FormInput 
            type='text'
            name='city'
            value={city}
            onChange={handleChange}
            label='City'
            required />


          <RowContainer>
            <SelectContainer>
              <span>Province</span>
              <select name='province' onChange={handleChange} value={province}>
                { provinceArray.map((prov, index) =>
                  <option key={index} value={prov}>{prov}</option>
                )}
              </select>
            </SelectContainer>
            <SelectContainer>
              <span>Country</span>
              <select name='country' onChange={handleChange} value={country}>
                <option value='Canada'>Canada</option> 
              </select>
            </SelectContainer>
          </RowContainer>
          
              
          <FormInput 
          type='text'
          name='postalCode'
          value={postalCode}
          onChange={handleChange}
          label='Postal Code'
          required />
              
            
          <NextButton type='submit'>CONTINUING TO PAYMENT</NextButton>
        </form>
      
    </ShippingContainer>
  )
}

export default withRouter(Shipping)
