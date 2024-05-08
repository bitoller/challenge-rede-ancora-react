import logo from "../../assets/logo.png";
import { Footer } from "../../components/Footer";
import { StyledSearchResults } from "./style";

export function SearchResults() {
  return (
    <>
      <StyledSearchResults>
        <section className="section-menu">
          <img src={logo} alt={"logo rede ancora"} />
          <div className="plate-modal">
            <p className="plate-modal-text">
              Toque abaixo para trocar ou remover a placa
            </p>
            <div
              data-modal="open"
              id="plateInput"
              className="vehicle-info"
            ></div>
          </div>
          <ul id="menu" className="aside-menu">
            <li className="search-item">Amortecedor</li>
            <li className="search-item">Suspensão</li>
            <li className="search-item">Freio</li>
            <li className="search-item">Motor</li>
            <li className="search-item">Direção</li>
            <li className="search-item">Filtro de ar</li>
            <li className="search-item">Filtro de óleo</li>
            <li className="search-item">Transmissão</li>
            <li className="search-item">Acessórios</li>
          </ul>
        </section>
        <section className="container-result">
          <form className="search-input-product">
            <input
              type="text"
              id="produtoInput"
              placeholder="Digite o nome / código do produto"
            />
            <input type="submit" value="Pesquisar" id="searchResultBtn" />
          </form>
          <p>
            Você pesquisou por: <span id="searchText"></span>
          </p>
          <div id="productList" className="product-list"></div>
        </section>
      </StyledSearchResults>
      <Footer showBackButton showFinishButton />
    </>
  );
}
