import {
  Button,
  HeartImg,
  InfoIcon,
  InfoItem,
  Typo,
  OrangeTypo,
  TypoContainer,
  Container,
  IntroRoot,
} from "./styled";
import heartIcon from "../../../../assets/icon/heart.svg";
import messageIcon from "../../../../assets/icon/message.svg";
import smileIcon from "../../../../assets/icon/smile.svg";
import { useNavigate } from "react-router";

export const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <IntroRoot>
      <Container>
        <HeartImg />
        <TypoContainer bottom="40px" left="-30px">
          <Typo size="66px" width="690px">
            당신의 사랑을 <OrangeTypo size="66px">안전하게</OrangeTypo>
            기부런, <OrangeTypo size="66px">사랑</OrangeTypo>과 달립니다.
          </Typo>
          <Typo top="30px" left="10px" size="25px" weight="500">
            서울시와 함께 마음을 전하세요.
          </Typo>
          <Typo left="10px" size="25px" weight="500">
            안전하게 기부런이 지켜드리겠습니다.
          </Typo>
          <Button top="45px" onClick={() => navigate("/progress")}>
            기부하러 가기
          </Button>
        </TypoContainer>
      </Container>
      <Container top="-30px" bottom="50px">
        <InfoItem>
          <InfoIcon src={heartIcon} />
          <Typo size="25px" top="16px" weight="700">
            후원금액
          </Typo>
          <Typo size="45px">
            838,408,493
            <Typo display="inline" left="3px" size="30px" weight="400">
              원
            </Typo>
          </Typo>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={messageIcon} />
          <Typo size="25px" top="16px" weight="700">
            나눔횟수
          </Typo>
          <Typo size="45px">
            94,500
            <Typo display="inline" left="3px" size="30px" weight="400">
              건
            </Typo>
          </Typo>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={smileIcon} />
          <Typo size="25px" top="16px" weight="700">
            사랑을 전하는 사람들
          </Typo>
          <Typo size="45px">
            4,500
            <Typo display="inline-block" left="3px" size="30px" weight="400">
              명
            </Typo>
          </Typo>
        </InfoItem>
      </Container>
    </IntroRoot>
  );
};
