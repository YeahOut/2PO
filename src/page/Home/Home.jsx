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

export const Home = () => {
  return (
    <Root>
      <IntroSection />
      <NFTSection />
      <Title>
        당신의&nbsp;<OrangeTitle>사랑</OrangeTitle>을 나눠주세요
      </Title>
      <SubTitle src={handIcon}>모금 중</SubTitle>
      <CarouselSection />
      <SubTitle src={voteIcon}>투표 중</SubTitle>
      <SubTitle src={personHeartIcon}>비하인드</SubTitle>
    </Root>
  );
};
