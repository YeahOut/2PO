import React, { useState } from "react";
import {
  UpIcon,
  TextIcon,
  Div1,
  Menu,
  Icon1,
  DivRoot,
  Httpschromegooglecomwebs,
  ContentContainer,
  Root
}from "./styled"
import Metamask from "./components/Metamask";
import Phantom1 from "./components/Phantom1";
import Keplr1 from "./components/Keplr1";
import Binance from "./components/Binance";
import { Title } from "../../components";


export const Wallet = () => {

  return (
    <Root>
      <Title
        title="지갑연동"
        subtitle="지갑을 연동하는 방법을 살펴보세요!"
      />
    <DivRoot>      
      <ContentContainer>
      
        <UpIcon alt="" src="/Wallet1.png" />
        <TextIcon alt="" src="/Wallet2.png" />
        <Menu>
          <Div1 />
          <Httpschromegooglecomwebs
          href={`https://chrome.google.com/webstore/ detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
`}
          target="_blank"
      >
        https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
        </Httpschromegooglecomwebs>
        
          <Binance/>
          <Metamask />
          <Phantom1 />
          <Keplr1 />
        </Menu>
        <Icon1 alt="" src="/Wallet-m.png" />
      </ContentContainer>
    </DivRoot>
    </Root>
  );
};


