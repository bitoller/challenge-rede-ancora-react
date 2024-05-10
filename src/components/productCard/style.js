import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 330px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  padding: 15px;
  color: black;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 137px;
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
    padding: 10px;
    border-radius: 5px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
  }

  .product-name {
    font-weight: 700;
    padding-bottom: 10px;
    border-bottom: 2px dashed #c32401;
  }

  .product-brand,
  .product-code {
    color: #c32401;
  }

  .product-price {
    font-weight: 700;
    padding-top: 10px;
    border-top: 2px dashed #c32401;
  }
`;
