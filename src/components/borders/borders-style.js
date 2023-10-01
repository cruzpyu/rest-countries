import styled from "styled-components";

export const BorderBox = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  justify-content: flex-start;

  @media (max-width: 767px) {
  }
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
