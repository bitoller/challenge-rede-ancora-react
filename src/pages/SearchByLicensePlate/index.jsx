import carCheckIcon from "../../assets/carCheckIcon.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchProductsInput } from "../../components/SearchProductsInput";
import { SearchButton } from "../../components/SearchButton";
import { PlateModal } from "../../components/PlateModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { StyledSearchByLicensePlate } from "./style";

export function SearchByLicensePlate() {
  const [jwtToken, setJwtToken] = useState("");
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(true);
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

    if (!vehicleInfo.plate) {
      toast.warn("Por favor, insira a placa antes de pesquisar o produto.");
      return;
    }

    if (!input) {
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
          nomeProduto: input,
          superbusca: input,
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
            count: 0,
          };
          response.data.pageResult.data[index] = newProduct;
        }

        localStorage.setItem("searchResult", JSON.stringify(response.data));
        localStorage.setItem("lastSearch", input);
        navigate("/search_results");
      })
      .catch((error) => {
        toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
      });
  };

  const submitForm = (vehicleResult) => {
    if (!vehicleResult || !vehicleResult.plate) {
      toast.warn("Por favor, insira a placa antes de pesquisar o produto.");
      return;
    }

    setVehicleInfo(vehicleResult);
    setSelectCarInfo(
      `Placa: ${vehicleResult.plate.toUpperCase()} | Veículo: ${
        vehicleResult.brand
      } - ${vehicleResult.model} - ${vehicleResult.version} - ${
        vehicleResult.engine
      } - ${vehicleResult.gas} - ${vehicleResult.gearbox} - ${
        vehicleResult.year
      }`
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
              <img src={rightArrow} alt={"ícone de uma seta para a direita"} />
            </div>
          </div>
          <form onSubmit={search}>
            <div className="input-container">
              <SearchProductsInput input={input} setInput={setInput} />
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
