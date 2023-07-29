import { Title } from "../../components";
import { TokenInfo } from "./components";
import { Root } from "./styled";
//import handIcon from "../../assets/icon/fi-rr-hand-holding-heart.png";

export const Token = () => {
  return (
    <Root>
      <Title
        title="토큰 사용법"
        subtitle="당신의 작은 기부가 우리 모두의 큰 변화를 만들 수 있습니다. 지금 바로 토큰으로 희망을 전하세요!"
      />
      <TokenInfo />
    </Root>
  );
};
