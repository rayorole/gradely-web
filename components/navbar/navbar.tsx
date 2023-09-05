import Image from "next/image";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { DarkModeToggle } from "@/components/darkmode";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur dark:border-zinc-800">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="flex items-center space-x-2 mr-6">
            <Image
              src="/assets/gradely.png"
              alt="Gradely"
              width={24}
              height={24}
            />
            <span className="text-xl font-bold">Gradely</span>
          </a>
        </div>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Home
          </a>
          <a
            href="#services"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Services
          </a>
          <a
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <DarkModeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login" className="flex items-center">
              <span>Login</span>
              <ArrowRightOnRectangleIcon className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
