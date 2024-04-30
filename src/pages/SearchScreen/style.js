import styled from "styled-components";

export const StyledSearchScreen = styled.main`
  display: flex;
  gap: 150px;
  height: 532px;
  margin: 0 auto;
  align-content: flex-end;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .search-button-license-plate {
    background-color: var(--color-gray-1);
    width: 430px;
    height: 430px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .search-button-license-plate p {
    color: var(--color-gray-10);
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin: 22px 45px;
  }

  .search-button-license-plate img {
    width: 234px;
    height: 234px;
  }

  .search-button-name {
    background-color: var(--color-gray-6);
    width: 430px;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    margin: auto;
  }

  .search-button-name p {
    color: var(--color-gray-1);
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin: 22px 45px;
  }

  .search-button-name img {
    width: 171px;
    height: 171px;
  }
`;
