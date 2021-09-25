import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SideMenu from '../side-menu/side-menu.component';
import SideDrawer from '../side-drawer/side-drawer.component';
import Backdrop from '../backdrop/backdrop.component';
import CartList from '../cart-list/cart-list.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { signOut } from '../../redux/user/user.actions';
import { HeaderContainer, LogoContainer, NavContainer, LinkContainer, OptionLink, ShoppingIcon, CartLink, LogoIcon, BarIcon, ItemCountContainer, UserIcon, DropdownContent, UserContainer, DropdownLink, DropdownDiv, MenuContainer, AccountTitle, AccountContainer, LinkAccountContainer, AdminIcon, DivAccountContainer } from './header.styles';

const Header = () =>{ 
  const [ menu, setMenu ] = useState(false)
  const [ cart, setCart ] = useState(false)
  const [ account, setAccount ] = useState(false)
  const [ admin, setAdmin ] = useState(false)
  // const [ showHeader, setShowHeader ] = useState(true)
  const [ scrollPos, setScrollPos ] = useState(0) 
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const cartItemsCount = useSelector(selectCartItemsCount)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  },[]) 

  const scrollHandler = () => {
    // let current = window.pageYOffset
    // setShowHeader((document.body.getBoundingClientRect().y) > scrollPos)
    setScrollPos(window.pageYOffset)
    // setShowHeader(current < scrollPos)
    // console.log(current)
    // console.log("pos",scrollPos)
  }
  
  const closeHandler = () => {
    if(menu) setMenu(false);
    if(cart) setCart(false);
  }
  
  const cartHandler = () => {
    setCart(true)
  }

  const menuHandler = () => {
    setMenu(true)
  }
  
  const signoutHandler = () => {
    closeHandler()
    dispatch(signOut())
  }
  return (
    <>
    <HeaderContainer className={scrollPos === 0 ? "" : "active"}>
      <LogoContainer to="/">
        <LogoIcon />
      </LogoContainer>
      <NavContainer>
        <LinkContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          { currentUser ? 
            
            <UserContainer onMouseEnter={() => setAccount(true)} onMouseLeave={() => setAccount(false)}>
              <UserIcon />
              <DropdownContent className={account ? "active" : ""}>
                <DropdownLink to='/account'>My Account</DropdownLink>
                <DropdownDiv onClick={() => dispatch(signOut())}>Sign Out</DropdownDiv>  
              </DropdownContent>
            </UserContainer>
            :
            <OptionLink to="/signin">SIGN IN</OptionLink>
          }
          { currentUser && currentUser.isAdmin && 
            <UserContainer onMouseEnter={() => setAdmin(true)} onMouseLeave={() => setAdmin(false)}>
              <AdminIcon />
              <DropdownContent className={admin ? "active" : ""}>
                <DropdownLink to='/admin/userlist'>User List</DropdownLink>
                <DropdownLink to='/admin/productlist'>Product List</DropdownLink>
                <DropdownLink to='/admin/orderlist'>Order List</DropdownLink>
       
              </DropdownContent>
            </UserContainer>
          }
        </LinkContainer>
          <CartLink onClick={cartHandler} >
              <ShoppingIcon />
              <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
          </CartLink>
          <BarIcon onClick={menuHandler} />
          
      </NavContainer>
    </HeaderContainer>
    <SideDrawer show={cart || menu}>
      {menu && 
        <MenuContainer>
          <SideMenu close={closeHandler}/>
          { currentUser ? 
            
            <AccountContainer>
              <AccountTitle>Account</AccountTitle>
              
                <LinkAccountContainer to='/account' onClick={closeHandler}>My Account</LinkAccountContainer>
              
              
                <DivAccountContainer onClick={signoutHandler}>Sign Out</DivAccountContainer>
              
            </AccountContainer>
            :
            <AccountTitle>
              <Link to="/signin">Sign In</Link>
            </AccountTitle>
          }
          { currentUser && currentUser.isAdmin &&
            <AccountContainer>
              <AccountTitle>Admin</AccountTitle>
              
                <LinkAccountContainer to='/admin/userlist' onClick={closeHandler}>User List</LinkAccountContainer>
              
              
                <LinkAccountContainer to='/admin/productlist' onClick={closeHandler}>Product List</LinkAccountContainer>
              
              
                <LinkAccountContainer to='/admin/orderlist' onClick={closeHandler}>Order List</LinkAccountContainer>
              
          </AccountContainer>
          }
        </MenuContainer>
      }
      {cart && <CartList close={closeHandler}/>}
    </SideDrawer> 
    {(cart || menu) && <Backdrop click={closeHandler}/>}

    </>
  )
};



export default Header;
