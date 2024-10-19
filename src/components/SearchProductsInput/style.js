import styled from "styled-components"; // Certifique-se de que isso está presente

// Estilo do input de busca
export const StyledSearchProductsInput = styled.input`
  width: 150%; // Largura do input
  outline: none;
  font-size: 1.3rem; // Aumentando o tamanho da fonte para melhor legibilidade
  color: var(--color-gray-4);
  border: 0;
  padding: 0 20px 0 10px;
`;

// Estilo do contêiner do teclado
export const StyledKeyboardContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .simple-keyboard {
    width: 100%;
    max-width: none;
  }

  /* Estilo para aumentar o tamanho das teclas */
  .hg-button {
    font-size: 1.5rem; /* Aumenta o tamanho do texto das teclas */
    height: 80px; /* Aumenta a altura das teclas */
    padding: 15px 10px; /* Aumenta o espaçamento interno das teclas */
    margin: 5px; /* Aumenta o espaço entre as teclas */
  }
`;
