import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-primary);
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .back-button {
    height: 36px;
    width: 184px;
    background-color: var(--color-gray-10);
    color: #090a0f;
    border-radius: 7px;
    font-weight: 700;
  }

  .finish-button {
    height: 36px;
    width: 184px;
    background-color: var(--color-accent);
    color: #ffffff;
    border-radius: 7px;
    font-weight: 700;
  }
`;
