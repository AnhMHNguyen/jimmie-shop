import styled from "styled-components";

export const SummaryCartContainer = styled.div`
  width: 25%;
  background-color: #f6f4f1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: fit-content;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Divider = styled.hr`
  border-top: 2px solid lightgray;
  margin: 20px 0 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TotalPrice = styled.span`
  font-size: x-large;
  @media screen and (max-width: 800px) {
    font-size: large;
  }
`;