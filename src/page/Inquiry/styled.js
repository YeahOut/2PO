import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 800px;
  margin-top: 50px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin: 0;
  background: #ff7425;
  color: #fff;
  font-size: 17px;
  letter-spacing: 0.3px;
  transition: 0.1s;
  &:hover {
    background: #ea580c;
  }
`;
