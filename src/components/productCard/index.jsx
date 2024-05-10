import imgDefault from "../../assets/default.jpg";
import { StyledProductCard } from "./style";

export function ProductCard({ product, productId }) {
  const randomPrice = (Math.random() * 800).toFixed(2);
  const productWithPrice = { ...product, price: randomPrice };

  return (
    <StyledProductCard>
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
      <p className="product-brand">Marca: {product.marca}</p>
      <p className="product-code">Código: {product.codigoReferencia}</p>
      {product.informacoesComplementares ? (
        <p className="product-comp-info">{product.informacoesComplementares}</p>
      ) : (
        ""
      )}
      <p className="product-price">R$ {randomPrice > 0 ? randomPrice : 0}</p>
      <button
        className="add-to-cart-button"
        id="addToCartButton"
        onClick={() => productId(product.id)}
      >
        Adicionar ao carrinho
      </button>
    </StyledProductCard>
  );
}
