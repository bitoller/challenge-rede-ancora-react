import styled from "styled-components";

export const StyledAboutTheProject = styled.main`
  width: 100%;
  min-height: calc(100vh - 120px - 120px);
  color: var(--color-gray-1);
  font-family: var(--font-family-1);
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  section {
    padding: 20px;
    width: 100%;
  }

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 25px;
    font-weight: 300;
    padding: 5px;
  }
`;
