"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function SidebarNav() {
  const pathname = usePathname();
  const { lang } = useParams();

  const sidebarNavItems = [
    {
      title: "Profile",
      href: `/${lang}/dash/settings`,
    },
    {
      title: "Account",
      href: `/${lang}/dash/settings/account`,
    },
    {
      title: "Appearance",
      href: `/${lang}/dash/settings/appearance`,
    },
    {
      title: "Notifications",
      href: `/${lang}/dash/settings/notifications`,
    },
    {
      title: "Co accounts",
      href: `/${lang}/dash/settings/co-accounts`,
    },
  ];

  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
