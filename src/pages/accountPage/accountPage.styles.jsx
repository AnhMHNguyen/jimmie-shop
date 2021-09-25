import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  padding: 120px 0 50px 0;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  gap: 70px;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

