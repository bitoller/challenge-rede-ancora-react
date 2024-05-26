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
      productName = form ? form.searchProductInput.value : lastSearch;
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
              count: 0,
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

  const handleAddToCart = (product, quantity) => {
    if (product) {
      let foundIndex = cart.findIndex((x) => x.id == product.id);
      if (foundIndex != -1) {
        const products = cart.map((c, i) => {
          if (i === foundIndex) {
            c.count += quantity;
          }
          return c;
        });
        setCart(products);
        localStorage.setItem("itemsInCart", JSON.stringify(cart));
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
    let productQty = 0;
    cart.forEach((item) => {
      productQty += item.count;
    });
    return productQty;
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("itemsInCart"));
    if (cart || localCart) {
      if (cart.length == 0 && localCart && localCart.length > 0) {
        setCart(localCart);
      }
      const total = cart.reduce(
        (acc, curr) => acc + parseFloat(curr.price) * curr.count,
        0
      );
      setTotalPrice(total);
    }
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
                <SearchProductsInput name="searchProductInput" />
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
        cartLength={() => cartLength()}
      />
      {modal ? (
        <PlateModal onSubmit={submitForm} onCloseModal={closeModal} />
      ) : null}
      <AddToCartModal
        show={showAddToCartModal}
        onClose={() => setShowAddToCartModal(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

/* TODO: se possivel descobrir um jeito de deixar os cards de produtos em um tamanho
onde nao quebre com textos grandes/pequenos mas alinhe tudo */
/* TODO: no modal para adicionar no carrinho ao clicar nos cards de produtos,
arrumar texto vazando pra fora da tela quando o produto tem muito texto */
