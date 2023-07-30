import React from "react";
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
import { useNavigate } from "react-router";
import { useCallback } from "react";

export const CarouselSection = ({ progress, waiting, behind }) => {
  const contentsToMap = progress || waiting || behind;

  const navigate = useNavigate();

  const onClickNavigate = useCallback((content, index) => {
    if (contentsToMap == behind) {
      navigate(`/behind/${content.id}`);
    }
    if (contentsToMap == progress) {
      navigate(`/progress/${index}`);
    }
    if (contentsToMap == waiting) {
      navigate(`/waiting/${index}`);
    }
  }, []);

  return (
    <Root>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={5000}
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
        slidesToSlide={3}
        swipeable
      >
        {contentsToMap?.map((content, index) => {
          /* const percentage = Math.floor(
            (content.totalDonation / content.targetDonation) * 100
          );
          const localeString = (number) => {
            return number.toLocaleString("ko-KR");
          }; */
          return (
            <Img
              src={
                contentsToMap !== behind ? content.image : content.images[0].src
              }
              key={index}
              onClick={() => onClickNavigate(content, index)}
            >
              <BlackBox>
                <Title>{content.title}</Title>
                {contentsToMap !== behind && (
                  <TypoContainer>
                    <PercentageTypo>달성률 {content.progress}%</PercentageTypo>
                    <ProgressTypo>
                      {contentsToMap === progress
                        ? `${content.totalDonation}/${content.targetDonation}원`
                        : `${content.totalTokens}/${content.targetTokens}토큰`}
                    </ProgressTypo>
                    <Progress
                      percent={content.progress}
                      size="small"
                      showInfo={false}
                    />
                  </TypoContainer>
                )}
              </BlackBox>
            </Img>
          );
        })}
      </Carousel>
    </Root>
  );
};

export default Carousel;
