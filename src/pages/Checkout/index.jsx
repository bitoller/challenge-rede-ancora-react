import logo from "../../assets/logo.png";
import creditCard from "../../assets/card-flag-icon.png";
import pix from "../../assets/pix-icon.png";
import money from "../../assets/bank-note.png";
import footerDots from "../../assets/footer-dots-left.png";
import { ModalRegister } from "../../components/ModalRegister";
import { ModalLogin } from "../../components/ModalLogin";
import { ModalPaymentOptions } from "../../components/ModalPaymentOptions";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledCheckout } from "./style";

export function Checkout() {
  const navigate = useNavigate();
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [registration, setRegistration] = useState({ fullName: "", cpf: "" });
  const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const total = itemsInCart.reduce(
      (acc, curr) => acc + parseFloat(curr.price),
      0
    );
    setTotalPrice(total);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const openModal = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalRegister = () => {
    setShowModalRegister(true);
  };

  const closeModalRegister = () => {
    setShowModalRegister(false);
  };

  const openModalLogin = () => {
    setShowModalLogin(true);
  };

  const closeModalLogin = () => {
    setShowModalLogin(false);
  };

  const updateRegistration = (name, cpf) => {
    setRegistration({ fullName: name, cpf: cpf });
  };

  const discountValue = isLoggedIn ? totalPrice * 0.05 : 0;
  const discountValueDisplay =
    discountValue === 0 ? "R$ 00,00" : `R$ ${discountValue.toFixed(2)}`;

  const totalPriceWithDiscount = isLoggedIn
    ? "R$ " + (totalPrice - discountValue).toFixed(2)
    : "R$ " + totalPrice.toFixed(2);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Está logado");
    }
  }, [isLoggedIn]);

  return (
    <StyledCheckout>
      <header className="logo-payment">
        <img src={logo} alt={"logo rede ancora"} />
      </header>
      <main className="payment-container">
        <section className="payment-box">
          <div className="payment-choices">
            <h1>Como você prefere pagar?</h1>
            <div className="payment-options">
              <ul className="payment-methods">
                <li onClick={() => openModal("Insira o cartão na maquininha")}>
                  <div className="img-container">
                    <img
                      src={creditCard}
                      alt={"imagem da bandeira do cartão de crédito"}
                    />
                  </div>
                  <div className="payment-text">
                    <h2>Cartão de crédito</h2>
                    <p>Parcele em até 6 vezes sem juros</p>
                  </div>
                </li>
                <li onClick={() => openModal("Insira o cartão na maquininha")}>
                  <div className="img-container">
                    <img
                      src={creditCard}
                      alt={"imagem da bandeira do cartão de débito"}
                    />
                  </div>
                  <div className="payment-text">
                    <h2>Cartão de débito</h2>
                    <p>Faça o pagamento através do cartão de débito</p>
                  </div>
                </li>
                <li
                  onClick={() =>
                    openModal("Escaneie o QR CODE para fazer o pagamento")
                  }
                >
                  <div className="img-container">
                    <img src={pix} alt={"imagem do pix"} />
                  </div>
                  <div className="payment-text">
                    <h2>Pagamento via PIX</h2>
                    <p>Pague via QR CODE</p>
                  </div>
                </li>
                <li
                  onClick={() =>
                    openModal("Vá ao caixa com o número do seu pedido")
                  }
                >
                  <div className="img-container">
                    <img src={money} alt={"imagem de uma nota de dinheiro"} />
                  </div>
                  <div className="payment-text">
                    <h2>Pagamento em dinheiro</h2>
                    <p>Pague diretamente no caixa</p>
                  </div>
                </li>
              </ul>
              <div id="register" className="login-options">
                {registration.fullName ? (
                  <div>
                    <p>Nome: {registration.fullName}</p>
                    <p>CPF: {registration.cpf}</p>
                  </div>
                ) : (
                  <>
                    <h3>Cadastre-se e receba descontos na compra</h3>
                    <button
                      onClick={openModalRegister}
                      className="register-button"
                    >
                      Casdastrar-se agora
                    </button>
                    <button
                      onClick={openModalLogin}
                      className="login-button"
                      id="loginButton"
                    >
                      Já possuo conta
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="payment-finish-buttons">
            <button
              className="payment-button-back"
              onClick={() => navigate(-1)}
            >
              Voltar
            </button>
            <button
              /* onclick="cleanLocalStorage()" */
              className="payment-button-continue"
              onClick={() => navigate("/home")}
            >
              Finalizar
            </button>
          </div>
        </section>
        <section className="payment-results">
          <div className="payment-value">
            <h1>Resumo da Compra</h1>
            <p>
              Produtos
              <span id="cartItemPrice">{"R$ " + totalPrice.toFixed(2)}</span>
            </p>
            <p>
              Descontos{" "}
              <span id="discount">
                <span id="discount">{discountValueDisplay}</span>
              </span>
            </p>
            <p>
              Você pagará{" "}
              <span id="cartItemPrice">{totalPriceWithDiscount}</span>
            </p>
          </div>
        </section>
      </main>
      <footer className="payment-ornament">
        <img src={footerDots} alt={"imagem de pontos"} />
      </footer>
      {showModalRegister && (
        <ModalRegister
          closeModal={closeModalRegister}
          updateRegistration={updateRegistration}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {showModalLogin && (
        <ModalLogin
          closeModalLogin={closeModalLogin}
          updateRegistration={updateRegistration}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {showModal && (
        <ModalPaymentOptions text={modalText} closeModal={closeModal} />
      )}
    </StyledCheckout>
  );
}
