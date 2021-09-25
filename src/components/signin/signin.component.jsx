import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInStart } from '../../redux/user/user.actions';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signin.styles';
const SignIn = () => {
  const [ userCredentials, setCredentials ] = useState({ 
    email: '', 
    password: '' 
  });
  const { email, password } = userCredentials;
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInStart({email, password}))
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      
      <form onSubmit={handleSubmit}>
        <FormInput name="email" 
              type="email" 
              value={email} 
              handleChange={handleChange}
              label="email"
              required />
        <FormInput name="password" 
              type="password" 
              value={password} 
              handleChange={handleChange}
              label="password"
              required />
        <ButtonsBarContainer>
          <CustomButton>SIGN IN</CustomButton>
        </ButtonsBarContainer>
      </form>
      
    </SignInContainer>
  )
}

export default SignIn
