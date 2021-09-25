import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Spinner from '../../components/spinner/spinner.component'
import ErrorFallBack from '../../components/error-boundary/error-boundary.component'
import { selectUserList, selectUserMessage, selectUserError, selectUserLoading} from '../../redux/user/user.selectors'
import { adminUserStart, fetchUsersStart } from '../../redux/user/user.actions'
import { AdminUserPageContainer, ContentContainer, TitleContainer, HeaderContainer, HeaderBlock, DetailsContainer, DetailsBlock } from './adminUserPage.styles'

const AdminUserPage = () => {
  const dispatch = useDispatch()
  const userList = useSelector(selectUserList)
  const message = useSelector(selectUserMessage)
  const error = useSelector(selectUserError)
  

  useEffect(() => {
    dispatch(fetchUsersStart())
    if(message !== null) {
      alert(message)
    }
  },[dispatch, message])

  const adminHandler = (user) => {
    if (user.isAdmin){
      if (window.confirm('Are you sure you want to remove this user from admin ?')) {
        dispatch(adminUserStart(user._id, {'isAdmin':false}))
      }
    } else {
      if (window.confirm('Are you sure you want to make this user an admin ?')) {
        dispatch(adminUserStart(user._id, {'isAdmin':true}))
      }
    }
  }

  return error ? <ErrorFallBack error={error} /> : 
  (!error && !userList) ? <Spinner/> : (
    <AdminUserPageContainer>
      <ContentContainer>
        <TitleContainer>User List</TitleContainer>
        <HeaderContainer>
          <HeaderBlock>ID</HeaderBlock>
          <HeaderBlock>Display Name</HeaderBlock>
          <HeaderBlock>Email</HeaderBlock>
          <HeaderBlock>Created At</HeaderBlock>
          <HeaderBlock>Last Signin</HeaderBlock>
          <HeaderBlock>Is Admin</HeaderBlock>
        </HeaderContainer>
        {userList.map(user => 
          <DetailsContainer key={user._id}>
            <DetailsBlock>{user._id}</DetailsBlock>
            <DetailsBlock>{user.name}</DetailsBlock>
            <DetailsBlock>{user.email}</DetailsBlock>
            <DetailsBlock>{user.createdAt.split('T')[0]}</DetailsBlock>
            <DetailsBlock>{user.lastLogin ? user.lastLogin.split('T')[0] : "NaN"}</DetailsBlock>
            <DetailsBlock>
              <select name="isAdmin" value={user.isAdmin} onChange={() => adminHandler(user)}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </DetailsBlock>
          </DetailsContainer>  
        )}
      </ContentContainer>
      
    </AdminUserPageContainer>
  )
}

export default AdminUserPage
