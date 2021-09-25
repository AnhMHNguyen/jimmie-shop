import styled from "styled-components";
import { FiEdit } from 'react-icons/fi'

export const UserInformationContainer = styled.div`
  width: 20%;
  background-color: #f6f4f1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: fit-content;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;


export const TitleContainer = styled.div`
  font-weight: 300;
  font-size: 28px;
  font-family: 'Arima Madurai', cursive;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Divider = styled.hr`
  border-top: 2px solid lightgray;
  margin: 20px 0 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 20px 0;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditButton = styled(FiEdit)`
  color: rgb(192, 67, 43);
  margin: 0 15px;
  cursor: pointer;
  
  &:hover {
    color: gray;
  }
`;