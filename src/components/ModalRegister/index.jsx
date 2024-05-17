import React, { useState } from "react";
import { StyledModalRegister } from "./style";

export function ModalRegister({
  closeModal,
  updateRegistration,
  setIsLoggedIn,
}) {
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const formatPhone = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    const match = formattedValue.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      setPhone(
        !match[2]
          ? match[1]
          : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ""}`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (value.length <= 15) {
        formatPhone(value);
      }
    } else {
      switch (name) {
        case "fullname":
          setFullName(value);
          break;
        case "cpf":
          setCpf(value);
          break;
        default:
          break;
      }
    }
  };

  const submitFormRegister = (e) => {
    e.preventDefault();

    const name = fullName;
    const cpfValue = cpf;

    updateRegistration(name, cpfValue);
    setIsLoggedIn(true);

    closeModal();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <StyledModalRegister onClick={closeModal}>
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
            value={fullName}
            onChange={handleChange}
          />
          <label className="label" htmlFor="cpf">
            Seu CPF:
          </label>
          <input
            className="input"
            type="text"
            id="cpf"
            name="cpf"
            maxLength="14"
            required
            value={cpf}
            onChange={handleChange}
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
            minLength="14"
            required
            value={phone}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="submit-button register-input"
            value="Cadastrar"
          />
        </form>
      </div>
    </StyledModalRegister>
  );
}

/* TODO: colocar mensagems de erro vermelhas embaixo de cada input para sinalizar
que a digitacao esta incorreta (igual o modal de login) */
/* TODO: consertar o campo de cpf para so aceitar um formato de cpf
(igual o modal de login) */
