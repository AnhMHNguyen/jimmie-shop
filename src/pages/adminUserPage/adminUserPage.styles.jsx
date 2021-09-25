import styled from "styled-components";

export const AdminUserPageContainer = styled.div`
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
  font-weight: 300;
  font-size: 35px;
  letter-spacing: .1rem;
  font-family: 'Arima Madurai', cursive;
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
  width: 20%;

  &:first-child{
    width: 10%;
  }
  
  &:nth-child(2){
    width: 15%;
  }

  &:last-child{
    width: 15%;
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
  width: 20%;

  &:first-child{
    width: 10%;
  }

  &:nth-child(2){
    width: 15%;
  }

  &:last-child{
    width: 15%;
  }
  select {
    background-color: black;
    color: white;
    width: 70px;
    padding: 3px 5px;
  }
`;