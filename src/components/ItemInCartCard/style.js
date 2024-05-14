import styled from "styled-components";

export const StyledItemInCartCard = styled.li`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  width: 90%;
  height: 8.75rem;
  background-color: white;
  color: black;
  border: 1px solid black;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8.5625rem;
    width: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .add-to-cart-button {
    color: var(--color-gray-10);
    background-color: var(--color-primary);
    padding: 0.625rem;
    border-radius: 5px;
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
    width: 100%;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
  }

  .product-name,
  .product-price {
    font-weight: 700;
  }

  .brand-code-container {
    display: flex;
    flex-direction: column;
  }
`;
