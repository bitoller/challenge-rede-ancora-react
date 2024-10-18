import styled from "styled-components";

export const StyledPlateModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #26323895;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    background-color: var(--color-gray-10);
    animation: modal 0.3s ease;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .modal > h3 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: var(--font-family-1);
    height: 3.125rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-5);
  }

  .search-plate-error {
    display: none;
    color: rgb(189, 34, 34);
  }

  .search-plate-error.error {
    display: block;
  }

  .modal > form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.125rem;
  }

  .input-container-icon {
    height: 100%;
    width: 40%;
    background-color: #ffffff;
    border: 2px solid var(--color-gray-3);
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4.6875rem;
    padding: 0rem 0.625rem 0rem 0.625rem;
  }

  .input-container-icon > input {
    width: 80%;
    height: 90%;
    outline: none;
    color: var(--color-gray-4);
    border: 0;
    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;
  }

  .input-container-icon > input::placeholder {
    text-transform: none;
  }

  .modal-buttons-container {
    display: flex;
    width: 100%;
    height: 6.25rem;
    justify-content: space-evenly;
    align-items: center;
  }

  .modal-button-close,
  .modal-button-confirm {
    height: 3.125rem;
    width: 12.5rem;
    font-weight: 700;
    font-size: 1.75rem;
    border-radius: 7px;
  }

  .modal-button-close {
    color: var(--color-primary);
    background-color: var(--color-gray-6);
  }

  .modal-button-confirm {
    color: var(--color-gray-10);
    background-color: var(--color-accent);
  }
`;
