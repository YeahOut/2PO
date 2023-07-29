import styled from "styled-components";
import notiBeforeDonationIcon from "../../../../assets/icon/noti-before-donation.png";
import TokenIcon from "../../../../assets/icon/2po-toekn-logo.png";
import tokenButton from "../../../../assets/icon/tokenbutton.png";
import connectWalletBtn from "../../../../assets/icon/connect-wallet-button.png";
import voteDonation from "../../../../assets/image/vote-next-donation.png";
import voteDonationDetail from "../../../../assets/image/vote-next-donation-detail.png";
import donateOngoing from "../../../../assets/image/donate-ongoing.png";
import donateOngoingDetail from "../../../../assets/image/donate-ongoing-detail.png";

export const TokenContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

//  토큰 사용법 (제목)

export const TitleContainer = styled.div`
  width: 100%;
  height: 181px;
  flex-shrink: 0;
  background: #f0f0f0;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 54px;
  color: #333333;
  margin-bottom: 10px;
  font-family: "Noto Sans KR", "Inter";
  font-weight: 700;
  margin-top: 10px;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #666666;
  margin-top: 20px;
`;

//  잠깐 기부하기 전에

export const NotiBeforeDonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 819px;
  height: 182px;
  border-radius: 20px;
  background: rgba(255, 116, 37, 0.1);
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  padding-left: 20px;
`;

export const NotiTitleContainer = styled.div`
  display: flex;
  flex-direction: row; // 문구와 아이콘을 가로로 나란히
  align-items: center; // 세로 중앙 정렬 (문구와 아이콘)
`;

export const NotiTitle = styled.h3`
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-color: #000000;
  margin-left: 0px; // 아이콘과 문구 사이의 간격
  margin-top: 3px;
  align-items: flex-start;
`;

export const NotiIcon = styled.div`
  background-image: url(${notiBeforeDonationIcon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 36px;
  width: 36px;
  margin-right: 5px;
`;

export const NotiDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
`;

export const NotiDescription = styled.p`
  color: #000;
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3em;
  margin-bottom: 5px;
  text-align: left;
`;

// 안내 순서 컨테이너
export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px; // NotiBeforeDonationContainer와 같은 패딩을 적용
  margin-top: 40px;
  margin-bottom: 30px;
`;

// 제목 감쌈
export const IntroTitleContainer = styled.div`
  width: 819px; // NotiBeforeDonationContainer와 동일한 너비
  display: flex;
  align-items: flex-start;
  justify-content: flex-start; // 왼쪽 정렬
`;
//  제목 글자
export const IntroTitle = styled.h3`
  color: #000;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-: 20px;
`;

//지갑연동 버튼

export const ConnectWallet = styled.div`
  background-image: url(${connectWalletBtn});
  background-repeat: no-repeat;
  background-size: contain;

  width: 112px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 40px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);\
  border-radius: 10px;
  margin-left: 30px;
`;

export const TokenLogoTitleContainer = styled.div`
  display: flex;
  flex-direction: row; // 문구와 아이콘을 가로로 나란히
  align-items: center; // 세로 중앙 정렬 (문구와 아이콘)
  margin-top: 20px;
`;

export const TokenLogo = styled.div`
  background-image: url(${TokenIcon});
  background-repeat: no-repeat;
  background-size: contain;
  color: #ff985e;
  margin-right: 5px;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`;

export const TokenTitle = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 14px;
`;

export const TokenTitleButton = styled.button`
  background-image: url(${tokenButton});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 5px;
  width: 42px;
  height: 24px;
  flex-shrink: 0;
`;

export const IntroInfoDetail = styled.p`
  width: 747px;
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 10px;
`;

//이미지 컨테이너 가로
export const ImgContianerdRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

//이미지 컨테이너 세로
export const ImgContianerdCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

// 토큰으로 투표하기
export const VoteNextDonationImg1 = styled.div`
  background-image: url(${voteDonation});
  background-repeat: no-repeat;
  background-size: contain;

  width: 400px;
  height: 331px;
  flex-shrink: 0;
  border-radius: 40px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);\
  margin-top: 10px;
`;
export const VoteNextDonationImg2 = styled.div`
  background-image: url(${voteDonationDetail});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 15px;
  width: 400px;
  height: 331px;
  flex-shrink: 0;
  border-radius: 40px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);\
  margin-top: 10px;
  
`;

export const DonateOngoingImg1 = styled.div`
  background-image: url(${donateOngoing});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 15px;
  width: 572px;
  height: 344px;
  flex-shrink: 0;
  border-radius: 40px;

  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
`;

export const DonateOngoingImg2 = styled.div`
  background-image: url(${donateOngoingDetail});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 15px;
  width: 572px;
  height: 252.036px;
  flex-shrink: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  margin-top: 25px;
`;

// 사이드바
export const SidebarContainer = styled.div`
  position: fixed;
  right: 0; // 오른쪽에 고정
  width: 200px;
  height: auto;

  background-color: #f0f0f0;
  overflow: auto;
  border-radius: 10px;
  margin-right: 30px;
  padding-top: 10px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 10px;
`;

export const SidebarHeader = styled.h3`
  font-size: 20px;
  color: #333333;
  font-family: "Noto Sans KR", "Inter";
  font-weight: 700;
  margin: 10px;
`;

export const SidebarMenuItem = styled.li`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const SidebarMenuItemLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: #ff7425;
    font-weight: bold;
  }

  &.is-current {
    color: red;
  }
`;
// styled-components를 이용해 ScrollSpySidebar에 적용할 스타일을 만듭니다.
export const FixedSidebar = styled.div`
  position: fixed;
  top: 310px; // 200px은 예시입니다. 필요한 위치에 따라 변경하시면 됩니다.
  right: 0;
`;
