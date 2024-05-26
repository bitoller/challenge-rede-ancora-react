import imgDefault from "../../assets/default.jpg";
import minusButton from "../../assets/lessButton.svg";
import plusButton from "../../assets/moreButton.svg";
import React, { useState, useEffect } from "react";
import { StyledAddToCartModal } from "./style";

export function AddToCartModal({ show, onClose, product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  return (
    show && (
      <StyledAddToCartModal>
        <div className="modal-content">
          <div className="modal-body">
            <img
              className="product-image"
              src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${product.imagemReal}`}
              alt={"imagem do produto"}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = imgDefault;
              }}
            />

            <div className="product-info">
              <h5>
                <span className="red-text">Produto: </span>
                {product.nomeProduto}
              </h5>
              <p>Marca: {product.marca}</p>
              <p>Código: {product.codigoReferencia}</p>
              {product.informacoesComplementares && (
                <p>{product.informacoesComplementares}</p>
              )}
              <p>
                <span className="red-text">Valor total:</span> R${" "}
                {(product.price * quantity).toFixed(2)}
              </p>
            </div>
            <div className="quantity-container">
              <label>Quantidade</label>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={decreaseQuantity}>
                  <img
                    src={minusButton}
                    alt={"ícone de um botão com um sinal de menos"}
                  />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-button" onClick={increaseQuantity}>
                  <img
                    src={plusButton}
                    alt={"ícone de um botão com um sinal de mais"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="add-button" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>
            <button className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </StyledAddToCartModal>
    )
  );
}
