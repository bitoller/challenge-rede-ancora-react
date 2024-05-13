import cartPage from "../../assets/cartPage.png";
import { Header } from "../../components/Header";
import { ItemsInCartList } from "../../components/ItemsInCartList";
import { useNavigate } from "react-router-dom";
import { StyledOrderSummary } from "./style";

export function OrderSummary() {
  const navigate = useNavigate();
  const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));
  console.log(itemsInCart);

  const cartLength = () => {
    return itemsInCart.length;
  };

  return (
    <>
      <Header text="Carrinho de Compras" />
      <StyledOrderSummary>
        <section className="cart-page-products">
          <ItemsInCartList itemsInCart={itemsInCart} />
          <div className="cart-page-botton">
            <div className="cart-page-itens">
              <img src={cartPage} alt={"ícone carrinho de Compras"} />
              <p>
                <span id="cartItemCount">{cartLength()}</span> itens
              </p>
            </div>
            <div className="cart-page-price">
              <p>
                Valor do pedido: R$ <span id="cartItemPrice"></span>
              </p>
            </div>
          </div>
        </section>
        <div className="cart-page-buttons">
          <button className="back-to-shopping" onClick={() => navigate(-1)}>
            Continuar Comprando
          </button>
          <button className="confirm-purchase">Finalizar Compra</button>
        </div>
      </StyledOrderSummary>
    </>
  );
}
/* TODO: adicionar funcionalidades e arrumar css. */
