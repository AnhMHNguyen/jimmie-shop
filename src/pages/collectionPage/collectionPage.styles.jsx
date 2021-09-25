import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  padding: 90px 0 50px 0;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding-top: 90px;
  }
`;

export const CollectionHeaderContainer = styled.div`
  height: 200px;
  background-color: rgb(192, 67, 43);
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 150px;
  }
`;

export const HeaderText = styled.div`
  letter-spacing: .1rem;
  font-family: 'Arima Madurai', cursive;
  color: #f6f4f1;
  font-size: medium;
  font-size: 40px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;