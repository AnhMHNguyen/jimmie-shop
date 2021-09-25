import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component'

export const ShoppingBagContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  margin: auto;
  padding-top: 20px;
  
  
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 1024px) {
    /* margin: 10px; */
    width: 80%;
  }
  @media screen and (max-width: 800px) {
    /* margin: 20px; */
    padding: 0 20px;
    width: 100%;
  }
`;

export const ShoppingBagHeaderContainer = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 35px;
  padding-bottom: 30px;
  letter-spacing: .1rem;
  font-family: 'Arima Madurai', cursive;
`;


export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 25px;
`;
export const CheckoutButton = styled(CustomButton)`
  width: 40%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

export const LinkContainer = styled(Link)`
  color:  rgb(192, 67, 43);
`;
