import { Title } from "../../components";
import { WaitingSection } from "./components/WaitingSection";
import { Root } from "./styled";

export const Waiting = () => {
  return (
    <Root>
      <Title
        title="기부하기"
        subtitle="서울시에 당신의 따뜻한 마음을 기부해주세요."
      />
      <WaitingSection />
    </Root>
  );
};
