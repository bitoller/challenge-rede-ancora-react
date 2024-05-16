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

  .modal-login {
    background-color: white;
    padding: 1.25rem;
    border-radius: 8px;
    position: relative;
    width: 25rem;
    max-width: 90%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .modal-login-content {
    position: relative;
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
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    color: #333;
  }

  .cpf-login {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.3125rem;
    display: block;
  }

  #cpfLogin {
    width: 100%;
    padding: 0.625rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 0.9375rem;
    box-sizing: border-box;
  }

  .numeric-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.625rem;
  }

  .numeric-buttons button {
    padding: 0.9375rem 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.125rem;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .numeric-buttons button:hover {
    background-color: #e0e0e0;
  }

  .numeric-buttons button.zero {
    grid-column: span 2;
  }

  #loginForm {
    margin-top: 1.25rem;
  }

  #loginForm > input {
    width: 100%;
    padding: 0.9375rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.125rem;
    transition: background-color 0.3s ease;
  }

  #loginForm > input:hover {
    background-color: #0056b3;
  }
`;
