"use client";
import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Color,
} from "@tremor/react";
import { Button } from "@/components/ui/button";

const grades = [
  {
    name: "Math Midterm",
    course: "Mathematics",
    percentage: 79,
    date: "Feb 15",
    link: "/math-midterm",
  },
  {
    name: "History Paper",
    course: "History",
    percentage: 40,
    date: "Mar 5",
    link: "/history-paper",
  },
  {
    name: "Chemistry Quiz",
    course: "Chemistry",
    percentage: 60,
    date: "Apr 10",
    link: "/chemistry-quiz",
  },
  {
    name: "English Presentation",
    course: "English Literature",
    percentage: 55,
    date: "May 3",
    link: "/english-presentation",
  },
  {
    name: "Programming Project",
    course: "Computer Science",
    percentage: 98,
    date: "Jun 20",
    link: "/programming-project",
  },
];

function GradedBadge(percentage: number) {
  if (percentage < 50) {
    return (
      <Badge color="rose" className="font-medium">
        {percentage}% (N)
      </Badge>
    );
  } else if (percentage < 60) {
    return (
      <Badge color="orange" className="font-medium">
        {percentage}% (D)
      </Badge>
    );
  } else if (percentage <= 100) {
    return (
      <Badge color="blue" className="font-medium">
        {percentage}% (A)
      </Badge>
    );
  }
}

export default function RecentGradesTable() {
  return (
    <Card>
      <Title>Recent grades</Title>
      <Text>Your most recent grades from all courses.</Text>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Course</TableHeaderCell>
            <TableHeaderCell>Grade</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {grades.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.course}</TableCell>
              <TableCell>{GradedBadge(item.percentage)}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell align="right">
                <Button variant="outline" size="sm">
                  View more
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
