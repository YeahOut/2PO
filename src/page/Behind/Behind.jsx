import { BottomBack } from "./components";
import { Title } from "../../components";
import { Root } from "./styled";

export const Behind = () => {
  return (
    <Root>
      <Title
        title="기부 비하인드"
        subtitle="여러분들의 성원아래 많은 이들이 다시 일어설 수 있었습니다"
      />
      <BottomBack />
    </Root>
  );
};
