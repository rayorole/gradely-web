import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "@/components/dash/grades/columns";
import { DataTable } from "@/components/dash/grades/data-table";
import { UserNav } from "@/components/dash/grades/user-nav";
import { taskSchema } from "@/components/dash/grades/data/schema";

export const metadata: Metadata = {
  title: "Gradely | My Grades & Comments",
  description: "View your grades and comments from your teachers here.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/dash/grades/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Page() {
  const tasks = await getTasks();

  return (
    <div className="mb-8">
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Your grades</h2>
            <p className="text-muted-foreground">
              View your grades and comments from your teachers here.
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
}
