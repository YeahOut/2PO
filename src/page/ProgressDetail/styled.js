import styled, { css } from "styled-components";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom ||
      "0px"} ${props.left || "0px"}`};
`;

const fontWeight = css`
  font-weight: ${(props) => props.fontWeight || "600"};
`;

export const Root = styled.div`
`;

export const BackContainer = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100vw;
  height: 181px;
  flex-shrink: 0;
`;

export const Typo = styled.div`
  display: flex;
  color: ${(props) => props.color || "black"};
  font-family: Inter;
  font-size: ${(props) => props.size || "15px"};
  font-style: normal;
  ${fontWeight}
  line-height: 129.73%;
  letter-spacing: -0.8px;
  ${customMargin}
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 1780px;
  display: grid;
  grid-template-columns: 1000px 1fr;
`;

export const GridItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 800px;
  height: 450px;
`;

export const Image = styled.img`
  width: 800px;
  height: 450px;
  border-radius: 12px;
`;

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 364px;
  height: 670px;
  align-items: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
  position: sticky;
  gap: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: ${(props) => props.width || "0"};
  height: ${(props) => props.height || "0"};
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 40px;
  border-top: solid 2px lightgray;
  border-bottom: solid 2px lightgray;
  text-align: justify;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  width: ${(props) => props.width || "0"};
  height: ${(props) => props.height || "0"};
  background: ${(props) => props.background || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
  flex-shrink: 0;
  ${customMargin}
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 800px;
  flex-direction: row;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  gap:90px;
  margin-bottom: 32px;
  justify-content: center; /* 가운데 정렬을 추가 */
`;

export const OrangeButton = styled.button`
  display: flex;
  width: ${(props) => props.width || "315.7px"};
  height: ${(props) => props.height || "48px"};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #ff7425;
  &:hover {
    background: #d55711;
  }
  ${customMargin};
`;

export const ShareButton = styled.button`
  display: flex;
  width: 315.7px;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  border: 2px solid #ff7425;
  &:hover {
    background: #f1f1f1;
  }
  ${customMargin};
`;

export const FullBar = styled.div`
  width: 318.827px;
  height: 26.704px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
`;

export const Bar = styled.div`
width: ${(props) => props.width || "200px"};
height: 25.659px;
  flex-shrink: 0;
  background: #ff7425;
  border-radius: 5px;
`;

export const ListBox = styled.div`
  display: flex;
  width: 315.7px;
  height: 325px;
  flex-direction: column;
  gap: 25px;
  border-top: solid 4px #e6f6ef;
  border-bottom: solid 4px #e6f6ef;
  padding-top: 10px;
  overflow: auto; /* 스크롤이 생기도록 설정합니다. */
`;

export const VoteList = styled.div`
  display: flex;
  width: 290px;
  height: 50px;
  padding-left: 10px;
`;

export const Button2 = styled.button`
  display: flex;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: 7px 25.48px 9px 26px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #c8c8c8;
  background: #fff;
  &:hover {
    background: #f1f1f1;
  }
  ${customMargin};
`;

export const Comment = styled.div`
  display: flex;
  width: 800px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #d9d9d9;
  gap: 40px;
  align-item: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
`;

export const CommentBox = styled.div`
         display: flex;
         flex-direction: column;
         width: 800px;
         height: 350px;
         flex-shrink: 0;
         background: #fff;
         margin-top: 20px;
         margin-bottom: 20px;
         overflow: auto; /* 스크롤이 생기도록 설정합니다. */
         gap: 20px;
         padding-top: 10px;
       `;

       export const CloseButton = styled.button`
       display: flex;
       width: 120px;
       height: 35px;
       flex-shrink: 0;
       border-radius: 10px;
       background: ${(props) => props.background || "#6B7280"};
       align-items: center;
       justify-content: center;
       top: "10px";
       ${customMargin}
     `;
     
     export const ModalContent = styled.div`
     display:flex;
     flex-direction: column;
       width: 500px;
       height: 380px;
       flex-shrink: 0;
       border: 1px solid #e5e7eb;
       background: #fff;
       align-items: center;
       border-radius: 20px;
     `;
     
     export const Input = styled.input`
       width: 400px;
       height: 40px;
       flex-shrink: 0;
       border-radius: 10px;
       background: #e5e7eb;
     `;
     

     