import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingSVG } from '../../assets/shopping-bag.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FaBars, FaUser } from 'react-icons/fa'
import { RiAdminLine } from 'react-icons/ri'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  position: fixed;
  color: black;
  z-index: 9;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  background-color: transparent;
  /* &.hidden {
    margin-top: -100px;
  } */
  &.active {
    background-color: white;
    opacity: 0.8;
    height: 70px;
  }
  @media screen and (max-width: 800px) {
    padding: 5px;
    height: 60px;
  }
`;

export const LogoContainer = styled(Link)`
  padding: 15px 15px 10px 15px;
  /* width: 100%;
  height: 70%; */

  @media screen and (max-width: 800px) {
    padding: 0 10px;
    
  }
`;

export const LogoIcon = styled(Logo)`
  width:150px;
  height: 50px;

  @media screen and (max-width: 800px) {
    width: 80px;
    height: 30px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  width: 70px;
  padding-top: 5px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  color: black;
`;

export const CartLink = styled.div`
  width:100px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 60px;
  }
`;

export const ShoppingIcon = styled(ShoppingSVG)`
  width: 30px;
  margin: 30px;
  @media screen and (max-width: 800px) {
    width: 25px;
    height: 30px;
    margin: 0;
    
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 30px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    top: 7px;
  }
`;

export const BarIcon = styled(FaBars)`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    margin: 20px;
  }
`;

export const UserIcon = styled(FaUser)`
  margin: 25px 5px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  
`;
export const AdminIcon = styled(RiAdminLine)`
  margin: 25px 5px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f6f4f1;
  height: fit-content;
  width: fit-content;
  z-index: 1;
  flex-direction: column;
  top: 70px;
  padding: 20px;
  cursor: pointer;


  &.active {
    display: flex;
    gap: 10px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const DropdownLink = styled(Link)`
  font-family: 'Arima Madurai', cursive;
  font-weight: 500;
  text-decoration: none;
  color: black;
  ${HoverAnim}
`;

export const DropdownDiv = styled.div`
  font-family: 'Arima Madurai', cursive;
  font-weight: 500;
  ${HoverAnim}
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
`;

export const AccountTitle = styled.div`
  font-weight: 500;
  font-size: xx-large;
`;

export const LinkAccountContainer = styled(Link)`
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

export const DivAccountContainer = styled.div`
  font-size: 16px;
  padding: 1px 0;
  letter-spacing: .1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  ${HoverAnim}
`;