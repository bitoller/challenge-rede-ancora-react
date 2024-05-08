import footerDots from "../../assets/footer-dots.svg";
import footerDotsRight from "../../assets/footer-dots-right.svg";
import { StyledFooter } from "./style";
import { useNavigate } from "react-router-dom";

export function Footer({ showBackButton, showFinishButton }) {
  const navigate = useNavigate();
  return (
    <StyledFooter>
      <img src={footerDots} alt="ícone com vários pontos" />
      {showBackButton && (
        <button className="back-button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      )}
      {showFinishButton && <button className="finish-button">Finalizar</button>}
      <img src={footerDotsRight} alt="ícone com vários pontos" />
    </StyledFooter>
  );
}
