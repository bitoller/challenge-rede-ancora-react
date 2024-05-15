import styled from "styled-components";

export const ModalWrapper = styled.div`
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
    padding: 20px;
    border-radius: 8px;
    position: relative;
    width: 400px;
    max-width: 90%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .modal-login-content {
    position: relative;
  }

  .close {
    font-size: 24px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #888;
    transition: color 0.3s ease;
  }

  .close:hover {
    color: #333;
  }

  .modal-login-content h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .cpf-login {
    font-size: 16px;
    color: #555;
    margin-bottom: 5px;
    display: block;
  }

  #cpfLogin {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  .numeric-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .numeric-buttons button {
    padding: 15px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
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
    margin-top: 20px;
  }

  #loginForm input[type="submit"] {
    width: 100%;
    padding: 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  #loginForm input[type="submit"]:hover {
    background-color: #0056b3;
  }
`;
