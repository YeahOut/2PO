import { Title } from "../../components";
import { WaitingSection } from "./components/WaitingSection";
import { Root } from "./styled";

export const Waiting = () => {
  return (
    <Root>
      <Title
        title="투표하기"
        subtitle="기부하고 싶은 대기명단에 투표를 해서 다음 기부대상자로 선정되게해주세요!"
      />
      <WaitingSection />
    </Root>
  );
};
