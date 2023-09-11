"use client";

import { Card, BarChart, Title, Text } from "@tremor/react";

const data = [
  {
    Grade: "Test 1",
    Class: 88,
    You: 92,
  },
  {
    Grade: "Test 2",
    Class: 78,
    You: 82,
  },
  {
    Grade: "Test 3",
    Class: 85,
    You: 88,
  },
  {
    Grade: "Test 4",
    Class: 90,
    You: 94,
  },
  {
    Grade: "Test 5",
    Class: 75,
    You: 80,
  },
  {
    Grade: "Midterm Exam",
    Class: 82,
    You: 87,
  },
  {
    Grade: "Final Exam",
    Class: 91,
    You: 95,
  },
  {
    Grade: "Homework 1",
    Class: 95,
    You: 98,
  },
  {
    Grade: "Homework 2",
    Class: 88,
    You: 90,
  },
  {
    Grade: "Project 1",
    Class: 89,
    You: 93,
  },
  {
    Grade: "Project 2",
    Class: 85,
    You: 89,
  },
  {
    Grade: "Quiz 1",
    Class: 80,
    You: 85,
  },
  {
    Grade: "Quiz 2",
    Class: 79,
    You: 83,
  },
  {
    Grade: "Quiz 3",
    Class: 84,
    You: 88,
  },
  {
    Grade: "Quiz 4",
    Class: 81,
    You: 86,
  },
];

export default function AverageGradeClassStudent() {
  return (
    <Card>
      <Title>Average grade</Title>
      <Text>Comparison between you and your class.</Text>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Grade"
        categories={["Class", "You"]}
        colors={["blue", "zinc"]}
        stack={false}
        yAxisWidth={60}
      />
    </Card>
  );
}
