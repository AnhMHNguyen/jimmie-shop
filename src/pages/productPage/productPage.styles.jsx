import styled from "styled-components";
import CustomButton from '../../components/custom-button/custom-button.component'

export const ProductPageContainer = styled.div`
  padding: 100px 0 50px 0;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding-top: 80px;
  }
`;
export const ContentContainer = styled.div`
  height: fit-content;
  background-color: #f6f4f1;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
  /* align-items: center; */
  padding: 20px 0;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    
  }
`;

export const ImageContainer = styled.img`
  width: 35%;
  margin: auto 100px;
  @media screen and (max-width: 800px) {
    width: 80%;
    margin: 20px auto;
  }
`;

export const ItemDetailsContainer = styled.div`
  margin: 70px 0;
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 20px;
  }
`;

export const ItemName = styled.div`
  font-size: x-large;
  font-weight: bold;
`;

export const ItemDescription = styled.div`
  font-size: large;
  padding: 10px 0;
`;

export const ItemPrice = styled.div`
  font-size: medium;
`;

export const AddButton = styled(CustomButton)`
  width: 100%;
  margin-top: 30px;
`;

export const QuantityContainer = styled.div`
  display: inline-block;
  padding: 5px;
  border: 1px solid grey;
  
`;

export const QuantityButton = styled.button`
  width: 15px;
  text-align: center;
  border: none;
  background-color: transparent;
  
`;
export const QuantityInput = styled.input`
  width: 50px;
  border: none;
  text-align: center;
  background: transparent;
`;

export const OutOfStockContainer = styled.div`
  width: 30%;
  background-color: white;
  color: balck;
  height: 50px;
  font-size: 18px;
  text-align: center;
  padding-top: 12px;
  font-weight: bold;
`;

export const Divider = styled.hr`
  border-top: 2px solid lightgray;
  margin: 20px 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  span {
    padding-top: 9px;
    color: gray;
    font-size: 13px;
  }
`;
