import { useParams } from "react-router-dom";
import { contents } from "../../utils/WaitingDetail";
import {
  Root,
  TopBox,
  Typo,
  GridContainer,
  GridItem,
  Image,
  ImageContainer,
  BackContainer,
  VoteContainer,
  TextContainer,
  VoteButton,
  ShareButton,
  ButtonContainer,
} from "./styled";


export const WaitingDetail = () => {
    const { id } = useParams();
    const index = parseInt(id); 
    const selectedContent = contents[index];
  return (
    <Root>
      <BackContainer>
        <TopBox>
          <Typo size="37px" left="100px">
            {selectedContent.title}
          </Typo>
          <Typo size="15px" left="100px" top="20px">
            후원 기간 : 후원 대상 선정으로부터 1달 •{" "}
            <img src="/tag.svg" alt="테그" />
            {selectedContent.organization}
          </Typo>
        </TopBox>
        <GridContainer>
          <GridItem>
            <ImageContainer>
              <Image src={selectedContent.image} />
            </ImageContainer>
            <TextContainer>
              <Typo size="16px" fontWeight="400" color="#333" top="40px">
                {selectedContent.text}
              </Typo>
              <ButtonContainer>
                <VoteButton top="32px" background="#FF7425">
                  <Typo size="15px" fontWight="700" color="#fff">
                    토큰으로 투표하기
                  </Typo>
                </VoteButton>
                <ShareButton top="32px" background="#fff">
                  <Typo size="15px" fontWight="700" color="#000">
                    공유하기
                  </Typo>
                </ShareButton>
              </ButtonContainer>
            </TextContainer>
          </GridItem>
          <GridItem>
            <VoteContainer></VoteContainer>
          </GridItem>
        </GridContainer>
      </BackContainer>
    </Root>
  );
};
