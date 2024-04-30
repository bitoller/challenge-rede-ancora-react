import axios from "axios";

export const api = axios.create({
  baseUrl:
    "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao",
  timeout: 8000,
});
