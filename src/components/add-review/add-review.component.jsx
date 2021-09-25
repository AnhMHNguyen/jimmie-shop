import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { uploadReviewStart } from '../../redux/shop/shop.actions'

import { AddReviewContainer, RatingContainer, TitleContainer, ReviewContainer } from './add-review.styles'

const AddReview = ({ show, close, productId}) => {
  const dispatch = useDispatch()
 
  const [ commentCredentials, setCredentials ] = useState ({
    rating: 0,
    title: '',
    comment: ''
  });
  const { rating, title, comment } = commentCredentials;

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...commentCredentials, [name]: value});
    console.log(rating)
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if(rating > 0){
      close();
      dispatch(uploadReviewStart(productId, {
        'comment': comment,
        'title': title,
        'rating': Number(rating)
      }))
    }
    else alert('Please choose a rating')
  };

  return (
    <AddReviewContainer className={show ? "active" : ""}>
      <TitleContainer>Write Your Review</TitleContainer>
      <form onSubmit={handleSubmit}>
        <RatingContainer>
          <input id="star-5" type="radio" name="rating" value='5' onChange={handleChange}/>
          <label htmlFor="star-5" title="5 stars">
            <i className="fas fa-star fa-md" aria-hidden="true"></i>
          </label>
          <input id="star-4" type="radio" name="rating" value="4" onChange={handleChange}/>
          <label htmlFor="star-4" title="4 stars">
            <i className="fas fa-star fa-md" aria-hidden="true"></i>
          </label>
          <input id="star-3" type="radio" name="rating" value="3" onChange={handleChange}/>
          <label htmlFor="star-3" title="3 stars">
            <i className="fas fa-star fa-md" aria-hidden="true"></i>
          </label>
          <input id="star-2" type="radio" name="rating" value="2" onChange={handleChange}/>
          <label htmlFor="star-2" title="2 stars">
            <i className="fas fa-star fa-md" aria-hidden="true"></i>
          </label>
          <input id="star-1" type="radio" name="rating" value="1" onChange={handleChange}/>
          <label htmlFor="star-1" title="1 star">
            <i className="fas fa-star fa-md" aria-hidden="true"></i>
          </label>
        </RatingContainer>
        <FormInput
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
          label="Title"
          required />
        <ReviewContainer>
          <span>Comment</span>
          <textarea name='comment' onChange={handleChange} value={comment} rows='3' required/>
        </ReviewContainer>
        <CustomButton type='submit'>Submit</CustomButton>
      </form>
    </AddReviewContainer>
  )
}

export default AddReview
