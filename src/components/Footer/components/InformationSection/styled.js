import styled, { css } from "styled-components";
import logo from "../../../../assets/icon/logo.png";
import koreaImg from "../../../../assets/icon/korea.png";
import facebookImg from "../../../../assets/icon/facebook.svg";
import instagramImg from "../../../../assets/icon/instagram.svg";
import twitterImg from "../../../../assets/icon/twitter.svg";
import youtubeImg from "../../../../assets/icon/youtube.svg";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;

export const InformationRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 1280px;
  height: 370px;
  padding: 30px 60px 10px 60px;
`;

export const UpperContainer = styled.div`
  display: flex;
  /* gap: 80px; */
`;

export const GiveRunContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 323px;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 169px;
  height: 82px;
  margin-bottom: 11px;
`;

export const Typo = styled.div`
  color: #565656;
  font-size: 14px;
  font-weight: 400;
  ${customMargin}
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
  &:hover {
    text-decoration-line: ${(props) =>
      props.underline ? "underline" : "none"};
  }
`;

export const Title = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  ${customMargin}
`;

export const KoreaTypo = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 13px;
  width: 207px;
  height: 39px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
  margin-top: 70px;
  padding: 5px;
`;

export const KoreaImg = styled.img.attrs({
  src: koreaImg,
  alt: "korea",
})`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex-basis: 50%;
  }
`;

export const StayInTheLoopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MailContainer = styled.div`
  position: relative;
  width: 364px;
  height: 53px;
  margin-top: 17px;
`;

export const MailInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 46px;
  border: 2px solid #f1f1f1;
  background: #fff;
  padding-left: 22px;
  padding-right: 165px;
  font-size: 12px;
`;

export const Button = styled.button`
  position: absolute;
  top: 3.5px;
  right: 3.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 46px;
  border-radius: 45px;
  color: #fff;
  font-size: 12px;
  background: #2639ed;
  transition: 0.3s; /* Add transition to smooth the effect */
  &:hover {
    background: #1c2dca;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  gap: 42px;
`;

export const SNSContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: auto;
`;

export const FacebookImg = styled.img.attrs({
  src: facebookImg,
  alt: "facebook",
})`
  width: 16px;
  height: 15px;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

export const YoutubeImg = styled.img.attrs({
  src: youtubeImg,
  alt: "youtube",
})`
  width: 15px;
  height: 10px;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

export const TwitterImg = styled.img.attrs({
  src: twitterImg,
  alt: "twitter",
})`
  width: 15px;
  height: 11px;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

export const InstagramImg = styled.img.attrs({
  src: instagramImg,
  alt: "instagram",
})`
  width: 13px;
  height: 12px;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;
