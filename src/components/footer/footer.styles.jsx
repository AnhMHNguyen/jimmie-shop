import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const FooterContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 300px;
  }
`;

export const MainContainer = styled.div`
  background-color: black;
  height: 250px;
  width: 100%;
  bottom: 0;
  position: absolute;
  @media screen and (max-width: 800px) {
    height: 150px;
  }
`;

export const SocialMediaContainer = styled.div`
  color: #f6f4f1;
  width:50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 15px;

  }
`;

export const Title = styled.div`
  font-weight: bold;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  @media screen and (max-width: 800px) {
    padding: 15px 0;
  }
`;

export const SubscribeContainer = styled.div`
  background-color: #f6f4f1;
  height: 250px;
  width: 25%;
  bottom: 50px;
  right: 50px;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    position: static;
    bottom: 0;
    height: 150px;
  }
`;


export const SubscribeText = styled.p`
  text-align: center;
  padding: 10px 15px ;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 0;
  }
`;

export const SubscribeButton = styled(CustomButton)`
  width: 100%;
  
`;

export const SubscribeInput = styled.input`
  width: 100%;
  background-color: #f6f4f1;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0;
  

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    height: 20px;
    font-size: 12px;
    /* width: 50%; */
  }
`;