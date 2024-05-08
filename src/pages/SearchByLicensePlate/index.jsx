import carCheckIcon from "../../assets/carCheckIcon.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";
import { StyledSearchByLicensePlate } from "./style";
import { createContext, useContext } from "react";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlateModal } from "../../components/PlateModal";
import { useNavigate } from "react-router-dom";

export function SearchByLicensePlate() {
  const [jwtToken, setJwtToken] = useState("");
  const [plate, setPlate] = useState("");
  const [modal, setModal] = useState(false);
  const [selectCarInfo, setSelectCarInfo] = useState("Selecione seu carro");
  const [vehicleInfo, setVehicleInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
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
      })
      .catch((error) => console.error("Error:", error));
  };

  const search = async (event) => {
    if (!vehicleInfo.plate) {
      alert("Por favor, insira a placa antes de pesquisar o produto.");
      return;
    }

    event.preventDefault();
    const form = event.target;

    if (!form.searchProductInput.value) {
      alert("Please insert the product name.");
      return;
    }

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
        localStorage.setItem("searchResult", JSON.stringify(response.data));
        localStorage.setItem("lastSearch", form.searchProductInput.value);
        navigate("/search_results");
      });
  };

  const submitForm = (vehicleResult) => {
    setVehicleInfo(vehicleResult);
    setSelectCarInfo(
      `Seu Veiculo: ${vehicleResult.plate} ${vehicleResult.brand} - ${vehicleResult.model} - ${vehicleResult.version} - ${vehicleResult.engine} - ${vehicleResult.gas} - ${vehicleResult.gearbox} - ${vehicleResult.year}`
    );
    setModal(false);
  };

  return (
    <>
      <Header text="Pesquise pela placa do seu veículo" />
      <StyledSearchByLicensePlate>
        <section className="search-field">
          <div className="car-name-check">
            <div onClick={() => setModal(true)} className="license-plate-link">
              <img
                src={carCheckIcon}
                alt={"icone de um carro com sinal de positivo"}
              />
              <p id="placaInput">{selectCarInfo}</p>
              <img src={rightArrow} alt={"seta para direita"} />
            </div>
          </div>
          <form onSubmit={search}>
            <input
              type="text"
              name="searchProductInput"
              className="search-input"
              placeholder="Busque pela peça ou produto"
            />
            <SearchButton onClick={search} type="submit" />
          </form>
        </section>
      </StyledSearchByLicensePlate>
      <Footer showBackButton showFinishButton />
      {modal ? <PlateModal onSubmit={submitForm} /> : null}
    </>
  );
}
