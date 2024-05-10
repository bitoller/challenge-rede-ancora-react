import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-primary);
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;

  .footer-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .footer-cart > p {
    color: #ffffff;
  }

  .footer-cart-img {
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 3px solid white;
    padding-bottom: 5px;
  }

  .footer-cart-img > p {
    color: #ffffff;
  }

  .back-button {
    height: 36px;
    width: 184px;
    background-color: var(--color-gray-10);
    color: #090a0f;
    border-radius: 7px;
    font-weight: 700;
  }

  .finish-button {
    height: 36px;
    width: 184px;
    background-color: var(--color-accent);
    color: #ffffff;
    border-radius: 7px;
    font-weight: 700;
  }
`;
