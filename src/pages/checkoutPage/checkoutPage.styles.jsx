import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  padding: 120px 0 50px 0;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-left: 400px;
  display: flex;
  gap: 70px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
  }
`;

