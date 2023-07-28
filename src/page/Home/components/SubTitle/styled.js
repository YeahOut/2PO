import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff7f1;
`;

export const Icon = styled.img`
  width: 62px;
  height: 61px;
  margin-right: 15px;
  margin-left: 40px;
`;

export const Typo = styled.h2`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 100%;
  color: #000;
  font-size: 37px;
  font-weight: 700;
  padding: 15px 50px;
`;

export const OrangeTypo = styled(Typo)`
  color: #ff7425;
`;
