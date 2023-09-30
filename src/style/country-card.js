import styled from "styled-components";
import {
  DEFAULT_RADIUS,
  DEFAULT_SHADOW,
  DEFAULT_SPACING
} from "./constants";
import {
  Link
} from "react-router-dom";

export const BoldText = styled.p `
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const RegularText = styled.p `
  display: flex;
  align-items: center;
  gap: ${DEFAULT_SPACING};
  margin: 0;
  margin-top: ${DEFAULT_SPACING};
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const CardInfo = styled.div `
 padding: calc(${DEFAULT_SPACING} * 2);
`;

export const CardContainer = styled.article `
  width: 100%;
  height: 300px;
  border-radius: ${DEFAULT_RADIUS};
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
  box-shadow: ${DEFAULT_SHADOW};

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02); 
  }
  @media (max-width: 767px) {
    height: auto; 
  }
`;

export const CardImage = styled.img `
  width: 100%;
  height: 50%;
  border-top-right-radius: ${DEFAULT_RADIUS};
  border-top-left-radius: ${DEFAULT_RADIUS};
`;

export const CardTitle = styled.h2 `
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${DEFAULT_SPACING};
  color: ${(props) => props.theme.TEXT_COLOR};

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const StyledLink = styled(Link)
`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;