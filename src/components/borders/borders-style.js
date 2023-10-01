import styled from "styled-components";

export const BorderContainer = styled.ul`
  margin-top: 40px;
`;
export const BorderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 767px) {
    margin-top: 24px;
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
  margin-top: 16px;

  @media (max-width: 767px) {
    width: 100px;
    height: 30px;
    font-size: 16px;
    margin-top: 0;
  }
`;
