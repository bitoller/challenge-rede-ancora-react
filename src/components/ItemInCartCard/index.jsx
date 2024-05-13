import imgDefault from "../../assets/default.jpg";
import { StyledItemInCartCard } from "./style";

export function ItemInCartCard({ product }) {
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
      <p className="product-brand">Marca: {product.marca}</p>
      <p className="product-code">Código: {product.codigoReferencia}</p>
      {/* add remove from cart button */}
      <p className="product-price">R$ {product.price}</p>
      {/* valor unitario e total */}
    </StyledItemInCartCard>
  );
}
