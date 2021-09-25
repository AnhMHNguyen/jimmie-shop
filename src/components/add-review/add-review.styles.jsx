import styled from "styled-components";

export const AddReviewContainer = styled.div`
  display: flex;
  background-color: #f6f4f1;
  align-items: center;
  /* padding: 30px; */
  flex-direction: column;
  width: 30%;
  height: 0;
  overflow-y: hidden;
  transition: height .3s ease-in-out;
  
  form {
    width: 90%;
    
    & button {
      margin: 20px auto 0;
    }
  }
  &.active {
    height: 400px; 
    
  }

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.div`
  font-weight: 300;
  font-size: 20px;
  font-family: 'Arima Madurai', cursive;
  margin: 30px 0 15px;
`;

export const RatingContainer = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;

    input[type=radio] {
      display: none
    }
  
    label {
      color: #bbb;
      font-size: 18px;
      padding: 0;
      cursor: pointer;
      -webkit-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out
    }
  
    label:hover,
    label:hover ~ label,
    input[type=radio]:checked ~ label {
      color: #D69E2E
    }
`;

export const ReviewContainer = styled.div`
  margin: 25px 0 10px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 15px;
    color: black;
  }
  textarea {
    padding: 5px;
  }
`;