import styled from "styled-components";

export const StyledItemsInCartList = styled.div`
  height: 100%;

  ul {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1.875rem;
    justify-items: center;
    justify-content: space-evenly;
    padding: 0.625rem 0.625rem 0.625rem 0.625rem;
    overflow-y: scroll;
    align-content: flex-start;
  }

  ul::-webkit-scrollbar {
    background: transparent;
    width: 0.1875rem;
    display: none;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }

  ul::-webkit-scrollbar-track {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  .empty-cart {
    text-align: center;
    padding: 1.875rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media (orientation: portrait) {
    ul {
      justify-content: center;
    }
  }
`;
