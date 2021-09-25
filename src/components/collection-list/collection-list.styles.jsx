import styled from "styled-components";

export const CollectionListContainer = styled.div`
  display: flex;
  margin: 50px 50px 50px 30px;
  gap: 20px;
  @media screen and (max-width: 800px) {
    margin: 50px;
  }
`;

export const SideMenuContainer = styled.div`
  width: 20%;
  height: 100%;
  top: 80px;
  position: sticky;
  display: block;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;


export const ListContainer = styled.div`
  width: 80%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    margin: 0 auto;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto auto;
    grid-gap: 10px;
  }
`;