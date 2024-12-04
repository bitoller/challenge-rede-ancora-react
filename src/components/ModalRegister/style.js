import styled from "styled-components";

export const StyledModalRegister = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: center;
  }

  .modal-content {
    background: white;
    padding: 1.25rem;
    border-radius: 0.5rem;
    width: 25rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .keyboard {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    .simple-keyboard {
      width: 100%;
      max-width: none;
    }

    .hg-button {
      font-size: 1rem;
      height: 2.5rem;
      padding: 0.625rem 0.313rem;
      margin: 0.188rem;
    }
  }

  .input {
    width: 100%;
    padding: 0.625rem;
    margin-bottom: 1.5rem;
    border: 0.063rem solid #ccc;
    border-radius: 0.25rem;
  }

  .submit-button {
    width: 100%;
    padding: 0.825rem;
    background: #007aff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    margin-top: 2rem;
  }

  .error {
    color: red;
    font-size: 1rem;
    margin-top: -1.1rem;
    margin-bottom: 1rem;
  }

  .close-button {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    font-size: 1.25rem;
    cursor: pointer;
  }

  .label {
    font-size: 1.2rem;
  }

  .success-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-size: 18px;
  }

  .success-modal .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }

  .success-modal .success-button {
    margin-top: 20px;
    padding: 10px 20px;
    background: #007aff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (orientation: portrait) {
    .keyboard {
      .hg-button {
        font-size: 1.5rem;
        height: 5rem;
        padding: 0.938rem 0.625rem;
        margin: 0.313rem;
      }
    }
  }
`;
