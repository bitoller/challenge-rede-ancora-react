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
    height: 7.5rem;
    padding: 0.625rem 1.25rem 0.625rem 1.25rem;
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
    font-size: 4.6875rem;
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
    gap: 0.625rem;
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
    padding: 0.625rem 2.0625rem 0.625rem 2.0625rem;
    background-color: var(--color-accent);
    color: var(--color-gray-10);
    font-size: 3.375rem;
    font-weight: 700;
    border-radius: 1.25rem;
    margin: auto;
    text-align: center;
  }

  footer {
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    gap: 0.625rem;
    width: 100%;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--color-gray-10);
  }

  @media (orientation: portrait) {
    max-width: 100vh;
    gap: 10.25rem;

    .header-text {
      font-size: 6.9rem;
    }

    main {
      gap: 13.9rem;
    }

    .touch-button {
      width: 80vw;
      height: 12.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    header > img {
      padding-top: 5rem;
      height: auto;
    }
  }
`;
