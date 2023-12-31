import { MainNav } from "@/components/dash/main-nav";
import { Search } from "@/components/dash/search";
import { UserNav } from "@/components/dash/user-nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import TeamSwitcher from "@/components/dash/dash-logo";
import Loading from "./loading";

export default async function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  } else if (session.user.role === "TEACHER") {
    redirect("/dash/teacher");
  } else if (session.user.role === "ADMIN") {
    redirect("/admin");
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
