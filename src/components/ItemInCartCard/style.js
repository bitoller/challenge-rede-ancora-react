import styled from "styled-components";

export const StyledItemInCartCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9375rem;
  width: 90%;
  height: 8.75rem;
  padding: 0.625rem;
  background-color: white;
  color: black;
  border: 0.063rem solid black;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8.5625rem;
    width: 18.75rem;
  }

  .img-container > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .add-to-cart-button {
    color: var(--color-gray-10);
    background-color: var(--color-primary);
    padding: 0.625rem;
    border-radius: 0.313rem;
  }

  .product-name {
    font-size: 1.125rem;
    font-weight: 400;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    height: 100%;
    width: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .brand-code-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 12.5rem;
  }

  .counter-container {
    display: flex;
    gap: 0.9375rem;
  }

  .price-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .product-price-unit,
  .product-price-sum {
    font-weight: 700;
  }

  .product-price-sum {
    color: var(--color-accent-2);
  }

  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.313rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    animation: modal 0.3s ease;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .modal > p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .modal > p > span {
    color: var(--color-accent-2);
  }

  .modal-button {
    display: flex;
    justify-content: space-around;
  }

  .modal-button > button {
    padding: 0.625rem 1.25rem;
    border-radius: 0.313rem;
    background-color: var(--color-primary);
    color: white;
    font-size: 1.2em;
    font-weight: 600;
  }

  .modal-button > button:first-child {
    background-color: var(--color-gray-7);
    color: var(--color-primary);
  }

  @media (orientation: portrait) {
    width: 94%;

    .product-name {
      width: 13.75rem;
    }

    .brand-code-container {
      width: 14.5rem;
      text-align: left;
    }

    .product-price-unit,
    .product-price-sum {
      text-align: center;
      width: 12rem;
    }
  }
`;
