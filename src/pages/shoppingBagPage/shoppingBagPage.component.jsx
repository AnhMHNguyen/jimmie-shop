import React from 'react'
import ShoppingBag from '../../components/shopping-bag/shopping-bag.component';
import {
  ShoppingBagPageContainer,
  // ContentContainer,
  // ShoppingBagHeader
} from './shoppingBagPage.styles';
const ShoppingBagPage = () => {
  return (
    <ShoppingBagPageContainer>      
        <ShoppingBag />
  </ShoppingBagPageContainer>
  )
}

export default ShoppingBagPage
