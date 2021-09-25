import styled from "styled-components";
import CustomButton from '../custom-button/custom-button.component';

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  /* align-items: center; */
  @media screen and (max-width: 800px) {
    width: 80%
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 115px;
  
`;

export const NextButton = styled(CustomButton)`
  width: 100%;
  margin-top: 30px;
`;

export const TitleContainer = styled.div`
  font-weight: medium;
  font-size: xx-large;
  @media screen and (max-width: 800px) {
    font-size: x-large;
  }
  
`;
export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 3px;
  select {
    padding: 5px;
  }
  span {
    font-size: 15px;
    color: black;
  }
`;