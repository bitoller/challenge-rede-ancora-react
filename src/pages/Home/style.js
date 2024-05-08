import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: var(--color-primary);
  min-height: calc(100vh - 500px - 120px);

  .header img {
    margin: 40px;
  }

  .header-text {
    color: var(--color-gray-10);
    font-family: var(--font-family-1);
    text-align: center;
    font-weight: 300;
    font-size: 80px;
    margin-top: -170px;
    margin-bottom: 100px;
  }

  .header-text span {
    display: block;
    font-weight: 700;
    margin-top: 20px;
  }

  main {
    display: flex;
    justify-content: center;
  }

  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
  }

  .carousel-container img {
    object-fit: cover;
  }

  .touch-button {
    width: 40vw;
    margin: auto;
    padding: 10px 33px 10px 33px;
    margin-top: 100px;
    text-align: center;
    background-color: var(--color-accent);
    color: var(--color-gray-10);
    font-size: 54px;
    font-weight: 700;
    border-radius: 20px;
  }

  footer {
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    height: 20px;
    width: 100%;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--color-gray-10);
  }
`;
