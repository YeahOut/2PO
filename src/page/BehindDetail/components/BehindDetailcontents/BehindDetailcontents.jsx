import React, {useState} from "react";
import { TextBox, More, TextGroup, Blank, Title, BigBox, Line, Image, ImageBox} from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageData from "../../../../utils/BehindDetailcontents";

export const BehindDetailcontents = ({id}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredImageData = ImageData.find(item => item.id === id);

  if (!filteredImageData) {
    return null; 
  }

  const { images, title, textBox } = filteredImageData;

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = images.map((image, index) => (
    <div key={`${image.alt}-${index}`}>
      <Image src={image.src} alt={image.alt} />
    </div>
  ));

  return (
    <BigBox>
      <Title>{title}</Title>
      <ImageBox>
        <Carousel
          showArrows={true} // 기본 화살표 숨김
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={currentIndex}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </ImageBox>
      <TextGroup>
        <Line/>
        <TextBox>{textBox}</TextBox>
        <Blank/>
        <More/>
      </TextGroup>
    </BigBox>
  );
};
