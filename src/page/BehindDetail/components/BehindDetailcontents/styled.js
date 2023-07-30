import styled from "styled-components";

export const BigBox = styled.div`
display: flex;
width:1470px;
flex-direction: column;
align-items: center;
height: 1000px;
`;

export const TextGroup = styled.div`
display: flex;
width: 648px;
padding-bottom: 0px;
flex-direction: column;
align-items: flex-start;
gap: -1px;
`;

export const Blank = styled.div`
width: 648px;
height: 0px;
flex-shrink: 0;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
`;

export const TextBox = styled.div`
display: flex;
width: 648px;
height: 280px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #333;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;

&::before {
    content: "gggggg";
    display: block; 
  }
`;

export const More = styled.div`
color: #333;
text-align: center;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px;
text-decoration-line: underline;

&::before {
    content: "더보기";
    display: block; 
  }
`;

export const Title = styled.div`
width: 551px;
height: 58px;
margin-top: 50px;
flex-shrink: 0;
color: #000;
text-align: center;
font-family: Noto Sans KR;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: normal;

&::before {
    content: "할머니가 코로나에 걸리셨어요";
    display: block; 
  }
`;

export const Line = styled.div`

width: 648px;
height: 1px;
flex-shrink: 0;
border-top: 1px solid #C8C8C8;
margin-top: 50px;
margin-bottom: 20px;

`;

export const ImageBox = styled.div`
margin-top: 40px;
width: 680px;
max-width: 100%;
display: flex;
flex-direction: row;
height: 400px;
`;
export const Image = styled.img`
width: 618px;
height: 400px;
border-radius: 10px;
`;


export const RightMovingBox = styled.div`
  position: absolute;
  top: 0;
  right: 20px; /* Adjust the right value as needed to control the horizontal position */
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: top 0.3s ease; /* Add smooth transition effect */

  /* Add any additional styles as needed */
  /* For example, if you want to style the content inside the box, you can do it here */
`;