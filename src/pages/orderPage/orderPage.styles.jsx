import styled from "styled-components";
import { Link } from "react-router-dom";

export const OrderPageContainer = styled.div`
  padding: 120px 0 50px 0;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  gap: 70px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const TitleContainer = styled.div`
  font-weight: 300;
  font-size: 35px;
  letter-spacing: .1rem;
  font-family: 'Arima Madurai', cursive;
`;

export const OrderHeader = styled.div`
  background-color: #f6f4f1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 5px 15px;
`;

export const HeaderBlockContainer = styled.div`
  width: 40%;
  &:last-child {
    width: 20%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 20px 15px;
  font-size: 15px;
  color: grey;
`;

export const DetailsBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  &:last-child {
    width: 20%;
    text-transform: capitalize;
  }
`;
// export const SubTitleContainer = styled.div`
//   font-weight: medium;
//   font-size: x-large;
  
// `;

export const Divider = styled.hr`
  border-top: 2px solid lightgray;
  margin: 20px 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  color: grey;
`;

export const ImageContainer = styled.div`
  width: 15%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemTitle = styled.div`
  width: 40%;
`;

export const ItemQty = styled.div`
  width: 20%;
`;
export const ItemPrice = styled.div`
  width: 20%;
  font-size: 15px;
`;

export const ItemDetails = styled(Link)`
  width: 5%;
  color: grey;
  &:hover{
    color: rgb(192, 67, 43);
  }
`;

export const PriceDetailsContainer = styled.div`
  width: 20%;
  background-color: #f6f4f1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: fit-content;
  @media screen and (max-width: 1024px) {
    width: 30%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;


export const SubTitleContainer = styled.div`
  font-weight: 300;
  font-size: 28px;
  font-family: 'Arima Madurai', cursive;
  margin-bottom: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

export const TotalPrice = styled.span`
  font-size: large;
`;

