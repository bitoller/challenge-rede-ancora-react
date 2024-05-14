import cartPage from "../../assets/cartPage.png";
import { Header } from "../../components/Header";
import { ItemsInCartList } from "../../components/ItemsInCartList";
import { useNavigate } from "react-router-dom";
import { StyledOrderSummary } from "./style";

export function OrderSummary() {
  const navigate = useNavigate();
  const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
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
        </section>
        <div className="cart-page-bottom">
          <div className="cart-page-items">
            <img src={cartPage} alt={"ícone carrinho de compras"} />
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
        <div className="cart-page-buttons">
          <button className="back-to-shopping" onClick={() => navigate(-1)}>
            Continuar Comprando
          </button>
          <button
            className="confirm-purchase"
            onClick={() => navigate("/checkout")}
          >
            Finalizar Compra
          </button>
        </div>
      </StyledOrderSummary>
    </>
  );
}
/* TODO: adicionar funcionalidades e arrumar css se necessario. */
/* TODO: manter itens na ida e volta no continuar comprando,
adicionar total, adicionar valor unitario e total */
