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
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [productsCatalog, setProductsCatalog] = useState([]);
  const [plateValue, setPlateValue] = useState(null);
  const lastSearch = localStorage.getItem("lastSearch");

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem("searchResult"));
    const vehicleResult = JSON.parse(localStorage.getItem("vehicleInfo"));
    setProductsCatalog(searchResult.pageResult.data);
    setVehicleInfo(vehicleResult);
    const storedPlate = JSON.parse(localStorage.getItem("licensePlate"));

    if (storedPlate) {
      setPlateValue(storedPlate);
    }
  }, []);

  const submitForm = async (vehicleResult) => {
    if (vehicleResult) {
      setVehicleInfo(vehicleResult);
      localStorage.setItem("licensePlate", JSON.stringify(vehicleResult.plate));
      await search(null, lastSearch);
    } else {
      setProductsCatalog(null);
      setVehicleInfo(null);
    }
    setModal(false);
  };

  const search = async (event, productName = null) => {
    if (event) event.preventDefault();

    const form = event ? event.target : null;

    if (!productName) {
      productName = form ? form.productInput.value : lastSearch;
    }

    if (!productName) {
      toast.warn("Por favor, insira o nome do produto");
      return;
    }

    const requestBody = {
      nomeProduto: productName,
      superbusca: productName,
      pagina: 0,
      itensPorPagina: 100,
    };

    const storedPlate = JSON.parse(localStorage.getItem("licensePlate"));

    if (storedPlate) {
      setPlateValue(storedPlate);
      requestBody.veiculoFiltro = { veiculoPlaca: storedPlate };
    }

    try {
      await axios
        .post(
          "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
          requestBody,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("oi", response);
          if (response.status == 204) {
            setProductsCatalog(null);
          }
          return response.data;
        })
        .then((response) => {
          localStorage.setItem("searchResult", JSON.stringify(response));
          localStorage.setItem("lastSearch", productName);
          setProductsCatalog(response.pageResult.data);
        });
    } catch (error) {
      console.error("Error searching products:", error);
      toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <StyledSearchResults>
        <aside className="section-menu">
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
            <li
              className="search-item"
              onClick={(e) => search(e, "Amortecedor")}
            >
              Amortecedor
            </li>
            <li className="search-item" onClick={(e) => search(e, "Suspensão")}>
              Suspensão
            </li>
            <li className="search-item" onClick={(e) => search(e, "Freio")}>
              Freio
            </li>
            <li className="search-item" onClick={(e) => search(e, "Motor")}>
              Motor
            </li>
            <li className="search-item" onClick={(e) => search(e, "Direção")}>
              Direção
            </li>
            <li
              className="search-item"
              onClick={(e) => search(e, "Filtro de ar")}
            >
              Filtro de ar
            </li>
            <li
              className="search-item"
              onClick={(e) => search(e, "Filtro de óleo")}
            >
              Filtro de óleo
            </li>
            <li
              className="search-item"
              onClick={(e) => search(e, "Transmissão")}
            >
              Transmissão
            </li>
            <li
              className="search-item"
              onClick={(e) => search(e, "Acessórios")}
            >
              Acessórios
            </li>
          </ul>
        </aside>
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
    /* TODO: fazer preco random */
    /* TODO: fazer cards clicaveis, ao clicar abrir o treco no canto (modal div), 
      ao abrir mostrar produto */
    /* TODO: fazer botao de adicionar ao carrinho funcional */
    /* TODO: botao de cancelar fechar o modal */
    /* TODO: ao clicar nas li no canto esquerdo, filtrar por produtos,
      se houver placa filtra por produtos relevantes,
      se n, filtra por todos com aquele nome */
    /* TODO: criar botao de adicionar no carrinho (pegar objeto do carrinho, objeto do carrinho no local pra obj, obj no carrinho concatena um novo dentro do carrinho e joga no localstorage),
      summary mostrar os objetos, 
      criar um componente pro carrinho no footer, 
       criar um array de produtos,
       verificacao de id igual para fazer o + e -,
      local storage no footer */
  );
}
