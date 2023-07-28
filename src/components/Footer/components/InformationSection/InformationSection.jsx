import {
  Button,
  CategoryContainer,
  CategoryList,
  FacebookImg,
  GiveRunContainer,
  InformationRoot,
  InstagramImg,
  KoreaImg,
  KoreaTypo,
  Logo,
  LowerContainer,
  MailContainer,
  MailInput,
  SNSContainer,
  StayInTheLoopContainer,
  Title,
  TwitterImg,
  Typo,
  UpperContainer,
  YoutubeImg,
} from "./styled";

export const InformationSection = () => {
  return (
    <InformationRoot>
      <UpperContainer>
        <GiveRunContainer>
          <Logo />
          <Typo>동국대학교 블록체인 학회 2PLUSONE 제작</Typo>
          <Typo>pt840072@dgu.ac.kr</Typo>
          {/* <Typo /> */}
          <KoreaTypo>
            <KoreaImg />
            Republic of Korea · Korean
          </KoreaTypo>
        </GiveRunContainer>
        <CategoryContainer>
          <Title>기부하러 가기</Title>
          <Typo top="25px" bottom="12px">
            All Category
          </Typo>
          <CategoryList>
            <Typo pointer="true" bottom="15px">
              교육
            </Typo>
            <Typo pointer="true" bottom="15px">
              재난
            </Typo>
            <Typo pointer="true" bottom="15px">
              장애인
            </Typo>
            <Typo pointer="true" bottom="15px">
              어르신
            </Typo>
            <Typo pointer="true">동물</Typo>
            <Typo pointer="true">다문화</Typo>
          </CategoryList>
        </CategoryContainer>
        <StayInTheLoopContainer>
          <Title bottom="15px">Stay In The Loop</Title>
          <Typo>동국대학교 블록체인 학회 2PLUSONE은 정기적인 모임을 통해</Typo>
          <Typo>리서치, 개발 등 다양한 세션을 진행하고 있습니다.</Typo>
          <Typo>더 많은 소식을 원하신다면, 아래 메일을 기입해 주세요.</Typo>
          <MailContainer>
            <MailInput placeholder="Enter your email address" />
            <Button>Subscribe Now</Button>
          </MailContainer>
        </StayInTheLoopContainer>
      </UpperContainer>
      <LowerContainer>
        <Typo>© 2023 2PlusOne</Typo>
        <Typo pointer="true">공지사항</Typo>
        <Typo pointer="true">이용약관</Typo>
        <Typo pointer="true">개인정보처리방침</Typo>
        <Typo pointer="true">고객지원</Typo>
        <SNSContainer>
          <FacebookImg pointer="true" />
          <YoutubeImg pointer="true" />
          <TwitterImg pointer="true" />
          <InstagramImg />
        </SNSContainer>
      </LowerContainer>
    </InformationRoot>
  );
};
