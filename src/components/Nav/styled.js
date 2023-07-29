import styled from "styled-components";
import logo from "../../assets/icon/logo.png";

export const Root = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-family: "Do Hyeon", "Noto Sans KR", sans-serif;
  font-size: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 1280px;
  & > *:first-child {
    display: flex;
    align-items: flex-end;
    margin-right: auto;
  }
  & > *:last-child {
    margin-left: auto;
  }
`;

export const LogoImg = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 166px;
  height: 83px;
  /* margin-right: 10px; */
  cursor: pointer;
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  &:first-of-type {
    /* margin-bottom: 10px; */
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: max-content;
  height: 48px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 4.584px;
  flex-shrink: 0;
  border-radius: 60px;
  border: 2px solid #ff7425;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 17px;
  font-weight: 700;
  color: #000;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1;
  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const NavItemText = styled.div`
  width: fit-content;
  margin: 5px 10px;
  font-family: "Noto Sans KR", sans-serif;
  color: #666;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  font-weight: 700;
  &:hover {
    color: #ff7425;
    cursor: pointer;
  }
`;

export const WalletButton = styled.button`
  width: 112px;
  height: 48px;
  border-radius: 10px;
  background: #ff7425;
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  /* margin-left: 10px; */
  transition: 0.3s;
  &:hover {
    background: #ea580c;
  }
`;
