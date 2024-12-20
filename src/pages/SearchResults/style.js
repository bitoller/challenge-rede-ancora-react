import styled from "styled-components";

export const StyledSearchResults = styled.main`
  color: var(--color-gray-8);
  display: flex;
  align-items: center;
  height: calc(100vh - 7.5rem);

  .vehicle-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;
    padding: 0.625rem;
    border: 0.063rem solid var(--color-gray-10);
    font-family: var(--font-family-1);
    font-weight: 500;
    cursor: pointer;
  }

  .vehicle-info > p {
    font-size: 1.0625rem;
    line-height: 1.25rem;
    text-align: center;
  }

  .section-menu {
    width: 20%;
    height: calc(100vh - 7.5rem);
    background-color: var(--color-primary);
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
  }

  .section-menu > img {
    width: 30%;
    padding: 0.3125rem 0rem 0.3125rem 0rem;
  }

  .plate-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;
  }

  .plate-modal-text {
    font-weight: 700;
  }

  .aside-menu {
    width: 80%;
    overflow-y: scroll;
  }

  .aside-menu::-webkit-scrollbar {
    background: transparent;
    width: 0.0625rem;
    display: none;
  }

  .aside-menu::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: var(--color-primary);
  }

  .aside-menu::-webkit-scrollbar-track {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  .aside-menu > li {
    width: 100%;
    color: var(--color-gray-10);
    font-size: 1.25rem;
    font-weight: 500;
    border-bottom: 0.125rem solid var(--color-gray-10);
    padding: 0.9375rem 0rem 0.9375rem 0rem;
    cursor: pointer;
  }

  .container-result {
    width: 80%;
    height: 100%;
    color: black;
  }

  .search-field-results {
    display: flex;
    width: 100%;
    height: 7.5rem;
    background-color: var(--color-gray-9);
    justify-content: center;
    align-items: center;
  }

  .search-input-product {
    height: 3.75rem;
    width: 50%;
  }

  .input-container {
    height: 100%;
    width: 100%;
    background-color: var(--color-gray-12);
    border: 0.125rem solid var(--color-gray-3);
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-around;
    align-items: center;
    gap: 4.6875rem;
    padding: 0rem 0.625rem 0rem 0.625rem;
  }

  .container-result > p {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
    padding: 0.9375rem 0rem 0.9375rem 0rem;
  }

  .container-result > p > span {
    font-size: 1.25rem;
    font-family: var(--font-family-1);
    font-weight: 700;
  }

  .product-list {
    height: calc(100% - 7.5rem - 3.8281rem);
  }

  .modal-content {
    background-color: var(--color-gray-10);
    margin: 15% auto;
    padding: 1.25rem;
    border: 0.063rem solid var(--color-gray-3);
    width: 80%;
    border-radius: 0.313rem;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
  }

  .modal-body {
    padding: 1rem;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 0.063rem solid var(--color-gray-3);
  }

  @media (orientation: portrait) {
    .vehicle-info {
      width: 90%;
      min-height: 7rem;
    }

    .section-menu {
      width: 23%;
    }

    .section-menu > img {
      width: 70%;
      padding: 0.9125rem 0rem 0.3125rem 0rem;
    }

    .plate-modal-text {
      font-size: 1.2rem;
      padding: 0.625rem;
      text-align: center;
    }

    .aside-menu > li {
      font-size: 1.75rem;
      padding: 3rem 0rem 3rem 0rem;
    }

    .search-input-product {
      width: 70%;
    }
  }
`;
