import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 7.5rem;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem 0.625rem 1.25rem;

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header-logo {
    height: 90%;
  }

  h1 {
    color: var(--color-gray-10);
    font-size: 3rem;
    text-align: center;
  }
  
  @media (orientation: portrait) {
    height: 10vh;
    width: 100%;

    .header-logo {
      height: 80%;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
`;
