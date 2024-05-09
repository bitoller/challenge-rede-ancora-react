import imgDefault from "../../assets/default.jpg";
import { StyledProductCard } from "./style";

export function ProductCard({ product }) {
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
      <p>{product.nomeProduto}</p>
      <p>Marca: {product.marca}</p>
      <p>Código: {product.codigoReferencia}</p>
      <p>{product.informacoesComplementares}</p>
      <p>R$ 367,00</p>
    </StyledProductCard>
  );
}
