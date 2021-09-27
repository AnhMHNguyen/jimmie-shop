import React from 'react'
import { useLocation } from 'react-router'
import { SideMenuContainer, LinkContainer, MenuTitle } from './side-menu.styles'


const SideMenu = ({ close = null }) => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const clickHandler = () => {
    if(close !== null) {
      close()
    }
  }
  return (
    <SideMenuContainer>
      <MenuTitle>Menu</MenuTitle>
        <LinkContainer to="/shop" onClick={clickHandler} className={splitLocation[2] === undefined && splitLocation[1] ==="shop" ? "active" : ""}>All</LinkContainer>
        <LinkContainer to="/shop/clothes" onClick={clickHandler} className={splitLocation[2] === "clothes" ? "active" : ""}>Clothes</LinkContainer>
        <LinkContainer to="/shop/collars" onClick={clickHandler} className={splitLocation[2] === "collars" ? "active" : ""}>Collars</LinkContainer>
        <LinkContainer to="/shop/hats" onClick={clickHandler} className={splitLocation[2] === "hats" ? "active" : ""}>Hats</LinkContainer>
        <LinkContainer to="/shop/furniture" onClick={clickHandler} className={splitLocation[2] === "furniture" ? "active" : ""}>Furniture</LinkContainer>
        <LinkContainer to="/shop/toys" onClick={clickHandler} className={splitLocation[2] === "toys" ? "active" : ""}>Toys</LinkContainer>
    </SideMenuContainer>
  )
}

export default SideMenu
