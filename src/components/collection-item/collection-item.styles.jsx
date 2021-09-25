import styled from "styled-components";
import CustomButton from '../custom-button/custom-button.component'
import { Link } from "react-router-dom";

export const CollectionItemContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 400px;
  width: 18vw;

  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      display: flex;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 25vw;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
        
      }
    }
  }
  @media screen and (max-width: 800px) {
    width: 45vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
        
      }
    }
  }
`;

export const ImageContainer = styled(Link)`
  /* width: 100%; */
  display: flex;
  height: 75%;
  
  /* height: 80%; */
  background-color: white;
  /* @media screen and (max-width: 1024px) {
    height: 50%;
  } */
  @media screen and (max-width: 800px) {
    height: 65%;
  }
`;

export const Image = styled.img`
  opacity: 1;
  align-self: center;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  height: 30%;
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 800px) {
    gap: 5px;
    height: 35%;
  }
`;


export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 230px;
  left: 30px;
  display: none;

  @media screen and (max-width: 800px) {
    /* margin-top: 5px; */
    display: flex;
    opacity: 0.9;
    align-self: center;
    position: static;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  span {
    padding-top: 9px;
    color: gray;
    font-size: 12px;
  }
`;

export const ItemName = styled.div`
  font-weight: 500;
  text-align: center;
`;

export const ItemPrice = styled.div`
  font-size: 13px;
  text-align: center;
`;

