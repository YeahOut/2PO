import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
`;

export const QuestionTitleSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const QuestionTypo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #ff7425;
  border-radius: 50%;
  font-family: "Inter", sans-serif;
  color: #fff;
  font-size: 26px;
  font-weight: 600;
`;

export const QuestionTitleInput = styled.input`
  width: 617px;
  height: 50px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #fff;
  font-size: 17px;
  /* font-weight: 500; */
  padding-left: 20px;
  margin-left: 15px;
`;

export const QuestionForm = styled.form`
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
