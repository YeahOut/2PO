import React from 'react';
import Faq from 'react-faq-component';
import { Title } from "../../components";
import {
    FAQContainer,
    Root
  }from "./styled"

// Define the data for the FAQ component
export const data = {
  title: "기부런의 FAQ",
  rows: [
    {
      title: "Q. 기부런은 어떤 사이트인가요?",
      content: "A. 기부런은 서울시민의 건강한 기부 문화 조성 및 사랑 나눔을 장려하기 위해 시작한 서비스 입니다."
    },
    {
      title: "Q. 기부런과 협업을 하고 싶은데 어떻게 해야하나요?",
      content: "A. 언제나 환영입니다!🤩 이용문의 또는 이메일로 연락주셔서 웹3로 도약하기 위한 걸음에 함께해요!! "
    },
    {
      title: "Q. 기부런에서 투표는 어떻게 하나요?",
      content: "A. 기부런에서는 나눔의 숫자에 따라 특별한 토큰을 지급합니다! 토큰으로 다음 기부처를 선정해주세요!"
    },
    {
        title: "Q. 기부런은 누가 만들었나요?",
        content: "A. 기부런은 웹3에 관심을 가진 D대학교 학생들이 모여 제작한 서비스입니다.😊 많이 부족하지만 열심히 나아가고 있어요!"
      },
    {
        title: "Q. 기부런에서 익명으로 기부할 수 있나요?",
        content: "A. 네 가능합니다! 익명으로 부담없이 랭킹 등록도 할 수 있어요⭐"
      },
    {
      title: "Q. 기부런의 회원이 되려면 어떻게 하면 되나요?"
      ,content: "A. 누구든 기부런과 함께 할 수 있습니다! 지갑연동을 통해 나눔에 함께 해주세요❤️ "
    }
  ]
};


export const FAQ = () => {
  return (
    <Root>
      <Title
        title="FAQ"
        subtitle="자주 묻는 질문을 확인하세요!"
      />
      <div>
        <FAQContainer>
          <Faq data={data} />
        </FAQContainer>
      </div>
    </Root>
  );
};
