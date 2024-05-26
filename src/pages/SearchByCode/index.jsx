import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchProductsInput } from "../../components/SearchProductsInput";
import { SearchButton } from "../../components/SearchButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { StyledSearchByCode } from "./style";

export function SearchByCode() {
  const [jwtToken, setJwtToken] = useState("");
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
            count: 0,
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

  return (
    <>
      <Header text="Pesquise pelo nome ou código do produto" />
      <StyledSearchByCode>
        <h2>Digite abaixo o nome ou código do produto que precisa</h2>
        <section className="search-field-code">
          <form onSubmit={search}>
            <div className="input-container">
              <SearchProductsInput name="searchProductInput" />
              <SearchButton type="submit" />
            </div>
          </form>
        </section>
      </StyledSearchByCode>
      <Footer showBackButton />
    </>
  );
}
