import React, { useState } from "react";
import { Link } from "react-router-dom";
import { contents } from "../../../../utils/WaitingDetail";
import {
  TopBox,
  Typo,
  TypoOrange,
  TypoContainer,
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
} from "./styled";

export const WaitingSection = () => {
  //카테고리 선택 버튼
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
    console.log("Selected Category:", category);
  };
  //contents 내용


  return (
    <div>
      <TopBox>
        <Typo size="48px">기부하기</Typo>
        <Typo size="20px">서울시에 당신의 따뜻한 마음을 기부해주세요.</Typo>
      </TopBox>

      <TypoContainer>
        <Typo size="48px">
          다음 기부 목록에 <TypoOrange size="48px">투표</TypoOrange>
          하세요
        </Typo>
      </TypoContainer>

      <CategoryBox>
        <CategoryButton 
        isActive={selectedButton === "all"}
        onClick={() => handleButtonClick("all")}>
          <Typo size="14px">All</Typo>
        </CategoryButton>
        <CategoryButton 
        isActive={selectedButton === "animal"}
        onClick={() => handleButtonClick("animal")}>
          <Typo size="14px">동물</Typo>
        </CategoryButton>
        <CategoryButton 
        isActive={selectedButton === "disaster"}
        onClick={() => handleButtonClick("disaster")}>
          <Typo size="14px">재난</Typo>
        </CategoryButton>
        <CategoryButton 
        isActive={selectedButton === "weak"}
        onClick={() => handleButtonClick("weak")}>
          <Typo size="14px">사회적 약자</Typo>
        </CategoryButton>
        <CategoryButton 
        isActive={selectedButton === "environment"}
        onClick={() => handleButtonClick("environment")}>
          <Typo size="14px">환경</Typo>
        </CategoryButton>
        <CategoryButton 
        isActive={selectedButton === "medical"}
        onClick={() => handleButtonClick("medical")}>
          <Typo size="14px">의료</Typo>
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
              <Link to={`/waiting/${index}`} key={index}>
                <Contents key={index}>
                  <Image src={content.image} />
                  <Shadow align="column">
                    <TypoWhite size="17.9px">{content.title}</TypoWhite>
                    <TypoWhite size="16px">{content.organization}</TypoWhite>
                    <DonateButton>
                      <TypoWhite size="14px">투표하기</TypoWhite>
                    </DonateButton>
                    <TypoWhite size="14px" top="85px">
                      달성률 {content.progress}%
                    </TypoWhite>
                    <FullBar>
                      <Bar width={content.barWidth} />
                    </FullBar>
                    <TypoWhite size="14px" top="7px" left="1px">
                      누적 토큰수 {content.totalTokens}/{content.targetTokens}개
                    </TypoWhite>
                  </Shadow>
                </Contents>
              </Link>
            ))}
        </ContentsBox>
      </div>
      <BottomBox />
    </div>
  );
};
