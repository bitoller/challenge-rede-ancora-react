import { StyledSearchProductsInput } from "./style";

export function SearchProductsInput() {
  return (
    <StyledSearchProductsInput
      type="text"
      name="searchProductInput"
      className="search-input"
      placeholder="Digite o nome ou código do produto"
    ></StyledSearchProductsInput>
  );
}
