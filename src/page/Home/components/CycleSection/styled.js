import styled from "styled-components";

export const Root = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1450px;
  height: 800px;
  padding: 70px 0;
`;

export const Container = styled.div`
  display: flex;
  width: 1280px;
  margin: 30px 0 30px 50px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.div`
  display: block;
  color: #000;
  font-size: 23px;
  font-weight: 700;
  line-height: 120%; /* 27.6px */
  letter-spacing: 4.6px;
  margin-left: 17px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  width: 613px;
  height: 117px;
  display: block;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 57.2px */
  margin-left: 10px;
  margin-bottom: 50px;
`;

export const OrangeTitle = styled.span`
  color: #ff7425;
  font-family: Noto Sans KR;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 57.2px */
`;

export const TypoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 36px;
  margin: 0;
`;

export const TypoBox = styled.div`
  flex-basis: 270px;
  display: flex;
  padding: 35px 15px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-radius: 35.566px;
  border: 1.111px solid rgba(25, 24, 37, 0.1);
  background: #fff;
`;

export const SubHeading = styled.h3`
  display: block;
  color: #ff5722;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */
`;

export const Typo = styled.div`
  color: #191825;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 24px */
`;

export const ImgBackground = styled.div`
  height: 556px;
  border-radius: 278.355px 0px 0px 269px;
  background: #fcede2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
`;

export const Img = styled.img`
  width: 600px;
  height: 546px;
`;

export const YellowCircle = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: linear-gradient(326deg, #ffe03a 0%, #ffb800 100%);
  filter: blur(6px);
  border-radius: 50%;
  z-index: -5;
`;

export const PurpleCircle = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: linear-gradient(326deg, #5d50c6 0%, #f85e9f 100%);
  filter: blur(2px);
  border-radius: 50%;
  z-index: -5;
`;

export const OrangeCircle = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: #ff5722;
  filter: blur(2px);
  border-radius: 50%;
  z-index: -5;
`;
