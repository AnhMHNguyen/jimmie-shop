import React from 'react'
import { useSelector } from 'react-redux'
import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'
import ErrorMessage from '../../components/error-message/error-message.component'
import { selectUserError } from '../../redux/user/user.selectors'
import { SigninSignupPageContainer, ContentContainer } from './signinSignupPage.styles'

const SignInSignUpPage = () => {
  const error = useSelector(selectUserError)
  return (
    
    <SigninSignupPageContainer>
      { error && <ErrorMessage error={error} /> }
      <ContentContainer>
        <SignIn />
        <SignUp />
      </ContentContainer>
    </SigninSignupPageContainer>
  )
}

export default SignInSignUpPage
