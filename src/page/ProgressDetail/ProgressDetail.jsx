import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { contents, List} from "../../utils/ProgressDetail";
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
  Line,
  Blank,
  More,
  VoteContainer,
  TextContainer,
  VoteCoinButton,
  VoteAcoountButton,
  ButtonContainer,
  ButtonContainer2,
  CommentContainer,
  ManagerContainer,
  VoteContainer2,
  CommentContainer2,
  FullBar,
  Bar,
  OrangeButton,
  Box,
  VoteList,
  ListBox,
  Button,
  Comment,
  CommentBox,
} from "./styled";

import {
  Item
} from "semantic-ui-react";


export const ProgressDetail = () => {
  const [commentValue, setCommentValue] = useState([]);

  // 댓글 입력 값이 변경될 때 호출되는 함수
  const handleCommentChange = (e) => {
    // 댓글 입력 값을 상태(state)에 저장
    setCommentValue(e.target.value);
  };

  // 댓글 등록 버튼을 클릭했을 때 호출되는 함수
  const handleCommentSubmit = () => {
    // 댓글 등록 처리 로직 추가
    console.log("댓글 등록:", commentValue);
    // 댓글 입력 값을 초기화
    setCommentValue("");
  };

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
              <VoteCoinButton top="32px" >
                <Typo size="15px" fontWight="700" color="#000">
                  코인으로 후원하기
                </Typo>
              </VoteCoinButton>
              <VoteAcoountButton top="32px" >
                <Typo size="15px" fontWight="700" color="#000">
                  계좌로 후원하기
                </Typo>
              </VoteAcoountButton>
            </ButtonContainer>
            <Line />
{/*
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
  */}


              <Box width="800px" height="auto" flexDirection="column">
              <Typo size="23px" fontWeight="600" top="25px" bottom="20px">
                후원 담당자
              </Typo>
              <Box width="800px" height="auto">
                <img src="/profile.svg" />
                <Box width="auto" height="auto" flexDirection="column">
                  <Typo left="10px" fontWeight="700" size="15px">
                    {selectedContent.manager}
                  </Typo>
                  <Typo left="10px" fontWeight="400" size="13px">
                    {selectedContent.organization}
                  </Typo>
                </Box>
              </Box>
              <Button top="20px" width="120px" height="40px">
                <Typo color="#333" size="15px" fontWeight="700">
                  연락하기
                </Typo>
              </Button>
            </Box>
            <Line />

            <TextContainer width="600px" height="auto">
              <Typo color="#333" size="22px" fontWeight="600" top="0px">
                응원 댓글
              </Typo>
              <Typo color="#767676" size="14px" fontWeight="400" top="0px">
                따스한 한 마디로 세상을 빛낼 수 있습니다.
              </Typo>
              <Box                    
height="auto" width="300px" bottom="20px" flexDirection="column">
                <Comment>
                  <Box
                    width="500px"
                    height="29px"
                    background="#fff"
                    alignItem="center"
                    top="3px"
                  >
                    <Typo size="14px" fontWeight="300" top="5px" left="5px">
                      <input
                        type="text"
                        value={commentValue} // 댓글 입력 값
                        onChange={handleCommentChange} // 댓글 입력 값 변경 이벤트 처리 함수
                        placeholder="응원댓글을 달아주세요."
                      />
                    </Typo>
                  </Box>
                  <OrangeButton
                    width="66px"
                    height="29px"
                    left="-10px"
                    top="4px"
                    onClick={handleCommentSubmit}
                  >
                    <Typo size="11px" color="#fff" fontWeight="600">
                      등록
                    </Typo>
                  </OrangeButton>
                </Comment>

                <CommentBox>
                  {selectedContent.comments.map((comment, index) => (
                    <VoteList key={index}>
                      <Box
                        width="40px"
                        height="40px"
                        borderRadius="20px"
                        background="#F1F1F1"
                      >
                        <img src="/vote.svg" />
                      </Box>
                      <Box width="200" height="40px" flexDirection="column">
                        <Typo left="10px" fontWeight="700" size="15px">
                          {comment.comment}
                        </Typo>
                        <Typo left="10px" fontWeight="400" size="14px">
                          {comment.userId} •
                          <Typo left="10px" fontWeight="400" size="14px">
                            {comment.date}
                          </Typo>
                        </Typo>
                      </Box>
                    </VoteList>
                  ))}
                </CommentBox>
              </Box>
            </TextContainer>

              <Line />
              <Blank />
              <Typo size="15px" left="0px" top="0px">
                후원 기간 : 2023-07-23 ~ 2023-08-23 •{" "}
                <img src="/tag.svg" alt="테그" />
                {selectedContent.organization}
              </Typo>
              <Line />
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
                <VoteCoinButton top="15px" >
                  <Typo size="15px" fontWight="700" color="#000">
                    코인으로 후원하기
                  </Typo>
                </VoteCoinButton>
                <VoteAcoountButton top="15px">
                  <Typo size="15px" fontWight="700" color="#000">
                    계좌로 후원하기
                  </Typo>
                </VoteAcoountButton>
              </VoteContainer2>
              <Blank />
              <ListBox>
                {List.map((voted, index) => (
                  <VoteList key={index}>
                    <Box
                      width="40px"
                      height="40px"
                      borderRadius="20px"
                      background="#F1F1F1"
                    >
                      <img src="/vote.svg" />
                    </Box>
                    <Box width="200" height="40px" flexDirection="column">
                      <Typo left="10px" fontWeight="400" size="15px">
                        {voted.userId}
                      </Typo>
                      <Typo left="10px" fontWeight="700" size="14px" margin-bottom="10px">
                        {voted.howMany}개&nbsp;&nbsp;&nbsp;&nbsp;•
                        <Typo left="10px" fontWeight="400" size="14px">
                          {voted.date}
                        </Typo>
                      </Typo>
                    </Box>
                  </VoteList>
                ))}
              </ListBox>
              {/* <ButtonContainer2>
                <Button basic color="green">
                  모두보기
                </Button>
                <Link to="/rank">
                  <Button basic color="black">
                    ☆기부순위 보러가기
                  </Button>
                </Link>
              </ButtonContainer2>*/}
            </VoteContainer>
          </GridItem2>
        </GridContainer>
      </BackContainer>
    </Root>
  );
};
