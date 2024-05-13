import carCheckIcon from "../../assets/carCheckIcon.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchProductsInput } from "../../components/SearchProductsInput";
import { SearchButton } from "../../components/SearchButton";
import { PlateModal } from "../../components/PlateModal";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledSearchByLicensePlate } from "./style";

export function SearchByLicensePlate() {
  const [jwtToken, setJwtToken] = useState("");
  const [modal, setModal] = useState(false);
  const [selectCarInfo, setSelectCarInfo] = useState(
    "Selecione seu carro aqui"
  );
  const [vehicleInfo, setVehicleInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    localStorage.clear();

    axios
      .post(
        "https://sso-catalogo.redeancora.com.br/connect/token",
        {
          client_id: "65tvh6rvn4d7uer3hqqm2p8k2pvnm5wx",
          client_secret: "9Gt2dBRFTUgunSeRPqEFxwNgAfjNUPLP5EBvXKCn",
          grant_type: "client_credentials",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setJwtToken(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
      });
  };

  const search = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (!vehicleInfo.plate) {
      toast.warn("Por favor, insira a placa antes de pesquisar o produto.");
      return;
    }

    if (!form.searchProductInput.value) {
      toast.warn("Por favor, insira o nome do produto");
      return;
    }

    localStorage.setItem("searchResult", null);
    localStorage.setItem("lastSearch", null);

    axios
      .post(
        "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
        {
          veiculoFiltro: {
            veiculoPlaca: vehicleInfo.plate,
          },
          nomeProduto: form.searchProductInput.value,
          superbusca: form.searchProductInput.value,
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
        return response;
      })
      .then((response) => {
        localStorage.setItem("searchResult", JSON.stringify(response.data));
        localStorage.setItem("lastSearch", form.searchProductInput.value);
        navigate("/search_results");
      });
  };

  const submitForm = (vehicleResult) => {
    if (!vehicleResult || !vehicleResult.plate) {
      toast.warn("Por favor, insira a placa antes de pesquisar o produto.");
      return;
    }

    setVehicleInfo(vehicleResult);
    setSelectCarInfo(
      `Seu Veículo: ${vehicleResult.plate} ${vehicleResult.brand} - ${vehicleResult.model} - ${vehicleResult.version} - ${vehicleResult.engine} - ${vehicleResult.gas} - ${vehicleResult.gearbox} - ${vehicleResult.year}`
    );
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Header text="Busque o produto que precisa" />
      <StyledSearchByLicensePlate>
        <h2>Selecione seu carro e busque o produto que deseja</h2>
        <section className="search-field">
          <div className="car-name-check">
            <div onClick={() => setModal(true)} className="license-plate-link">
              <img
                src={carCheckIcon}
                alt={"ícone de um carro com sinal de positivo"}
              />
              <p id="plateInput">{selectCarInfo}</p>
              <img src={rightArrow} alt={"seta para direita"} />
            </div>
          </div>
          <form onSubmit={search}>
            <div className="input-container">
              <SearchProductsInput name="searchProductInput" />
              <SearchButton type="submit" />
            </div>
          </form>
        </section>
      </StyledSearchByLicensePlate>
      <Footer showBackButton />
      {modal ? (
        <PlateModal onSubmit={submitForm} onCloseModal={closeModal} />
      ) : null}
    </>
  );
}
