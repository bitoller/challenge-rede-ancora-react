import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StyledAboutTheProject } from "./style";

export function AboutTheProject() {
  return (
    <>
      <Header text="Sobre o Projeto" />
      <StyledAboutTheProject>
        <section>
          <p>Bianca Toller - Desenvolvimento</p>
          <p>Bruno Marcelino Guimarães - Desenvolvimento/Design</p>
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
