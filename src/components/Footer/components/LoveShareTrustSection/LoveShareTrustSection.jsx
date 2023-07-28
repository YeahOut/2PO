import {
  Content,
  ContentGroup,
  Img,
  MiddleContainer,
  Root,
  SubTitleTypo,
  TextGroup,
  TitleTypo,
  Typo,
} from "./styled";
import contentData from "../../../../utils/FooterUtils";

export const LoveShareTrustSection = () => {
  return (
    <Root>
      <MiddleContainer>
        <TitleTypo>
          당신이 만들어가는 블록체인 생태계 속 사랑, 나눔 그리고 신뢰
        </TitleTypo>
        <ContentGroup>
          {contentData.map((content) => (
            <Content key={content.id}>
              <Img
                src={content.icon.src}
                width={content.icon.width}
                height={content.icon.height}
              />
              <TextGroup>
                <SubTitleTypo>{content.subTitle}</SubTitleTypo>
                <Typo>{content.description}</Typo>
              </TextGroup>
            </Content>
          ))}
        </ContentGroup>
      </MiddleContainer>
    </Root>
  );
};
