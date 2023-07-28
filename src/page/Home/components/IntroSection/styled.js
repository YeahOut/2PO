import styled, { css } from "styled-components";
import heartImg from "../../../../assets/image/main_heart.png";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;

const customFontSize = css`
  font-size: ${(props) => props.size || "50px"};
`;

export const IntroRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: fit-content;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${customMargin}
`;

export const HeartImg = styled.img.attrs({
  src: heartImg,
  alt: "heart",
})`
  width: 620px;
  height: 610px;
  transform: scale(1.09);
`;

export const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${customMargin}
`;

export const Typo = styled.div`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "fit-content"};
  color: #000;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  ${customFontSize} // Reuse the common font size
  ${customMargin}
`;

export const OrangeTypo = styled.span`
  color: #ff7425;
  ${customFontSize}// Reuse the common font size
`;

export const Button = styled.button`
  display: flex;
  width: 212px;
  height: 64px;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  background: #ff7425;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  ${customMargin};
  transition: 0.3s;
  &:hover {
    background: #ea580c;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  height: 100%;
`;

export const InfoIcon = styled.img`
  width: 90px;
  height: 85px;
`;
