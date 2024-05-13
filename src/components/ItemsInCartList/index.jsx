import { ItemInCartCard } from "../ItemInCartCard";
import { StyledItemsInCartList } from "./style";

export function ItemsInCartList({ itemsInCart }) {
  return (
    <StyledItemsInCartList>
      {itemsInCart && itemsInCart.length > 0 ? (
        <ul>
          {itemsInCart.map((item) => (
            <ItemInCartCard product={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p className="empty-cart">Seu carrinho está vazio.</p>
      )}
    </StyledItemsInCartList>
  );
}
