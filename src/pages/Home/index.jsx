import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import { StyledHome } from "./style";

export function Home() {
  return (
    <StyledHome>
      <header className="header">
        <img src={logo} alt={"logo rede ancora"} />
      </header>
      <main>
        <h1 className="header-text">
          Faça aqui <span>Seu Pedido!</span>
        </h1>
        <Carousel />
        <Link to="/search_screen">
          <p className="touch-button">Toque aqui para começar</p>
        </Link>
      </main>
      {/* <footer>
        <a
          href="https://youtu.be/L3Ne_vstIF8?si=tIW6EG8xmIJj3OSw"
          target="_blank"
        >
          Vídeo Pitch
        </a>
        <Link to="/about_the_project">Sobre o Projeto</Link>
      </footer> */}
    </StyledHome>
  );
}
