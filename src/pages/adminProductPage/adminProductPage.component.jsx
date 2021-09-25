import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/spinner/spinner.component'
import SideDrawer from '../../components/side-drawer/side-drawer.component'
import Backdrop from '../../components/backdrop/backdrop.component'
import EditProduct from '../../components/edit-product/edit-product.component'
import ErrorFallBack from '../../components/error-boundary/error-boundary.component'
import { selectShopCollections, selectIsCollectionLoaded, selectShopMessage, selectShopProduct, selectShopError } from '../../redux/shop/shop.selectors'
import { fetchCollectionsStart, createProductStart, deleteProductStart} from '../../redux/shop/shop.actions'
import { AdminProductPageContainer, ContentContainer, TitleContainer, AddButton, HeaderContainer, HeaderBlock, DetailsContainer, DetailsBlock, EditButton, DeleteButton } from './adminProductPage.styles'

const AdminProductPage = () => {
  const dispatch = useDispatch()
  const [ infoEdit, setInfoEdit ] = useState(false)
  const [ productEdit, setProductEdit ] = useState(null)
  const product = useSelector(selectShopProduct)
  const message = useSelector(selectShopMessage)
  const collection = useSelector(selectShopCollections)
  const isLoaded = useSelector(selectIsCollectionLoaded)
  const error = useSelector(selectShopError)

  useEffect(() => {
    dispatch(fetchCollectionsStart())
    if( message !== null ) alert(message)
    if( product !== null ) editHandler(product) 
  },[dispatch, message, product]) 

  const editHandler = (item) => {
    setInfoEdit(true)
    setProductEdit(item)
  }

  const closeHandler = () => {
    setInfoEdit(false)
  }

  const deleteHandler = (item) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      dispatch(deleteProductStart(item._id))
    }
  }

  return error ? <ErrorFallBack error={error} /> : 
  (!isLoaded || collection === null) ? <Spinner /> : (
    <AdminProductPageContainer>
      <ContentContainer>
        <TitleContainer>
          <span>Product List</span>
          <AddButton onClick={() => dispatch(createProductStart())}>+ New Product</AddButton>
        </TitleContainer>

        <HeaderContainer>
          <HeaderBlock>ID</HeaderBlock>
          <HeaderBlock>Image</HeaderBlock>
          <HeaderBlock>Name</HeaderBlock>
          <HeaderBlock>Category</HeaderBlock>
          <HeaderBlock>In Stock</HeaderBlock>
          <HeaderBlock>Price</HeaderBlock>
          <HeaderBlock>Rating</HeaderBlock>
          <HeaderBlock>Created At</HeaderBlock>
          <HeaderBlock></HeaderBlock>
        </HeaderContainer>

        {collection.map(item => 
          <DetailsContainer key={item._id}>
            <DetailsBlock>{item._id}</DetailsBlock>  
            <DetailsBlock><img src={item.image} alt="item.name" /></DetailsBlock>  
            <DetailsBlock>{item.name}</DetailsBlock>  
            <DetailsBlock>{item.category}</DetailsBlock>  
            <DetailsBlock>{item.countInStock}</DetailsBlock>  
            <DetailsBlock>${item.price}</DetailsBlock>  
            <DetailsBlock>{item.rating === null ? "NaN" : `${item.rating}/${item.numReviews}`}</DetailsBlock>  
            <DetailsBlock>{item.createdAt.split('T')[0]}</DetailsBlock>  
            <DetailsBlock>
              <EditButton onClick={() => editHandler(item)}/> 
              | 
              <DeleteButton onClick={() => deleteHandler(item)}/>
            </DetailsBlock>  
          </DetailsContainer>
        )}
      </ContentContainer>
      <SideDrawer show={infoEdit}>
        <EditProduct product={productEdit} close={closeHandler}/>
      </SideDrawer>
      { infoEdit && <Backdrop click={closeHandler} />}
    </AdminProductPageContainer>
  )
}

export default AdminProductPage
