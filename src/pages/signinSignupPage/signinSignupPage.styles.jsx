import styled from "styled-components";

export const SigninSignupPageContainer = styled.div`
  padding: 120px 300px 50px 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 1200px) {

    padding: 150px 30px 50px 30px;
  }
  @media screen and (max-width: 800px) {
    padding: 100px 0 50px 0;
    

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;