import { MainNav } from "@/components/dash/main-nav";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "../(student)/loading";
import TeamSwitcher from "@/components/dash/dash-logo";
import { Toaster } from "@/components/ui/toaster";
import { UserNav } from "@/components/dash/user-nav";
import { Search } from "@/components/dash/search";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if (session.user.role != "TEACHER") {
    redirect("/dash");
  }
  return (
    <main className="h-screen">
      <div className="border-b sticky top-0 bg-white shadow-sm z-[998]">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
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
