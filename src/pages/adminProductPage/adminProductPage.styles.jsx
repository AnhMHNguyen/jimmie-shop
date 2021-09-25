import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'

export const AdminProductPageContainer = styled.div`
  padding: 120px 0 50px 0;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 300;
    font-size: 35px;
    letter-spacing: .1rem;
    font-family: 'Arima Madurai', cursive;
  }
`;

export const AddButton = styled(CustomButton)`

`;

export const HeaderContainer = styled.div`
  background-color: #f6f4f1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 5px 15px;
  font-weight: 600;
`;

export const HeaderBlock = styled.div`
  width: 10%;

  &:first-child{
    width: 5%;
  }
  &:nth-child(2){
    width: 15%;
  }
  &:nth-child(3){
    width: 25%;
  }
  &:last-child{
    width: 5%;
  }
`;


export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 15px;
  width: 100%;
  align-items: center;
  &:nth-child(even){
    background-color: #EEEEEE;
  }
`;

export const DetailsBlock = styled.div`
  width: 10%;
  &:first-child{
    width: 5%;
  }
  &:nth-child(2){
    width: 15%;
    img {
      width: 40%
    }
  }
  &:nth-child(3){
    width: 25%;
  }
  &:nth-child(4){
    text-transform: capitalize;
  }
  &:last-child{
    width: 5%;
    display: flex;
    align-items: center;
    /* font-size: 12px;
    letter-spacing: .1rem; */
  }
`;

export const EditButton = styled(FiEdit)`
  color: rgb(192, 67, 43);
  /* margin: 0 15px; */
  width: 50%;
  cursor: pointer;
  
  &:hover {
    color: gray;
  }
`;

export const DeleteButton = styled(RiDeleteBin5Line)`
  /* margin: 0 15px; */
  cursor: pointer;
  color: gray;
  width: 50%;
  /* height: 10%; */
  &:hover {
    color: rgb(192, 67, 43);
  }
`;
