"use client";
import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];

export default function AllGradesStudent() {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Your performance over time. For each course.</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Sales", "Profit"]}
        index="Month"
        colors={["blue", "zinc"]}
        yAxisWidth={60}
      />
    </Card>
  );
}
