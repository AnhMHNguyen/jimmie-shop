import styled, { css } from "styled-components";


const buttonStyles = css`
  background-color: black;
  color: white;
  

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles: buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;
  font-family: 'Dosis', sans-serif;
  ${getButtonStyles}

  @media screen and (max-width: 800px) {
    line-height: 35px;
    height: 35px;
    width: 100px;
    font-size: 11px;
  }
`;