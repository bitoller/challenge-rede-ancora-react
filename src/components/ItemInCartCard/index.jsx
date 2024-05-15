import imgDefault from "../../assets/default.jpg";
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
      <div>
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
      <button onClick={handleDecrement}>-</button>
      <p>{product.count}</p>
      <button onClick={handleIncrement}>+</button>
      <p className="product-price">R$ {product.price}</p>
      <p className="product-price">R$ {product.price * product.count}</p>
    </StyledItemInCartCard>
  );
}
