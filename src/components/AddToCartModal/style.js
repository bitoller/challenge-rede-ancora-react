import styled from "styled-components";

export const StyledAddToCartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 15px;
    width: 450px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    animation: slideInAnimation 0.2s ease-out;
  }

  .modal-body {
    width: 85%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .product-image {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
    border-radius: 8px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 10px;
    font-size: var(--font-size-4);
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    color: var(--color-primary);
  }

  .product-info h5 {
    border-bottom: 2px dashed #c32401;
    padding-bottom: 10px;
  }

  .red-text {
    color: #c32401;
  }

  .product-info p:last-child {
    border-top: 2px dashed #c32401;
    padding-top: 20px;
  }

  .quantity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    font-size: var(--font-size-4);
    gap: 20px;
    font-weight: 500;
  }

  .quantity-controls {
    display: flex;
    align-items: flex-end;
    gap: 30px;
  }

  .quantity-button img {
    width: 25px;
    height: 25px;
  }

  .quantity-button {
    border: none;
    border-radius: 5px;
    background-color: #f8f9fa;
  }

  .quantity-display {
    font-size: 2rem;
    font-weight: 500;
  }

  .modal-footer {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }

  .cancel-button,
  .add-button {
    padding: 10px 20px;
    width: 260px;
    height: 60px;
    border-radius: 7px;
    font-size: 20px;
    font-weight: 700;
  }

  .add-button {
    color: var(--color-gray-10);
    background-color: var(--color-primary);
  }

  .cancel-button {
    color: var(--color-primary);
    background-color: var(--color-gray-8);
  }

  @keyframes slideInAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

/* TODO: remover estilizacoes desnecessarias, margens que podem ser trocadas por gap,
REM */
