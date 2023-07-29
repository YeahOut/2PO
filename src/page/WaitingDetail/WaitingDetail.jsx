import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { contents, List } from "../../utils/WaitingDetail";
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
  OrangeButton,
  ShareButton,
  ButtonContainer,
  Box,
  FullBar,
  Bar,
  VoteList,
  ListBox,
  Button,
  Comment,
  CommentBox,
} from "./styled";

export const WaitingDetail = () => {
  const [scrollY, setScrollY] = useState(0);
  const [voteContainerTop, setVoteContainerTop] = useState(0);
  const voteContainerHeight = 670; // VoteContainer의 높이 설정 (고정값 또는 동적으로 계산된 값)
  const windowHeight = window.innerHeight;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const gridItem = document.getElementById("grid-item");
    const gridItemRect = gridItem.getBoundingClientRect();
    const voteContainerTop = gridItemRect.top + scrollY;

    // VoteContainer가 화면 밖으로 벗어나지 않도록 제한
    const maxTop = windowHeight - voteContainerHeight - 40;
    const limitedVoteContainerTop = Math.min(maxTop, voteContainerTop);

    setVoteContainerTop(limitedVoteContainerTop);
  }, [scrollY]);

    const [commentValue, setCommentValue] = useState("");

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
            <TextContainer width="800px" height="auto">
              <Typo size="16px" fontWeight="400" color="#333" top="40px">
                {selectedContent.text}
              </Typo>
              <ButtonContainer>
                <OrangeButton top="32px">
                  <Typo size="15px" fontWeight="700" color="#fff">
                    토큰으로 투표하기
                  </Typo>
                </OrangeButton>
                <ShareButton top="32px">
                  <Typo size="15px" fontWeight="700" color="#000">
                    공유하기
                  </Typo>
                </ShareButton>
              </ButtonContainer>
            </TextContainer>
            <Box width="800px" height="auto" flexDirection="column">
              <Typo size="23px" fontWeight="600" top="35px" bottom="35px">
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
              <Button top="35px" width="120px" height="40px">
                <Typo color="#333" size="15px" fontWeight="700">
                  연락하기
                </Typo>
              </Button>
            </Box>
            <TextContainer width="800px" height="auto">
              <Typo color="#333" size="22px" fontWeight="600" top="20px">
                응원 댓글
              </Typo>
              <Typo color="#767676" size="14px" fontWeight="400" top="20px">
                따스한 한 마디로 세상을 빛낼 수 있습니다.
              </Typo>
              <Box height="auto" bottom="20px" flexDirection="column">
                <Comment>
                  <Box
                    width="650px"
                    height="29px"
                    background="#fff"
                    left="25px"
                    alignItem="center"
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
          </GridItem>

          <GridItem id="grid-item">
            <VoteContainer style={{ top: `${voteContainerTop}px` }}>
              <Box width="313px" height="24px" top="20px">
                <Typo size="15px" fontWight="700" color="#707070">
                  {selectedContent.totalTokens}/{selectedContent.targetTokens}
                </Typo>
              </Box>
              <FullBar>
                <Bar></Bar>
              </FullBar>
              <Box width="313px" height="24px">
                <Typo size="15px" fontWight="700" color="#707070">
                  30명 투표
                </Typo>
              </Box>
              <OrangeButton>
                <Typo size="15px" fontWight="700" color="#fff">
                  토큰으로 투표하기
                </Typo>
              </OrangeButton>
              <ShareButton bottom="10px">
                <Typo size="15px" fontWight="700" color="#000">
                  공유하기
                </Typo>
              </ShareButton>
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
                      <Typo left="10px" fontWeight="700" size="14px">
                        {voted.howMany}개 •
                        <Typo left="10px" fontWeight="400" size="14px">
                          {voted.date}
                        </Typo>
                      </Typo>
                    </Box>
                  </VoteList>
                ))}
              </ListBox>
              <Link to={`/progress`}>
                <Button>
                  <img src="/star.svg" />
                  <Typo color="#333" size="15px" fontWeight="700">
                    기부하러가기
                  </Typo>
                </Button>
              </Link>
            </VoteContainer>
          </GridItem>
        </GridContainer>
      </BackContainer>
    </Root>
  );
};
