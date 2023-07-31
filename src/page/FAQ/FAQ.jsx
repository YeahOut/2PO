import React from 'react';
import Faq from 'react-faq-component';
import { Title } from "../../components";
import {
    FAQContainer,
    Root
  }from "./styled"

// Define the data for the FAQ component
export const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
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

