import styled from "styled-components";

export const StyledPlateModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 23.063rem;
  height: auto;
  border-radius: 4px;

  .search-plate-error {
    display: none;
    color: rgb(189, 34, 34);
  }

  .search-plate-error.error {
    display: block;
  }

  .modal {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr auto;
    justify-items: end;
    justify-content: center;
    align-items: center;
  }

  .form-modal > button {
    margin-left: 90px;
    margin-right: 40px;
  }

  .plate-modal > p {
    font-weight: 600;
    text-align: center;
  }
`;
