import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 17.59px;
  background-image: url("/public/2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Icon = styled.img`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const PhantomRoot = styled.button`
cursor: pointer;
border: none;
padding: 0;
background-color: transparent;
position: absolute;
height: 67.35%;
width: 15.66%;
top: 11.96%;
right: 52.65%;
bottom: 20.69%;
left: 31.69%;
z-index: 2;

`;
const Phantom1 = () => {
  return (
    <PhantomRoot>
      <Icon alt="" src="/Wallet7.png" />
    </PhantomRoot>
  );
};

export default Phantom1;
