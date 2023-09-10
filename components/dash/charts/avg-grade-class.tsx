"use client";

import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    month: "Jan 21",
    you: 50,
    class: 69,
  },
  {
    month: "Feb 21",
    you: 70,
    class: 78,
  },
  // ...
  {
    month: "Jan 22",
    you: 72,
    class: 70,
  },
];

export default function AverageGradeClassStudent() {
  return (
    <Card>
      <Title>Average grade</Title>
      <Text>Comparison between You and your class, based on all courses.</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["you", "class"]}
        index="month"
        colors={["blue", "zinc"]}
        yAxisWidth={60}
      />
    </Card>
  );
}
