import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { updateUserStart } from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { UpdateAccountContainer, TitleContainer } from './update-account.styles'



const UpdateAccount = ({ close }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const [userCredentials, setCredentials] = useState ({
    name: currentUser.name,
    email: currentUser.email,
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('password not match');
      return;
    }
    close()
    dispatch(updateUserStart({email, password, name}));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  };

  return (
    <UpdateAccountContainer>
      <TitleContainer>Edit Details</TitleContainer>
      <form onSubmit={handleSubmit}>
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
            required/>
          <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            />
          <CustomButton style={{width:'100%'}} type='submit'>UPDATE DETAILS</CustomButton>
      </form>
    </UpdateAccountContainer>
  )
}

export default UpdateAccount
