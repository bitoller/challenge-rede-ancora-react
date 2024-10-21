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
    padding: 20px;
    border-radius: 8px;
    width: 400px;
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
      height: 40px;
      padding: 10px 5px;
      margin: 3px;
    }
  }

  .input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .error {
    color: red;
    font-size: 12px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
  }

  @media (orientation: portrait) {
    .keyboard {
      .hg-button {
        font-size: 1.5rem;
        height: 80px;
        padding: 15px 10px;
        margin: 5px;
      }
    }
  }
`;
