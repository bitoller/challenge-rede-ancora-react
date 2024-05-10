import licensePlate from "../../assets/license-plate.svg";
import magnifyingGlass from "../../assets/magnifying-glass.svg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { StyledSearchScreen } from "./style";

export function SearchScreen() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Header text="Busque o produto que precisa" />
      <StyledSearchScreen>
        <Link to="/search_by_license_plate">
          <section className="search-button-license-plate">
            <p>Refinar a busca pela placa do carro</p>
            <div className="image-container">
              <img src={licensePlate} alt={"imagem de uma placa de carro"} />
            </div>
          </section>
        </Link>
        <Link to="/search_by_code">
          <section className="search-button-name">
            <p>Buscar pelo nome ou código do produto</p>
            <div className="image-container">
              <img src={magnifyingGlass} alt={"imagem de uma lupa"} />
            </div>
          </section>
        </Link>
      </StyledSearchScreen>
      <Footer />
    </>
  );
}
