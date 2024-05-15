import React, { useState } from "react";
import { ModalWrapper } from "./style";

export function ModalLogin({
  closeModalLogin,
  updateRegistration,
  setIsLoggedIn,
}) {
  const [cpfValue, setCpfValue] = useState("");
  const [isCpfValid, setIsCpfValid] = useState(true); // Estado para controlar se o CPF é válido

  const formatCpf = (value) => {
    // Remove tudo que não é número
    const formattedValue = value.replace(/\D/g, "");

    // Formata para o padrão do CPF (###.###.###-##)
    const match = formattedValue.match(
      /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/
    );
    if (match) {
      setCpfValue(
        !match[2]
          ? match[1]
          : `${match[1]}.${match[2]}${match[3] ? `.${match[3]}` : ""}${
              match[4] ? `-${match[4]}` : ""
            }`
      );
    }
  };

  const handleAddNumber = (number) => {
    if (cpfValue.length < 14) {
      formatCpf(cpfValue + number);
    }
  };

  const removeLast = () => {
    setCpfValue((prevCpfValue) => prevCpfValue.slice(0, -1));
  };

  const submitLoginForm = (e) => {
    e.preventDefault();

    // Verifica se o CPF tem pelo menos 11 dígitos
    if (cpfValue.length === 14) {
      const fixedName = "Nome do Usuário";
      updateRegistration(fixedName, cpfValue);
      setIsLoggedIn(true); // Atualiza o estado de isLoggedIn para true após um login bem-sucedido
      closeModalLogin();
    } else {
      // Define o estado para indicar que o CPF não é válido
      setIsCpfValid(false);
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper onClick={closeModalLogin}>
      <div id="modalLogin" className="modal-login" onClick={stopPropagation}>
        <div className="modal-login-content">
          <span className="close" onClick={closeModalLogin}>
            &times;
          </span>
          <h2>Entre com seu usuário</h2>
          <label className="cpf-login" htmlFor="cpf">
            CPF:
          </label>
          <input
            type="text"
            id="cpfLogin"
            name="cpf"
            maxLength="14"
            required
            placeholder="Digite aqui seu cpf"
            value={cpfValue}
            onChange={(e) => {
              formatCpf(e.target.value);
              // Ao alterar o CPF, definir o estado de isCpfValid para true para redefinir o estado de validação
              setIsCpfValid(true);
            }}
          />
          {/* Adiciona uma mensagem de erro se o CPF não for válido */}
          {!isCpfValid && <p style={{ color: "red" }}>CPF inválido</p>}
          <div className="numeric-buttons">
            <button onClick={() => handleAddNumber("1")}>1</button>
            <button onClick={() => handleAddNumber("2")}>2</button>
            <button onClick={() => handleAddNumber("3")}>3</button>
            <button onClick={() => handleAddNumber("4")}>4</button>
            <button onClick={() => handleAddNumber("5")}>5</button>
            <button onClick={() => handleAddNumber("6")}>6</button>
            <button onClick={() => handleAddNumber("7")}>7</button>
            <button onClick={() => handleAddNumber("8")}>8</button>
            <button onClick={() => handleAddNumber("9")}>9</button>
            <button className="zero" onClick={() => handleAddNumber("0")}>
              0
            </button>
            <button onClick={removeLast}>⌫</button>
          </div>
          <form id="loginForm" onSubmit={submitLoginForm}>
            <input type="submit" value="Entrar" />
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
}
