import licensePlate from "../../assets/licensePlateModal.svg";
import "react-simple-keyboard/build/css/index.css";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import { StyledPlateModal, StyledKeyboardContainer } from "./style";

export function PlateModal({ onSubmit, onCloseModal }) {
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [layoutName, setLayoutName] = useState("default");

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (inputValue.trim() === "") {
      setHasError(true);
      return;
    }

    localStorage.setItem("vehicleInfo", null);

    await axios
      .post(
        "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
        {
          veiculoFiltro: {
            veiculoPlaca: inputValue,
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
            plate: inputValue,
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

  const onKeyPress = (button) => {
    if (button === "{bksp}") {
      setInputValue(inputValue.slice(0, -1));
    } else if (
      button === "{shift}" ||
      button === "{symbols}" ||
      button === "{default}"
    ) {
      setLayoutName((prev) => (prev === "default" ? "symbols" : "default"));
    } else {
      setInputValue(inputValue + button);
    }
  };

  const keyboardLayout = {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "z x c v b n m {bksp}",
      "{symbols} {space} @ .",
    ],
    symbols: [
      "~ ` | \\ _ ^ { } [ ]",
      "! @ # $ % & * ( )",
      "< > + = / ? : ; {bksp}",
      "{default} , . ' \"",
      "{space}",
    ],
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
              value={inputValue}
              onFocus={() => setKeyboardVisible(true)}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <img src={licensePlate} alt={"icone de uma placa de carro"} />
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
        {keyboardVisible && (
          <StyledKeyboardContainer>
            <Keyboard
              onKeyPress={onKeyPress}
              layout={keyboardLayout}
              layoutName={layoutName}
              display={{
                "{space}": "Espaço",
                "{bksp}": "⌫",
                "{symbols}": "?123",
                "{default}": "ABC",
              }}
            />
          </StyledKeyboardContainer>
        )}
      </div>
    </StyledPlateModal>
  );
}
