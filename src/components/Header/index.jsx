import logo from "../../assets/logo.png";
import headerDots from "../../assets/header-dots.svg";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

export function Header({ text }) {
  return (
    <StyledHeader>
      <Link to="/home">
        <img src={logo} alt={"logo rede ancora"} className="header-logo" />
      </Link>
      <h1>{text}</h1>
      <img src={headerDots} alt={"ícone com vários pontos"} />
    </StyledHeader>
  );
}
