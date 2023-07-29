import React from "react";
import { useParams, Link } from "react-router-dom";
import { contents } from "../../utils/ProgressDetail";
import {
  Root,
  TopBox,
  Typo,
  GridContainer,
  GridItem,
  GridItem2,
  BigImage,
  ImageContainer,
  BackContainer,
  TextGroup,
  Line,
  TextBox,
  Blank,
  More,
  VoteContainer,
  TextContainer,
  VoteCoinButton,
  VoteAcoountButton,
  ButtonContainer,
  ButtonContainer2,
  CommentContainer,
  Line2,
  ManagerContainer,
  VoteContainer2,
  CommentContainer2,
  TypoWhite,
  FullBar,
  Bar,
} from "./styled";

import {
  Button,
  Input,
  Comment,
  Form,
  Header,
  Divider,
  Icon,
  Image,
  Item,
  Card,
  Feed,
} from "semantic-ui-react";


export const ProgressDetail = () => {
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
            후원 기간 : 2023-07-23 ~ 2023-08-23 •{" "}
            <img src="/tag.svg" alt="테그" />
            {selectedContent.organization}
          </Typo>
        </TopBox>
        <GridContainer>
          <GridItem>
            <ImageContainer>
              <BigImage src={selectedContent.image} />
            </ImageContainer>
            <TextContainer>
              <Line />
              <Typo size="16px" fontWeight="400" color="#333" top="0px">
                {selectedContent.text}
              </Typo>
              <Blank />
              <More />
            </TextContainer>
            <ButtonContainer>
              <VoteCoinButton top="32px" background="#FF7425">
                <Typo size="15px" fontWight="700" color="#000">
                  코인으로 후원하기
                </Typo>
              </VoteCoinButton>
              <VoteAcoountButton top="32px" background="#fff">
                <Typo size="15px" fontWight="700" color="#000">
                  계좌로 후원하기
                </Typo>
              </VoteAcoountButton>
            </ButtonContainer>
            <Line />
            <ManagerContainer>
              <Item.Group>
                <Typo size="25px" left="0px">
                  후원 담당자
                </Typo>
                <Blank />
                <Item>
                  <Item.Image size="tiny" src="/manager.svg" alt="매니저" />
                  <Item.Content>
                    <Item.Header as="a">김동국</Item.Header>
                    <Item.Meta> {selectedContent.organization} 대표</Item.Meta>
                    <Item.Extra>연락하기</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </ManagerContainer>
            <Line />
            <CommentContainer>
              <Comment.Group>
                <Typo size="25px" left="0px">
                  응원댓글
                </Typo>
                <Blank />
                <Typo size="13px" left="0px" color="gray">
                  당신의 따스한 한 마디로 세상을 빛낼 수 있습니다.
                </Typo>
                <Comment>
                  <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                  <Comment.Content>
                    <Comment.Author>
                      밥먹는 제이지{" "}
                      <Comment.Metadata>
                        <div>3시간 전</div>
                      </Comment.Metadata>
                    </Comment.Author>
                    <Comment.Text>
                    {selectedContent.comment1}
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                  <Comment.Content>
                    <Comment.Author>
                      유준영
                      <Comment.Metadata>
                        <div>12시간 전</div>
                      </Comment.Metadata>
                    </Comment.Author>

                    <Comment.Text>응원합니다!</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                  <Comment.Content>
                    <Comment.Author>
                      네잎클로버{" "}
                      <Comment.Metadata>
                        <div>1일 전</div>
                      </Comment.Metadata>
                    </Comment.Author>

                    <Comment.Text>
                      밥 많이 먹고 공부에 열중했으면 좋겠어요~
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea />
                  <Button
                    content="댓글입력"
                    labelPosition="left"
                    icon="edit"
                    primary
                  />
                </Form>
              </Comment.Group>
              <Line />
              <Blank />
              <Typo size="15px" left="0px" top="0px">
                후원 기간 : 2023-07-23 ~ 2023-08-23 •{" "}
                <img src="/tag.svg" alt="테그" />
                {selectedContent.organization}
              </Typo>
              <Line />
            </CommentContainer>
          </GridItem>

          <GridItem2>
            <VoteContainer>
              <Typo size="30px" top="10px">
              {selectedContent.progress}%
              </Typo>
              <FullBar>
                <Bar width={selectedContent.barWidth} />
              </FullBar>
              <Typo size="20px">
              {selectedContent.totalDonation}원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목표: {selectedContent.targetDonation}원
              </Typo>
              <Typo size="12px" color="gray" top="5px">
                30명 기부
              </Typo>
              <Blank />
              <VoteContainer2>
                <VoteCoinButton top="15px" background="#FF7425">
                  <Typo size="15px" fontWight="700" color="#000">
                    코인으로 후원하기
                  </Typo>
                </VoteCoinButton>
                <Blank />
                <VoteAcoountButton top="15px" background="#fff">
                  <Typo size="15px" fontWight="700" color="#000">
                    계좌로 후원하기
                  </Typo>
                </VoteAcoountButton>
              </VoteContainer2>
              <Blank />

              <CommentContainer2>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                    <Comment.Content>
                      <Comment.Author>
                        네잎클로버
                        <Comment.Metadata>
                          <div> · 1일 전</div>
                        </Comment.Metadata>
                      </Comment.Author>
                      <Comment.Text>200,000원</Comment.Text>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                    <Comment.Content>
                      <Comment.Author>
                        숨은천사
                        <Comment.Metadata>
                          <div> · 1일 전</div>
                        </Comment.Metadata>
                      </Comment.Author>
                      <Comment.Text>2,000원</Comment.Text>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                    <Comment.Content>
                      <Comment.Author>
                        공소연
                        <Comment.Metadata>
                          <div> · 3일 전</div>
                        </Comment.Metadata>
                      </Comment.Author>
                      <Comment.Text>150,000원</Comment.Text>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                    <Comment.Content>
                      <Comment.Author>
                        박지형
                        <Comment.Metadata>
                          <div> · 3일 전</div>
                        </Comment.Metadata>
                      </Comment.Author>
                      <Comment.Text>100원</Comment.Text>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as="a" src="/후원 그림.svg" alt="댓글" />
                    <Comment.Content>
                      <Comment.Author>
                        최예인
                        <Comment.Metadata>
                          <div> · 3일 전</div>
                        </Comment.Metadata>
                      </Comment.Author>
                      <Comment.Text>500,000원</Comment.Text>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </CommentContainer2>

              <ButtonContainer2>
                <Button basic color="green">
                  모두보기
                </Button>
                <Link to="/rank">
                  <Button basic color="black">
                    ☆기부순위 보러가기
                  </Button>
                </Link>
              </ButtonContainer2>
            </VoteContainer>
          </GridItem2>
        </GridContainer>
      </BackContainer>
    </Root>
  );
};
