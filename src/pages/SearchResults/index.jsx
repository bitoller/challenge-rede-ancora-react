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
  const [totalPrice, setTotalPrice] = useState(0);
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
          if (response.status == 204) {
            setProductsCatalog(null);
          }

          for (
            let index = 0;
            index < response.data.pageResult.data.length;
            index++
          ) {
            const randomPrice = (Math.random() * 800).toFixed(2);
            const newProduct = {
              ...response.data.pageResult.data[index],
              price: randomPrice,
            };
            response.data.pageResult.data[index] = newProduct;
          }

          return response.data;
        })
        .then((response) => {
          localStorage.setItem("searchResult", JSON.stringify(response));
          localStorage.setItem("lastSearch", productName);
          setProductsCatalog(response.pageResult.data);
        });
    } catch (error) {
      toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const addCart = (product) => {
    if (product) {
      setCart([...cart, product]);
      localStorage.setItem("itemsInCart", JSON.stringify([...cart, product]));
      toast.success(`${product.nomeProduto} foi adicionado ao carrinho`);
    } else {
      toast.error("Produto não encontrado");
    }
  };

  const cartLength = () => {
    return cart.length;
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + parseFloat(curr.price),
      0
    );
    setTotalPrice(totalPrice);
  }, [cart]);

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
            <ProductsList productsCatalog={productsCatalog} product={addCart} />
          </div>
        </section>
      </StyledSearchResults>
      <Footer
        showFooterCart
        showBackButton
        showFinishButton
        totalPrice={totalPrice}
        cartLength={() => cartLength()}
      />
      {modal ? (
        <PlateModal onSubmit={submitForm} onCloseModal={closeModal} />
      ) : null}
    </>
  );
}

/* TODO: fazer cards clicaveis, ao clicar abrir o treco no canto (modal div), 
      ao abrir mostrar produto. ainda faremos isso? acho desnecessario. */
