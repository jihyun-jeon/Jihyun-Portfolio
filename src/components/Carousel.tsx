import React, { Component, useRef } from "react";
import "./Carousel.css";
import Slider, { Settings } from "react-slick";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { IconContext } from "react-icons";

const Carousel = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "anticipated",
    prevArrow: (
      <IconContext.Provider value={{ color: "lightgray", size: "30px" }}>
        <div
          onClick={() => sliderRef?.current?.slickPrev()}
          className="customPrev"
        >
          <IoMdArrowDropleftCircle />
        </div>
      </IconContext.Provider>
    ),

    nextArrow: (
      <IconContext.Provider value={{ color: "lightgray", size: "30px" }}>
        <div
          onClick={() => sliderRef?.current?.slickNext()}
          className="customNext"
        >
          <IoMdArrowDroprightCircle />
        </div>
      </IconContext.Provider>
    ),
  };

  const sliderRef = useRef(null);

  return (
    <Slider {...settings} ref={sliderRef}>
      <div className="slideItem">
        <h1 className="sliceItemTitle font-l">📍 home 대쉬보드</h1>
        <iframe
          width="700px"
          height="400px"
          src="https://www.youtube.com/embed/sI7kB4cCKz0"
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="slideItem">
        <h1 className="sliceItemTitle font-l">📍 장비 디테일 페이지 </h1>
        <iframe
          width="700px"
          height="400px"
          src="https://www.youtube.com/embed/qcmL_gua0Y0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="slideItem">
        <h1 className="sliceItemTitle font-l">📍 디바이스 디테일 페이지 </h1>
        <iframe
          width="700px"
          height="400px"
          src="https://www.youtube.com/embed/_-b6ophYQ9s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Slider>
  );
};

export default Carousel;
