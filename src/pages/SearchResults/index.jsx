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
  const [lastSearch, setLastSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem("searchResult"));
    const vehicleResult = JSON.parse(localStorage.getItem("vehicleInfo"));
    setProductsCatalog(searchResult?.pageResult.data || []);
    setVehicleInfo(vehicleResult);
    const storedPlate = JSON.parse(localStorage.getItem("licensePlate"));

    if (storedPlate) {
      setPlateValue(storedPlate);
    }

    const lastSearch = localStorage.getItem("lastSearch");
    setLastSearch(lastSearch || "");
  }, []);

  useEffect(() => {
    if (plateValue) {
      search(null, lastSearch);
    }
  }, [plateValue]);

  const submitForm = async (vehicleResult) => {
    if (vehicleResult) {
      setVehicleInfo(vehicleResult);
      localStorage.setItem("licensePlate", JSON.stringify(vehicleResult.plate));
      setPlateValue(vehicleResult.plate);
    } else {
      setProductsCatalog([]);
      setVehicleInfo(null);
    }
    setModal(false);
  };

  const search = async (event, productName) => {
    if (event) event.preventDefault();

    const productSearchName = productName || searchInput;

    if (!productSearchName) {
      toast.warn("Por favor, insira o nome do produto");
      return;
    }

    const requestBody = {
      nomeProduto: productSearchName,
      superbusca: productSearchName,
      pagina: 0,
      itensPorPagina: 100,
    };

    const storedPlate = JSON.parse(localStorage.getItem("licensePlate"));
    if (storedPlate) {
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
        return;
      }

      const productsWithPrice = response.data.pageResult.data.map(
        (product) => ({
          ...product,
          price: (Math.random() * (800 - 50) + 50).toFixed(2),
          count: 0,
        })
      );

      localStorage.setItem("searchResult", JSON.stringify(response.data));
      localStorage.setItem("lastSearch", productSearchName);
      setProductsCatalog(productsWithPrice);
      setLastSearch(productSearchName);
      setSearchInput("");
    } catch (error) {
      toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleAddToCart = (product, quantity) => {
    if (product) {
      let foundIndex = cart.findIndex((x) => x.id === product.id);
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
        setCart([...cart, product]);
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
    return cart.reduce((total, item) => total + item.count, 0);
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("itemsInCart"));
    if (cart.length === 0 && localCart && localCart.length > 0) {
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
            {[
              "Amortecedor",
              "Freio",
              "Filtro de ar",
              "Filtro de óleo",
              "Motor",
              "Suspensão",
              "Direção",
              "Transmissão",
              "Acessórios",
            ].map((item) => (
              <li
                key={item}
                className="search-item"
                onClick={(e) => search(e, item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <section className="container-result">
          <div className="search-field-results">
            <form className="search-input-product" onSubmit={search}>
              <div className="input-container">
                <SearchProductsInput
                  input={searchInput}
                  setInput={setSearchInput}
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
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}
