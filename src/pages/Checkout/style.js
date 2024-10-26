import styled from "styled-components";

export const StyledCheckout = styled.div`
  height: 100%;
  width: 100%;

  .logo-payment {
    height: 7.5rem;
    background-color: var(--color-gray-10);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1.25rem 0.625rem 1.25rem;
  }

  .logo-payment > img {
    height: 90%;
  }

  .payment-container {
    display: flex;
    background-color: var(--color-gray-10);
    justify-items: center;
    align-items: center;
    min-height: calc(100vh - 7.5rem - 7.5rem);
    justify-content: space-around;
  }

  .payment-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
  }

  .payment-choices {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .payment-choices > h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  .payment-options {
    width: 34.375rem;
    height: auto;
    background-color: var(--color-gray-12);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .payment-methods {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.3125rem;
    width: 100%;
  }

  .payment-methods > li {
    display: flex;
    gap: 0.625rem;
    align-items: center;
    padding-bottom: 0.3125rem;
    width: 90%;
    border-bottom: 0.125rem dashed black;
    cursor: pointer;
  }

  .img-container {
    width: 4.8125rem;
    height: 4.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .payment-text > h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .payment-text > p {
    font-weight: 500;
  }

  .login-options {
    display: grid;
    justify-items: center;
    gap: 1.25rem;
  }

  .login-options > h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .login-options > h3 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    grid-column: 1/3;
  }

  .login-options > button {
    width: 12.5rem;
    height: 2.8125rem;
    border-radius: 0.438rem;
    color: var(--color-gray-10);
    background-color: var(--color-primary);
    font-weight: 700;
    font-family: var(--font-family-3);
    grid-row: 2/2;
  }

  .payment-finish-buttons {
    display: flex;
    gap: 2.5rem;
  }

  .payment-finish-buttons > button {
    width: 9.6875rem;
    height: 3.125rem;
    border-radius: 0.438rem;
    font-size: 1.625rem;
    font-weight: 700;
  }

  .payment-button-back {
    color: var(--color-primary);
    background-color: var(--color-gray-5);
  }

  .payment-button-continue {
    color: var(--color-gray-10);
    background-color: var(--color-accent);
  }

  .payment-results {
    display: flex;
    justify-content: center;
    width: 31.25rem;
    background-color: var(--color-gray-12);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
  }

  .payment-value {
    width: 23.4375rem;
    height: 37.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }

  .payment-value > h1 {
    width: 23.4375rem;
    text-align: left;
    border-bottom: 0.125rem solid var(--color-gray-13);
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 0.9375rem;
  }

  .payment-value > p {
    font-size: 1.25rem;
    width: 23.4375rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    text-align: left;
  }

  .payment-value > p:last-child {
    border-top: 0.125rem solid var(--color-gray-13);
    padding-top: 0.9375rem;
    color: var(--color-accent-2);
    font-weight: 600;
  }

  .payment-value > p > span {
    width: 9.375rem;
    justify-self: start;
  }

  .payment-ornament {
    height: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1.25rem 0.625rem 1.25rem;
    background-color: var(--color-gray-10);
  }

  @media (orientation: portrait) {
    main {
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }

    .payment-choices > h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .payment-container {
    justify-content: space-evenly;
    }
  }
`;
