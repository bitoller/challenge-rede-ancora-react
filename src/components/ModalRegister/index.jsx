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
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

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

  const formatCpf = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    const match = formattedValue.match(
      /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/
    );

    if (match) {
      setCpf(
        !match[2]
          ? match[1]
          : `${match[1]}.${match[2]}${match[3] ? `.${match[3]}` : ""}${
              match[4] ? `-${match[4]}` : ""
            }`
      );
    }
  };

  const validateCpf = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    if (formattedValue.length !== 11) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cpf: "CPF deve ter 11 dígitos",
      }));
      return false;
    }
    setErrors((prevErrors) => ({ ...prevErrors, cpf: "" }));
    return true;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "E-mail inválido",
      }));
      return false;
    }
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (value.length <= 15) {
        formatPhone(value);
      }
    } else if (name === "cpf") {
      if (value.length <= 14) {
        formatCpf(value);
      }
      validateCpf(value);
    } else if (name === "email") {
      setEmail(value);
      validateEmail(value);
    } else {
      switch (name) {
        case "fullname":
          setFullName(value);
          break;
        default:
          break;
      }
    }
  };

  const submitFormRegister = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const name = fullName;
      const cpfValue = cpf;

      updateRegistration(name, cpfValue);
      setIsLoggedIn(true);

      closeModal();
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Nome Completo é obrigatório";
      valid = false;
    }

    if (!cpf) {
      newErrors.cpf = "CPF é obrigatório";
      valid = false;
    } else if (!validateCpf(cpf)) {
      valid = false;
    }

    if (!email) {
      newErrors.email = "E-mail é obrigatório";
      valid = false;
    } else if (!validateEmail(email)) {
      valid = false;
    }

    if (!phone || phone.length < 14) {
      newErrors.phone = "Telefone é obrigatório e deve ser válido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
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
        <form className="form" onSubmit={submitFormRegister} noValidate>
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
          {errors.fullName && <p className="error">{errors.fullName}</p>}
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
          {errors.cpf && <p className="error">{errors.cpf}</p>}
          <label className="label" htmlFor="email">
            E-mail:
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
          {errors.phone && <p className="error">{errors.phone}</p>}
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
