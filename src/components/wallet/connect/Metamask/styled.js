import styled from "styled-components";

export const Overlay = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--color-lightseagreen);
  width: 153.33px;
  height: 147.87px;
  z-index: 0;
  background-color: #4ab7b6;
  border-radius: 16px;
  height: 147.87px;
  position: relative;
  width: 153.33px;
}
`;
export const Metamask1 = styled.b`
  position: relative;
  font-size: var(--font-size-11xl);
  display: inline-block;
  color: var(--color-black);
  width: 252.23px;
  height: 51.46px;
  flex-shrink: 0;
  z-index: 1;
  color: #000000;
  font-family: "Noto Sans KR-Bold", Helvetica;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  border-radius: 54px;
  top 300px
`;
export const RemovebgPreview1Icon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 0px;
  object-fit: cover;
  z-index: 2;
  height: 131px;
  left: 55px;
  object-fit: cover;
  position: absolute;
  width: 131px;
`;
export const MetamaskRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;