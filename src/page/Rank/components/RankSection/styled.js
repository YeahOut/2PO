import styled from "styled-components";

export const BackContainer = styled.div`
  width: 100%;
  height: 1530px;
  flex-shrink: 0;
  background: #FFFFFF;
  margin-top: 5px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const ImageTextGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => props.bottomMargin && `margin-bottom: ${props.bottomMargin};`}
`;

export const OrangeTypo = styled.span`
  color: #ff7425;
  font-size: 35px;
`;

export const Typo = styled.div`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "fit-content"};
  color: #000;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  font-size: ${(props) => props.size || "35px"};
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;
export const MedalImage = styled.img`
  width: 128px;
  height: 183px;
  object-fit: cover;
  margin-left: 50px;
  margin-right: 50px;
`;

export const ImageText = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 10px;
`;

/*Ranking List*/

export const Line = styled.div`
  width: 1100px;
  height: 0.7px;
  background: #BBBBBB;
`;

export const Back = styled.div`
  width: 1300px;
  height: 40px;
  margin-top: 20px;
  background: #E6EAF3;
  border-top: 2px solid #BBC5DA;
  display: flex;
  align-items: center;
`;

export const PersonContainer = styled.div`
  width: 1300px;
  height: 150px;
  background: #FFFFFF;
  border-bottom: 2px solid #E5E5E5;
  display: flex;
  align-items: center;
`;

export const PersonImage = styled.img`
  width: 120px;
  height: 120px; 
  border-radius: 90%;
  object-fit: cover;
  cursor: pointer;
  margin: ${(props) =>
    `${
      props.left || "0px"
    }`};
`;

export const NameContainer = styled.div`
  width: 300px;
  height: 50px;
  background: #FFFFFF;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   margin: ${(props) =>
    `${props.left || "0px"}`};

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  font-size: 20px;
  background-color: ${({ isActive }) => (isActive ? '#000000' : '#FFFFFF')};
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#000000')};
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;
