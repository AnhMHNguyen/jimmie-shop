import styled from 'styled-components'
import {IoCheckmarkCircleSharp, IoChevronDownOutline, IoChevronUpOutline} from 'react-icons/io5'

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 95%;
`;

export const TitleContainer = styled.div`
  font-weight: 300;
  font-size: 28px;
  font-family: 'Arima Madurai', cursive;
  margin-bottom: 20px;
`;

export const Divider = styled.hr`
  border-top: 1px solid lightgray;
  width: 100%;
  margin: 10px 0;
`;

export const ReviewContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 15px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;


export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  /* border-right: 1px solid lightgray; */
  .verified-buyer {
    display: flex;
    gap: 5px;
    color: #3A6351;
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    width: 25%;
    .verified-buyer {
      font-size: 10px;
    }
  }
`;

export const CheckedIcon = styled(IoCheckmarkCircleSharp)`
  margin-top: 5px;
`; 
export const ToggleDownIcon = styled(IoChevronDownOutline)`
  margin-top: 5px;
`; 
export const ToggleUpIcon = styled(IoChevronUpOutline)`
  margin-top: 5px;
`; 

export const DetailsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 5px;
  margin-bottom: 40px;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    margin-bottom: 30px;
  }
`;

export const DateContainer = styled.div`
  width: 20%;
  color: gray;
  text-align: right; 
  
  @media screen and (max-width: 800px) {
    font-size: 10px;
    width: 100%;
    text-align: left;
  }
`;

export const AddReviewButton = styled.div`
  background-color: #f6f4f1;
  display: flex;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
  font-weight: 600;
`;

export const RowContainer = styled.div`
  display: flex;
  width: 80%;
  
  @media screen and (max-width: 800px) {
    width: 75%;
    flex-direction: column-reverse;
    padding: 0 15px;
    gap: 5px;
  }
`;
