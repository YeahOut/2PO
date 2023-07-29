import React, { useRef, useState } from "react";
import {
  BlackBox,
  Img,
  PercentageTypo,
  ProgressTypo,
  Root,
  Title,
  TypoContainer,
} from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Progress } from "antd";

export const CarouselSection = ({ images }) => {
  return (
    <Root>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-padding-bottom"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
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
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((image, index) => (
          <Img src={image.location} key={index}>
            <BlackBox />
            <Title>{image.Title}</Title>
            <TypoContainer>
              <PercentageTypo>달성률 {image.per}%</PercentageTypo>
              <ProgressTypo>
                {image.current}/{image.goal}원
              </ProgressTypo>
              <Progress percent={image.per} size="small" showInfo={false} />
            </TypoContainer>
          </Img>
        ))}
      </Carousel>
    </Root>
  );
};

export default Carousel;
