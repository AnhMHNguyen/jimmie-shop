import styled from 'styled-components'
import {IoChevronForwardOutline, IoChevronBackOutline} from 'react-icons/io5'

export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 80px;
  /* gap: 20px; */
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  /* justify-content: center; */
  align-items: center;
  width: 20%;
  span {
    display: flex;
    gap: 15px
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-top: 0;
    flex-direction: row;
  }
`;

export const FeaturedTitle = styled.div`
  font-size: 25px;
  
  padding: 30px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
    font-size: 20px;
  }
`;

export const PrevButton = styled(IoChevronBackOutline)`
  width: 40px;
  height: 45px;
  background-color: #f6f2f1;
  padding: 10px 7px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 32px;
    padding: 5px 3px;
  }
`;

export const NextButton = styled(IoChevronForwardOutline)`
  width: 40px;
  height: 45px;
  background-color: #f6f2f1;
  padding: 10px 7px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 32px;
    padding: 5px 3px;
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  overflow-x: hidden;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* margin: 0 20px; */
  } 
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: fit-content;
  transition: all 250ms linear;
  padding: 0 15px;
  transform: ${props => props.currentIndex <4 ? `translateX(-${props.currentIndex * (props.width / 7)}px)` : `translateX(-${3 * (props.width / 7)}px)`};
  @media screen and (max-width: 1024px) {
    transform: ${props => `translateX(-${props.currentIndex * (props.width/ 7)}px)`};
    padding: 0 10px;
    gap: 20px
  } 
  @media screen and (max-width: 800px) {
    transform: ${props => `translateX(-${props.currentIndex * (props.width/ 7)}px)`};
    padding: 0 10px;
    gap: 20px
  } 
`;



