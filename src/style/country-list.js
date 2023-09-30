import styled from "styled-components";

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 96px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  gap: 64px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 32px; 
    gap: 24px; 
  }
`;
