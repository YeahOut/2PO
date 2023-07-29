import {
  IntroSection,
  NFTSection,
  SubTitle,
  CarouselSection,
} from "./components";
import { OrangeTitle, Root, Title } from "./styled";
import handIcon from "../../assets/icon/fi-rr-hand-holding-heart.png";
import personHeartIcon from "../../assets/icon/fi-rr-following.png";
import voteIcon from "../../assets/icon/fi-rr-interactive.png";
import sampleImage from "../../assets/image/donate1.png";

const images = [
  {
    Title: "폭우로 인해 집과 가족을 잃은 이들",
    src: sampleImage,
    per: 83,
    current: "10,209,000",
    goal: "12,300,000",
  },
  {
    Title: "폭우로 인해 집과 가족을 잃은 이들",
    src: sampleImage,
    per: 83,
    current: "10,209,000",
    goal: "12,300,000",
  },
  {
    Title: "폭우로 인해 집과 가족을 잃은 이들",
    src: sampleImage,
    per: 83,
    current: "10,209,000",
    goal: "12,300,000",
  },
  {
    Title: "폭우로 인해 집과 가족을 잃은 이들",
    src: sampleImage,
    per: 83,
    current: "10,209,000",
    goal: "12,300,000",
  },
  {
    Title: "폭우로 인해 집과 가족을 잃은 이들",
    src: sampleImage,
    per: 83,
    current: "10,209,000",
    goal: "12,300,000",
  },
  {
    Title: "폭우로 인해 집과 가족을 잃은 이들",
    src: sampleImage,
    per: 83,
    current: "10,209,000",
    goal: "12,300,000",
  },
];

export const Home = () => {
  return (
    <Root>
      <IntroSection />
      <NFTSection />
      <Title>
        당신의&nbsp;<OrangeTitle>사랑</OrangeTitle>을 나눠주세요
      </Title>
      <SubTitle src={handIcon}>모금 중</SubTitle>
      <CarouselSection images={images} />
      <SubTitle src={voteIcon}>투표 중</SubTitle>
      <CarouselSection images={images} />
      <SubTitle src={personHeartIcon}>비하인드</SubTitle>
      <CarouselSection images={images} />
    </Root>
  );
};
