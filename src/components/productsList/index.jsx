import { ProductCard } from "../productCard";
import { StyledProductsList } from "./style";

export function ProductsList({ productsCatalog }) {
  return (
    <StyledProductsList>
      {productsCatalog.length > 0 ? (
        <ul>
          {productsCatalog.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </StyledProductsList>
  );
}
