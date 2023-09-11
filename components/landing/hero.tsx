"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Session } from "next-auth";
import { Dictionary } from "@/lib/dictionary";

export default function Hero(props: {
  session: Session | null | undefined;
  dict: Dictionary;
}) {
  return (
    <div className="my-12 flex items-center">
      <div>
        <a
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          href="https://github.com/rayorole/gradely-web"
        >
          🛠️
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border w-[1px] mx-2 h-4"
          />
          <span className="sm:hidden">Gradely is still in development.</span>
          <span className="hidden sm:inline">Gradely is in development.</span>
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </a>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] my-2">
          {props.dict.landing.hero.title}
        </h1>
        <p className="text-lg font-medium max-w-[750px] text-muted-foreground sm:text-xl">
          Gradely offers a simple and intuitive interface to manage your
          students grades. Accessible from anywhere, anytime.
        </p>

        <div className="mt-6 flex space-x-3">
          {props.session ? (
            <Button asChild>
              <Link href="/dash">Go to Dashboard</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/signin">Sign in with your school</Link>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Download the app
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem className="flex justify-between items-center">
                IOS App
                <Image
                  src="/assets/apple-logo.png"
                  width={16}
                  height={16}
                  alt="IOS"
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between items-center">
                Android App
                <Image
                  src="/assets/android-logo.png"
                  width={16}
                  height={16}
                  alt="IOS"
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/assets/undraw-hero.png"
          width={700}
          height={500}
          alt="Gradely Hero"
        />
      </div>
    </div>
  );
}
