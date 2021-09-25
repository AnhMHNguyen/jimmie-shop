import React from 'react'
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartSubtotal } from '../../redux/cart/cart.selectors'
import ShoppingBagItem from '../shopping-bag-item/shopping-bag-item.component'
import { ShoppingBagContainer, ShoppingBagHeaderContainer, TotalContainer, CheckoutButton, EmptyContainer, LinkContainer } from './shopping-bag.styles'


const ShoppingBag = ({ history }) => {
  const cartItems = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartSubtotal)

  return (
    <ShoppingBagContainer>
    <ShoppingBagHeaderContainer>
      My Bag
    </ShoppingBagHeaderContainer>
    {cartItems.length > 0 ? 
       <> 
          { cartItems.map(cartItem => 
            <ShoppingBagItem key={cartItem._id} cartItem={cartItem} />
          )}
          <TotalContainer>
            <span>SUBTOTAL: ${subtotal}</span>
          </TotalContainer>
          <CheckoutButton onClick={() => history.push('/checkout?step=shipping')}>Proceed To Checkout</CheckoutButton>
       </>
      :
         <EmptyContainer>
            <span><strong>Your haven't added anything to your bag!</strong></span>
            <span><strong><LinkContainer to='/shop'>Click here</LinkContainer> to start shopping.</strong></span>
          </EmptyContainer>

    
    }
    
  </ShoppingBagContainer>
  )
}

export default withRouter(ShoppingBag)
