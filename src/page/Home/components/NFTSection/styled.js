import styled, { css } from "styled-components";
import phoneImg from "../../../../assets/image/main_phone.png";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgba(255, 232, 215, 0.35);
  backdrop-filter: blur(25px);
`;

export const Container = styled.div`
  display: flex;
  width: 1280px;
  padding-top: 93px;
`;

export const PhoneImg = styled.img.attrs({
  src: phoneImg,
  alt: "phone",
})`
  width: 600px;
  height: 684px;
  flex-shrink: 0;
  margin-right: 15px;
`;

export const Title = styled.div`
  display: inline-block;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 50px;
  font-weight: 700;
`;

export const OrangTitle = styled(Title)`
  color: #ff7425;
`;

export const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTypoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const NFTContainer = styled.div`
  display: flex;
  gap: 38px;
  align-items: center;
`;

export const NFTItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Typo = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: ${(props) => props.size || "25px"};
  font-weight: ${(props) => props.weight || 500};
  ${customMargin}
`;

export const TotalItemBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 100px;
  height: 39px;
  padding: 10pxpx;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  border: 1px solid #ff7425;
  color: #ff7425;
  font-size: 11px;
  font-weight: 500;
  margin-top: 8px;
`;

export const NFTImg = styled.img`
  width: 275px;
  height: 269px;
`;
