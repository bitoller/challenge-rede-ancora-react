import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;
  width: 20.625rem;
  min-height: 31.25rem;
  max-height: 33.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.3125rem 0.9375rem;
  background-color: white;
  padding: 0.9375rem;
  color: black;
  cursor: pointer;

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

  p {
    font-size: 1.125rem;
    font-weight: 400;
    width: 100%;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
  }

  .product-name {
    font-weight: 700;
    padding-bottom: 0.625rem;
    border-bottom: 0.125rem dashed var(--color-accent-2);
  }

  .product-brand,
  .product-code {
    color: var(--color-accent-2);
  }

  .product-price {
    font-weight: 700;
    padding-top: 0.625rem;
    border-top: 0.125rem dashed var(--color-accent-2);
  }
`;
