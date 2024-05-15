import { ItemInCartCard } from "../ItemInCartCard";
import { StyledItemsInCartList } from "./style";

export function ItemsInCartList({ itemsInCart, onUpdateCart }) {
  return (
    <StyledItemsInCartList>
      {itemsInCart && itemsInCart.length > 0 ? (
        <ul>
          {itemsInCart.map((item, index) => (
            <ItemInCartCard
              product={item}
              key={index}
              onUpdateCart={onUpdateCart}
            />
          ))}
        </ul>
      ) : (
        <p className="empty-cart">Seu carrinho está vazio.</p>
      )}
    </StyledItemsInCartList>
  );
}
