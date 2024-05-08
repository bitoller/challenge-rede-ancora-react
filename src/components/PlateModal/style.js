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
`;
