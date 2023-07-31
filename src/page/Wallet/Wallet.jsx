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
  Root,
  V,
} from "./styled";
import Metamask from "./components/Metamask";
import Phantom1 from "./components/Phantom1";
import Keplr1 from "./components/Keplr1";
import Binance from "./components/Binance";
import { Title } from "../../components";

export const Wallet = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Attach the handleResize function to the window's resize event
  window.addEventListener("resize", handleResize);

  return (
    <Root>
      <Title title="지갑연동" subtitle="지갑을 연동하는 방법을 살펴보세요!" />
      <V alt="" src="/Wallet-v.png" screenWidth={screenWidth} />
      <DivRoot>
        <ContentContainer>
          <UpIcon alt="" src="/Wallet(1).png" />
          <TextIcon alt="" src="/Wallet(2).png" />
          <Menu>
            <Div1 />
            <Httpschromegooglecomwebs
              href={`https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn`}
              target="_blank"
            >
              https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
            </Httpschromegooglecomwebs>

            <Binance />
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
