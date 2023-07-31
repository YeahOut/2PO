import {
  Container,
  Img,
  ImgBackground,
  OrangeCircle,
  OrangeTitle,
  PurpleCircle,
  RightContainer,
  Root,
  SubHeading,
  SubTitle,
  TextContainer,
  Title,
  Typo,
  TypoBox,
  TypoContainer,
  YellowCircle,
} from "./styled";

export const CycleSection = () => {
  return (
    <Root>
      <Container>
        <TextContainer>
          <SubTitle>서울시와 함께하는 지속가능한 기부</SubTitle>
          <Title>
            <OrangeTitle>웹3.0</OrangeTitle>을 기반으로{" "}
            <OrangeTitle>나눔 사이클</OrangeTitle>에
            <OrangeTitle>새로운 변화</OrangeTitle>를 만들었습니다.
          </Title>
          <TypoContainer>
            <TypoBox>
              <SubHeading>기부에서 투표로</SubHeading>
              <Typo>
                기부로 받은 토큰은 다음 기부처 선정에 사용될 수 있습니다.
              </Typo>
            </TypoBox>
            <TypoBox>
              <SubHeading>나눔의 NFT로</SubHeading>
              <Typo>
                발급 받은 NFT를 통해 나만의 SNS인증 수단으로 사용할 수 있습니다.
              </Typo>
            </TypoBox>
            <TypoBox>
              <SubHeading>빠른 순환으로</SubHeading>
              <Typo>
                기부 목록을 줄이고, 기부 대기를 운영하면서 빠른 회전이
                가능합니다.
              </Typo>
            </TypoBox>
            <TypoBox>
              <SubHeading>순위와 함께</SubHeading>
              <Typo>때론 게임처럼 나만의 별명으로 나눔에 함께 합니다.</Typo>
            </TypoBox>
          </TypoContainer>
        </TextContainer>
        <ImgBackground>
          <Img src="/Cycle.png" />
        </ImgBackground>
        <YellowCircle top="272px" left="5px" width="100px" height="100px" />
        <YellowCircle top="0px" left="524px" width="42px" height="42px" />
        <OrangeCircle top="62px" left="56px" width="34px" height="34px" />
        <OrangeCircle top="700px" left="673px" width="16px" height="16px" />
        <PurpleCircle top="45px" left="681px" width="101px" height="101px" />
        <PurpleCircle top="108px" left="1163px" width="42px" height="42px" />
      </Container>
    </Root>
  );
};
