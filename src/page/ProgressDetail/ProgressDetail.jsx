import React, { useEffect, useState } from "react";
import { Modal } from "./Modal/Modal";
import { useParams, Link } from "react-router-dom";
import { contents, List } from "../../utils/ProgressDetail";
import "./style.css"
import CoinAPI, {options} from "./CoinAPI/CoinAPI";
import {
  Root,
  TopBox,
  Typo,
  GridContainer,
  GridItem,
  Image,
  Image2,
  ImageContainer,
  BackContainer,
  VoteContainer,
  TextContainer,
  OrangeButton,
  ShareButton,
  ButtonContainer,
  FullBar,
  Bar,
  VoteList,
  ListBox,
  Button2,
  Comment,
  CommentBox,
  Box,
  CloseButton,
  ModalContent,
  Input,
} from "./styled";
import { Dropdown, Menu } from 'semantic-ui-react'


//import { Header, Button, Popup, Grid } from 'semantic-ui-react'

export const ProgressDetail = () => {

  const [selectedOption, setSelectedOption] = useState(options[0].value); // Set the initial selected option to the first one in the array
const handleOptionChange = (event) => {
  setSelectedOption(event.target.value); // 선택된 옵션의 value를 설정합니다.
};

  //모달창
  const [showFirstModal, setShowFirstModal] = useState(false); // 첫 번째 모달 상태
  const [showSecondModal, setShowSecondModal] = useState(false); // 두 번째 모달 상태

  const handleOpenFirstModal = () => {
    setShowFirstModal(true);
  };

  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
  };

  const handleOpenSecondModal = () => {
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  const handleCloseAndOpen = () => {
    setShowFirstModal(false);
    setShowSecondModal(true); // 두 번째 모달을 엽니다.
  };



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

     const totalDonationNumber = parseFloat(
       selectedContent.totalDonation.replace(/,/g, "")
     );
     const targetDonationNumber = parseFloat(
       selectedContent.targetDonation.replace(/,/g, "")
     );

          const commentValueNumber = parseFloat(
            commentValue.replace(/,/g, "")
          );

          let coinAPI = CoinAPI({ selectedOption });
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
              <Image src={selectedContent.image} />
            </ImageContainer>
            <TextContainer width="800px" height="auto">
              <Typo size="16px" fontWeight="400" color="#333" top="40px">
                {selectedContent.text}
              </Typo>
              <ButtonContainer>
                <OrangeButton onClick={handleOpenFirstModal} top="32px">
                  <Typo size="15px" fontWeight="700" color="#fff" top="5px">
                    코인으로 기부하기
                  </Typo>
                </OrangeButton>
                {showFirstModal && (
                  <Modal
                    isOpen={showFirstModal}
                    onClose={handleCloseFirstModal}
                  >
                    <ModalContent>
                      <Typo
                        size="20px"
                        fontWeight="700"
                        color="#333"
                        justifyContent="center"
                        top="30px"
                        bottom="10px"
                      >
                        코인 종류를 선택해주세요.
                      </Typo>
                      <label htmlFor="dropdown"></label>
                      <select
                        id="dropdown"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className="dropdown-menu"
                      >
                        {options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <Typo
                        size="20px"
                        fontWeight="700"
                        color="#333"
                        justifyContent="center"
                        top="50px"
                        bottom="10px"
                      >
                        기부 수량을 입력해주세요.
                      </Typo>

                      <Input
                        type="text"
                        value={commentValue} // 댓글 입력 값
                        onChange={handleCommentChange} // 댓글 입력 값 변경 이벤트 처리 함수
                        background="#E5E7EB"
                        placeholder="투표할 수량을 입력해주세요"
                      />
                      <Typo
                        size="13px"
                        color="#647488"
                        top="10px"
                        right="-290px"
                      >
                        KRW: {(coinAPI * commentValueNumber).toFixed(2)}원
                      </Typo>
                      <Box width="450px" height="auto" gap="20px">
                        <Typo
                          size="16px"
                          color="#647488"
                          top="20px"
                          bottom="10px"
                          left="30px"
                          right="30px"
                        >
                          모금 비율:{" "}
                          {(
                            ((totalDonationNumber +
                              coinAPI * commentValueNumber) /
                              targetDonationNumber) *
                            100
                          ).toFixed(2)}
                          %
                        </Typo>
                        <Typo
                          size="16px"
                          color="#647488"
                          top="20px"
                          bottom="10px"
                        >
                          지급 예정 토큰:{" "}
                          {(coinAPI * commentValueNumber).toFixed(0)}PO
                        </Typo>
                      </Box>
                      <Box
                        width="400px"
                        height="auto"
                        top="15px"
                        margin-bottom="0px"
                        left="150px"
                      >
                        <CloseButton
                          background="#FF7425"
                          onClick={handleCloseAndOpen}
                          right="20px"
                        >
                          <Typo size="15px" fontWeight="700" color="#fff">
                            확인
                          </Typo>
                        </CloseButton>
                        <CloseButton onClick={handleCloseFirstModal}>
                          <Typo size="15px" fontWeight="700" color="#fff">
                            닫기
                          </Typo>
                        </CloseButton>
                      </Box>
                    </ModalContent>
                  </Modal>
                )}
                {showSecondModal && (
                  <Modal
                    isOpen={showSecondModal}
                    onClose={handleCloseSecondModal}
                  >
                    <ModalContent>
                      <Typo
                        size="20px"
                        fontWeight="700"
                        color="#333"
                        justifyContent="center"
                        top="45px"
                        bottom="30px"
                      >
                        후원해주셔서 감사합니다.
                      </Typo>
                      <Image2 src="/donate.png" />
                      <Typo size="16px" color="#333" bottom="20px" top="30px">
                        모든 거래는 블록체인 상에서 안전하게 거래되고 투명하게
                        공개됩니다.
                      </Typo>
                      <Box
                        width="400px"
                        height="auto"
                        top="15px"
                        flexDirection="row"
                        justifyContent="center"
                        gap="20px"
                      >
                        <CloseButton
                          background="#FF7425"
                          onClick={handleCloseSecondModal}
                          left="140px"
                        >
                          <Typo size="15px" fontWeight="700" color="#fff">
                            확인
                          </Typo>
                        </CloseButton>
                      </Box>
                    </ModalContent>
                  </Modal>
                )}

                <ShareButton top="32px">
                  <Typo size="15px" fontWeight="700" color="#000" top="5px">
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
              <Button2 top="35px" width="120px" height="40px">
                <Typo color="#333" size="15px" fontWeight="700" top="7px">
                  연락하기
                </Typo>
              </Button2>
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
                    top="3px"
                  >
                    <Typo size="14px" fontWeight="300" top="2px" left="5px">
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
                    top="3px"
                  >
                    <Typo size="13px" color="#fff" fontWeight="700" top="3px">
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
                        top="-2px"
                      >
                        <img src="/vote.svg" />
                      </Box>
                      <Box width="200" height="40px" flexDirection="column">
                        <Typo left="10px" fontWeight="700" size="15px">
                          {comment.comment}
                        </Typo>
                        <Typo left="10px" fontWeight="400" size="14px">
                          {comment.userId} &nbsp;&nbsp;•
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
                <Typo size="20px" fontWight="700">
                  {selectedContent.totalDonation}원 /{" "}
                  {selectedContent.targetDonation}원
                </Typo>
              </Box>
              <FullBar>
                <Bar width={selectedContent.barWidth} />
              </FullBar>
              <Box width="313px" height="24px">
                <Typo size="15px" fontWight="700" color="#707070">
                  30명 기부
                </Typo>
              </Box>
              <OrangeButton onClick={handleOpenFirstModal} top="15px">
                <Typo size="15px" fontWeight="700" color="#fff" top="5px">
                  코인으로 기부하기
                </Typo>
              </OrangeButton>

              {showFirstModal && (
                <Modal isOpen={showFirstModal} onClose={handleCloseFirstModal}>
                  <ModalContent>
                    <Typo
                      size="20px"
                      fontWeight="700"
                      color="#333"
                      justifyContent="center"
                      top="30px"
                      bottom="10px"
                    >
                      코인 종류를 선택해주세요.
                    </Typo>
                    <label htmlFor="dropdown"></label>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className="dropdown-menu"
                    >
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <Typo
                      size="20px"
                      fontWeight="700"
                      color="#333"
                      justifyContent="center"
                      top="50px"
                      bottom="10px"
                    >
                      기부 수량을 입력해주세요.
                    </Typo>

                    <Input
                      type="text"
                      value={commentValue} // 댓글 입력 값
                      onChange={handleCommentChange} // 댓글 입력 값 변경 이벤트 처리 함수
                      background="#E5E7EB"
                      placeholder="투표할 수량을 입력해주세요"
                    />
                    <Typo size="13px" color="#647488" top="10px" right="-290px">
                      KRW : 52383.1원
                    </Typo>
                    <Box width="400px" height="auto" gap="20px">
                      <Typo
                        size="16px"
                        color="#647488"
                        top="20px"
                        bottom="10px"
                        left="30px"
                        right="30px"
                      >
                        모금 비율: 0.3%
                      </Typo>
                      <Typo
                        size="16px"
                        color="#647488"
                        top="20px"
                        bottom="10px"
                      >
                        지급 예정 토큰: 120PO (2PO)
                      </Typo>
                    </Box>
                    <Box
                      width="400px"
                      height="auto"
                      top="15px"
                      margin-bottom="0px"
                      left="150px"
                    >
                      <CloseButton
                        background="#FF7425"
                        onClick={handleCloseAndOpen}
                        right="20px"
                      >
                        <Typo size="15px" fontWeight="700" color="#fff">
                          확인
                        </Typo>
                      </CloseButton>
                      <CloseButton onClick={handleCloseFirstModal}>
                        <Typo size="15px" fontWeight="700" color="#fff">
                          닫기
                        </Typo>
                      </CloseButton>
                    </Box>
                  </ModalContent>
                </Modal>
              )}
              {showSecondModal && (
                <Modal
                  isOpen={showSecondModal}
                  onClose={handleCloseSecondModal}
                >
                  <ModalContent>
                    <Typo
                      size="20px"
                      fontWeight="700"
                      color="#333"
                      justifyContent="center"
                      top="90px"
                      bottom="30px"
                    >
                      기부가 완료되었습니다.
                    </Typo>
                    <Typo size="16px" color="#647488" bottom="10px">
                      계정: Account1
                    </Typo>
                    <Typo size="16px" color="#647488" bottom="20px">
                      보유 코인: 10,000 ETH
                    </Typo>
                    <Box
                      width="400px"
                      height="auto"
                      top="15px"
                      flexDirection="row"
                      justifyContent="center"
                      gap="20px"
                    >
                      <CloseButton
                        background="#FF7425"
                        onClick={handleCloseSecondModal}
                        left="140px"
                      >
                        <Typo size="15px" fontWeight="700" color="#fff">
                          확인
                        </Typo>
                      </CloseButton>
                    </Box>
                  </ModalContent>
                </Modal>
              )}
              <ShareButton bottom="10px">
                <Typo size="15px" fontWight="700" color="#000" top="5px">
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
                        {voted.howMany}원&nbsp;&nbsp;&nbsp;&nbsp;•
                        <Typo left="10px" fontWeight="400" size="14px">
                          {voted.date}
                        </Typo>
                      </Typo>
                    </Box>
                  </VoteList>
                ))}
              </ListBox>
              <Link to={`/rank`}>
                <Button2>
                  <img src="/star.svg" />
                  <Typo color="#333" size="15px" fontWeight="700" top="5px">
                    기부순위 보러가기
                  </Typo>
                </Button2>
              </Link>
            </VoteContainer>
          </GridItem>
        </GridContainer>
      </BackContainer>
    </Root>
  );
};