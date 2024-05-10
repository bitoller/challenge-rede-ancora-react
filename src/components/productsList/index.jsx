import { ProductCard } from "../ProductCard";
import { StyledProductsList } from "./style";

export function ProductsList({ productsCatalog, productId }) {
  return (
    <StyledProductsList>
      {productsCatalog && productsCatalog.length > 0 ? (
        <ul>
          {productsCatalog.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              productId={productId}
              cartTotalMoney={cartTotalMoney}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </StyledProductsList>
  );
}
