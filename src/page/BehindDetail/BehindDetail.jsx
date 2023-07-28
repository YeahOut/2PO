import { useParams } from "react-router-dom";
import { BehindDetailcontents} from "./components";
import {Back} from "../Behind/components";

export const BehindDetail = () => {
  let { id } = useParams()

  // id로 filter나 find해서 해당 페이지에 해당하는 데이터를 불러오는 식으로 구현하시면 됩니다!!
  return (
    <div>
      <Back/>
      <BehindDetailcontents id={id}>
      </BehindDetailcontents>
    </div>
  );
};
