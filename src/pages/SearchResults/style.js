import styled from "styled-components";

export const StyledSearchResults = styled.main`
  color: var(--color-gray-8);
  display: flex;
  align-items: center;
  height: calc(100vh - 7.5rem);

  .vehicle-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;
    padding: 0.625rem;
    border: 1px solid var(--color-gray-10);
    font-family: var(--font-family-1);
    font-weight: 500;
    cursor: pointer;
  }

  .vehicle-info > p {
    font-size: 1.0625rem;
    line-height: 1.25rem;
    text-align: center;
  }

  .section-menu {
    width: 20%;
    height: calc(100vh - 7.5rem);
    background-color: var(--color-primary);
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
  }

  .section-menu > img {
    width: 30%;
    padding: 0.3125rem 0rem 0.3125rem 0rem;
  }

  .plate-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;
  }

  .plate-modal-text {
    font-weight: 700;
  }

  .aside-menu {
    width: 80%;
    overflow-y: scroll;
  }

  .aside-menu::-webkit-scrollbar {
    background: transparent;
    width: 0.0625rem;
  }

  .aside-menu::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--color-primary);
  }

  .aside-menu::-webkit-scrollbar-track {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  .aside-menu > li {
    width: 100%;
    color: var(--color-gray-10);
    font-size: 1.25rem;
    font-weight: 500;
    border-bottom: 2px solid var(--color-gray-10);
    padding: 0.9375rem 0rem 0.9375rem 0rem;
    cursor: pointer;
  }

  .container-result {
    width: 80%;
    height: 100%;
    color: black;
  }

  .search-field-results {
    display: flex;
    width: 100%;
    height: 7.5rem;
    background-color: var(--color-gray-9);
    justify-content: center;
    align-items: center;
  }

  .search-input-product {
    height: 3.75rem;
    width: 50%;
  }

  .input-container {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    border: 2px solid var(--color-gray-3);
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4.6875rem;
    padding: 0rem 0.625rem 0rem 0.625rem;
  }

  .container-result > p {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: var(--font-family-1);
    color: var(--color-primary);
    text-align: center;
    padding: 0.9375rem 0rem 0.9375rem 0rem;
  }

  .container-result > p > span {
    font-size: 1.25rem;
    font-family: var(--font-family-1);
    font-weight: 700;
  }

  .product-list {
    height: calc(100% - 7.5rem - 3.8281rem);
  }
  .modal {
    position: fixed; /* Keep the modal above everything else */
    z-index: 1; /* Specify a stack order in case of overlapping content */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if modal content overflows */
    background-color: rgba(0, 0, 0, 0.4); /* Transparent black background */
  }

  .modal-content {
    background-color: var(--color-gray-10); /* Modal content background color */
    margin: 15% auto; /* Center the modal */
    padding: 20px; /* Inner padding */
    border: 1px solid var(--color-gray-3); /* Modal border */
    width: 80%; /* Modal width */
    border-radius: 5px; /* Rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--color-gray-3); /* Divider line */
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--color-gray-8);
  }

  .modal-close {
    color: var(--color-gray-8); /* Close button text color */
    font-size: 2.1875rem; /* Large font size for close icon */
    cursor: pointer;
  }

  .modal-close:hover,
  .modal-close:focus {
    color: var(--color-primary); /* Change color on hover/focus */
    text-decoration: underline; /* Add underline on hover/focus */
  }

  .modal-body {
    padding: 16px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    border-top: 1px solid var(--color-gray-3); /* Divider line */
  }

  .modal-button {
    padding: 8px 16px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }

  .modal-button:hover {
    background-color: var(--color-gray-3); /* Button hover background */
  }

  .modal-button:active {
    background-color: var(--color-gray-5); /* Button pressed background */
  }
`;
