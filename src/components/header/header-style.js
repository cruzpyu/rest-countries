import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
  box-shadow: 0px 4px 6px ${(props) => props.theme.SHADOW_COLOR};

  padding: 16px 96px 16px 96px;

  @media (max-width: 767px) {
    padding: 32px 32px 32px 32px;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: inherit;
  font-weight: bold;
  font-size: 20px;

  color: ${(props) => props.theme.TEXT_COLOR};

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
