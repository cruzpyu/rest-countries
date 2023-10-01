import styled from "styled-components";

export const InfoContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 96px;
  gap: 64px;

  min-height: 68vh;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
`;

export const CountryName = styled.h2`
  font-size: 20;
  font-weight: bold;
  font-family: inherit;
  margin-bottom: 32px;
  color: ${(props) => props.theme.TEXT_COLOR};
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;
export const TwoSides = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const OneSide = styled.div`
  width: 100%;
`;
