import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "twin.macro";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { IconContext } from "react-icons";
import { styled } from "twin.macro";
import React from "react";

type CarouselDataType = { CarouselData: { title: string; url: string }[] };

const Carousel = ({ CarouselData }: CarouselDataType) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "anticipated",
    prevArrow: (
      <IconContext.Provider value={{ color: "lightgray", size: "30px" }}>
        <div onClick={() => sliderRef?.current?.slickPrev()} tw="mr-5">
          <IoMdArrowDropleftCircle />
        </div>
      </IconContext.Provider>
    ),

    nextArrow: (
      <IconContext.Provider value={{ color: "lightgray", size: "30px" }}>
        <div onClick={() => sliderRef?.current?.slickNext()} tw="ml-5">
          <IoMdArrowDroprightCircle />
        </div>
      </IconContext.Provider>
    ),
  };

  const sliderRef = useRef<Slider | null>(null); // [타입질문]

  return (
    <SliderWrapper>
      <Slider {...settings} ref={sliderRef}>
        {CarouselData.map((slideItemData, idx) => (
          <div className="slideItem" key={slideItemData.title}>
            <h1 tw="h-12 flex items-center text-xl font-bold">
              📍 {slideItemData.title}
            </h1>
            {slideItemData.url.includes("imgs") ? (
              <div
                style={{
                  backgroundImage: `url(${slideItemData.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  width: "1200px",
                  height: "750px",
                  margin: "0 auto",
                }}
              />
            ) : (
              <iframe
                width="1200px"
                height="600px"
                src={slideItemData.url}
                title="YouTube video player"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  .slick-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
  }

  .slick-list {
    width: 1200px;
    padding-bottom: 20px;
    overflow: hidden;
  }

  .slick-list .slick-track {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .slick-dots {
    position: absolute;
    bottom: -30px;
  }

  .slick-dots li {
    display: inline-block;
  }

  .slick-dots li button {
    border-radius: 50%;
    background-color: lightgray;
    border: 1px solid lightgray;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    color: transparent;
  }

  .slick-dots li.slick-active button {
    background-color: orange;
  }
`;

export default Carousel;
