import styled from "styled-components";

export const StyledSearchProductsInput = styled.input`
  width: 150%;
  outline: none;
  font-size: 1.3rem;
  color: var(--color-gray-4);
  border: 0;
  padding: 0 20px 0 10px;
`;

export const StyledKeyboardContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .simple-keyboard {
    width: 100%;
    max-width: none;
  }

  .hg-button {
    font-size: 1.5rem;
    height: 80px;
    padding: 15px 10px;
    margin: 5px;
  }
`;
