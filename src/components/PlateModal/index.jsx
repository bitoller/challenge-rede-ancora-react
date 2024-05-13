import licensePlate from "../../assets/licensePlateModal.svg";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { StyledPlateModal } from "./style";

export function PlateModal({ onSubmit, onCloseModal }) {
  const [hasError, setHasError] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.plate.value.trim() === "") {
      setHasError(true);
      return;
    }

    localStorage.setItem("vehicleInfo", null);

    await axios
      .post(
        "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
        {
          veiculoFiltro: {
            veiculoPlaca: form.plate.value,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 204) {
          localStorage.setItem("vehicleInfo", null);
          localStorage.setItem("licensePlate", null);
          toast.warn(
            "Não encontramos a placa ou não encontramos produtos para esse veículo."
          );
        }
        return response.data;
      })
      .then((response) => {
        if (response && response.pageResult && response.pageResult.vehicle) {
          const vehicle = {
            plate: form.plate.value,
            brand: response.pageResult.vehicle.montadora,
            model: response.pageResult.vehicle.modelo,
            version: response.pageResult.vehicle.versao,
            engine: response.pageResult.vehicle.motor,
            gas: response.pageResult.vehicle.combustivel,
            gearbox: response.pageResult.vehicle.cambio,
            year: response.pageResult.vehicle.anoModelo,
          };
          localStorage.setItem("vehicleInfo", JSON.stringify(vehicle));
          localStorage.setItem("licensePlate", JSON.stringify(vehicle.plate));
          onSubmit(vehicle);
        } else {
          onSubmit(null);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <StyledPlateModal role="dialog">
      <div className="modal">
        <h3>Digite sua placa</h3>
        <form onSubmit={submitForm}>
          <div className="input-container-icon">
            <input
              type="text"
              placeholder="Digite aqui sua placa"
              name="plate"
            />
            <img src={licensePlate} alt={"imagem de uma placa de carro"} />
          </div>
          {hasError && (
            <p className="search-plate-error error">
              Placa inválida. Por favor, insira uma placa válida.
            </p>
          )}
          <div className="modal-buttons-container">
            <button
              className="modal-button-close"
              type="button"
              onClick={onCloseModal}
            >
              Fechar
            </button>
            <button className="modal-button-confirm" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </StyledPlateModal>
  );
}
