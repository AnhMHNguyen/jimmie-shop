import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SideMenu from '../../components/side-menu/side-menu.component'
import SideDrawer from '../side-drawer/side-drawer.component'
import Backdrop from '../backdrop/backdrop.component'
import Spinner from '../spinner/spinner.component'
import CartList from '../cart-list/cart-list.component'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors.js'
import { CollectionListContainer, SideMenuContainer, ListContainer, GridContainer } from './collection-list.styles'

const CollectionList = ({category}) => {
  const collection = useSelector(selectCollection(category))
  const [ toggle, setToggle ] = useState(false)
  const openHandler = () => {
    setToggle(true)
  }
  
  const closeHandler = () => {
    setToggle(false)
  }
  return !collection ? <Spinner/> : (
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
