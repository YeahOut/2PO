import {
  IntroSection,
  NFTSection,
  SubTitle,
  CarouselSection,
  CycleSection,
} from "./components";
import { OrangeTitle, Root, Title } from "./styled";
import handIcon from "../../assets/icon/fi-rr-hand-holding-heart.png";
import personHeartIcon from "../../assets/icon/fi-rr-following.png";
import voteIcon from "../../assets/icon/fi-rr-interactive.png";
import { contents as progressContents } from "../../utils/ProgressDetail";
import { contents as waitingContents } from "../../utils/WaitingDetail";
import behindContents from "../../utils/BehindDetailcontents";

export const Home = () => {
  return (
    <Root>
      <IntroSection />
      <CycleSection />
      <NFTSection />
      <Title>
        당신의&nbsp;<OrangeTitle>사랑</OrangeTitle>을 나눠주세요
      </Title>
      <SubTitle src={handIcon}>모금 중</SubTitle>
      <CarouselSection progress={progressContents} />
      <SubTitle src={voteIcon}>투표 중</SubTitle>
      <CarouselSection waiting={waitingContents} />
      <SubTitle src={personHeartIcon}>비하인드</SubTitle>
      <CarouselSection behind={behindContents} />
    </Root>
  );
};
