import styled from "styled-components";
import { Link } from "react-router-dom";

export const StepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkContainer = styled(Link)`
  padding: 10px 50px;
  margin: 20px 0 50px 0;
  border-bottom: solid 2px lightgray;
  text-decoration: none;
  color: black;
  &.active {
    border-bottom: solid 2px #a65740;
  }
  @media screen and (max-width: 800px) {
    padding: 10px 20px;
  }
`;