import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";
import { StyledSearchByCode } from "./style";

export function SearchByCode() {
  return (
    <>
      <Header text="Pesquise pelo nome ou código do produto" />
      <StyledSearchByCode>
        <section className="search-field-code">
          <input
            type="text"
            id="produtoInput"
            className="search-input"
            placeholder="Digite o nome ou código do produto"
          />
        </section>
        <SearchButton />
      </StyledSearchByCode>
      <Footer />
    </>
  );
}
