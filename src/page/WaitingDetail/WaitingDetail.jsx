import React, { useEffect, useState } from "react";
import { Modal } from "./Modal/Modal";
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
  CloseButton,
  ModalContent,
  Input,
} from "./styled";
import Web3 from "web3";

export const WaitingDetail = () => {

  // 컨트랙트 관련
// Infura Goerli
const infuraUrl = `https://goerli.infura.io/v3/7f43f66b07a54707985b23f17e60410a`;
const web3 = new Web3(infuraUrl);

// 컨트랙스 주소와 ABI 정의
const contractAddress = "0x6F3a7F2b3Fad8ccA0A9800001D9779BBf895B316"; // 여기에 컨트랙트 주소를 입력합니다.
const contractABI = [
  [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "snapshot",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "Snapshot",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "snapshotId",
          type: "uint256",
        },
      ],
      name: "balanceOfAt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "snapshotId",
          type: "uint256",
        },
      ],
      name: "totalSupplyAt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
];

// 컨트랙트 인스턴스를 생성합니다.
const contract = new web3.eth.Contract(contractABI, contractAddress);
console.log(contract);
//토큰 수량 =================================
const [TokenAmount, setTokenAmount] = useState("");
const [receiverAddress, setReceiverAddress] = useState("");
const handleReceiverAddressChange = (e) => setReceiverAddress(e.target.value);

// 토큰 수량 값이 변경될 때 호출되는 함수
const handleTokenAmountChange = (e) => {
  // 토큰 수량 값을 상태(state)에 저장
  setTokenAmount(e.target.value);
};

// 토큰 등록 버튼을 클릭했을 때 호출되는 함수
const handleTokenSubmit = () => {
  // 토큰 등록 처리 로직 추가

  console.log("컨트랙트 주소: ", contract);
  console.log("수량 입력: ", TokenAmount);
  // 토큰 입력 값을 초기화
  setTokenAmount("");
};

const totalButton =() => {
  handleTokenSubmit();
  handleCloseAndOpen();
  handleToken();
};  



  //  이더리움 기부 처리 함수 (미정)
  const handleToken = async () => {
    const accounts = await web3.eth.getAccounts(); // 사용자 계정 가져오기
    const sender = accounts[0]; // 보내는 사람의 주소
    const receiver = "0x2401bC67706121CCa309d6cd01a05E2fdF9Cff4a";     // 기부 대상자 지갑 주소
    const amount = web3.utils.toWei(/*이더리움의 양*/ TokenAmount, "ether"); // 이더리움의 양을 Wei 단위로 변환
    console.log("기부 대상자 지갑주소 진짜: ", receiver);

    // 이더리움 전송하기
    await web3.eth
      .sendTransaction({
        from: sender,
        to: receiver,
        value: amount,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  }; 
  //-- 컨트랙트 관련

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
         // 2초 뒤 두 번째 모달 열기
         setTimeout(() => {
          setShowSecondModal(true); //두 번쨰 모달을 엽니다.
        }, 2000); 
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

  return (
    <Root>
      <BackContainer>
        <TopBox>
          <Typo size="37px" left="100px">
            {selectedContent.title}
          </Typo>
          <Typo size="15px" left="100px" top="20px">
            후원 기간 : 후원 대상 선정으로부터 1달 &nbsp;&nbsp;•&nbsp;&nbsp;
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
                    토큰으로 투표하기
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
                        bottom="30px"
                      >
                        사용할 토큰을 입력해주세요.
                      </Typo>
                      <Box width="400px" height="auto" gap="50px" >
                        <Typo size="16px" color="#647488" bottom="10px" left="30px">
                          계정: Account1
                        </Typo>
                        <Typo size="16px" color="#647488" bottom="10px">
                          보유 토큰: 10,000개 (2PO)
                        </Typo>
                      </Box>

                      <Input
                        type="text"
                        value={TokenAmount} // 토큰 수량 값
                        onChange={handleTokenAmountChange} // 토큰 수량 값 변경 이벤트 처리 함수
                        background="#E5E7EB"
                        placeholder="투표할 수량을 입력해주세요"
                      />

                      <Box
                        width="400px"
                        height="auto"
                        top="15px"
                        flexDirection="row"
                        justifyContent="center"
                        gap="20px"
                      >
                  
                        <OrangeButton
                    width="120px"
                    height="35px"
                    onClick={totalButton}
                    right="20px"
                  >
                    <Typo size="15px" color="#fff" fontWeight="700">
                      확인
                    </Typo>
                  </OrangeButton>

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
                        top="40px"
                        bottom="30px"
                      >
                        투표가 완료되었습니다.
                      </Typo>
                      <Typo size="16px" color="#647488" bottom="10px">
                        계정: Account1
                      </Typo>
                      <Typo size="16px" color="#647488" bottom="20px">
                        보유 토큰: 10,000개 (2PO)
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
              <Button top="35px" width="120px" height="40px">
                <Typo color="#333" size="15px" fontWeight="700" top="7px">
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
            <VoteContainer
              style={{
                top: `${voteContainerTop}px`,
              }}
            >
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
              <OrangeButton onClick={handleOpenFirstModal} top="32px">
                <Typo size="15px" fontWeight="700" color="#fff" top="5px">
                  토큰으로 투표하기
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
                      top="60px"
                      bottom="30px"
                    >
                      사용할 토큰을 입력해주세요.
                    </Typo>
                    <Box width="400px" height="auto" gap="20px">
                      <Typo size="16px" color="#647488" bottom="10px">
                        계정: Account1
                      </Typo>
                      <Typo size="16px" color="#647488" bottom="10px">
                        보유 토큰: 10,000개 (2PO)
                      </Typo>
                    </Box>
                    <Input
                      type="text"
                      value={commentValue} // 댓글 입력 값
                      onChange={handleCommentChange} // 댓글 입력 값 변경 이벤트 처리 함수
                      background="#E5E7EB"
                      placeholder="투표할 수량을 입력해주세요"
                    />
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
                        onClick={handleCloseAndOpen}
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
                      top="60px"
                      bottom="30px"
                    >
                      투표가 완료되었습니다.
                    </Typo>
                    <Typo size="16px" color="#647488" bottom="10px">
                      계정: Account1
                    </Typo>
                    <Typo size="16px" color="#647488" bottom="20px">
                      보유 토큰: 10,000개 (2PO)
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
                        {voted.howMany}
                        개&nbsp;&nbsp;&nbsp;&nbsp;•
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
                  <Typo color="#333" size="15px" fontWeight="700" top="5px">
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
