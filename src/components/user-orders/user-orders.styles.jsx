import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const TitleContainer = styled.div`
  font-weight: 300;
  font-size: 35px;
  /* padding-bottom: 30px; */
  letter-spacing: .1rem;
  font-family: 'Arima Madurai', cursive;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
export const LinkContainer = styled(Link)`
  color:  rgb(192, 67, 43);
`;