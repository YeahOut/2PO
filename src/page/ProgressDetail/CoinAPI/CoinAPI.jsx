import { useEffect, useState } from "react";
import axios from "axios";

export const options = [
"bitcoin",
"ethereum", 
"tether",
];

function CoinAPI({ selectedOption }) {
  // CoinAPI 컴포넌트에 선택된 코인 정보를 props로 전달받습니다.

  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${selectedOption}&vs_currencies=krw`
        );
        const data = response.data;
        setPrice(data[selectedOption].krw);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    fetchPrice();
  }, [selectedOption]); // 선택된 코인이 변경될 때마다 가격 정보를 업데이트합니다.

  return (
      price
  );
}

export default CoinAPI;
