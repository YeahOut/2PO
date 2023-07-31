import styled from "styled-components";

const Overlay = styled.div`
position: absolute;
height: 93.58%;
width: 92.86%;
top: 6.42%;
right: 0%;
bottom: 0%;
left: 7.14%;
border-radius: 18.42px;
background-color: rgba(205, 106, 165, 0.85);
`;
const Icon = styled.img`
position: absolute;
height: 98.49%;
width: 96.63%;
top: 0%;
right: 3.37%;
bottom: 1.51%;
left: 0%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
object-fit: cover;
`;
const BinanceRoot = styled.button`
cursor: pointer;
border: none;
padding: 0;
background-color: transparent;
position: absolute;
margin: 0 !important;
height: 80.1%;
width: 17.82%;
top: 7.46%;
right: 29.73%;
bottom: 12.44%;
left: 52.45%;
z-index: 1;
`;
const Binance = () => {
  return (
    <BinanceRoot>
      <Overlay />
      <Icon alt="" src="/Wallet4.png" />
    </BinanceRoot>
  );
};

export default Binance;
