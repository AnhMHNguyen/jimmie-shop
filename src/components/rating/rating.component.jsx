import React from 'react'
import { RatingContainer } from './rating.styles'

const Rating = ({ value, large=false }) => (
  
  <RatingContainer>
    { large ? 
    <>
      {Array(5).fill("")
      .map((_, i) => (
        <i key={i} style={{color:'#D69E2E'}} 
          className={
            value - i > 0.5 
            ? 'fas fa-star fa-md'
            : value - i === 0.5
              ? 'fas fa-star-half-alt fa-md'
              : 'far fa-star fa-md'
          }></i>
      ))}
    </>
    :
    <>
      {Array(5).fill("")
      .map((_, i) => (
        <i key={i} style={{color:'#D69E2E'}} 
          className={
            value - i > 0.5 
            ? 'fas fa-star fa-xs'
            : value - i === 0.5
              ? 'fas fa-star-half-alt fa-xs'
              : 'far fa-star fa-xs'
          }></i>
      ))}
    </>
    }
    
  
  </RatingContainer>
)

export default Rating
