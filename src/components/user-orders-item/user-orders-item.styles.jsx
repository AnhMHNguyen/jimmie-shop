import styled from "styled-components";
import { Link } from "react-router-dom";
// import CustomButton from "../custom-button/custom-button.component";


export const UserOrdersItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
`;

export const OrderHeader = styled.div`
  background-color: #f6f4f1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const HeaderContainer = styled.div`
  font-size: x-large;
  font-weight: 600;
`;

export const LinkContainer = styled(Link)`
  &:hover{
    color: rgb(192, 67, 43);
  }
`;

export const OrderDetails = styled.div`
  padding: 10px 15px;
  color: grey;
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const ItemButton = styled(Link)`
  width: fit-content;
  padding: 0 10px;
  border: 1px solid lightgray;
  background-color: #f6f4f1;
  margin-left: 15px;
  font-size: 12px;
  letter-spacing: .1rem;
  &:hover{
    color: white;
    background-color: rgb(192, 67, 43);
  }
  @media screen and (max-width: 800px) {
    font-size: 10px;
    padding: 5px;
  }
`;

export const Divider = styled.hr`
  border-top: 2px solid lightgray;
  margin: 20px 0 10px;
`;