import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Rating from '../rating/rating.component'
import AddReview from '../add-review/add-review.component'
import ErrorMessage from '../error-message/error-message.component'
import { selectReviewError, selectShopMessage } from '../../redux/shop/shop.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { CommentContainer, TitleContainer, Divider, ReviewContainer, ContentContainer, NameContainer, CheckedIcon, DetailsContainer, DateContainer, AddReviewButton, ToggleDownIcon, ToggleUpIcon, RowContainer } from './comment.styles'

const Comment = ({ reviews, rating, numReviews, productId }) => {
  const currentUser = useSelector(selectCurrentUser)
  const error = useSelector(selectReviewError)
  const message = useSelector(selectShopMessage)
  const [ addReview, setAddReview ] = useState(false)

  useEffect(() => {
    if(message) alert(message)
  },[message])

  const closeHanler = () => {
    setAddReview(false)
  }
  return (
    <CommentContainer>
      <TitleContainer>Customer Reviews</TitleContainer>
      <ContentContainer>
        { reviews && reviews.length > 0 ? 
          <>
            <Rating value={rating} large={true}/>
            <span>Based on {numReviews} reviews</span>
          </>
        :
        <span>There are no reviews yet</span>
        }
        { error && <ErrorMessage error={error} />}
        { currentUser &&  
          <>
            <AddReviewButton onClick={() => setAddReview(!addReview)}>
              { addReview ? <ToggleUpIcon/> : <ToggleDownIcon />}
              <span>Write Review</span>
            </AddReviewButton>
            <AddReview show={addReview} close={closeHanler} productId={productId}/>
            <Divider />
          </>
        }
        { reviews && reviews.length > 0 && 
          reviews.map(review => 
        
            <ReviewContainer key={review._id}>
              <NameContainer>
                <span>{review.name}</span>
                <span className="verified-buyer"><CheckedIcon/> Verified Buyer</span>
              </NameContainer>
              <RowContainer>
                <DetailsContainer>
                  <Rating value={review.rating} />
                  <span><strong>{review.title}</strong></span>
                  <span>{review.comment}</span>
                </DetailsContainer>
                <DateContainer>
                  {review.createdAt.split('T')[0]}
                </DateContainer>
              </RowContainer>
            </ReviewContainer>
          )
        }
      </ContentContainer>
    </CommentContainer>
  )
}

export default Comment
