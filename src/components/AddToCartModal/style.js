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
    padding: 0.9375rem;
    width: 28.125rem;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    animation: slideInAnimation 0.2s ease-out;
  }

  .modal-body {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
  }

  .product-image {
    width: 100%;
    height: auto;
    max-height: 12.5rem;
    object-fit: contain;
    border-radius: 16rem;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    margin-bottom: 0.625rem;
    font-size: var(--font-size-4);
    font-weight: 500;
    line-height: 1.875rem;
    text-align: center;
    color: var(--color-primary);
  }

  .product-info > h5 {
    border-bottom: 0.125rem dashed var(--color-accent-2);
    padding-bottom: 0.625rem;
  }

  .red-text {
    color: var(--color-accent-2);
  }

  .product-info > p:last-child {
    border-top: 0.125rem dashed var(--color-accent-2);
    padding-top: 1.25rem;
  }

  .quantity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.625rem;
    font-size: var(--font-size-4);
    gap: 1.25rem;
    font-weight: 500;
  }

  .quantity-controls {
    display: flex;
    align-items: flex-end;
    gap: 1.875rem;
  }

  .quantity-button > img {
    width: 1.5625rem;
    height: 1.5625rem;
  }

  .quantity-button {
    border: none;
    border-radius: 0.313rem;
    background-color: var(--color-gray-11);
  }

  .quantity-display {
    font-size: 2rem;
    font-weight: 500;
  }

  .modal-footer {
    display: flex;
    flex-direction: column;
    gap: 2.8125rem;
  }

  .cancel-button,
  .add-button {
    padding: 0.625rem 1.25rem;
    width: 16.25rem;
    height: 3.75rem;
    border-radius: 0.438rem;
    font-size: 1.25rem;
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

  @media (orientation: portrait) {
    .modal-body {
      margin: 12.5rem 1.25rem 0 1.25rem;
      gap: 2.875rem;
    }
  }
`;
