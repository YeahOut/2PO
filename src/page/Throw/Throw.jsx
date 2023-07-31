import { Title } from "../../components";
import { Root, Container } from "./styled";
//import handIcon from "../../assets/icon/fi-rr-hand-holding-heart.png";

export const Throw = () => {
  return (
    <Root>
      <Title
        title="기부금 전달 방식"
        subtitle="여러분들의 소중한 기부금이 어떻게 전달되는지 알려드리겠습니다"
      />
      <Container src="/PageThrow.png">
      </Container>
    </Root>
  );
};
