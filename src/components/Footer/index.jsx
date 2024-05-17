import footerDots from "../../assets/footer-dots.svg";
import footerDotsRight from "../../assets/footer-dots-right.svg";
import cartFooter from "../../assets/cartIconFooter.svg";
import { useNavigate } from "react-router-dom";
import { StyledFooter } from "./style";

export function Footer({
  showBackButton,
  showFinishButton,
  showFooterCart,
  totalPrice,
  cartLength,
}) {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <img src={footerDots} alt={"ícone com vários pontos"} />
      {showFooterCart && (
        <div className="footer-cart">
          <div className="footer-cart-img">
            <img src={cartFooter} alt={"ícone de um carrinho de compras"} />
            <p className="footer-cart-count-item">
              <span id="cartItemCount">{cartLength()}</span> Itens
            </p>
          </div>
          <p>
            R$ <span id="cartTotal">{totalPrice.toFixed(2)}</span>
          </p>
        </div>
      )}
      {showBackButton && (
        <button className="back-button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      )}
      {showFinishButton && (
        <button
          className="finish-button"
          onClick={() => navigate("/order_summary")}
        >
          Ver carrinho
        </button>
      )}
      <img src={footerDotsRight} alt={"ícone com vários pontos"} />
    </StyledFooter>
  );
}
