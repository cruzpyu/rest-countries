import styled from "styled-components";

export const InfoContainer = styled.section`
  display: flex;
  padding: 48px 108px;
  width: 100%;
  align-items: center;
  gap: 64px;

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
  flex-direction: space-between;
  padding-bottom: 64px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const OneSide = styled.div`
  width: 100%;
`;

export const BorderItem = styled.li`
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 4px 6px ${(props) => props.theme.SHADOW_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};

  @media (max-width: 767px) {
    width: 120px;
    height: 30px;
    font-size: 16px;
  }
`;

export const BorderBox = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 767px) {
    justify-content: space-around;
  }
`;

export const CountryPageContainer = styled.section`
  padding: 32px 0px 0 96px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding-bottom: 4vh;

  @media (max-width: 767px) {
    padding: 32px;
    gap: 24px;
  }
`;
