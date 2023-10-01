import styled from "styled-components";

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding: 80px 108px;
  padding-bottom: 60vh;
  gap: 64px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 32px;
    gap: 32px;
    padding-bottom: 61vh;
  }
`;
