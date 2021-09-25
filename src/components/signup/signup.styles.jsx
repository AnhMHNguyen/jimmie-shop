import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    padding: 20px;
    width: 100%;
  }
`;

export const SignUpTitle = styled.div`
  margin: 10px 0;
  font-weight: bold;
  font-size: x-large;
`;