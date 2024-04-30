import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledSearchByLicensePlate } from "./style";

export function SearchByLicensePlate() {
  return (
    <>
      <Header text="Digite a placa do seu veículo" />
      <StyledSearchByLicensePlate>
        <h2>Pesquise pela placa do seu veículo</h2>
        <section>
          <input type="text" />
        </section>
        <button>Pesquisar</button>
      </StyledSearchByLicensePlate>
      <Footer />
    </>
  );
}
