import cartPage from "../../assets/cartPage.png";
import { Header } from "../../components/Header";
import { ItemsInCartList } from "../../components/ItemsInCartList";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { StyledOrderSummary } from "./style";

export function OrderSummary() {
  const navigate = useNavigate();
  const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
  const cartWithCounter = JSON.parse(localStorage.getItem("itemsInCart")) || [];
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  console.log(itemsInCart);

  const cartLength = () => {
    return itemsInCart.length;
  };

  useEffect(() => {
    const total = itemsInCart.reduce(
      (acc, curr) => acc + parseFloat(curr.price),
      0
    );
    setTotalPrice(total);
  }, []);

  const handleCart = () => {
    for (let i = 0; i < cartWithCounter.length; i++) {
      for (let j = i + 1; j < cartWithCounter.length; j++) {
        if (cartWithCounter[i].id == cartWithCounter[j].id) {
          cartWithCounter.splice(j, 1);
          j--;
        }
      }
    }

    const backupCart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
    cartWithCounter.map(
      (item) =>
        (item.count = backupCart.filter(
          (element) => element.id == item.id
        ).length)
    );
    return cartWithCounter;
  };

  /* const updateCart = (productId, newCount) => {
    console.log("Updating cart for productId:", productId, "with newCount:", newCount);
    if (newCount == 0) {
      cartWithCounter.find()
    }
    const updatedCart = cartWithCounter.map(
      (item) => item.id === productId ? { ...item, count: newCount } : item
    ).filter((item) => item.count > 0);
    console.log("Updated cart:", updatedCart);
    setCart(updatedCart);
  }; */

  const updateCart = (productId, newCount) => {
    cartWithCounter = updateCartArr(productId, newCount, cartWithCounter);
    itemsInCart = cartWithCounter.map((item) =>
      itemsInCart.filter((x) => x.id == item.id)
    );
    console.log(itemsInCart);
  };

  const updateCartArr = (productId, newCount, arr) => {
    console.log(
      "Updating cart for productId:",
      productId,
      "with newCount:",
      newCount
    );

    // Update the count in cartWithCounter
    const updatedCart = arr.map((item) =>
      item.id === productId ? { ...item, count: newCount } : item
    );

    // Filter out items with count > 0 and update cart state
    const filteredCart = updatedCart.filter((item) => item.count > 0);
    console.log("Updated cart:", filteredCart);

    return filteredCart;
  };

  return (
    <>
      <Header text="Carrinho de Compras" />
      <StyledOrderSummary>
        <section className="cart-page-products">
          <ItemsInCartList
            itemsInCart={handleCart()}
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
              Valor do pedido: R$ <span id="cartItemPrice">{totalPrice}</span>
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
