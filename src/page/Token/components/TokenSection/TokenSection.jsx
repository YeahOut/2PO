import React from "react";
import {
  Description,
  NotiTitle,
  NotiTitleContainer,
  NotiBeforeDonationContainer,
  Title,
  TitleContainer,
  TokenContainer,
  NotiIcon,
  NotiDescription,
  NotiDescriptionContainer,
  IntroTitle,
  IntroContainer,
  IntroTitleContainer,
  TokenLogoTitleContainer,
  TokenTitle,
  TokenLogo,
  TokenTitleButton,
  IntroInfoDetail,
  ImgContianerdRow,
  VoteNextDonationImg1,
  VoteNextDonationImg2,
  ImgContianerdCol,
  DonateOngoingImg1,
  DonateOngoingImg2,
  ConnectWallet,
  FixedSidebar,
} from "./styled.js";
import ScrollSpySidebar from "../ScrollSpySidebar";
//import notiBeforeDonationIconSrc from "../../../../assets/icon/noti-before-donation.png";

const sectionIds = ["1.지갑 연동", "2. 토큰 투표", "3. 기부 프로젝트 선택"]; // 각 섹션에 해당하는 id들입니다.
export const TokenInfo = () => {
  return (
    <TokenContainer>
      {/* <TitleContainer>
                <Title>
                    토큰 사용법
                </Title>
                <Description>
                    당신의 작은 기부가 우리 모두의 큰 변화를 만들 수 있습니다. 지금 바로 토큰으로 희망을 전하세요!
                </Description>
            </TitleContainer> */}
      <FixedSidebar>
        <ScrollSpySidebar items={sectionIds} />
      </FixedSidebar>

      <NotiBeforeDonationContainer>
        <NotiTitleContainer>
          <NotiIcon />
          <NotiTitle>잠깐 기부하기 전에!</NotiTitle>
        </NotiTitleContainer>
        <NotiDescriptionContainer>
          <NotiDescription>
            1. 기부런은 기부 시 지원되는 암호화폐는 비트코인(BTC),
            이더리움(ETH), 테더 (USDT) 3가지 입니다.
          </NotiDescription>
          <NotiDescription>
            2. 기부를 한 후 기부한 암호화폐를 기부 시점의 원화 가치에 비례하여
            2PlusOne(2PO)토큰을 드립니다.
          </NotiDescription>
          <NotiDescription>
            3. SBT 발행은 기부금이 기부 대상자에게 완전히 전달된 이후에
            가능합니다. 기부 진행상황 보기
          </NotiDescription>
        </NotiDescriptionContainer>
      </NotiBeforeDonationContainer>
      <IntroContainer>
        <IntroTitleContainer>
          <IntroTitle id={sectionIds[0]}>2PO 토큰 소개</IntroTitle>
        </IntroTitleContainer>
        <TokenLogoTitleContainer>
          <TokenLogo />
          <TokenTitle>2PlusOne</TokenTitle>
          <TokenTitleButton />
        </TokenLogoTitleContainer>
        <IntroInfoDetail>
          2PO 토큰은 본 기부 플랫폼에서 사용되는 암호화폐로, 기부 프로젝트에
          대한 투표나 직접적인 기부에 사용됩니다. 이 토큰을 통해 사용자는 다양한
          기부 프로젝트에 참여하고, 세상을 바꾸는 데 일조할 수 있습니다.
        </IntroInfoDetail>
        <IntroTitle id={sectionIds[1]}>
          1. 암호화폐 지갑을 연동하세요. 우측 상단의 ‘지갑 연동’ 버튼 클릭.
        </IntroTitle>
        <ConnectWallet />
        <IntroTitle>2. 토큰으로 투표하기</IntroTitle>
        <IntroInfoDetail>
          ‘기부하기’ 카테고리의 ‘대기중’ 페이지를 클릭하면 다음 기부 진행을 위한
          기부 대상자를 선택할 수 있습니다. 목표 토큰 수를 달성하면 해당 기부
          사업을 진행시킬 수 있습니다. 먼저 '투표하기' 버튼을 클릭하여 투표 창을
          엽니다. 투표하고자 하는 프로젝트를 선택하고, 투표하려는 토큰 수량을
          입력합니다. 확인 버튼을 클릭하면 투표가 완료됩니다.
        </IntroInfoDetail>
        <ImgContianerdRow>
          <VoteNextDonationImg1 />
          <VoteNextDonationImg2 />
        </ImgContianerdRow>
        <IntroTitle id={sectionIds[2]}>3. 기부 프로젝트 선택</IntroTitle>
        <IntroInfoDetail>
          ‘기부하기’ 카테고리 중 ‘진행중’을 선택합니다. 원하는 양을 정한 후
          토큰으로 기부하기 버튼을 클릭합니다. 목표금액에 달성하면 사업 종료로
          바뀐 후 기부금 전달이 시작됩니다. 목표금액에 달성하지 않더라도 사업
          기간이 만료가 되면 해당 금액만큼 기부금이 기부 대상자에게 전달 됩니다.
          진행과정은 블록체인을 통해 투명하게 공개됩니다. 관심 있는 프로젝트를
          별 모양을 클릭하여 즐겨찾기 할 수 있습니다.
        </IntroInfoDetail>
        <ImgContianerdCol>
          <DonateOngoingImg1 />
          <DonateOngoingImg2 />
        </ImgContianerdCol>
      </IntroContainer>
    </TokenContainer>
  );
};
