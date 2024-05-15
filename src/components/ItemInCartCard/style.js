import styled from "styled-components";

export const StyledItemInCartCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9375rem;
  width: 90%;
  height: 8.75rem;
  padding: 10px;
  background-color: white;
  color: black;
  border: 1px solid black;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8.5625rem;
    width: 300px;
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
    text-align: center;
  }

  .brand-code-container {
    display: flex;
    flex-direction: column;
  }

  .counter-container {
    display: flex;
    gap: 15px;
  }

  .price-container {
    display: flex;
    flex-direction: column;
  }

  .product-price-sum {
    color: #c32401;
  }
`;
