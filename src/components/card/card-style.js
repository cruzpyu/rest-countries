import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEFAULT_RADIUS, DEFAULT_SPACING } from "../../style/constants";

export const CardInfo = styled.div`
  padding: calc(${DEFAULT_SPACING} * 2);
`;

export const CardContainer = styled.article`
  width: 100%;
  height: 300px;
  border-radius: ${DEFAULT_RADIUS};
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
  box-shadow: 0px 4px 6px ${(props) => props.theme.SHADOW_COLOR};

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 767px) {
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 50%;
  border-top-right-radius: ${DEFAULT_RADIUS};
  border-top-left-radius: ${DEFAULT_RADIUS};
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${DEFAULT_SPACING};
  color: ${(props) => props.theme.TEXT_COLOR};

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
