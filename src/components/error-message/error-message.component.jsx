import React from 'react'
import { ErrorMessageContainer } from './error-message.styles'

const ErrorMessage = ({ error }) => {
  return (
    <ErrorMessageContainer>
      <i className="fa fa-times-circle"></i>
      {error}
    </ErrorMessageContainer>
  )
}

export default ErrorMessage