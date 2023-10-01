import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6vh;

  background-color: ${(props) => props.theme.ELEMENTS_COLOR};

  font-family: inherit;

  gap: 8px;
`;

export const SocialLink = styled(Link)`
  color: ${(props) => props.theme.TEXT_COLOR};
  cursor: pointer;
  font-family: inherit;

  :hover {
    color: ${(props) => props.theme.TEXT_COLOR_HOVER};
  }
`;
