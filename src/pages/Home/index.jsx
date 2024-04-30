import logo from "../../assets/logo.png";
import carouselPromo from "../../assets/carouselPromo.svg";
import carouselBrands1 from "../../assets/carouselBrands1.png";
import carouselBrands2 from "../../assets/carouselBrands2.png";
import { StyledHome } from "./style";

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
      <p className="touch-button">Toque na tela para continuar</p>
      <footer>
        <a href="#">video pitch</a>
        <a href="#">sobre o projeto</a>
      </footer>
    </StyledHome>
  );
}
