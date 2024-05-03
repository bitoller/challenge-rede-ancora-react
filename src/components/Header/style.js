import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 120px;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  img:nth-of-type(1) {
    height: 90%;
  }

  h1 {
    color: var(--color-gray-10);
    font-size: 48px;
    text-align: center;
  }
`;
