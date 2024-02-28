import React from "react";
import pergola from "../public/pergola.jpg";
import mab from "../public/mab.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        <div className=" w-full lg:h-[40rem]">
          <img src={mab} alt="Image 1" />
        </div>
        <div className=" w-full lg:h-[40rem]">
          <img src={pergola} alt="Image 2" />
        </div>
        <div className=" w-full lg:h-[40rem]">
          <img src={mab} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
