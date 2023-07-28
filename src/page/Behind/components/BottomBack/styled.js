import styled from "styled-components";

export const WhiteGround = styled.div`
  width: 100%;
  height: 900px;
  flex-shrink: 0;
  background: #ffffff;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1280px;
  margin-bottom: 5px;
  > * {
    flex-basis: 33.33%;
  }
`;

export const WhiteGroundImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 13%;
  margin: 50px;
  border: 3px solid #000000;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  font-size: 20px;
  background-color: ${({ isActive }) => (isActive ? "#000000" : "#FFFFFF")};
  color: ${({ isActive }) => (isActive ? "#FFFFFF" : "#000000")};
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
