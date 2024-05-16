import React, { useEffect } from "react";
import { ModalWrapper } from "./style";

const ModalPaymentOptions = ({ text, closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <ModalWrapper>
      <div className="modal-payment-option">
        <div className="modal-option-content">
          <div className="modal-text">{text}</div>
          <button onClick={closeModal} className="close-button">
            Fechar
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalPaymentOptions;
