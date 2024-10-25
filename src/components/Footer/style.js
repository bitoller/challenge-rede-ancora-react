import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-primary);
  display: flex;
  height: 7.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem 0.625rem 1.25rem;

  .footer-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;
  }

  .footer-cart > p {
    color: var(--color-gray-12);
  }

  .footer-cart-img {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    border-bottom: 0.188rem solid white;
    padding-bottom: 0.3125rem;
  }

  .footer-cart-img > p {
    color: var(--color-gray-12);
  }

  .back-button {
    height: 3.75rem;
    width: 12.5rem;
    background-color: var(--color-gray-10);
    color: #090a0f;
    border-radius: 0.4375rem;
    font-weight: 700;
  }

  .finish-button {
    height: 3.75rem;
    width: 12.5rem;
    background-color: var(--color-accent);
    color: var(--color-gray-12);
    border-radius: 0.438rem;
    font-weight: 700;
    font-size: 1.3rem;
  }

  @media (orientation: portrait) {
    width: 100%;
    height: 9.5rem;
    position: absolute;
    left: 0;
    bottom: 0;

    .footer-cart > p {
      font-size: 1.3rem;
    }

    .footer-cart-img > p {
      font-size: 1.2rem;
    }
    
    .back-button {
      height: 3.75rem;
      width: 12.5rem;
      font-size: 1.3rem;
    }
  }
`;
