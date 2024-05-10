import styled from "styled-components";

export const StyledSearchResults = styled.main`
  height: 100vh;
  color: var(--color-gray-8);
  max-height: calc(100vh - 0px - 120px);
  display: flex;
  align-items: center;

  .vehicle-info p {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .vehicle-info p:last-child {
    line-height: 30px;
  }

  .plate-modal-text.inactive {
    display: none;
  }

  .plate-modal > p {
    font-weight: 600;
    text-align: center;
  }

  #plateInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 110px;
    border: 1px solid var(--color-gray-10);
    font-family: var(--font-family-1);
    font-weight: 500;
    cursor: pointer;
  }

  #backButtonPlate {
    width: 200px;
    height: 50px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 7px;
    color: var(--color-gray-10);
    background-color: var(--color-primary);
    cursor: pointer;
  }

  .section-menu {
    width: 22%;
    height: 100%;
    background-color: var(--color-primary);
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .section-menu img {
    padding: 5px 0 5px 0;
  }

  .aside-menu li {
    width: 300px;
    color: var(--color-gray-10);
    font-size: 28px;
    font-weight: 500;
    border-bottom: 2px solid var(--color-gray-10);
    padding-bottom: 15px;
    padding-top: 21px;
    cursor: pointer;
  }

  .container-result {
    width: 78%;
    height: 100%;
    color: black;
    left: 400px;
  }

  .container-result p {
    font-size: 20px;
    font-weight: 400;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
    padding: 15px 0 15px 0;
  }

  .container-result p span {
    font-size: 24px;
    font-weight: 600;
  }

  .search-input-product {
    width: 100%;
    background-color: var(--color-gray-10);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  form {
    height: 120px;
  }

  .form-modal {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr auto;
    justify-items: end;
    justify-content: center;
    align-items: center;
  }

  .form-modal button {
    margin-left: 90px;
    margin-right: 40px;
  }

  .search-input-product [type="text"] {
    width: 690px;
    height: 45px;
    border-radius: 25px;
    background-image: url(../assets/magnifyingGlassSearch.svg);
    background-repeat: no-repeat;
    background-position: 15px 7px;
    padding-left: 60px;
    font-size: 20px;
    color: var(--color-gray-4);
  }

  .search-input-product [type="submit"] {
    width: 200px;
    height: 50px;
    color: var(--color-gray-10);
    background-color: var(--color-accent);
    border: 0;
    border-radius: 15px;
    font-size: 24px;
    font-weight: 600;
  }

  .product-list {
    height: 84%;
  }

  .image-container-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 215px;
  }

  .image-container-product img {
    max-width: 100%;
    height: 215px;
    margin-top: 10px;
  }

  .product-list ul a {
    color: var(--color-primary);
  }

  .product-list ul li h3 {
    font-family: var(--font-family-3);
    width: 300px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-top: 15px;
    line-height: 22px;
    border-bottom: 2px dashed #c32401;
    padding-bottom: 15px;
  }

  .product-list ul li div p {
    color: var(--color-primary);
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #c32401;
  }

  .product-list ul li div p:first-child {
    margin-top: 0;
  }

  .product-list ul li div p:last-child {
    margin-bottom: -30px;
  }

  .product-list .price {
    font-family: var(--font-family-2);
    border-top: 2px dashed #c32401;
    font-weight: 600;
    padding-top: 20px;
  }

  .footer-shopping-cart {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: var(--color-primary);
    width: 100%;
    height: 120px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-items: center;
    align-items: center;
  }

  .footer-shopping-cart img {
    padding: 0 45px;
  }

  .footer-cart-items {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .footer-button {
    margin-left: 120px;
    display: flex;
    justify-content: space-around;
  }

  .footer-button a {
    margin-top: 15px;
    height: 65px;
    padding: 20px 70px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 7px;
  }

  .footer-cart-count {
    color: #fff;
    display: grid;
    grid-template-columns: 150px;
    grid-template-rows: 1fr 1fr;
    align-items: start;
    align-content: center;
    justify-content: start;
    justify-items: end;
    font-size: 24px;
    font-weight: 700;
  }

  .footer-cart-count img {
    grid-area: 1/1;
    margin-right: 50px;
    margin-top: 10px;
  }

  .footer-cart-count-item {
    margin: 10px 0;
    grid-area: 1/1;
    border-bottom: 3px solid white;
  }

  .footer-button-back {
    background-color: var(--color-gray-6);
    color: var(--color-primary);
  }

  .footer-button-finish {
    background-color: var(--color-accent);
    color: var(--color-gray-10);
  }

  /* CSS para o modal */
  .modal-item {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    display: grid;
    grid-template-rows: auto 1fr 3fr;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    background-color: #fefefe;
    position: fixed;
    right: 0;
    top: 0;
    padding: 60px 20px;
    border: 1px solid #888;
    width: 400px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }

  .modal-item-text {
    font-family: var(--font-family-3);
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
  }

  .modal-item-text p span {
    font-weight: 700;
  }

  .modal-item-text p:nth-child(odd) {
    color: #c32401;
  }

  .modal-item-text p:first-child {
    padding: 15px;
    border-bottom: 2px dashed #c32401;
    margin-top: 20px;
    color: #c32401;
  }

  .modal-item-text p:last-child {
    padding: 25px;
    border-top: 2px dashed #c32401;
    margin-top: 30px;
    color: #c32401;
  }

  .modal-item-text p span:nth-child(odd) {
    color: var(--color-primary);
    margin-top: 50px;
  }

  .modal-item-text p {
    font-size: 24px;
    margin-top: 30px;
    font-family: var(--font-family-3);
    line-height: 30px;
  }

  .modal-item-button {
    display: grid;
    grid-template-rows: auto auto;
    gap: 60px;
  }

  .modal-item-button button {
    width: 260px;
    height: 60px;
    border-radius: 7px;
    font-size: 20px;
    font-weight: 700;
  }

  #confirmAddToCartBtn {
    color: var(--color-gray-10);
    background-color: var(--color-primary);
  }
`;
