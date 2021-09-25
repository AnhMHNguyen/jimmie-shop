import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Rating from '../rating/rating.component'

import { addItem } from '../../redux/cart/cart.actions'
import { CollectionItemContainer,ImageContainer, Image, RatingContainer, ItemName, ItemPrice, AddButton, ContentContainer } from './collection-item.styles'

const CollectionItem = ({ item, open }) => {
  const { name, price, rating, image, numReviews, _id } = item
  const dispatch = useDispatch()
  const addHandler = () => {
    dispatch(addItem({cartItemToAdd: item, quantity:1}))
    open()
  }
  return (
    <>
      <CollectionItemContainer >
        <ImageContainer to={`/product/${_id}`}>
        <Image src={image} alt={name}/>
        </ImageContainer>
        <ContentContainer>
        <RatingContainer>
          <Rating value={rating} />
          <span>{numReviews} reviews</span>
        </RatingContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>CAD${price}</ItemPrice>
        <AddButton onClick={addHandler}>
          Add To Cart
        </AddButton>
        </ContentContainer>  
      </CollectionItemContainer>
    </>
  )
}

export default CollectionItem
