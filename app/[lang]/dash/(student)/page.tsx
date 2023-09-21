import AllGradesStudent from "@/components/dash/charts/all-grades-student";
import AverageGradeClassStudent from "@/components/dash/charts/avg-grade-class";
import DatePicker from "@/components/dash/date-picker";
import RecentGradesTable from "@/components/dash/tables/recent-grades";
import { Card, Grid, Title, Text, Metric } from "@tremor/react";

const categories = [
  {
    title: "Average grade",
    metric: "76%",
  },
  {
    title: "Class average",
    metric: "65%",
  },
  {
    title: "Total grades",
    metric: "85",
  },
];

export default async function Dash() {
  return (
    <main className="p-5 lg:p-8">
      <div className="flex justify-between items-center">
        <Title>Overview</Title>
        <DatePicker />
      </div>

      <Text>All of Gradely in a glance.</Text>

      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        {categories.map((item) => (
          <Card key={item.title}>
            <Text>{item.title}</Text>
            <Metric>{item.metric}</Metric>
          </Card>
        ))}
      </Grid>
      <Grid numItemsMd={1} numItemsLg={2} className="gap-6 mt-6">
        <AverageGradeClassStudent />
        <RecentGradesTable />
      </Grid>
      <Grid className="mt-6">
        <AllGradesStudent />
      </Grid>
    </main>
  );
}
