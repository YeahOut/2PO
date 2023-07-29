import styled from "styled-components";
import sampleImage from "../../../../assets/image/donate1.png";

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 600px;
  padding: 10px 0 50px 0;
  margin: 0 auto;
  position: relative;
`;

/* export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Carousel = styled.div`
  width: 1280px;
  height: 443px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarouselItem = styled.div`
  width: 339px;
  height: 443px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselItemTitle = styled.h2`
  font-size: 54px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CarouselItemDescription = styled.p`
  font-size: 20px;
  color: #666666;
  margin-top: 10px;
`;

export const CarouselItemButton = styled.button`
  width: 200px;
  height: 50px;
  background: #ff7425;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`;

export const CarouselItemImg = styled.div`
  width: 339px;
  height: 443px;
  background-image: url(${sampleImage});
  background-size: cover;
  background-position: center;
`;

export const CarouselItemBlackBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 339px;
  height: 443px;
  background: rgba(9, 9, 9, 0.53);
  border-radius: 15px;
`;

export const CarouselItemImgContainer = styled.div`
  position: relative;
  width: 339px;
  height: 443px;
`; */

export const Img = styled.div`
  position: relative;
  width: 339px !important;
  height: 443px;
  background-image: url(${sampleImage});
  background-size: cover;
  background-position: center;
`;

export const BlackBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(9, 9, 9, 0.53);
  border-radius: 15px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 40px;
  left: 25px;
  display: block;
  width: max-content;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

export const TypoContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 0;
  padding-left: 25px;
  width: 339px;
`;

export const PercentageTypo = styled.span`
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;
export const ProgressTypo = styled.span`
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
