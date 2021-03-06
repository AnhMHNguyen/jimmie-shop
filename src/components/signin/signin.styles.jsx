import styled from 'styled-components';


export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }
`;

export const SignInTitle = styled.div`
  margin: 10px 0;
  font-weight: bold;
  font-size: x-large;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

