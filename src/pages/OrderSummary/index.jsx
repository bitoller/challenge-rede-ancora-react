import { Header } from "../../components/Header";
import cartPage from "../../assets/cartPage.png";
import { StyledOrderSummary } from "./style";

export function OrderSummary() {
  return (
    <>
      <Header text="Carrinho de Compras" />
      <StyledOrderSummary>
        <section className="cart-page-products">
          <ul id="cartItemList" className="car-item-list"></ul>
          <div className="cart-page-botton">
            <div className="cart-page-itens">
              <img src={cartPage} alt={"icone carrinho de Compras"} />
              <p>
                <span id="cartItemCount">0</span> itens
              </p>
            </div>
            <div className="cart-page-price">
              <p>
                Valor do pedido: R$ <span id="cartItemPrice"></span>
              </p>
            </div>
          </div>
        </section>
        <button id="removeLastItemBtn" onclick="removeLastItem()">
          Remover Último Item
        </button>
        <section className="buttons-container">
          <form className="cart-page-buttons">
            <input
              type="button"
              onclick="window.location.href = './results.html';"
              value="Continuar Comprando"
            />
            <input type="submit" value="Finalizar Compra" />
          </form>
        </section>
      </StyledOrderSummary>
    </>
  );
}
