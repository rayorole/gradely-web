import { MainNav, MainNavTeacher } from "@/components/dash/main-nav";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { UserNav } from "@/components/dash/user-nav";
import { Search } from "@/components/dash/search";
import { Metadata } from "next";
import Loading from "./loading";
import TeamSwitcher from "@/components/dash/dash-logo";

export const metadata: Metadata = {
  title: "Gradely | Teacher Dashboard",
};

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  } else if (session.user.role != "TEACHER") {
    redirect("/dash");
  }
  return (
    <main className="h-screen">
      <div className="border-b sticky top-0 bg-white shadow-sm z-[998]">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNavTeacher className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav session={session} />
          </div>
        </div>
      </div>

      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Toaster />
    </main>
  );
}
