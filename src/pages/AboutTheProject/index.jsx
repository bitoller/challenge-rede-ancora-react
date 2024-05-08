import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StyledAboutTheProject } from "./style";

export function AboutTheProject() {
  return (
    <>
      <Header text="Sobre o Projeto" />
      <StyledAboutTheProject>
        <section>
          <p>Bianca Toller - Desenvolvimento React</p>
          <p>Bruno Marcelino Guimarães - Desenvolvimento Vanilla/Design</p>
          <p>Iago Henrique Bortolo - Desenvolvimento Vanilla</p>
          <p>Wesley Da Avilla Bastos - Desenvolvimento Vanilla</p>
        </section>
        <section>
          <p>
            Foram utilizados React, Styled Components, React Alice Carousel,
            React Toastify, Axios e React Router Dom.
          </p>
        </section>
      </StyledAboutTheProject>
      <Footer showBackButton />
    </>
  );
}
