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

const classes = [
  {
    name: "5IT",
    course: "Mathematics",
    percentage: 79,
    date: "Feb 15",
    link: "/math-midterm",
  },
  {
    name: "6IT",
    course: "History",
    percentage: 40,
    date: "Mar 5",
    link: "/history-paper",
  },
  {
    name: "5MO2",
    course: "Chemistry",
    percentage: 60,
    date: "Apr 10",
    link: "/chemistry-quiz",
  },
  {
    name: "4BE5",
    course: "English Literature",
    percentage: 55,
    date: "May 3",
    link: "/english-presentation",
  },
  {
    name: "6AIT",
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

export default function MyClassesTable() {
  return (
    <Card>
      <Title>My classes</Title>
      <Text>
        The classes you are currently teaching and their average grade.
      </Text>

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
          {classes.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.course}</TableCell>
              <TableCell>{GradedBadge(item.percentage)}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell align="right">
                <Button variant="outline" size="sm">
                  View class
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
