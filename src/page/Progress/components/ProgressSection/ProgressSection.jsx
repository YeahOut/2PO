import React, { useState } from "react";
import { Link } from "react-router-dom";
import { contents } from "../../../../utils/ProgressDetail";
import {
  Typo,
  CategoryBox,
  CategoryButton,
  ContentsBox,
  Contents,
  Image,
  Shadow,
  TypoWhite,
  DonateButton,
  FullBar,
  Bar,
  BottomBox,
  TypoContainer,
  TypoOrange
} from "./styled";

export const ProgressSection = () => {
  //카테고리 선택 버튼
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
    console.log("Selected Category:", category);
  };
  //contents 내용

  return (
    <div>
      <TypoContainer>
        <Typo size="48px">
          다음 기부명단에 <TypoOrange size="48px">기부</TypoOrange>
          하세요
        </Typo>
      </TypoContainer>

      <CategoryBox>
        <CategoryButton
          isActive={selectedButton === "all"}
          onClick={() => handleButtonClick("all")}
        >
          <Typo size="18px">All</Typo>
        </CategoryButton>
        <CategoryButton
          isActive={selectedButton === "animal"}
          onClick={() => handleButtonClick("animal")}
        >
          <Typo size="18px">동물</Typo>
        </CategoryButton>
        <CategoryButton
          isActive={selectedButton === "disaster"}
          onClick={() => handleButtonClick("disaster")}
        >
          <Typo size="18px">재난</Typo>
        </CategoryButton>
        <CategoryButton
          isActive={selectedButton === "weak"}
          onClick={() => handleButtonClick("weak")}
        >
          <Typo size="18px">사회적 약자</Typo>
        </CategoryButton>
        <CategoryButton
          isActive={selectedButton === "environment"}
          onClick={() => handleButtonClick("environment")}
        >
          <Typo size="18px">환경</Typo>
        </CategoryButton>
        <CategoryButton
          isActive={selectedButton === "medical"}
          onClick={() => handleButtonClick("medical")}
        >
          <Typo size="18px">의료</Typo>
        </CategoryButton>
      </CategoryBox>

      <div>
        <ContentsBox>
          {contents
            .filter(
              (content) =>
                content.categories.includes(selectedButton) ||
                selectedButton === "all"
            )
            .map((content, index) => (
              <Link to={`/progress/${index}`} key={index}>
                <Contents key={index}>
                  <Image src={content.image} />
                  <Shadow align="column">
                    <TypoWhite size="25px">{content.title}</TypoWhite>
                    <TypoWhite size="20px">{content.organization}</TypoWhite>
                    <DonateButton>
                      <TypoWhite size="18px">기부하기</TypoWhite>
                    </DonateButton>
                    <TypoWhite size="23px" top="85px">
                      달성률 {content.progress}%
                    </TypoWhite>
                    <FullBar>
                      <Bar width={content.barWidth} />
                    </FullBar>
                    <TypoWhite size="16px" top="7px" left="1px">
                      누적 기부 {content.totalDonation}원 / {content.targetDonation}원
                    </TypoWhite>
                  </Shadow>
                </Contents>
              </Link>
            ))}
        </ContentsBox>
      </div>
    </div>
  );
};
