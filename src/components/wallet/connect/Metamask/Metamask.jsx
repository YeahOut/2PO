import React from "react";
import {
    Overlay,
    Metamask1,
    RemovebgPreview1Icon,
    MetamaskRoot
}from "./styled"
import { useState, useCallback } from "react";
import {Component} from "../../success";
import PortalPopup from "../../PortalPopup";


export const Metamask = () => {
  const [isPopup1Open, setPopup1Open] = useState(false);

  const openPopup1 = useCallback(async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const defaultAccount = accounts[0]; // 이거 있어야 잔고가 바로 안나오고 기다렸다가 나옴.

        // 연결 성공 시 팝업 표시
        setPopup1Open(true);
      } else {
        throw new Error("MetaMask를 설치해주세요!");
      }
    } catch (error) {
      console.error(error);
      // 에러 메시지 처리 등 필요한 작업 수행
    }
  }, []);

  const closePopup1 = useCallback(() => {
    setPopup1Open(false);
  }, []);

  return (
    <>
      <MetamaskRoot onClick={openPopup1}>
        <Overlay />
        <Metamask1>Metamask</Metamask1>
        <RemovebgPreview1Icon alt="" src="/removebgpreview-11@2x.png" />
      </MetamaskRoot>
      {isPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup1}
        >
          <Component onClose={closePopup1} />
        </PortalPopup>
      )}
    </>
  );
};


