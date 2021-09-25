import React from 'react'
import Slider from '../../components/slider/slider.component'
import Featured from '../../components/featured/featured.component'
import Menu from '../../components/menu/menu.component'
import { HomePageContainer } from './homepage.styles'

const HomePage = () => (
    <HomePageContainer>
      <Slider />
      <Featured />
      <Menu />
    </HomePageContainer>
)

export default HomePage
