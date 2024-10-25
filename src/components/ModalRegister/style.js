import styled from "styled-components";

export const StyledModalRegister = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

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
    margin-bottom: 0.625rem;
    border: 0.063rem solid #ccc;
    border-radius: 0.25rem;
  }

  .submit-button {
    width: 100%;
    padding: 0.625rem;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 0.25rem;
  }

  .error {
    color: red;
    font-size: 0.75rem;
  }

  .close-button {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    font-size: 1.25rem;
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
