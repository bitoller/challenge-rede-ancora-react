import cartPage from "../../assets/cartPage.png";
import { Header } from "../../components/Header";
import { ItemsInCartList } from "../../components/ItemsInCartList";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { StyledOrderSummary } from "./style";

export function OrderSummary() {
  const navigate = useNavigate();
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(localStorage.getItem("itemsInCart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const cartLength = () => {
    let productQty = 0;
    itemsInCart.forEach((item) => {
      productQty += item.count;
    });
    return productQty;
  };

  useEffect(() => {
    cartTotalPrice();
  }, []);

  const cartTotalPrice = () => {
    const total = itemsInCart.reduce(
      (acc, curr) => acc + parseFloat(curr.price) * curr.count,
      0
    );
    setTotalPrice(total);
  };

  const updateCart = (multiplier, productId) => {
    let foundIndex = itemsInCart.findIndex((x) => x.id == productId);
    const products = itemsInCart.map((c, i) => {
      if (i === foundIndex) {
        c.count = c.count + 1 * multiplier;
      }
      return c;
    });

    let filteredProducts = products.filter((product) => product.count > 0);
    setItemsInCart(filteredProducts);
    localStorage.setItem("itemsInCart", JSON.stringify(filteredProducts));
    cartTotalPrice();
  };

  return (
    <>
      <Header text="Carrinho de Compras" />
      <StyledOrderSummary>
        <section className="cart-page-products">
          <ItemsInCartList
            itemsInCart={itemsInCart}
            onUpdateCart={updateCart}
          />
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
              Valor do pedido: R${" "}
              <span id="cartItemPrice">{totalPrice.toFixed(2)}</span>
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
            disabled={!itemsInCart || itemsInCart.length == 0}
          >
            Finalizar Compra
          </button>
        </div>
      </StyledOrderSummary>
    </>
  );
}
