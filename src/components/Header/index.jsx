import logo from "../../assets/logo.png";
import headerDots from "../../assets/header-dots.svg";
import { StyledHeader } from "./style";

export function Header({ text }) {
  return (
    <StyledHeader>
      <img src={logo} alt="logo rede ancora" />
      <h1>{text}</h1>
      <img src={headerDots} alt="..." />
    </StyledHeader>
  );
}
