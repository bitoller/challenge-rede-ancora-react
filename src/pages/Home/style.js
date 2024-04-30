import styled from "styled-components";

export const StyledHome = styled.div`
  max-width: 1800px;
  height: 100vh;
  margin: auto;
  background-color: var(--color-primary);

  .header img {
    margin: 40px;
  }

  .header-text {
    color: var(--color-gray-10);
    font-family: var(--font-family-1);
    text-align: center;
    font-weight: 300;
    font-size: 96px;
    margin-top: -150px;
    margin-bottom: 100px;
  }

  .header-text span {
    display: block;
    font-weight: 700;
    margin-top: 20px;
  }

  .carousel {
    overflow: hidden;
    max-width: 1005px;
    height: 268px;
    margin: auto;
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
    width: 820px;
    margin: auto;
    padding-top: 33px;
    padding-bottom: 33px;
    margin-top: 100px;
    text-align: center;
    background-color: var(--color-accent);
    color: var(--color-gray-10);
    font-size: 54px;
    font-weight: 700;
    border-radius: 20px;
  }
`;
