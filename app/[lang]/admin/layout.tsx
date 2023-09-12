import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import SidebarNav from "@/components/admin/sidebar-nav";
import { Button } from "@/components/ui/button";
import { ExitIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gradely | Settings",
  description: "Manage your profile, account, and notifications settings.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
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
