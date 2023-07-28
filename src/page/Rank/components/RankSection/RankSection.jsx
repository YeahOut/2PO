import React, { useState } from 'react';
import {BackContainer, Button ,MedalImage, ImageGroup, OrangeTypo, Typo, ImageText, ImageTextGroup, Back, PersonContainer, PersonImage, NameContainer, ButtonContainer} from "./styled";

export const Background = () => {
  const [currentGroup, setCurrentGroup] = useState('group1');

  const handleButtonClick = (group) => {
    setCurrentGroup(group);
  };
  return (
    <BackContainer>
        <Typo size="35px">나눔의 소중한 예를 보여주신 <OrangeTypo>기부자들</OrangeTypo></Typo>
        <ImageGroup>
            <ImageTextGroup>
                <MedalImage src="/은메달.png" />
                <ImageText>공소연님</ImageText>
            </ImageTextGroup>
            <ImageTextGroup bottomMargin="50px">
                <MedalImage src="/금메달.png" />
                <ImageText>밥먹는 제이지님</ImageText>
            </ImageTextGroup>
            <ImageTextGroup>
                <MedalImage src="/동메달.png" />
                <ImageText>이도윤님</ImageText>
            </ImageTextGroup>
        </ImageGroup>
        <Back>
            <Typo size ="15px" left="90px" top="-3px">순위</Typo>
            <Typo size ="15px" left="230px" top="-3px">닉네임</Typo>
            <Typo size ="15px" left="310px" top="-3px">주요 기부처</Typo>
            <Typo size ="15px" left="170px" top="-3px">총기부금액 </Typo>
            <Typo size ="15px" left="160px" top="-3px">기부횟수</Typo>
        </Back>
        {currentGroup === 'group1' &&(
        <>
        <PersonContainer>
            <Typo left="90px" top="-3px">1</Typo>
            <PersonImage src="/Person1.jpg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">밥먹는 제이지</Typo>
            <Typo size ="15px">삼성전자</Typo>
            </NameContainer>
            <Typo size ="22px" left="60px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="130px" top="-3px">13,200,000원</Typo>
            <Typo size ="23px" left="130px" top="-3px">8회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">2</Typo>
            <PersonImage src="/Person2.png" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">공소연</Typo>
            <Typo size ="15px">동국대학교</Typo>
            </NameContainer>
            <Typo size ="22px" left="63px" top="-3px">결손가정</Typo>
            <Typo size ="23px" left="134px" top="-3px">10,000,000원</Typo>
            <Typo size ="23px" left="130px" top="-3px">1회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">3</Typo>
            <PersonImage src="/Person3.jpg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">이도윤</Typo>
            <Typo size ="15px">비공개</Typo>
            </NameContainer>
            <Typo size ="22px" left="63px" top="-3px">장애아동</Typo>
            <Typo size ="23px" left="142px" top="-3px">7,371,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">7회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">4</Typo>
            <PersonImage src="/Person4.jpg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">강아지렁이</Typo>
            <Typo size ="15px">울산제일고등학교</Typo>
            </NameContainer>
            <Typo size ="22px" left="44px" top="-3px">소년소녀가장</Typo>
            <Typo size ="23px" left="120px" top="-3px">5,130,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">6회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">5</Typo>
            <PersonImage src="/Person5.jpg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">엄청커다란모기가발을</Typo>
            <Typo size ="15px">비공개</Typo>
            </NameContainer>
            <Typo size ="22px" left="63px" top="-3px">결손가정</Typo>
            <Typo size ="23px" left="143px" top="-3px">4,192,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">6회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">6</Typo>
            <PersonImage src="/Person6.jpg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">박세준</Typo>
            <Typo size ="15px">비공개</Typo>
            </NameContainer>
            <Typo size ="22px" left="60px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="139px" top="-3px">4,000,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">2회</Typo>
        </PersonContainer>
        </>
        )}

        {currentGroup === 'group2' &&(
        <>
        <PersonContainer>
            <Typo left="90px" top="-3px">7</Typo>
            <PersonImage src="/Person7.jpeg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">박지형</Typo>
            <Typo size ="15px">크로스쟁글</Typo>
            </NameContainer>
            <Typo size ="22px" left="63px" top="-3px">결손가정</Typo>
            <Typo size ="23px" left="139px" top="-3px">3,900,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">4회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">8</Typo>
            <PersonImage src="/Person8.jpg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">이규민</Typo>
            <Typo size ="15px">서브웨이종로</Typo>
            </NameContainer>
            <Typo size ="22px" left="63px" top="-3px">결손가정</Typo>
            <Typo size ="23px" left="139px" top="-3px">3,500,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">3회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="90px" top="-3px">9</Typo>
            <PersonImage src="/Person9.jpeg" left="120px"/>
            <NameContainer left="-70px">
            <Typo size ="15px">최예인</Typo>
            <Typo size ="15px">동국대학교</Typo>
            </NameContainer>
            <Typo size ="22px" left="63px" top="-3px">장애아동</Typo>
            <Typo size ="23px" left="139px" top="-3px">3,200,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">1회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">10</Typo>
            <PersonImage src="/Person10.jpg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">정민희</Typo>
            <Typo size ="15px">2PLUSONE</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">재난구호</Typo>
            <Typo size ="23px" left="140px" top="-3px">3,000,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">5회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">10</Typo>
            <PersonImage src="/Person11.jpg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">정훈</Typo>
            <Typo size ="15px">이더콘코리아</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="135px" top="-3px">3,000,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">3회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">12</Typo>
            <PersonImage src="/Person12.png" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">윤성이</Typo>
            <Typo size ="15px">동국대학교</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="135px" top="-3px">2,965,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">3회</Typo>
        </PersonContainer>
        </>
        )}

        {currentGroup === 'group3' &&(
        <>
        <PersonContainer>
            <Typo left="80px" top="-3px">13</Typo>
            <PersonImage src="/Person13.png" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">이진철</Typo>
            <Typo size ="15px">비공개</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">장애아동</Typo>
            <Typo size ="23px" left="140px" top="-3px">2,822,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">2회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">14</Typo>
            <PersonImage src="/Person14.jpeg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">박새로이</Typo>
            <Typo size ="15px">군밤</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">재난구호</Typo>
            <Typo size ="23px" left="140px" top="-3px">2,600,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">1회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">15</Typo>
            <PersonImage src="/Person15.jpg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">열공하는 무지</Typo>
            <Typo size ="15px">카카오톡</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="135px" top="-3px">2,590,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">4회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">16</Typo>
            <PersonImage src="/Person16.jpeg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">지갑잃어버림</Typo>
            <Typo size ="15px">비공개</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="135px" top="-3px">2,290,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">2회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">17</Typo>
            <PersonImage src="/Person17.jpg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">기부하는사람</Typo>
            <Typo size ="15px">나랑사랑카드</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">재난구호</Typo>
            <Typo size ="23px" left="140px" top="-3px">2,100,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">1회</Typo>
        </PersonContainer>
        <PersonContainer>
            <Typo left="80px" top="-3px">18</Typo>
            <PersonImage src="/Person18.jpeg" left="110px"/>
            <NameContainer left="-60px">
            <Typo size ="15px">비공개</Typo>
            <Typo size ="15px">비공개</Typo>
            </NameContainer>
            <Typo size ="22px" left="50px" top="-3px">의료|복지</Typo>
            <Typo size ="23px" left="135px" top="-3px">1,000,000원</Typo>
            <Typo size ="23px" left="135px" top="-3px">1회</Typo>
        </PersonContainer>
        </>
        )}

        <ButtonContainer>
        <Button
          isActive={currentGroup === 'group1'}
          onClick={() => handleButtonClick('group1')}
        >1</Button>
        <Button
          isActive={currentGroup === 'group2'}
          onClick={() => handleButtonClick('group2')}
        >2</Button>
        <Button
          isActive={currentGroup === 'group3'}
          onClick={() => handleButtonClick('group3')}
        >3</Button>
      </ButtonContainer>
    </BackContainer>
  );
};
