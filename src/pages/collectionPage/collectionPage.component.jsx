import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionList from '../../components/collection-list/collection-list.components'
import Spinner from '../../components/spinner/spinner.component'
import ErrorFallBack from '../../components/error-boundary/error-boundary.component'
import { selectShopCollections, selectIsCollectionLoaded, selectShopError } from '../../redux/shop/shop.selectors.js'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js'
import { CollectionHeaderContainer, CollectionPageContainer, HeaderText } from './collectionPage.styles'

const CollectionPage = ({ match }) => {
  const dispatch = useDispatch()
  const collection = useSelector(selectShopCollections)
  const isLoading = useSelector(selectIsCollectionLoaded)
  const error = useSelector(selectShopError)
  let category = match.params.category ? match.params.category : ''

  useEffect(() => {

    dispatch(fetchCollectionsStart(category))
  },[dispatch, category]) 

  return error ? <ErrorFallBack error={error} /> :
  !isLoading ? <Spinner /> : (
    <CollectionPageContainer>
      
        <CollectionHeaderContainer>
          <HeaderText>{category ? category.toUpperCase() : "ALL"}</HeaderText>   
        </CollectionHeaderContainer>
        <CollectionList collection={collection}/>

    </CollectionPageContainer>
  )
}

export default CollectionPage
