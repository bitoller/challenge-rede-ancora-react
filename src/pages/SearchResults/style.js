import styled from "styled-components";

export const StyledSearchResults = styled.main`
  height: 100vh;
  color: var(--color-gray-8);
  max-height: calc(100vh - 0px - 120px);
  display: flex;
  align-items: center;

  .vehicle-info > p {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .vehicle-info > p:last-child {
    line-height: 30px;
  }

  #plateInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 110px;
    border: 1px solid var(--color-gray-10);
    font-family: var(--font-family-1);
    font-weight: 500;
    cursor: pointer;
  }

  .section-menu {
    width: 22%;
    height: 100%;
    background-color: var(--color-primary);
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .section-menu > img {
    padding: 5px 0 5px 0;
  }

  .aside-menu > li {
    width: 300px;
    color: var(--color-gray-10);
    font-size: 28px;
    font-weight: 500;
    border-bottom: 2px solid var(--color-gray-10);
    padding-bottom: 15px;
    padding-top: 21px;
    cursor: pointer;
  }

  .container-result {
    width: 78%;
    height: 100%;
    color: black;
    left: 400px;
  }

  .container-result > p {
    font-size: 20px;
    font-weight: 400;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
    padding: 15px 0 15px 0;
  }

  .container-result > p > span {
    font-size: 24px;
    font-weight: 700;
  }

  .search-input-product {
    width: 100%;
    background-color: var(--color-gray-10);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  form {
    height: 120px;
  }

  .search-input-product [type="text"] {
    width: 690px;
    height: 45px;
    border-radius: 25px;
    background-image: url(../assets/magnifyingGlassSearch.svg);
    background-repeat: no-repeat;
    background-position: 15px 7px;
    padding-left: 60px;
    font-size: 20px;
    color: var(--color-gray-4);
  }

  .search-input-product [type="submit"] {
    width: 200px;
    height: 50px;
    color: var(--color-gray-10);
    background-color: var(--color-accent);
    border: 0;
    border-radius: 15px;
    font-size: 24px;
    font-weight: 600;
  }

  .product-list {
    height: 84%;
  }
`;
