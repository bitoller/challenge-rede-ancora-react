import footerDots from "../../assets/footer-dots.svg";
import footerDotsRight from "../../assets/footer-dots-right.svg";
import { StyledFooter } from "./style";

export function Footer() {
  return (
    <StyledFooter>
      <img src={footerDots} alt="ícone com vários pontos" />
      <button>Voltar</button>
      <button>Finalizar</button>
      <img src={footerDotsRight} alt="ícone com vários pontos" />
    </StyledFooter>
  );
}
