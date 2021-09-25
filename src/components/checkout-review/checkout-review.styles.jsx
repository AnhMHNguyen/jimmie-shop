import styled from "styled-components";

export const CheckoutReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.div`
  font-weight: medium;
  font-size: x-large;
  
`;

export const Divider = styled.hr`
  border-top: 2px solid gray;
  margin: 20px 0;
`;

export const DetailsContainer = styled.div`
  padding: 20px;
  border-left: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 7px;
  letter-spacing: .1em;
  margin-bottom: 20px;
  
  strong {
    font-weight: 500;
  }
`;