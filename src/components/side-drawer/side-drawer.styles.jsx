import styled from "styled-components";

export const SideDrawerContainer = styled.div`
  height: 100%;
  background-color: #f6f4f1;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
  z-index: 900;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  padding: 50px 20px;
  overflow-y: scroll;

  &.open {
    transform: translateX(0);
  }

  @media screen and (max-width: 800px) {
    padding: 50px 10px;
  }
`;

