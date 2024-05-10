import styled from "styled-components";

export const StyledProductsList = styled.div`
  height: 100%;

  ul {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    height: 100%;
    gap: 30px;
    justify-items: center;
    justify-content: space-evenly;
    padding: 10px 10px 10px 10px;
    overflow-y: scroll;
  }
`;
