import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Footer } from "../../components/Footer";
import { PlateModal } from "../../components/PlateModal";
import { ProductsList } from "../../components/ProductsList";
import { SearchProductsInput } from "../../components/SearchProductsInput";
import { SearchButton } from "../../components/SearchButton";
import { AddToCartModal } from "../../components/AddToCartModal";
import axios from "axios";
import { toast } from "react-toastify";
import { StyledSearchResults } from "./style";

export function SearchResults() {
  const [modal, setModal] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [productsCatalog, setProductsCatalog] = useState([]);
  const [plateValue, setPlateValue] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputValue, setInputValue] = useState(""); // Estado para o valor do input
  const lastSearch = localStorage.getItem("lastSearch");

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem("searchResult"));
    const vehicleResult = JSON.parse(localStorage.getItem("vehicleInfo"));
    setProductsCatalog(searchResult?.pageResult?.data || []);
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
      setProductsCatalog([]);
      setVehicleInfo(null);
    }
    setModal(false);
  };

  const search = async (event, productName = null) => {
    if (event) event.preventDefault();

    // Se productName não estiver definido, usa o inputValue
    if (!productName) {
      productName = inputValue.trim(); // Aqui, usa o inputValue diretamente
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
      const response = await axios.post(
        "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 204) {
        setProductsCatalog([]);
      } else {
        const updatedProducts = response.data.pageResult.data.map(
          (product) => ({
            ...product,
            price: (Math.random() * 800).toFixed(2), // Adiciona um preço aleatório
            count: 0,
          })
        );

        localStorage.setItem("searchResult", JSON.stringify(response.data));
        localStorage.setItem("lastSearch", productName);
        setProductsCatalog(updatedProducts);
      }
    } catch (error) {
      toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleAddToCart = (product, quantity) => {
    if (product) {
      const foundIndex = cart.findIndex((x) => x.id === product.id);
      if (foundIndex !== -1) {
        const products = cart.map((c, i) => {
          if (i === foundIndex) {
            c.count += quantity;
          }
          return c;
        });
        setCart(products);
        localStorage.setItem("itemsInCart", JSON.stringify(products));
      } else {
        product.count = quantity;
        setCart((prevCart) => [...prevCart, product]);
        localStorage.setItem("itemsInCart", JSON.stringify([...cart, product]));
      }
      toast.success(`${product.nomeProduto} foi adicionado ao carrinho`);
    } else {
      toast.error("Produto não encontrado");
    }
  };

  const openAddToCartModal = (product) => {
    setSelectedProduct(product);
    setShowAddToCartModal(true);
  };

  const cartLength = () => {
    return cart.reduce((acc, item) => acc + item.count, 0);
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("itemsInCart"));
    if (localCart) {
      setCart(localCart);
    }

    const total = cart.reduce(
      (acc, curr) => acc + parseFloat(curr.price) * curr.count,
      0
    );
    setTotalPrice(total);
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
                  ? `Placa: ${vehicleInfo.plate.toUpperCase()} | Veículo: ${
                      vehicleInfo.brand
                    } - ${vehicleInfo.model} - ${vehicleInfo.version} - ${
                      vehicleInfo.engine
                    } - ${vehicleInfo.gas} - ${vehicleInfo.gearbox} - ${
                      vehicleInfo.year
                    }`
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
          <div className="search-field-results">
            <form className="search-input-product" onSubmit={search}>
              <div className="input-container">
                <SearchProductsInput
                  input={inputValue}
                  setInput={setInputValue}
                />
                <SearchButton type="submit" />
              </div>
            </form>
          </div>
          <p>
            Você pesquisou por: <span>{lastSearch}</span>
          </p>
          <div id="productList" className="product-list">
            <ProductsList
              productsCatalog={productsCatalog}
              product={openAddToCartModal}
            />
          </div>
        </section>
      </StyledSearchResults>
      <Footer
        showFooterCart
        showBackButton
        showFinishButton
        totalPrice={totalPrice}
        cartLength={cartLength}
      />
      {modal && <PlateModal onSubmit={submitForm} onCloseModal={closeModal} />}
      <AddToCartModal
        show={showAddToCartModal}
        onClose={() => setShowAddToCartModal(false)}
        onAddToCart={handleAddToCart}
        product={selectedProduct}
      />
    </>
  );
}
