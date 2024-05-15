import React, { useState } from "react";
import { ModalWrapper } from "./style";

export function ModalRegister({
  closeModal,
  updateRegistration,
  setIsLoggedIn,
}) {
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");

  const submitFormRegister = (e) => {
    e.preventDefault();

    const name = e.target.fullname.value;
    const cpfValue = e.target.cpf.value;

    const formattedCpf = cpfValue.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );

    setFullName(name);
    setCpf(formattedCpf);

    updateRegistration(name, formattedCpf);
    setIsLoggedIn(true); // Atualiza o estado de isLoggedIn para true após o registro bem-sucedido

    closeModal();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper onClick={closeModal}>
      <div className="modal-content" onClick={stopPropagation}>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>Cadastre-se</h2>
        <form className="form" onSubmit={submitFormRegister}>
          <label className="label" htmlFor="fullname">
            Nome Completo:
          </label>
          <input
            className="input"
            type="text"
            id="fullname"
            name="fullname"
            required
          />
          <label className="label" htmlFor="cpf">
            Seu CPF:
          </label>
          <input
            className="input"
            type="text"
            id="cpf"
            name="cpf"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            maxLength="14"
            required
          />
          <label className="label" htmlFor="email">
            E-mail:
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
          />
          <label className="label" htmlFor="phone">
            Telefone:
          </label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            maxLength="15"
            required
          />
          <input
            className="submit-button register-input"
            type="submit"
            value="Cadastrar-se"
          />
        </form>
      </div>
    </ModalWrapper>
  );
}
