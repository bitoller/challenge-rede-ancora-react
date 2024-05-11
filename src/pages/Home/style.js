import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  header {
    width: 100%;
    height: 120px;
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
  }

  header > img {
    height: 90%;
  }

  .header-text {
    color: var(--color-gray-10);
    font-family: var(--font-family-1);
    text-align: center;
    font-weight: 300;
    font-size: 75px;
  }

  .header-text > span {
    display: block;
    font-weight: 700;
  }

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
  }

  .carousel-container > img {
    object-fit: cover;
  }

  .touch-button {
    width: 30vw;
    padding: 10px 33px 10px 33px;
    background-color: var(--color-accent);
    color: var(--color-gray-10);
    font-size: 54px;
    font-weight: 700;
    border-radius: 20px;
    margin: auto;
    text-align: center;
  }

  footer {
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--color-gray-10);
  }
`;
