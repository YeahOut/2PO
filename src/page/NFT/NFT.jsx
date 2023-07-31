import React from "react";
import {
  Content,
  Div1,
  Root,
}from "./styled"

import { Title } from "../../components";

export const NFT = () => {
  return (
    <Root>
      <Title
        title="NFT"
        subtitle="NFT 발급에 대해서 알려드립니다."
      />
 < Div1>      
      <Content src="/NFT 안내 페이지 (3).png">
      </Content>
      </Div1>      
    </Root>
  );
};


