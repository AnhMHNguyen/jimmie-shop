import React from 'react'
import { SideDrawerContainer } from './side-drawer.styles'

const SideDrawer = ({ show, children }) => {
  return (
    <SideDrawerContainer className={show ? 'open' : ''}>
      {children}
    </SideDrawerContainer>
  )
}

export default SideDrawer
