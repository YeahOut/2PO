import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 16px;
  background-color: #4ab7b6;
`;
const Icon = styled.img`
  position: absolute;
  height: 88.46%;
  width: 85.11%;
  top: 0%;
  right: 11%;
  bottom: 11.54%;
  left: 3.88%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MetamaskRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  margin: 0 !important;
  height: 69.63%;
  width: 15.02%;
  top: 15.61%;
  right: 74.22%;
  bottom: 14.76%;
  left: 10.76%;
  z-index: 2;
`;
const Metamask = () => {
  
  return (
    <MetamaskRoot>
      <Overlay />
      <Icon alt="" src="/Wallet6.png" />
    </MetamaskRoot>
  );
};

export default Metamask;
