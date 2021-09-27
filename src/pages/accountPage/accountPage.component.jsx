import React from 'react'
import UserOrders from '../../components/user-orders/user-orders.component'
import UserInformation from '../../components/user-information/user-information.component'
import { ProfilePageContainer, ContentContainer } from './accountPage.styles'

const AccountPage = () => {

  return (
    <ProfilePageContainer>
      <ContentContainer>
        <UserOrders />
        <UserInformation />
      </ContentContainer>
    </ProfilePageContainer>
  )
}

export default AccountPage
