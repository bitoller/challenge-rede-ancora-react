import styled from "styled-components";

export const StyledSearchByLicensePlate = styled.main`
  display: flex;
  justify-items: center;
  min-height: calc(100vh - 7.5rem - 7.5rem);
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    font-size: 2.25rem;
  }

  .search-field {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 18.75rem;
    background-color: var(--color-gray-9);
    justify-content: center;
    align-items: center;
  }

  .search-field > form {
    height: 3.75rem;
    width: 50%;
  }

  .input-container {
    height: 100%;
    width: 100;
    background-color: var(--color-gray-12);
    border: 0.125rem solid var(--color-gray-3);
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.625rem 0rem 0.625rem;
  }

  .license-plate-link {
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 0.625rem;
    cursor: pointer;
  }

  .license-plate-link > p {
    width: 18.75rem;
    text-align: center;
  }

  @media (orientation: portrait) {
    justify-content: center;
    gap: 4rem;

    .input-container {
      display: flex;
      gap: 4.6875rem;
    }
  }
`;
