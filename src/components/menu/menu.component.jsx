import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../spinner/spinner.component'
import ErrorFallBack from '../error-boundary/error-boundary.component'
import { fetchDirectoryStart } from '../../redux/shop/shop.actions'
import { selectShopDirectory, selectShopError } from '../../redux/shop/shop.selectors'
import { MenuContainer, GridContainer, GridItem, BackgroundImageContainer, ContentContainer } from './menu.styles'

const Menu = () => {
  const dispatch = useDispatch()
  const directory = useSelector(selectShopDirectory)
  const error = useSelector(selectShopError)

  useEffect(() => {
    dispatch(fetchDirectoryStart())
  }, [dispatch])

  return error !== null ? <ErrorFallBack error={error} /> : 
  (directory === null) ? <Spinner /> : (
    <MenuContainer>
      <GridContainer>
        { directory.map(section => 
          <GridItem key={section._id} size={[1, 2].includes(section._id) ? "large" : "" }>
            <BackgroundImageContainer 
              image={section.image}
              className="background-image"
            />
            <ContentContainer to={section.linkUrl}>
              {section.name}
            </ContentContainer>
          </GridItem>
        )}
      </GridContainer>
    </MenuContainer>
  )
}

export default Menu
