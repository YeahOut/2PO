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

export const Img = styled.div`
  position: relative;
  width: 339px !important;
  height: 443px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  cursor: pointer;
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
