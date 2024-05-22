import React, { useState, useEffect } from "react";
import { ModalOverlay } from "./style";

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
      <ModalOverlay>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Adicionar ao Carrinho</h2>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <img
              className="product-image"
              src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${product.imagemReal}`}
              alt={"imagem do produto"}
            />
            <div className="product-info">
              <h5>{product.nomeProduto}</h5>
              <p>Marca: {product.marca}</p>
              <p>Código: {product.codigoReferencia}</p>
              {product.informacoesComplementares && (
                <p>{product.informacoesComplementares}</p>
              )}
              <p>R$ {product.price}</p>
            </div>
            <label>Quantidade:</label>
            <div className="quantity-container">
              <button className="quantity-button" onClick={decreaseQuantity}>
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button className="add-button" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </ModalOverlay>
    )
  );
}
