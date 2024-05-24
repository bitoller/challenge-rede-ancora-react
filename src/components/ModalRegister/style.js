import styled from "styled-components";

export const StyledModalRegister = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: white;
    padding: 1.25rem;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .close-button {
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #888;
    transition: color 0.3s ease;
  }

  .close-button:hover {
    color: #333;
  }

  .modal-content > h2 {
    margin-bottom: 0.9375rem;
    font-size: 1.5rem;
    color: #333;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .label {
    font-size: 1rem;
    color: #555;
  }

  .input {
    width: 100%;
    padding: 0.625rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .submit-button {
    width: 100%;
    padding: 0.9375rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.125rem;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }

  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: -0.5rem;
  }
`;

/* TODO: adicionar keyframes igual do modal de placa em todos os modais */