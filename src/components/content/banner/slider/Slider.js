import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Indicators from "./Indicators";
import slideImages from "../../../../assets/data/SliderImages";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider() {
  const properties = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
  };

  const slideRef = useRef();

  const [curIndex, setCurIndex] = useState(
    slideRef.current !== undefined ? slideRef.current.state.index : 0
  );

  const indicatorsHandler = function (index) {
    setCurIndex(index);
  };

  return (
    <div className="main-banner__slide">
      <Slider ref={slideRef} {...properties} afterChange={indicatorsHandler}>
        {slideImages.map((image, key) => (
          <div className="each-slide" key={key}>
            <div style={{ backgroundImage: `url(${image})` }}></div>
          </div>
        ))}
      </Slider>
      <Indicators
        slideRef={slideRef}
        slideImages={slideImages}
        curIndex={curIndex}
      />
    </div>
  );
}
