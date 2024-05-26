import React, { useState } from "react";
import imgDefault from "../../assets/default.jpg";
import minusButton from "../../assets/lessButton.svg";
import plusButton from "../../assets/moreButton.svg";
import { StyledItemInCartCard } from "./style";

export function ItemInCartCard({ product, onUpdateCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const handleIncrement = () => {
    onUpdateCart(1, product.id);
  };

  const handleDecrement = () => {
    if (product.count === 1) {
      setProductToRemove(product);
      setIsModalOpen(true);
    } else {
      onUpdateCart(-1, product.id);
    }
  };

  const confirmRemoveItem = () => {
    onUpdateCart(-1, product.id);
    setIsModalOpen(false);
  };

  const cancelRemoveItem = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledItemInCartCard>
      <div className="img-container">
        <img
          src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${product.imagemReal}`}
          alt={"imagem do produto"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = imgDefault;
          }}
        />
      </div>
      <p className="product-name">{product.nomeProduto}</p>
      <div className="brand-code-container">
        <p className="product-brand">Marca: {product.marca}</p>
        <p className="product-code">Código: {product.codigoReferencia}</p>
      </div>
      <div className="counter-container">
        <button onClick={handleDecrement}>
          <img
            src={minusButton}
            alt={"ícone de um botão com um sinal de menos"}
          />
        </button>
        <p>{product.count}</p>
        <button onClick={handleIncrement}>
          <img
            src={plusButton}
            alt={"ícone de um botão com um sinal de mais"}
          />
        </button>
      </div>
      <div className="price-container">
        <p className="product-price-unit">Valor unitário: R$ {product.price}</p>
        <p className="product-price-sum">
          Valor total: R$ {(product.price * product.count).toFixed(2)}
        </p>
      </div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <p>
              Deseja remover o produto "{productToRemove.nomeProduto}" do
              carrinho?
            </p>
            <div className="modal-button">
              <button onClick={cancelRemoveItem}>Cancelar</button>
              <button onClick={confirmRemoveItem}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </StyledItemInCartCard>
  );
}

/* TODO: melhorar estilizacao do modal de remover ultimo produto do carrinho - feito */
/* TODO: remover o espaco atras do nome do produto do modal de remover ultimo produto do carrinho - não entendi*/
