import { ProgressSection } from "./components/ProgressSection";
import { Root } from "./styled";
import { Title } from "../../components";

export const Progress = () => {
  return (
    <Root>
      <Title
        title="기부하기"
        subtitle="서울시에 당신의 따뜻한 마음을 기부해주세요."
      />
      <ProgressSection />
    </Root>
  );
};
