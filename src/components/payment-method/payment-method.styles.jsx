import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const PaymentMenthodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.div`
  font-weight: medium;
  font-size: xx-large;
  @media screen and (max-width: 800px) {
    font-size: x-large;
  }
`;

export const OptionContainer = styled.div`
  display:flex; 
  align-items: center;
  margin-top: 20px;
  width: 20px;
  height: 20px;
  position: relative;
  
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid lightgrey;
    background: #FAFAFA;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
  }
`;

export const Fill = styled.div`
  background: black;
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  &:checked ~ ${Fill} {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    transition: width 0.2s ease-out, height 0.2s ease-out;
  }
`;

export const RadioButtonLabel = styled.div` 
  font-size: medium;
  margin-left: 30px;
`;

export const NextButton = styled(CustomButton)`
  width: 100%;
  margin-top: 30px;
`;