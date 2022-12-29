import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import tw from "twin.macro";
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
      <IconContext.Provider
        value={{ color: "black", size: "30px", className: "arrows" }}
      >
        <div
          onClick={() => sliderRef?.current?.slickPrev()}
          tw="mr-5 sm:hidden"
        >
          <IoMdArrowDropleftCircle />
        </div>
      </IconContext.Provider>
    ),

    nextArrow: (
      <IconContext.Provider
        value={{ color: "black", size: "30px", className: "arrows" }}
      >
        <div
          onClick={() => sliderRef?.current?.slickNext()}
          tw="ml-5 sm:hidden"
        >
          <IoMdArrowDroprightCircle />
        </div>
      </IconContext.Provider>
    ),
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <SliderWrapper>
      <Slider {...settings} ref={sliderRef}>
        {CarouselData.map((slideItemData, idx) => (
          <div className="slideItem" key={slideItemData.title}>
            <h1 tw="h-12 flex items-center text-xl font-bold sm:text-base">
              📍 {slideItemData.title}
            </h1>
            {slideItemData.url.includes("imgs") ? (
              <div
                className="gif"
                style={{
                  backgroundImage: `url(${slideItemData.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  margin: "0 auto",
                }}
              />
            ) : (
              <div tw="flex justify-center">
                <iframe
                  className="youtube"
                  src={slideItemData.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  .youtube {
    ${tw`w-[1200px] h-[600px] md:(w-[700px] h-[400px] ) sm:(w-[370px] h-[300px] my-0 mx-auto)`}
  }

  .gif {
    ${tw`w-[1200px] h-[600px] md:(w-[700px] h-[400px] ) sm:(w-[380px] h-[210px])`}
  }

  .arrows {
    ${tw`cursor-pointer`}
  }

  .slick-slider {
    ${tw`flex items-center justify-center w-screen relative px-10`}
    left: calc(-50vw + 50%);
  }

  .slick-list {
    ${tw`w-[1200px] pb-5 overflow-hidden`}
  }

  .slick-list .slick-track {
    ${tw`flex w-full h-full`}
  }

  .slick-dots {
    ${tw`absolute bottom-[-30px]`}
  }

  .slick-dots li {
    ${tw`inline-block`}
  }

  .slick-dots li button {
    ${tw`rounded-[50%] bg-gray-300 border-[1px] border-gray-300 mr-2.5 w-5 h-5 text-transparent`}
  }

  .slick-dots li.slick-active button {
    ${tw`bg-orange-400`}
  }
`;

export default Carousel;
