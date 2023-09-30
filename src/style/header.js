import styled from "styled-components";
import { DEFAULT_SHADOW } from "./constants";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 96px 16px 96px;
  box-shadow: ${DEFAULT_SHADOW};
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
`;

export const HeaderTitle = styled.h1`
  font-weight: bold;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: 20px;
`;