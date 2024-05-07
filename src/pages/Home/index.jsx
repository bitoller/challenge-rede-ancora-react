import logo from "../../assets/logo.png";
import carouselPromo from "../../assets/carouselPromo.svg";
import carouselBrands1 from "../../assets/carouselBrands1.png";
import carouselBrands2 from "../../assets/carouselBrands2.png";
import { StyledHome } from "./style";
import { Link } from "react-router-dom";

export function Home() {
  /* const imagens = document.querySelector(".carousel-container");
  const img = document.querySelectorAll("#img img");

  let idx = 0;

  function carousel() {
    idx++;

    if (idx > img.length - 1) {
      idx = 0;
    }

    imagens.style.transform = `translateX(${-idx * 1005}px)`;
  }

  setInterval(carousel, 4500); */

  return (
    <StyledHome>
      <header className="header">
        <img src={logo} alt={"logo rede ancora"} />
        <h1 className="header-text">
          Faça aqui <span>Seu Pedido!</span>
        </h1>
      </header>
      <main className="carousel">
        <div className="carousel-container" id="img">
          <img src={carouselPromo} alt={"carrossel de promoção"} />
          <img src={carouselBrands1} alt={"carrossel de logos"} />
          <img src={carouselBrands2} alt={"carrossel de logos"} />
        </div>
      </main>
      <Link to="/search_screen">
        <p className="touch-button">Toque aqui para continuar</p>
      </Link>
      <footer>
        <a href="https://youtu.be/L3Ne_vstIF8?si=tIW6EG8xmIJj3OSw">
          Vídeo Pitch
        </a>
        <Link to="/about_the_project">Sobre o Projeto</Link>
      </footer>
    </StyledHome>
  );
}
