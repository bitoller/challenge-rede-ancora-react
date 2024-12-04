import styled from "styled-components";

export const StyledModalLogin = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: center;
  }

  .modal-login {
    background-color: white;
    padding: 1.25rem;
    border-radius: 0.5rem;
    position: relative;
    width: 25rem;
    max-width: 90%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    animation: modal 0.3s ease;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .modal-login-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  .close {
    font-size: 1.5rem;
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    cursor: pointer;
    color: #888;
    transition: color 0.3s ease;
  }

  .close:hover {
    color: #333;
  }

  .modal-login-content > h2 {
    margin-bottom: 0.9375rem;
    font-size: 1.5rem;
    color: #333;
  }

  .cpf-login {
    font-size: 1rem;
    color: #555;
    display: block;
  }

  #cpfLogin {
    width: 100%;
    padding: 0.625rem;
    border: 0.063rem solid #ccc;
    border-radius: 0.313rem;
    font-size: 1rem;
    margin-bottom: 0.625rem;
  }

  .numeric-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.625rem;
  }

  .numeric-buttons > button {
    padding: 0.9375rem 0;
    border: 0.063rem solid #ccc;
    border-radius: 0.313rem;
    font-size: 1.125rem;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
  }

  .numeric-buttons > button:hover {
    background-color: #e0e0e0;
  }

  .numeric-buttons > button.zero {
    grid-column: span 2;
  }

  #loginForm {
    margin-top: 0.9375rem;
  }

  #loginForm > input {
    width: 100%;
    padding: 0.9375rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.313rem;
    font-size: 1.125rem;
    transition: background-color 0.3s ease;
  }

  #loginForm > input:hover {
    background-color: #0056b3;
  }

  .success-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-size: 1.125rem;
  }

  .success-modal .modal-content {
    background: white;
    padding: 1.25rem;
    border-radius: 0.625rem;
    text-align: center;
  }

  .success-modal .success-button {
    margin-top: 1.25rem;
    padding: 0.625rem 1.25rem;
    background: #007aff;
    color: white;
    border: none;
    border-radius: 0.313rem;
    cursor: pointer;
  }

  .confirmation-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .confirmation-modal .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .confirmation-modal p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .confirmation-modal .buttons {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    font-weight: 500;
  }

  .confirmation-modal button {
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .confirmation-modal button:first-child {
    color: var(--color-gray-10);
    background-color: var(--color-primary);
  }

  .confirmation-modal button:last-child {
    color: var(--color-primary);
    background-color: var(--color-gray-8);
  }
`;
