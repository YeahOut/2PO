const navItems = [
  {
    text: "기부런 소개",
    details: [
      { name: "소개", src: "intro" },
      { name: "기부 비하인드", src: "behind" },
    ],
  },
  {
    text: "이용안내",
    details: [
      { name: "지갑 연동", src: "wallet" },
      { name: "기부하기", src: "donate" },
      { name: "토큰 사용법", src: "token" },
      { name: "기부금 전달 방식", src: "transfer" },
    ],
  },
  {
    text: "기부하기",
    details: [
      { name: "대기 중", src: "waiting" },
      { name: "진행 중", src: "progress" },
      { name: "기부 순위", src: "rank" },
    ],
  },
  {
    text: "거래내역",
    details: [{ name: "거래내역", src: "transaction" }],
  },
  {
    text: "고객센터",
    details: [
      { name: "FAQ", src: "faq" },
      { name: "문의사항", src: "inquiry" },
    ],
  },
];

export default navItems;
