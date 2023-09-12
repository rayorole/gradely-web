import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import SidebarNav from "@/components/admin/sidebar-nav";
import { Button } from "@/components/ui/button";
import { ExitIcon, HomeIcon } from "@radix-ui/react-icons";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Gradely | Admin",
  description: "Admin panel for your school.",
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if (session?.user.role !== "ADMIN") {
    redirect("/dash");
  }

  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Admin panel</h2>
            <p className="text-muted-foreground">Campus sint ursula</p>
          </div>
          <div className="flex space-x-2 items-center">
            <Button variant="outline" asChild>
              <Link href="/">
                Exit <HomeIcon className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/api/auth/signout">
                Sign out <ExitIcon className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
