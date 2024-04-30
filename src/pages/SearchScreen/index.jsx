import { Header } from "../../components/Header";
import licensePlate from "../../assets/license-plate.svg";
import magnifyingGlass from "../../assets/magnifying-glass.svg";
import { Footer } from "../../components/Footer";
import { StyledSearchScreen } from "./style";

export function SearchScreen() {
  return (
    <>
      <Header text="Busque o produto que precisa" />
      <StyledSearchScreen>
        <section class="search-button-license-plate">
          <p>Refinar a busca pela placa do carro</p>
          <div class="image-container">
            <img src={licensePlate} alt="imagem de uma placa de carro" />
          </div>
        </section>
        <section class="search-button-name">
          <p>Buscar pelo nome ou código do produto</p>
          <div class="image-container">
            <img src={magnifyingGlass} alt="imagem de uma lupa" />
          </div>
        </section>
      </StyledSearchScreen>
      <Footer />
    </>
  );
}
