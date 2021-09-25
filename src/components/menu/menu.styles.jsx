import styled from "styled-components";
import { Link } from 'react-router-dom'

export const MenuContainer = styled.div`
  padding: 50px 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 700px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 800px) {
    height: fit-content;
    grid-template-columns: none;
    grid-template-rows: none;
  }
`;

export const GridItem = styled.div`
  grid-column-start: ${({ size }) => (size ? 'span 3' : 'span 2')};
  min-width: 50%;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
  @media screen and (max-width: 800px) {
    height: 250px;
    grid-column-start: 1;
    width: 100%;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

export const ContentContainer = styled(Link)`
  position: absolute;
  display: flex;
  height: 60px;
  padding: 0 25px;
  width: 150px;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border: 1px solid black;
  background-color: #f6f4f1;
  opacity: 0.7;
  text-transform: capitalize;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: gray;
    color: white;
    opacity: 0.9;
  }
`;