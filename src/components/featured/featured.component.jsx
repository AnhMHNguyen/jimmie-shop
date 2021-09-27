import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../spinner/spinner.component'
import CollectionItem from '../collection-item/collection-item.component'
import SideDrawer from '../side-drawer/side-drawer.component'
import Backdrop from '../backdrop/backdrop.component'
import CartList from '../cart-list/cart-list.component'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectShopFeatured} from '../../redux/shop/shop.selectors'
import { FeaturedContainer, FeaturedTitle, GridContainer, HeaderContainer, NextButton, PrevButton, ContentContainer } from './featured.styled'

const Featured = () => {
  const dispatch = useDispatch()
  const collection = useSelector(selectShopFeatured)
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = 6
  const gridRef = useRef(null)
  const [ width, setWidth] = useState(0)
  const [toggle, setToggle] = useState(false)
  
  
  useEffect(() => {
    dispatch(fetchCollectionsStart())  
  }, [dispatch])

  
  const openHandler = () => {
    setToggle(true)
  }
  
  const closeHandler = () => {
    setToggle(false)
  }

  const next = () => {
    if(width !== gridRef.current.clientWidth) {
      setWidth(gridRef.current.clientWidth)
    }
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if(width !== gridRef.current.clientWidth) {
      setWidth(gridRef.current.clientWidth)
    }
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }
  

  return !collection ?  <Spinner /> : (
    <>
    <FeaturedContainer>
      <HeaderContainer>
        <FeaturedTitle>Featured Items</FeaturedTitle>
        <span><PrevButton onClick={prev}/> <NextButton onClick={next} /></span>

      </HeaderContainer>
      <ContentContainer>
        {/* <GridContainer ref={gridRef} style={{ transform: `translateX(-${currentIndex * (width/ 8) + 20}px)` }}> */}
        <GridContainer ref={gridRef} width={width} currentIndex={currentIndex}>
          {collection.map((product) => (
              <CollectionItem key={product._id} item={product} open={openHandler}/>
          ))}
          
        </GridContainer>
      </ContentContainer>
    </FeaturedContainer>
    <SideDrawer show={toggle}>
      <CartList close={closeHandler}/>
    </SideDrawer>
    { toggle && <Backdrop click={closeHandler} />}
</>
  )
}

export default Featured
