import airplane from "../assets/icon/airplane.svg";
import phone from "../assets/icon/phone.svg";
import guarantee from "../assets/icon/guarantee.svg";

const contentData = [
  {
    id: 1,
    icon: {
      src: airplane,
      width: "50px",
      height: "37px",
    },
    subTitle: "사랑",
    description: "후원을 통해 마음을 전달해보세요",
  },
  {
    id: 2,
    icon: {
      src: phone,
      width: "48px",
      height: "51px",
    },
    subTitle: "나눔",
    description:
      "여러분이 가지고 있는 코인이 조금씩 모여 이로운 사회를 만들어 가는데 도움이 됩니다",
  },
  {
    id: 3,
    icon: {
      src: guarantee,
      width: "48px",
      height: "49px",
    },
    subTitle: "신뢰성",
    description:
      "모든 거래 내역이 공개되고 블록체인 상에 기록됨으로써 투명성을 보장합니다",
  },
];

export default contentData;
