import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import Link from "next/link";
import NavMenu from "./menu";
import { Session } from "next-auth";
import { LangPicker } from "./lang-picker";

export default function Navbar(props: { session: Session | null | undefined }) {
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

        <NavMenu />
        <div className="flex items-center space-x-2">
          <LangPicker />
          <Button variant="ghost" asChild>
            {props.session ? (
              <Link href="/dash" className="flex items-center">
                <span>Dashboard</span>
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            ) : (
              <Link href="/signin" className="flex items-center">
                <span>Sign in</span>
                <ArrowRightOnRectangleIcon className="h-4 w-4 ml-2" />
              </Link>
            )}
          </Button>
          {/* <Button asChild>
            <Link href="/signup" className="flex items-center">
              <span>Sign up</span>
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
