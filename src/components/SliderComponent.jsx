import React from "react";
import Slider from "react-slick";
import CountUp from 'react-countup';
import Stats1 from "../assets/stats1.svg"
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 1300,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="apply-page-slider">
        <Slider {...settings}>
           <div className="apply-slide-img">
            <img src={Slider1} alt="" />
           </div>
           <div className="apply-slide-img">
            <img src={Slider2} alt="" />
           </div>
           <div className="apply-slide-img">
            <img src={Slider3} alt="" />
           </div> 
           
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
