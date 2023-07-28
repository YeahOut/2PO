// TxDetail.jsx
import React from "react";
import { Address } from "./TxSection/styled"; // styled.js에서 Address를 import

const TxDetail = ({ tx }) => {
  const shortenTx = tx.slice(0, 14) + "...";

  return <Address>{shortenTx}</Address>;
};

export default TxDetail;
