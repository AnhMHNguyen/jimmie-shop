import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartHeaderContainer = styled.div`
  font-weight: medium;
  font-size: xx-large;
  @media screen and (max-width: 800px) {
    font-size: x-large;
  }
`;

export const CartListButton = styled(CustomButton)`
  margin-top: 10px;
  @media screen and (max-width: 800px) {
    width:100%;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 80px auto;
`;

export const CartItemsContainer = styled.div`
  /* height: 240px; */
  display: flex;
  flex-direction: column;
  margin: 50px 0 30px;
  @media screen and (max-width: 800px) {
    margin: 30px 0;
  }
`;
export const CartTotal = styled.span`
  font-size: x-large;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    font-size: large;
  }
`;