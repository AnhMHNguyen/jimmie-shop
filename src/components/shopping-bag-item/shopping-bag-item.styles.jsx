import styled from "styled-components";

export const ShoppingBagItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 17px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 30%;
  font-size: 15px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;
export const PriceContainer = styled.span`
  width: 15%;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  width: 20%;
  display: flex;
  span {
    margin: 0 15px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  width: 5%;
`;