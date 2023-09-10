import { MainNav } from "@/components/dash/main-nav";
import { Search } from "@/components/dash/search";
import TeamSwitcher from "@/components/dash/team-switcher";
import { UserNav } from "@/components/dash/user-nav";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export default async function DashLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <section>
      <div className="border-b sticky top-0 bg-white shadow-sm">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav session={session} />
          </div>
        </div>
      </div>

      {children}
      <Toaster />
    </section>
  );
}
