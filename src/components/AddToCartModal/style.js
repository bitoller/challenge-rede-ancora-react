import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
    max-width: 80%;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .modal-title {
    margin: 0;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .product-image {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  .product-info {
    margin-bottom: 10px;
  }

  .quantity-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .quantity-button {
    padding: 5px 10px;
    margin: 0 5px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #f8f9fa;
    cursor: pointer;
  }

  .quantity-display {
    font-size: 1rem;
  }

  .modal-footer {
    display: flex;
    justify-content: space-between;
  }

  .close-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.625rem 1.25rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }

  .cancel-button,
  .add-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cancel-button {
    background-color: #6c757d;
    color: white;
  }

  .add-button {
    background-color: #007bff;
    color: white;
  }
`;
