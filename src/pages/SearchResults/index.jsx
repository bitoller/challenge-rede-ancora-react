import logo from "../../assets/logo.png";
import { Footer } from "../../components/Footer";
import { PlateModal } from "../../components/PlateModal";
import { ProductsList } from "../../components/productsList";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { StyledSearchResults } from "./style";

export function SearchResults() {
  const [modal, setModal] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState();
  const [productsCatalog, setProductsCatalog] = useState([]);
  const lastSearch = localStorage.getItem("lastSearch");

  const submitForm = (vehicleResult) => {
    setVehicleInfo(vehicleResult);
    localStorage.setItem("licensePlate", vehicleInfo.plate);
    setModal(false);
  };

  const search = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (!form.productInput.value) {
      toast.warn("Por favor, insira o nome do produto");
      return;
    }

    localStorage.setItem("searchResult", null);
    localStorage.setItem("lastSearch", null);
    const storedPlate = localStorage.getItem("licensePlate");

    if (storedPlate) {
      axios
        .post(
          "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
          {
            veiculoFiltro: {
              veiculoPlaca: storedPlate,
            },
            nomeProduto: form.productInput.value,
            superbusca: form.productInput.value,
            pagina: 0,
            itensPorPagina: 100,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          localStorage.setItem("searchResult", JSON.stringify(response.data));
          localStorage.setItem("lastSearch", form.productInput.value);
          setProductsCatalog(response.data.pageResult.data);
        });
      /* TODO: ao adicionar placa na pagina de resultado, guardar o valor da placa
      e fazer uma pesquisa entre a placa e os itens disponiveis pra esse carro */
      /* TODO: se tiver uma placa, n aparecer todos os resultados, independente se
      n tiver feito pesquisa, aparecer primeiros itens da lista equivalentes com
      a placa */
      /* TODO: primeira colocacao de placa da o erro de placa n encontrada mas
      mesmo assim altera a placa */
      /* TODO: as vezes a pesquisa n funciona e retorna todos os itens mesmo assim */
      /* TODO: reutilizar o post de baixo talvez e diminuir */
    }

    axios
      .post(
        "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
        {
          nomeProduto: form.productInput.value,
          superbusca: form.productInput.value,
          pagina: 0,
          itensPorPagina: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("searchResult", JSON.stringify(response.data));
        localStorage.setItem("lastSearch", form.productInput.value);
        setProductsCatalog(response.data.pageResult.data);
      });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <StyledSearchResults>
        <section className="section-menu">
          <img src={logo} alt={"logo rede ancora"} />
          <div className="plate-modal">
            {vehicleInfo && (
              <p className="plate-modal-text">
                Toque abaixo para trocar a placa
              </p>
            )}
            <div
              onClick={() => setModal(true)}
              id="plateInput"
              className="vehicle-info"
            >
              <p>
                {vehicleInfo
                  ? `Veículo | Placa ${vehicleInfo.plate} ${vehicleInfo.brand} - ${vehicleInfo.model} - ${vehicleInfo.version} - ${vehicleInfo.engine} - ${vehicleInfo.gas} - ${vehicleInfo.gearbox} - ${vehicleInfo.year}`
                  : "Toque aqui para adicionar uma placa"}
              </p>
            </div>
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
          <form className="search-input-product" onSubmit={search}>
            <input
              type="text"
              name="productInput"
              placeholder="Digite o nome / código do produto"
            />
            <input type="submit" value="Pesquisar" id="searchResultBtn" />
          </form>
          <p>Você pesquisou por: {lastSearch}</p>
          <div id="productList" className="product-list">
            <ProductsList productsCatalog={productsCatalog} />
          </div>
        </section>
      </StyledSearchResults>
      <Footer showBackButton showFinishButton />
      {modal ? (
        <PlateModal onSubmit={submitForm} onCloseModal={closeModal} />
      ) : null}
    </>
    /* TODO: fazer cards clicaveis, ao clicar abrir o treco no canto (modal div), 
      ao abrir mostrar produto */
    /* TODO: fazer botao de adicionar ao carrinho funcional */
    /* TODO: botao de cancelar fechar o modal */
    /* TODO: ao clicar nas li no canto esquerdo, filtrar por produtos,
      se houver placa filtra por produtos relevantes,
      se n, filtra por todos com aquele nome */
  );
}
