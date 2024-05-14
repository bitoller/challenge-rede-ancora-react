import styled from "styled-components";

export const StyledOrderSummary = styled.main`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);

  .cart-page-products {
    width: 80%;
    height: 500px;
    background-color: var(--color-gray-10);
    border-radius: 10px 10px 0px 0px;
  }

  .cart-page-bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ced3d9;
    width: 80%;
    height: 100px;
    border-radius: 0px 0px 10px 10px;
  }

  .cart-page-items {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cart-page-items > p {
    font-size: 24px;
    font-weight: 700;
  }

  .cart-page-price {
    font-size: 24px;
    font-weight: 600;
    font-family: var(--font-family-1);
  }

  .cart-page-buttons {
    width: 80%;
    padding: 50px;
    display: flex;
    justify-content: space-evenly;
  }

  .cart-page-buttons > button {
    width: 310px;
    height: 65px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 7px;
  }

  .back-to-shopping {
    background-color: var(--color-gray-9);
    color: var(--color-primary);
  }

  .confirm-purchase {
    background-color: var(--color-accent);
    color: var(--color-gray-10);
  }
`;
