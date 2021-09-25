import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import { SliderImageContainer, SliderContainer, SliderImage, Slide } from './slider.styles';

const Slider = () =>  (
  <SliderContainer>
    <Slide>
    <SliderImageContainer>
      <SliderImage src={image1} alt="image-1"/>
    </SliderImageContainer>
    <SliderImageContainer>
      <SliderImage src={image2} alt="image-2"/>
    </SliderImageContainer>
    <SliderImageContainer>
      <SliderImage src={image3} alt="image-2"/>
    </SliderImageContainer>
    </Slide>
  </SliderContainer>
);

export default Slider
