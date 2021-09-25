import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrorMessage from '../error-message/error-message.component';
import { signUpStart } from '../../redux/user/user.actions';
import { SignUpContainer, SignUpTitle } from './signup.styles';


const SignUp = () => {
  const [ noMatch, setNoMatch ] = useState(false)
  const [userCredentials, setCredentials] = useState ({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = userCredentials;
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setNoMatch(true)
      return;
    }

    dispatch(signUpStart({email, password, name}));
    
  };
  const handleChange = event => {
    const {name, value} = event.target;
    if(noMatch) setNoMatch(false)
    setCredentials({...userCredentials, [name]: value});
  };
  return (
    <SignUpContainer>
      {noMatch && <ErrorMessage error="Passwords do not match" /> }
      <SignUpTitle>I do not an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <FormInput 
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            label='Display Name'
            required />
          <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required />
          <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      
    </SignUpContainer>
  )
}

export default SignUp
