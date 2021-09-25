import React, { useState } from 'react'
import SideMenu from '../../components/side-menu/side-menu.component'
import SideDrawer from '../side-drawer/side-drawer.component'
import Backdrop from '../backdrop/backdrop.component'
import CartList from '../cart-list/cart-list.component'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { CollectionListContainer, SideMenuContainer, ListContainer, GridContainer } from './collection-list.styles'

const CollectionList = ({collection}) => {
  const [ toggle, setToggle ] = useState(false)
  const openHandler = () => {
    setToggle(true)
  }
  
  const closeHandler = () => {
    setToggle(false)
  }

  return (
    <>
      <CollectionListContainer>
          <SideMenuContainer>
            <SideMenu />
          </SideMenuContainer>
          <ListContainer>
            <GridContainer>
              {collection.map((product) => (
                
                  <CollectionItem key={product._id} item={product} open={openHandler} />
                
              ))}
            </GridContainer>
          </ListContainer>
      </CollectionListContainer>
      <SideDrawer show={toggle}>
        <CartList close={closeHandler}/>
      </SideDrawer>
    { toggle && <Backdrop click={closeHandler} />}
  </>
  )
}

export default CollectionList
