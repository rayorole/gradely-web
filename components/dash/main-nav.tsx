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
        href="/dash"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
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
      </Link>
      <Link
        href="/dash/letters"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Letters
      </Link>
      <Link
        href="/dash/parental-contact"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Parental contact
      </Link>
    </nav>
  );
}

export function MainNavTeacher({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dash/teacher"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        My classes
      </Link>
      <Link
        href="/dash/teacher/grades"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Grades
      </Link>
      <Link
        href="/dash/teacher/reports"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reports
      </Link>
      <Link
        href="/dash/teacher/letters"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Letters
      </Link>
      <Link
        href="/dash/teacher/parental-contact"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Parental contact
      </Link>
    </nav>
  );
}
