import styled from "styled-components";

export const StyledSearchScreen = styled.main`
  min-height: calc(100vh - 7.5rem - 7.5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .search-button-license-plate {
    background-color: var(--color-gray-1);
    width: 26.875rem;
    height: 26.875rem;
    border-radius: 0.938rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1.25rem 2.8125rem 1.875rem 2.8125rem;
  }

  .search-button-license-plate > p {
    color: var(--color-gray-10);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .image-container {
    height: 10.6875rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .search-button-name {
    background-color: var(--color-gray-6);
    width: 26.875rem;
    height: 26.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.938rem;
    padding: 1.25rem 2.8125rem 1.875rem 2.8125rem;
  }

  .search-button-name > p {
    color: var(--color-gray-1);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;
