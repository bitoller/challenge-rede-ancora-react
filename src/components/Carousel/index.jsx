import AliceCarousel from "react-alice-carousel";
import { StyledCarousel } from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
import carouselPromo from "../../assets/carouselPromo.svg";
import carouselBrands1 from "../../assets/carouselBrands1.png";
import carouselBrands2 from "../../assets/carouselBrands2.png";

export function Carousel() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src={carouselPromo}
      alt={"carrossel de promoção"}
      className="carousel-img"
    />,
    <img
      src={carouselBrands1}
      alt={"carrossel de logos"}
      className="carousel-img"
    />,
    <img
      src={carouselBrands2}
      alt={"carrossel de logos"}
      className="carousel-img"
    />,
  ];

  const responsive = {
    0: {
      items: 1,
      itemsFit: "fill",
    },
  };

  return (
    <StyledCarousel>
      <AliceCarousel
        items={items}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={3000}
        disableButtonsControls={true}
        itemsInSlide={3}
        disableDotsControls={true}
        responsive={responsive}
      />
    </StyledCarousel>
  );
}
