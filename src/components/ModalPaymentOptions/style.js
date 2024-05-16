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
  z-index: 1000; /* Garante que o modal fique sobreposto a outros elementos */

  .modal-payment-option {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao modal */
    padding: 20px;
    width: 400px; /* Largura do modal */
  }

  .modal-option-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-text {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  }

  .close-button {
    background-color: #e74c3c; /* Cor do botão de fechar */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .close-button:hover {
    background-color: #c0392b; /* Cor do botão de fechar ao passar o mouse */
  }
`;
