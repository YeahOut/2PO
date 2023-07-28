import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "7월 4일", donations: 320000 },
  { name: "7월 8일", donations: 500000 },
  { name: "7월 12일", donations: 200000 },
  { name: "7월 16일", donations: 200000 },
  { name: "7월 20일", donations: 407000 },
  { name: "7월 24일", donations: 46000 },
  { name: "7월 28일", donations: 490000 },
  // ... 나머지 일자 데이터
];

export default function DonationsLineGraph() {
  return (
    <LineChart width={1000} height={150} data={data}>
      <Line type="monotone" dataKey="donations" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
