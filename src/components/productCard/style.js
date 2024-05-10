import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: grid;
  grid-template-rows: 215px 2fr 70px 2fr;
  align-items: center;
  width: 330px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 20px;
  background-color: white;
  padding: 0 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 137px;
    width: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;
