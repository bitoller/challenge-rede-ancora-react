import styled from "styled-components";

export const StyledProductsList = styled.div`
  height: 100%;

  ul {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1.875rem;
    justify-items: center;
    justify-content: space-evenly;
    padding: 1.5625rem 0.625rem 1.5625rem 0.625rem;
    overflow-y: scroll;
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

  ul > li:hover {
    transform: scale(1.1);
    transition: 0.9s;
  }

  .no-product-found {
    text-align: center;
  }
`;
