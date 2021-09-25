import styled, { keyframes } from "styled-components";

const slide = keyframes`
  /* 0% {opacity: 0}
  5% {opacity: 1}
  50% {opacity: 1}
  55% {opacity: 0}
  100% {opacity: 0} */
  0% {opacity: 0;}
  20% {opacity: 1;}
  33% {opacity: 1;}
  53% {opacity: 0;}
  100% {opacity: 0;}
`;


export const SliderContainer = styled.div`
  max-width: 100%;
  min-height: 90vh;
  overflow: hidden;
  position: relative;
  display: block;
  top: 0;
  left: 0;
  background-color: grey;
  @media screen and (max-width: 800px) {
    min-height: 30vh;
  }
`;

export const Slide = styled.div`

`;

export const SliderImageContainer = styled.div`
  display: block;
  position: absolute;
  background-size: cover;
  opacity: 0;
  width: 100%;
  height: 100%;
  animation: ${slide} 15s linear infinite;
  animation-direction: normal;
  animation-delay: 0;
  animation-play-state: running;
  animation-fill-mode: forwards; 

  &:nth-child(2) {
    animation-delay: 5s;
  }
  &:nth-child(3) {
    animation-delay: 10s;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;