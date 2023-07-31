import React from "react";
import {
    Overlay,
    OverlayWrapper,
    Span,
    B,
    Div2,
    DigitalWalletRemovebgPrevieIcon,
    Div1,
    Background,
    KeplrParent,
    X,
    Parent1,
    DivRoot
}from "./styled"

import {Keplr2} from "./connect/Kelpr";
import {Binance1} from "./connect/Binance";
import {Metamask} from "./connect/Metamask";
import {Phantom1} from "./connect/Phantom";


export const Component1 = ({ onClose }) => {
  return (
    <DivRoot>
      <Parent1>
        <Div1>
          <OverlayWrapper>
            <Overlay />
          </OverlayWrapper>
          <B>
            <span>지갑</span>
            <Span>을 연결하세요!</Span>
          </B>
          <Div2>로고를 누르면 해당 지갑이 연결됩니다.</Div2>
          <DigitalWalletRemovebgPrevieIcon
            alt=""
            src="/digital-walletremovebgpreview-1@2x.png"
          />
        </Div1>
        <X onClick={onClose}>x</X>
        <Background />
        <KeplrParent>
          <Keplr2 />
          <Binance1 />
          <Metamask />
          <Phantom1 />
        </KeplrParent>
      </Parent1>
    </DivRoot>
  );
};
