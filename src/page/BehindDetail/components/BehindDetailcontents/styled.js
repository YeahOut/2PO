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
    content: "안녕하세요! 제 이름은 이도윤입니다. 저를 위해 캠패인을 열어준 모든 사람들과 울산청소년지원센터에게 감사의 말씀드립니다! 저는 작년에 울산에서 올라와서 1년 반 동안 긱사 생활하고 있는데 맨날 나가서 밥사먹느라 건강이많이 나빠져있고, 식비가 너무 많이 나가서 제대로 된 밥을 못 먹고 있습니다. 사실 피그마로 디자인하는 거 그룹화 하려다가 지금 다 터져버려서 이거 css 형식으로 어떻게 전환될지 하나도 모르겠습니다. 일단은 최대한 옮기는 걸로 하고, 다들 깃허브는 하셨나요? 넵 우리는 일주일 밖에 시간이 남지않아서 하루에 한 번씩 커밋하는 걸로규칙을 정하겠습니다. 그리고 이 일주일동안 제대로 안하고 놀면 안해! 첫 해커톤인데 후회없이 해봐야죠. 사실 제가 팀원 많은 걸 좋아하는 타입은 아닙니다. 그래도 2PO 한 번 믿어볼게요이. 4명이 딱 적당한 거 같애 이 인원이어야 자기가 없으면 팀이 안 돌아간다는 마인드로 프로젝트에 참여하길래, 지금 이 텍스트 쓰는게 제 디자인의 마지막 입니다. 그래서 주저리 주저리 써봤고 다들 한 번 화이팅 하자이 ";
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