import styled from "styled-components";

export const StyledSearchByCode = styled.main`
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

  .search-field-code {
    display: flex;
    width: 100%;
    height: 450px;
    background-color: var(--color-gray-9);
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  .search-field-code input {
    width: 780px;
    height: 60px;
    border-radius: 25px;
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
