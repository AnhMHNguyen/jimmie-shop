import styled, {css} from "styled-components";
import { Link } from 'react-router-dom'

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 20px;
`;

const HoverAnim = css`
  display: inline-block;
  margin: 0;
  width: fit-content;

  &::after {
    display: block;
    content: '';
    border-bottom: solid 1px black;
    transform: scaleX(0);
    transition: transform .5s ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover {
    color: gray;
    &::after {
    transform: scaleX(1); 
    
    }
  }
`;

export const LinkContainer = styled(Link)`
  font-size: 16px;
  padding: 1px 0;
  letter-spacing: .1rem;
  text-decoration: none;
  color: black;
  ${HoverAnim}
  .active {
    color: rgb(192, 67, 43);
  }
`;

export const MenuTitle = styled.div`
  font-weight: 500;
  font-size: xx-large;
`;

