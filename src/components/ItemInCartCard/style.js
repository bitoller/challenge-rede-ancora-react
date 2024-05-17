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
  border: 1px solid black;

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
    border-radius: 5px;
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

  .product-price-sum {
    color: #c32401;
  }
`;
