import carCheckIcon from "../../assets/carCheckIcon.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";
import { StyledSearchByLicensePlate } from "./style";

export function SearchByLicensePlate() {
  return (
    <>
      <Header text="Pesquise pela placa do seu veículo" />
      <StyledSearchByLicensePlate>
        {/* <h2>Pesquise pela placa do seu veículo</h2>
        <section>
          <input type="text" />
        </section>
        <button>Pesquisar</button> */}
        <section className="search-field">
          <div className="car-name-check">
            <a href="#" data-modal="open" className="license-plate-link">
              <img
                src={carCheckIcon}
                alt={"icone de um carro com sinal de positivo"}
              />
              <p id="placaInput">Selecione seu carro</p>
              <img src={rightArrow} alt={"seta para direita"} />
            </a>
          </div>
          <input
            type="text"
            id="produtoInput"
            className="search-input"
            placeholder="Digite a placa do seu veículo"
          />
        </section>
        <SearchButton />
      </StyledSearchByLicensePlate>
      <Footer showBackButton showFinishButton />
    </>
  );
}
