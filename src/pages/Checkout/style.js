import styled from "styled-components";

export const StyledCheckout = styled.div`
  height: 100%;
  width: 100%;

  .logo-payment {
    height: 120px;
    background-color: var(--color-gray-10);
  }

  .logo-payment > img {
    height: 90%;
  }

  .payment-container {
    display: flex;
    background-color: var(--color-gray-10);
    justify-items: center;
    max-height: calc(100vh - 120px - 120px);
    justify-content: space-around;
  }

  .payment-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
  }

  .payment-choices > h1 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .payment-options {
    width: 550px;
    height: 650px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .payment-methods {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }

  .payment-methods > li {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-bottom: 10px;
    width: 90%;
    border-bottom: 2px dashed black;
    cursor: pointer;
  }

  .payment-methods > li > h2 {
    font-size: 24px;
    font-weight: 700;
  }

  .payment-methods > li > p {
    font-weight: 500;
  }

  .img-container {
    width: 77px;
    height: 70px;
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

  .login-options {
    display: grid;
    justify-items: center;
    margin-top: 20px;
  }

  .login-options > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  .login-options > p {
    font-size: 20px;
    padding-top: 20px;
  }

  .login-options > h3 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    grid-column: 1/3;
  }

  .login-options > button {
    width: 200px;
    height: 45px;
    border-radius: 7px;
    color: var(--color-gray-10);
    background-color: var(--color-primary);
    font-weight: 700;
    font-family: var(--font-family-3);
    grid-row: 2/2;
    margin-top: 30px;
  }

  .payment-finish-buttons {
    display: flex;
    gap: 40px;
    margin-top: 10px;
  }

  .payment-finish-buttons > button {
    width: 155px;
    height: 50px;
    border-radius: 7px;
    font-size: 26px;
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

  .payment-ornament {
    height: 120px;
    display: flex;
    align-items: center;
    background-color: var(--color-gray-10);
  }

  .payment-ornament > img {
    padding: 10px;
    padding-left: 30px;
  }

  .payment-results {
    display: flex;
    justify-content: center;
    width: 500px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .payment-value {
    width: 375px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    align-items: center;
    justify-content: space-between;
  }

  .payment-results > h1 {
    width: 375px;
    padding-left: 20px;
    padding-bottom: 15px;
    text-align: left;
    border-bottom: 2px solid #d9d9d9;
    font-size: 24px;
    font-weight: 600;
  }

  .payment-results > p {
    font-size: 20px;
    width: 375px;
    padding-left: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    text-align: left;
  }

  .payment-results > p:last-child {
    border-top: 2px solid #d9d9d9;
    padding-top: 15px;
  }

  .payment-results > p > span {
    width: 150px;
    justify-self: start;
  }

  .modal-register {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-register-content {
    background-color: var(--color-primary);
    margin: 10% auto;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 500px;
  }

  .modal-register-content > h2 {
    margin-bottom: 25px;
    color: var(--color-gray-10);
    font-size: 24px;
    font-weight: 500;
  }

  .modal-register > label {
    color: var(--color-gray-10);
    font-size: 20px;
  }

  .modal-register-content > input[type="text"],
  .modal-register-content > input[type="email"],
  .modal-register-content > input[type="tel"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin: 10px 0 25px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .register-input {
    width: 160px;
    height: 45px;
    background-color: var(--color-accent);
    border: 0;
    border-radius: 5px;
    color: var(--color-gray-10);
    font-size: 20px;
    margin-left: 30%;
    margin-top: 10px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
  }

  .modal-login {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-login-content {
    background-color: var(--color-primary);
    margin: 10% auto;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 500px;
  }

  .modal-login-content > h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-gray-10);
  }

  #cpfLogin {
    font-size: 18px;
    font-weight: 500;
    width: 80%;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    text-align: center;
  }

  .cpf-login {
    font-size: 20px;
    color: var(--color-gray-10);
    font-weight: 500;
  }

  #loginForm > input {
    width: 120px;
    height: 30px;
    background-color: var(--color-accent);
    border: 0;
    border-radius: 5px;
    color: var(--color-gray-10);
    font-size: 20px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
  }

  .numeric-buttons {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .numeric-buttons > button {
    padding: 15px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .numeric-buttons > button.zero {
    grid-column: 2 / 3;
  }

  .numeric-buttons > button.delete {
    background-color: #ff6161;
    color: #fff;
  }

  .numeric-buttons > button:hover {
    background-color: #e0e0e0;
  }

  .login-button {
    z-index: 10;
    cursor: pointer;
  }

  .register-button {
    z-index: 10;
    cursor: pointer;
  }

  .modal-payment-option {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-option-content {
    width: 600px;
    height: 100px;
    font-size: 24px;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    text-align: center;
    position: relative;
  }

  .modal-text {
    text-align: center;
  }

  /* Animação dos três pontos */
  @keyframes blink {
    0%,
    20%,
    100% {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  #loadingDots {
    animation: blink 1s linear infinite;
  }

  .modal-text {
    display: inline-block;
  }

  #loadingDots {
    display: inline-block;
  }
`;
