import styled from "styled-components";

export const StyledSearchByLicensePlate = styled.main`
  display: flex;
  justify-items: center;
  min-height: calc(100vh - 120px - 120px);
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;

  h2 {
    font-size: 36px;
  }

  .search-field {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    width: 100%;
    height: 450px;
    gap: 20px;
    background-color: var(--color-gray-9);
  }

  .search-field-code {
    display: flex;
    width: 100%;
    height: 125px;
    gap: 20px;
    background-color: var(--color-gray-9);
    justify-content: center;
    align-items: center;
  }

  .search-field-code input {
    width: 780px;
    height: 60px;
    border-radius: 25px;
  }

  .search-field input {
    width: 780px;
    height: 60px;
    border-radius: 25px;
  }

  .car-name-check a {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
  }

  .car-name-check p {
    width: 235px;
    text-align: center;
  }

  .license-plate-link {
    color: var(--color-primary);
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    cursor: pointer;
  }

  .search-input {
    background-image: url(../assets/magnifyingGlassSearch.svg);
    background-repeat: no-repeat;
    background-position: 10px 15px;
    padding-left: 60px;
    padding-bottom: 5px;
    font-size: 24px;
    color: var(--color-gray-4);
  }
`;
