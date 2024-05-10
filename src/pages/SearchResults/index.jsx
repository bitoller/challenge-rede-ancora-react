import logo from "../../assets/logo.png";
import { Footer } from "../../components/Footer";
import { PlateModal } from "../../components/PlateModal";
import { ProductsList } from "../../components/ProductsList";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { StyledSearchResults } from "./style";

export function SearchResults() {
  const [modal, setModal] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [productsCatalog, setProductsCatalog] = useState([]);
  const [plateValue, setPlateValue] = useState(null);
  const [cart, setCart] = useState([]);
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

  const addCart = (id) => {
    /* const item = cart.find((product) => product.id == id); */

    /* if (item) {
      toast.warn(`${item.name} já foi adicionado no carrinho`);
      return;
    } */

    const product = productsCatalog.find((product) => product.id == id);

    if (product) {
      setCart([...cart, product]);
      localStorage.setItem("itemsInCart", JSON.stringify(product));
      toast.success(`${product.nomeProduto} foi adicionado ao carrinho`);
    } else {
      toast.error("Produto não encontrado");
    }
  };

  const cartLength = () => {
    return cart.length;
  };

  const cartTotalMoney = () => {
    const total = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    return total;
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
          <p>
            Você pesquisou por: <span>{lastSearch}</span>
          </p>
          <div id="productList" className="product-list">
            <ProductsList
              productsCatalog={productsCatalog}
              productId={addCart}
            />
          </div>
        </section>
      </StyledSearchResults>
      <Footer
        showFooterCart
        showBackButton
        showFinishButton
        cartTotalMoney={cartTotalMoney()}
        cartLength={() => cartLength()}
      />
      {modal ? (
        <PlateModal onSubmit={submitForm} onCloseModal={closeModal} />
      ) : null}
    </>
  );
}

/* TODO: fazer cards clicaveis, ao clicar abrir o treco no canto (modal div), 
      ao abrir mostrar produto, por conta de tempo n vai rolar */
/* TODO: fazer botao de adicionar ao carrinho funcional */
/* TODO: criar botao de adicionar no carrinho (pegar objeto do carrinho, objeto do carrinho no local pra obj, obj no carrinho concatena um novo dentro do carrinho e joga no localstorage),
      summary mostrar os objetos, 
       verificacao de id igual para fazer o + e -,
      local storage no footer */
