import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const CartItemImage = styled.img`
  width: 25%;
  margin: auto;
`;

export const ItemDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
`;

export const TextContainer = styled.span`
  width: 25%;
  font-size: small;
`;

export const QuantityContainer = styled.div`
  margin-top: 10px;
  padding: 3px;
  display: flex;
  border: 1px solid lightgray;
  span {
    margin: 0 15px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  width: 5%;
  padding-right: 10px;
  cursor: pointer;
`;