import { useState, useEffect } from "react";
import Slider from "react-slick";

import "~../../slick-carousel/slick/slick.css";
import "~../../slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import Cards from "../Cards/Cards";

export default function SliderCarousel(props) {
  const [showSlider, setShowSlider] = useState(0);
  useEffect(() => {
    controlShowSlider(props.width);
  }, [props.width]);

  function controlShowSlider(width) {
    if (width >= 1440) {
      setShowSlider(6);
    } else if (width >= 1124) {
      setShowSlider(5);
    } else if (width >= 992) {
      setShowSlider(4);
    } else if (width >= 900) {
      setShowSlider(5);
    } else if (width >= 768) {
      setShowSlider(4);
    } else if (width >= 550) {
      setShowSlider(3);
    } else if (width >= 425) {
      setShowSlider(2);
    } else {
      setShowSlider(1);
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showSlider,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: props.tempSlider,
    draggable: true,
  };
  return (
    <div className="slick-carousel">
      <div className="carousel-title">
        <h2 className="carousel-title"> {props.title}</h2>
      </div>
      <Slider {...settings}>
        {props.listGames.map((item) => {
          return (
            <div key={item.id}>
              <Cards item={item}/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
