import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledSearchByCode } from "./style";

export function SearchByCode() {
  return (
    <>
      <Header text="Busque o produto que precisa" />
      <StyledSearchByCode>
        <h2>Pesquise pelo nome ou código do produto</h2>
        <section>
          <input type="text" />
        </section>
        <button>Pesquisar</button>
      </StyledSearchByCode>
      <Footer />
    </>
  );
}
