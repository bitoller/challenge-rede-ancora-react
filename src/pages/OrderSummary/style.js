import styled from "styled-components";

export const StyledOrderSummary = styled.main`
  background-color: var(--color-primary);
  min-height: calc(100vh - 120px - 120px);

  .cart-page-products {
    width: 1300px;
    height: 630px;
    background-color: var(--color-gray-10);
    margin: auto;
    border-radius: 10px;
    position: relative;
  }

  .cart-page-botton {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-around;
    background-color: #ced3d9;
    width: 100%;
    height: 120px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 10px 10px;
  }

  .cart-page-itens {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .car-item-list {
    overflow-y: scroll;
    height: 510px;
  }

  .cart-page-itens p {
    font-size: 24px;
    font-weight: 700;
  }

  .cart-page-price {
    font-size: 24px;
    font-weight: 600;
    font-family: var(--font-family-1);
  }

  .buttons-container {
    height: 120px;
  }

  .cart-page-buttons {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 300px;
    margin-top: 35px;
  }
  .cart-page-buttons input {
    width: 310px;
    height: 65px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 7px;
  }

  .cart-page-buttons input[value="Continuar Comprando"] {
    background-color: var(--color-gray-9);
    border: 0;
    color: var(--color-primary);
  }

  .cart-page-buttons input[value="Finalizar Compra"] {
    background-color: var(--color-accent);
    border: 0;
    color: var(--color-gray-10);
  }
`;
