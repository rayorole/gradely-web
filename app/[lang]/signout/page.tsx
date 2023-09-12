"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { ExitIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Image
            src="/assets/undraw-warning.svg"
            alt="404"
            width={300}
            height={300}
            className="mx-auto mb-8"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Sign out
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Are you sure you want to sign out? You will be redirected to the
            home page.
          </p>
          <div className="flex space-x-2 justify-center items-center">
            <Button className="mt-8" onClick={handleSignOut}>
              Sign out <ExitIcon className="w-4 h-4 ml-2" />
            </Button>
            <Button asChild className="mt-8" variant="ghost">
              <Link href="/">
                Go back home <HomeModernIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
