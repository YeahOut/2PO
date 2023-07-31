import styled from "styled-components";

export const UpIcon = styled.img`
  position: absolute;
  top: 66px;
  left: 0px;
  width: 100%;
  height: 880px;
  object-fit: cover;
`;

export const TextIcon = styled.img`
  position: absolute;
  top: 975px;
  left: 252px;
  width: 868px;
  height: 43px;
  object-fit: cover;
`;

export const V = styled.img`
  position: absolute;
  top: 1500px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.screenWidth <= 1280 ? "100%" : "3000px")};
  height: ${(props) => (props.screenWidth <= 1280 ? "auto" : "2500px")};
  max-width: 3000px;
  max-height: 2500px;
  object-fit: cover;
  opacity: 0.7;
`;

export const Div1 = styled.div`
  position: relative;
  border-radius: 111px;
  background-color: #ffd4ac;
  border: 2px solid #bebebe;
  box-sizing: border-box;
  width: 775px;
  height: 169px;
  z-index: 0;
`;

export const Menu = styled.div`
  position: absolute;
  top: 1067.18px;
  left: 270.15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const Icon1 = styled.img`
  position: absolute;
  top: 1319px;
  left: 155px;
  width: 1006px;
  height: 1792px;
  object-fit: cover;
`;

export const DivRoot = styled.div`
  position: relative;
  width: 100%;
  min-height: 450vh;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Httpschromegooglecomwebs = styled.a`
  position: absolute;
  top: 500px;
  left: 8px;
  font-size: 30px;
  text-decoration: underline;
  line-height: 120%;
  font-weight: 500;
  font-family: noto-sans-kr;
  color: blue;
  display: inline-block;
  width: 819px;
  height: 300px;
  word-break: break-all;
  z-index: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Root = styled.div`
  width: 100%;
`;
