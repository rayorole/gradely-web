import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
<<<<<<< HEAD
        href="/examples/dashboard"
=======
        href="/dash"
>>>>>>> b4192678097054d560d766866338dafd92d2eb8f
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
<<<<<<< HEAD
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
=======
        href="/dash/grades"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Grades
      </Link>
      <Link
        href="/dash/reports"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reports
>>>>>>> b4192678097054d560d766866338dafd92d2eb8f
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
<<<<<<< HEAD
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
=======
        Letters
>>>>>>> b4192678097054d560d766866338dafd92d2eb8f
      </Link>
    </nav>
  );
}
