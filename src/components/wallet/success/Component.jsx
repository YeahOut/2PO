
import {
  Child,
  Div1,
  Div2,
  Div3,
  X,
  DivRoot
}from "./styled"
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export const Component = ({ onClose }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    // Metamask가 설치되어 있고 연동된 경우에만 실행
    if (window.ethereum) {
      // 지갑 주소 가져오기
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const defaultAccount = accounts[0];
          setWalletAddress(defaultAccount);
          getUserBalance(defaultAccount);
        })
        .catch((error) => {
          console.error("지갑 주소 가져오기 에러:", error);
        });
    }
  }, []);

  const getUserBalance = (accountAddress) => {
    // 잔고 가져오기
    window.ethereum
      .request({ method: "eth_getBalance", params: [String(accountAddress), "latest"] })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      })
      .catch((error) => {
        console.error("잔고 가져오기 에러:", error);
      });
  };

  return (
    <DivRoot>
      <Child alt="" src="/rectangle-18.svg" />
      <Div1>
        지갑 주소 : {walletAddress && walletAddress.substr(0, 20)}...
      </Div1>
      <Div2>
        잔고 : {userBalance}ETH
      </Div2>
      <Div3>연결되었습니다!</Div3>
      <X onClick={onClose}>X</X>
    </DivRoot>
  );
};
