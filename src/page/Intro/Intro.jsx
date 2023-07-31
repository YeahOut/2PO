import { Title } from "../../components";
import { IntroSection } from "./IntroSection";
import { Root } from "./styled";

export const Intro = () => {
  return (
    <Root>
      <Title
        title="소개"
        subtitle="당신의 작은 기부가 우리 모두의 큰 변화를 만들 수 있습니다!"
      />
      <IntroSection />
    </Root>
  );
};
