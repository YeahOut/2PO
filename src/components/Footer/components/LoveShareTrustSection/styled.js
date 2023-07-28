import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 345px;
  background: #fff7f1;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1150px;
  height: 166px;
  margin: 90px 0;
`;

export const ContentGroup = styled.div`
  display: flex;
  gap: 80px;
`;

export const Content = styled.div`
  flex-basis: 33.33%;
  display: flex;
`;

export const Img = styled.img``;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TitleTypo = styled.div`
  color: #333;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 28.8px; /* 130.909% */
`;

export const SubTitleTypo = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
`;

export const Typo = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  word-break: keep-all;
`;
