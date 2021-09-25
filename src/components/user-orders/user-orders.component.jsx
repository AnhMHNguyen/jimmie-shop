import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectOrderList } from '../../redux/order/order.selectors'
import { myOrdersStart } from '../../redux/order/order.actions'
import UserOrdersItem from '../user-orders-item/user-orders-item.component'
import Spinner from '../spinner/spinner.component'
import { UserOrderContainer, TitleContainer, EmptyContainer, LinkContainer } from './user-orders.styles'

const UserOrders = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const orderList = useSelector(selectOrderList)

  useEffect(() => {
   dispatch(myOrdersStart())
  }, [dispatch])

  return !orderList  ? <Spinner /> : (
    <UserOrderContainer>
      <TitleContainer>My Account</TitleContainer>
      <span>Welcome back {currentUser.name}! You'll be able to track your orders and manage your personal details here.</span>
      { orderList.length > 0 ? 
         orderList.map( (order, index) => 
          <UserOrdersItem key={order._id} order={order} index={index+1} />)
        : 
          <EmptyContainer>
            <span><strong>You haven't made any orders yet!</strong></span>
            <span><strong><LinkContainer to='/shop'>Click here</LinkContainer> to start shopping.</strong></span>
          </EmptyContainer>
      }
    </UserOrderContainer>
  )
}

export default UserOrders
