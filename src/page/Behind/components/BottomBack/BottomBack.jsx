import { useState } from "react";
import {
  Button,
  WhiteGround,
  ImageGroup,
  WhiteGroundImage,
  ButtonContainer,
} from "./styled";
import { Link } from "react-router-dom";
import ImageData from "../../../../utils/BehindDetail";

export const BottomBack = () => {
  const [currentGroup, setCurrentGroup] = useState("group1");

  const handleButtonClick = (group) => {
    setCurrentGroup(group);
  };

  const handleImageClick = (groupId) => {
    if (currentGroup !== groupId) {
      setCurrentGroup(groupId);
    }
  };


  return (
    <WhiteGround>
      {ImageData.map(
        (data) =>
          data.group === currentGroup && (
            <ImageGroup key={data.group}>
              {data.details.map((item, index) => (
                <div key={item.id} onClick={() => handleImageClick(data.group)}>
                  <Link to={item.id}>
                    <WhiteGroundImage>
                      <img src={item.src} alt={item.alt} />
                      <div className="image-text">{item.title}</div>
                      <div className="image-text2">{item.money}</div>
                    </WhiteGroundImage>
                  </Link>
                </div>
        
              ))}
            </ImageGroup>
          )
      )}

      <ButtonContainer>
        <Button
          isActive={currentGroup === "group1"}
          onClick={() => handleButtonClick("group1")}
        >
          1
        </Button>
        <Button
          isActive={currentGroup === "group2"}
          onClick={() => handleButtonClick("group2")}
        >
          2
        </Button>
        <Button
          isActive={currentGroup === "group3"}
          onClick={() => handleButtonClick("group3")}
        >
          3
        </Button>
      </ButtonContainer>
    </WhiteGround>
  );
};
