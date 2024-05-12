import styled from "styled-components";

export const StyledAboutTheProject = styled.main`
  width: 100%;
  min-height: calc(100vh - 7.5rem - 7.5rem);
  color: var(--color-gray-1);
  font-family: var(--font-family-1);
  text-align: center;
  font-weight: 300;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  section {
    padding: 1.25rem;
    width: 100%;
  }

  h1 {
    font-size: 3.125rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.5625rem;
    font-weight: 300;
    padding: 0.3125rem;
  }
`;
