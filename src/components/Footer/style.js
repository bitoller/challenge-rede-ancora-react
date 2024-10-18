import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-primary);
  display: flex;
  width: 100%;
  height: 9.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem 0.625rem 1.25rem;
  position: absolute;
  left: 0;
  bottom: 0;

  .footer-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;
  }

  .footer-cart > p {
    font-size: 1.3rem;
    color: #ffffff;
  }

  .footer-cart-img {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    border-bottom: 3px solid white;
    padding-bottom: 0.3125rem;
  }

  .footer-cart-img > p {
    font-size: 1.2rem;
    color: #ffffff;
  }

  .back-button {
    height: 3.75rem;
    width: 12.5rem;
    background-color: var(--color-gray-10);
    color: #090a0f;
    border-radius: 0.4375rem;
    font-weight: 700;
    font-size: 1.3rem;
  }

  .finish-button {
    height: 3.75rem;
    width: 12.5rem;
    background-color: var(--color-accent);
    color: #ffffff;
    border-radius: 7px;
    font-weight: 700;
    font-size: 1.3rem;
  }
`;
