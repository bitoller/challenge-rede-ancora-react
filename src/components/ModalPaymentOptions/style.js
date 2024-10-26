import styled from "styled-components";

export const StyledModalPaymentOptions = styled.div`
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

  .modal-payment-option {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 1.25rem;
    width: 25rem;
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

  .modal-option-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .modal-text {
    font-size: 1.125rem;
    text-align: center;
  }

  .close-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 0.313rem;
    padding: 0.625rem 1.25rem;
    transition: background-color 0.3s ease;
  }

  .close-button:hover {
    background-color: #c0392b;
  }
`;
