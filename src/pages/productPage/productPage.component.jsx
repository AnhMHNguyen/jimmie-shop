import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Rating from '../../components/rating/rating.component'
import Spinner from '../../components/spinner/spinner.component'
import Comment from '../../components/comment/comment.component'
import SideDrawer from '../../components/side-drawer/side-drawer.component'
import Backdrop from '../../components/backdrop/backdrop.component'
import CartList from '../../components/cart-list/cart-list.component'
import ErrorFallBack from '../../components/error-boundary/error-boundary.component'
import { selectShopProduct, selectIsCollectionFetching, selectShopMessage, selectShopError } from '../../redux/shop/shop.selectors'
import { fetchProductStart } from '../../redux/shop/shop.actions.js'
import { addItem } from '../../redux/cart/cart.actions'
import { ProductPageContainer, ContentContainer, ImageContainer, ItemDetailsContainer, ItemName, ItemDescription, ItemPrice, AddButton, QuantityButton, QuantityContainer, QuantityInput, OutOfStockContainer, Divider, RatingContainer } from './productPage.styles'



const ProductPage = ({ match }) => {
  const productId = match.params.id
  const product = useSelector(selectShopProduct)
  const message = useSelector(selectShopMessage)
  const isFetching = useSelector(selectIsCollectionFetching)
  const error = useSelector(selectShopError)
  const dispatch = useDispatch()
  const [ count, setCount ] = useState(1)
  const [ toggle, setToggle ] = useState(false)
  // const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    dispatch(fetchProductStart({productId}))
   
    if(message !== null) alert(message)
  },[dispatch, productId, message])
  
  const addHandler = () => {
    dispatch(addItem({cartItemToAdd: product, quantity: count}))
    setToggle(true)
  }
  
  const closeHandler = () => {
    setToggle(false)
  }
  
  return  error ? <ErrorFallBack error={error} /> : 
    ( error === null && product === null ) ? <Spinner /> : (
    <>
      <ProductPageContainer>
        <ContentContainer> 
          <ImageContainer src={product.image} alt={product.name}/>
          <ItemDetailsContainer>
            <ItemName>{product.name}</ItemName>
            <ItemDescription>{product.description}</ItemDescription>
            <ItemPrice>${product.price}</ItemPrice>
            <RatingContainer>
              <Rating value={product.rating} />
              <span>{product.numReviews} reviews</span>
            </RatingContainer>
            <Divider />
            {product.countInStock === 0 ? 
              <OutOfStockContainer>Out Of Stock</OutOfStockContainer>
              :
              <>
                
                <QuantityContainer>
                  <QuantityButton onClick={() => {if(count !== 1) setCount(count-1)}}>&#10094;</QuantityButton>
                  <QuantityInput value={count} readOnly/>
                  <QuantityButton onClick={() => {if(count !== product.countInStock) setCount(count+1)}}>&#10095;</QuantityButton>
                </QuantityContainer>
                <AddButton onClick={addHandler}>
                  ADD TO CART
                </AddButton>
              </>
            }
            
          </ItemDetailsContainer>
        
        </ContentContainer>
        <Comment reviews={product.reviews} rating={product.rating} numReviews={product.numReviews} productId={product._id}/>
      </ProductPageContainer>
      <SideDrawer show={toggle}>
        <CartList close={closeHandler}/>
      </SideDrawer>
      { toggle && <Backdrop click={closeHandler} />}
    </>
  )
}

export default ProductPage
