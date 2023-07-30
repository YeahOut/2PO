import { useParams } from "react-router-dom";
import { BehindDetailcontents} from "./components";
import { Title } from "../../components";

export const BehindDetail = () => {
  let { id } = useParams()

  // id로 filter나 find해서 해당 페이지에 해당하는 데이터를 불러오는 식으로 구현하시면 됩니다!!
  return (
    <div>
      <Title
        title="기부 비하인드"
        subtitle="여러분들의 성원아래 많은 이들이 다시 일어설 수 있었습니다"
      />
      <BehindDetailcontents id={id}>
      </BehindDetailcontents>
    </div>
  );
};
