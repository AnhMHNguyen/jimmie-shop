import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import SideDrawer from '../side-drawer/side-drawer.component'
import Backdrop from '../backdrop/backdrop.component'
import UpdateAccount from '../update-account/update-account.component'
import { UserInformationContainer, Divider, TitleContainer, InfoContainer, InfoItemContainer, EditButton } from './user-information.styles'

const UserInformation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const [ infoEdit, setInfoEdit ] = useState(false)

  const closeHandler = () => {
    setInfoEdit(false)
  }

  return (
    <>
      <UserInformationContainer>
        <TitleContainer>My Details</TitleContainer>
        <InfoContainer>
          <InfoItemContainer>
            <span>Name:</span>
            <span>Email:</span>
            
          </InfoItemContainer>
          <InfoItemContainer>
            <span>{currentUser.name}</span>
            <span>{currentUser.email}</span>
          </InfoItemContainer>
          <EditButton onClick={() => setInfoEdit(true)}/>
        </InfoContainer>
        <Divider />
      </UserInformationContainer>
      <SideDrawer show={infoEdit}>
        <UpdateAccount close={closeHandler}/>
      </SideDrawer>
      { infoEdit && <Backdrop click={closeHandler} />}
    </>
  )
}

export default UserInformation
