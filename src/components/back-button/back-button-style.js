import {
  Link
} from "react-router-dom";
import styled from "styled-components";

export const StyledBackBtn = styled(Link)
`
  display: flex;
  width: 100px;
  padding: 8px 16px;
   background-color:  ${(props) => props.theme.ELEMENTS_COLOR
   };
  border-radius: 4px;
  box-shadow: 0px 4px 6px ${(props) => props.theme.SHADOW_COLOR};
  font-family: inherit;
  font-weight: 600;
  color: ${(props) => props.theme.TEXT_COLOR};
  margin-bottom: 24px;
  align-items: center;
   gap: 16px;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media(max-width: 767px) {
  width: 120px;
  height: 40px;
  gap: 16px;
  }
`;