import styled, { css } from "styled-components";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom ||
      "0px"} ${props.left || "0px"}`};
`;

const fontWeight = css`
  font-weight: ${(props) => props.fontWeight || "600"};
`;

export const Root = styled.div``;

export const BackContainer = styled.div`
  width: 100%;
  height: 1780px;
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
  margin-left: 90px;
  ${customMargin}
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 1780px;
  display: grid;
  grid-template-columns: 1000px 1fr;
  background-color: yellow;
`;

export const GridItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
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
  width: 364px;
  height: 670px;
  padding-bottom: 0px;
  align-items: flex-start;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
`;

export const TextContainer = styled.div`
         display: flex;
         width: 760px;
         height: auto;
         flex-direction: column;
         flex-shrink: 0;
         margin-top: 40px;
         border-top: solid 2px lightgray;
         border-bottom: solid 2px lightgray;
       `;
export const ButtonContainer = styled.div`
  display: flex;
  width: 760px;
  flex-direction: row;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
gap:50px;
margin-bottom: 32px;
background-color: #FFFFFF;
`;

export const VoteButton = styled.button`
         display: flex;
         width: 315.7px;
         min-height: 48px;
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
