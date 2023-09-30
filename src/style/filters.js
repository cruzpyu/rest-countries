import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  display: flex;
  flex-direction: space-between;
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
  }
`;