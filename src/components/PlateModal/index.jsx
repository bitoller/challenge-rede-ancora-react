import { api } from "../../services/api";
import axios from "axios";
import { StyledPlateModal } from "./style";

export function PlateModal({ onSubmit }) {
  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.target;
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
      .then((response) => response.data)
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
          onSubmit(vehicle);
        }
      });
  };
  return (
    <StyledPlateModal role="dialog">
      <h3>Digite sua placa</h3>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Digite aqui sua placa" name="plate" />
        <button className="modal-button-confirm" type="button">
          Voltar
        </button>
        <button className="modal-button-confirm" type="submit">
          Confirmar
        </button>
      </form>
    </StyledPlateModal>
  );
}
