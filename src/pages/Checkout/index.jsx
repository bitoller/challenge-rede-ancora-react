import logo from "../../assets/logo.png";
import creditCard from "../../assets/card-flag-icon.png";
import pix from "../../assets/pix-icon.png";
import money from "../../assets/bank-note.png";
import { StyledCheckout } from "./style";

export function Checkout() {
  return (
    <StyledCheckout>
      <header className="logo-payment">
        <img src={logo} alt="logo rede ancora" />
      </header>
      <main className="payment-container">
        <section className="payment-box">
          <div className="payment-choices">
            <h1>Como você prefere pagar?</h1>
            <div className="payment-options">
              <ul className="payment-methods">
                <li /* onclick="openModal(card)" */>
                  <div className="img-container">
                    <img
                      src={creditCard}
                      alt={"imagem da bandeira do cartão de crédito"}
                    />
                  </div>
                  <div>
                    <h2>Cartão de crédito</h2>
                    <p>Parcele em até 6 vezes sem juros</p>
                  </div>
                </li>
                <li /* onclick="openModal(card)" */>
                  <div className="img-container">
                    <img
                      src={creditCard}
                      alt={"imagem da bandeira do cartão de débito"}
                    />
                  </div>
                  <div>
                    <h2>Cartão de débito</h2>
                    <p>Faça o pagamento através do cartão de débito</p>
                  </div>
                </li>
                <li /* onclick="openModal(pix)" */>
                  <div className="img-container">
                    <img src={pix} alt={"imagem do pix"} />
                  </div>
                  <div>
                    <h2>Pagamento via PIX</h2>
                    <p>Pague via QR CODE</p>
                  </div>
                </li>
                <li /* onclick="openModal(money)" */>
                  <div className="img-container">
                    <img src={money} alt={"imagem de uma nota de dinheiro"} />
                  </div>
                  <div>
                    <h2>Pagamento em dinheiro</h2>
                    <p>Pague diretamente no caixa</p>
                  </div>
                </li>
              </ul>
              <div id="register" className="login-options">
                <h3>Cadastre-se e receba descontos na compra</h3>
                <button
                  /* onclick="openModalRegister()" */
                  className="register-button"
                >
                  Casdastrar-se agora
                </button>
                <button
                  /* onclick="openModalLogin()" */
                  className="login-button"
                  id="loginButton"
                >
                  Já possuo conta
                </button>
              </div>
            </div>
          </div>
          <div className="payment-finish-buttons">
            <a href="./shoppingCart.html">
              <button className="payment-button-back">Voltar</button>
            </a>
            <a href="../../index.html">
              <button
                /* onclick="cleanLocalStorage()" */
                className="payment-button-continue"
              >
                Finalizar
              </button>
            </a>
          </div>
        </section>
        <section className="payment-results">
          <div className="payment-value">
            <h1>Resumo da Compra</h1>
            <p>
              Produtos<span id="totalPriceDisplay">R$ 00,00</span>
            </p>
            <p>
              Descontos <span id="discount">R$ 00,00</span>
            </p>
            <p>
              Você pagará <span id="newPrice">0</span>
            </p>
          </div>
        </section>
      </main>
      <footer className="payment-ornament">
        <img src="../assets/footer-dots-left.png" alt="" />
      </footer>
    </StyledCheckout>
  );
}

/* <div id="modalRegister" class="modal-register">
      <div class="modal-register-content">
        <span class="close" onclick="closeModalRegister()">&times;</span>
        <h2>Cadastre-se</h2>
        <form onsubmit="submitFormRegister(); return false;">
          <label for="fullname">Nome Completo:</label>
          <input type="text" id="fullname" name="fullname" required />
          <label for="cpf">Seu CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            maxlength="14"
            required
          />
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <label for="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" maxlength="15" required />
          <input class="register-input" type="submit" value="Cadastrar-se" />
        </form>
      </div>
    </div>
    <div id="modalLogin" class="modal-login">
      <div class="modal-login-content">
        <span class="close" onclick="closeModalLogin()">&times;</span>
        <h2>Entre com seu usuário</h2>
        <label class="cpf-login" for="cpf">CPF:</label>
        <input
          type="text"
          id="cpfLogin"
          name="cpf"
          maxlength="14"
          required
          placeholder="Digite aqui seu cpf"
        />
        <div class="numeric-buttons">
          <button onclick="addNumber('1')">1</button>
          <button onclick="addNumber('2')">2</button>
          <button onclick="addNumber('3')">3</button>
          <button onclick="addNumber('4')">4</button>
          <button onclick="addNumber('5')">5</button>
          <button onclick="addNumber('6')">6</button>
          <button onclick="addNumber('7')">7</button>
          <button onclick="addNumber('8')">8</button>
          <button onclick="addNumber('9')">9</button>
          <button class="zero" onclick="addNumber('0')">0</button>
          <button onclick="removeLast()">⌫</button>
        </div>
        <form id="loginForm" onsubmit="submitLoginForm(); return false;">
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </div>
    <div id="modalPaymentOptions" class="modal-payment-option">
      <div class="modal-option-content">
        <div id="modalText" class="modal-text"></div>
        <span id="loadingDots">...</span>
      </div>
    </div> */

/* TODO: adicionar funcionalidades e adicionar css. */
