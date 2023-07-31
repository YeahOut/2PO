import React from "react";
import {TextBox, Typo, BackContainer, Image, ImageBox, TypoBox} from "./styled";

export const IntroSection = () => {
  return (
    <BackContainer>
      <TextBox>
        <Typo size="48px" top="30px" bottom="30px">
          <Typo size="48px" color="#FF7425">
            기부런
          </Typo>
          은!
        </Typo>
        <Typo size="24px" justifyContent="flex-start" top="20px" bottom="20px">
          1. 나눔
        </Typo>
        <TypoBox>
          <Typo size="18px" fontWeight="600" bottom="50px">
            기부런은 나눔의 가치를 중요하게 여기며, 사용자들이 소중한 가치를
            공유할 수 있도록 돕습니다. 사용자들이 코인으로 기부하면서 누구나
            자신의 작은 기부가 큰 변화를 이끌어내는 데에 도움이 되고자 합니다.
          </Typo>
        </TypoBox>
        <ImageBox>
          <Image src="./기부비하인드.png" />
          <Image src="./투표하기.png" />
        </ImageBox>
        <Typo size="24px" justifyContent="flex-start" top="20px" bottom="20px">
          2. 신뢰
        </Typo>
        <Typo size="18px" fontWeight="600" bottom="50px">
          기부런은 사용자들에게 안전하고 신뢰할 수 있는 환경을 제공합니다.
          블록체인 기술을 활용하여 모든 기부 과정을 투명하게 기록하며, 이는
          사용자들이 언제든지 거래 내역 탐색기를 통해 확인할 수 있습니다. 또한
          사용자들은 자신의 기부가 어떻게 사용되는지 실시간으로 확인할 수
          있습니다.
        </Typo>
        <Image width="600px" src="./거래내역.png" />
        <Typo size="24px" justifyContent="flex-start" top="20px" bottom="20px">
          3. NFT
        </Typo>
        <Typo size="18px" fontWeight="600" bottom="50px">
          기부런은 기부의 성과를 인정하고 기념하기 위해 기부 완료 시 NFT를
          발행합니다. 이 특별한 기념비품은 기부자들의 노고를 인정하고 영원히
          간직할 수 있는 소중한 기념물이 될 것입니다. NFT 발행으로 기부자들에게
          독특한 경험과 보상을 선사합니다.
        </Typo>
        <ImageBox>
          <Image src="./기부비하인드.png" />
          <Image src="./투표하기.png" />
        </ImageBox>
      </TextBox>
    </BackContainer>
  );
};
