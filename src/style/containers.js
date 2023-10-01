import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const SingleCountryContainer = styled.main`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  width: 100%;
  justify-content: space-between;
  padding: 32px 96px;
  gap: 24px;

  @media (max-width: 767px) {
    padding: 32px;
  }
`;
