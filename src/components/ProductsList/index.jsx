import { ProductCard } from "../ProductCard";
import { StyledProductsList } from "./style";

export function ProductsList({ productsCatalog, product }) {
  return (
    <StyledProductsList>
      {productsCatalog && productsCatalog.length > 0 ? (
        <ul>
          {productsCatalog.map((item) => (
            <ProductCard product={item} key={item.id} selectedItem={product} />
          ))}
        </ul>
      ) : (
        <p className="no-product-found">Nenhum produto encontrado.</p>
      )}
    </StyledProductsList>
  );
}
