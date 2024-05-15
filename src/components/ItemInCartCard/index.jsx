import imgDefault from "../../assets/default.jpg";
import minusButton from "../../assets/lessButton.svg";
import plusButton from "../../assets/moreButton.svg";
import { StyledItemInCartCard } from "./style";

export function ItemInCartCard({ product, onUpdateCart }) {
  const handleIncrement = () => {
    onUpdateCart(product.id, product.count + 1);
  };

  const handleDecrement = () => {
    onUpdateCart(product.id, product.count - 1);
  };

  return (
    <StyledItemInCartCard>
      <div className="img-container">
        <img
          src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${product.imagemReal}`}
          alt={"Imagem do Produto"}
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
          <img src={minusButton} alt={"botão de menos"} />
        </button>
        <p>{product.count}</p>
        <button onClick={handleIncrement}>
          <img src={plusButton} alt={"botão de mais"} />
        </button>
      </div>
      <div className="price-container">
        <p className="product-price-unit">Valor unitário: R$ {product.price}</p>
        <p className="product-price-sum">
          Valor total: R$ {product.price * product.count}
        </p>
      </div>
    </StyledItemInCartCard>
  );
}
