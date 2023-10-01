import styled from "styled-components";
import { DEFAULT_SPACING } from "./constants";

export const BoldText = styled.p`
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-family: inherit;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const RegularText = styled.p`
  display: flex;
  align-items: flex-start;
  gap: ${DEFAULT_SPACING};
  margin: 0;
  line-height: 2em;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-family: inherit;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
