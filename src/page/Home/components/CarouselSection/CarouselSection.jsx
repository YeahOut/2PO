import React, { useRef, useState } from "react";
import { BlackBox, Img, Root } from "./styled";
import sampleImage from "../../../../assets/image/donate1.png";
import rightArrow from "../../../../assets/icon/right.png";
import leftArrow from "../../../../assets/icon/left.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  { location: sampleImage },
  { location: sampleImage },
  { location: sampleImage },
  { location: sampleImage },
  { location: sampleImage },
  { location: sampleImage },
];

export const CarouselSection = (props) => {
  return (
    <Root>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {images.map((image, index) => (
          <Img src={image.location} key={index}>
            <BlackBox />
          </Img>
        ))}
      </Carousel>
    </Root>
  );
};

export default Carousel;
