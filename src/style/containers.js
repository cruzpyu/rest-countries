import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const SingleCountryContainer = styled.main`
  padding: 32px 0px 0 96px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding-bottom: 4vh;

  @media (max-width: 767px) {
    padding: 32px;
    gap: 24px;
  }
`;
