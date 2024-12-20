import styled from "styled-components";

export const StyledOrderSummary = styled.main`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 7.5rem);

  .cart-page-products {
    width: 80%;
    height: 31.25rem;
    background-color: var(--color-gray-10);
    border-radius: 0.625rem 0.625rem 0rem 0rem;
  }

  .cart-page-bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ced3d9;
    width: 80%;
    height: 6.25rem;
    border-radius: 0rem 0rem 0.625rem 0.625rem;
  }

  .cart-page-items {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .cart-page-items > p {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .cart-page-price {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: var(--font-family-1);
  }

  .cart-page-buttons {
    width: 80%;
    padding: 3.125rem;
    display: flex;
    justify-content: space-evenly;
  }

  .cart-page-buttons > button {
    width: 19.375rem;
    height: 4.0625rem;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 0.438rem;
  }

  .back-to-shopping {
    background-color: var(--color-gray-9);
    color: var(--color-primary);
  }

  .confirm-purchase {
    background-color: var(--color-accent);
    color: var(--color-gray-10);
  }

  .confirm-purchase:disabled {
    background-color: #7f7d7f;
    cursor: default;
  }

  @media (orientation: portrait) {
    height: 90vh;
    min-height: 0;

    .cart-page-products {
      height: 70vh;
    }
  }
`;
