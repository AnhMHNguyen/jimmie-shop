import styled from "styled-components";

export const CardPaymentContainer = styled.div`
  margin: 30px;
  width: auto;
  display: flex;
  flex-direction: column;
  height: 0;
  overflow-y: hidden;
  transition: height .3s ease-in-out;
  form {
    margin-top: -20px;
  }
  &.active {
    height: 330px; 
  }
  @media screen and (max-width: 800px) {
    &.active {
    height: 300px; 
  }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InputContainer =styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  span{
    font-size: 15px;
    color: grey;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    /* margin: 10px 0; */
    padding: 10px 0;
    

    &:focus {
      outline: none;
    }
  }
`;

export const TitleContainer = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;