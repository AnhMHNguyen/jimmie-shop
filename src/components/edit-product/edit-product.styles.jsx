import styled from "styled-components";

export const EditProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  font-weight: 300;
  font-size: 28px;
  font-family: 'Arima Madurai', cursive;
  margin-bottom: 20px;
`;

export const ImageLabel= styled.div`
  display: flex;
  gap: 20px;

  .label {
    font-size: 15px;
    color: black;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 25px;
  span {
    font-size: 15px;
    color: black;
  }

  select {
    width: 130px;
    padding: 5px;
    
  }
`;

export const NumberLabel = styled.div`
  margin-top: 25px;
  display: flex;
  font-size: 15px;
  gap: 20px;
  color: black;
  span {
    width: 50%;
  }
`;

export const NumberInput = styled.div`
  display: flex;
  gap: 20px;
  input {
    padding: 5px 7px;
    width: 50%;
    border: none;
    border-bottom: 1px solid black;
    &:focus{
      outline: none;
    }
  }
`;

export const DescriptionContainer = styled.div`
  margin: 25px 0 30px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 15px;
    color: black;
  }
  textarea {
    padding: 5px;
  }
`;
