import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 48px 96px 16px 96px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  justify-content: space-between;

  @media (max-width: 767px) {
    padding: 16px 32px 16px 32px;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
  }
`;

export const SearchContainer = styled.form`
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
  width: 30%;
  border-radius: 4px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
  box-shadow: 0px 2px 5px ${(props) => props.theme.SHADOW_COLOR};

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const TextInput = styled.input`
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  color: ${(props) => props.theme.TEXT_COLOR};

  &::placeholder {
    color: ${(props) => props.theme.TEXT_COLOR};
  }
`;

export const SelectContainer = styled.form`
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
  width: 15%;
  border-radius: 4px;
  box-shadow: 0px 4px 6px ${(props) => props.theme.SHADOW_COLOR};

  @media (max-width: 767px) {
    width: 60%;
  }
`;

export const StyledSelect = styled.select`
  padding: 16px 0 16px 16px;
  border-radius: 4px;
  font-family: inherit;
  background-color: ${(props) => props.theme.ELEMENTS_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
  border: none;
  outline: none;
  cursor: pointer;
  width: 96%;
`;

export const StyledOption = styled.option`
  font-family: inherit;
  box-shadow: none;
`;
