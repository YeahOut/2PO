import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 16.83px;
  background-color: #a187d9;
`;
const Icon = styled.img`
  position: absolute;
  height: 90.28%;
  width: 80.6%;
  top: 1.73%;
  right: 14.09%;
  bottom: 7.99%;
  left: 5.3%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const KeplrRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  margin: 0 !important;
  height: 74.96%;
  width: 16.69%;
  top: 12.07%;
  right: 7.22%;
  bottom: 12.97%;
  left: 76.09%;
  z-index: 4;
`;
const Keplr1 = () => {
  return (
    <KeplrRoot>
      <Overlay />
      <Icon alt="" src="/Wallet5.png" />
    </KeplrRoot>
  );
};

export default Keplr1;
