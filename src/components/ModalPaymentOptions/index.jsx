import React, { useEffect } from "react";
import { StyledModalPaymentOptions } from "./style";

export function ModalPaymentOptions({ text, closeModal }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <StyledModalPaymentOptions>
      <div className="modal-payment-option">
        <div className="modal-option-content">
          <div className="modal-text">{text}</div>
          <button onClick={closeModal} className="close-button">
            Fechar
          </button>
        </div>
      </div>
    </StyledModalPaymentOptions>
  );
}
