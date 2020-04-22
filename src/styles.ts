import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1250px;
  width: calc(100% - 40px);
  flex: 1;
  margin: 0 auto;
  padding: 0;

  @media screen and (max-width: 1250px) {
    margin: 0 20px;
  }
`;
