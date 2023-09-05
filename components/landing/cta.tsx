import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Cta() {
  return (
    <div className="text-center mb-72">
      <h1 className="my-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100 text-center">
        Create your account today
      </h1>

      <p className="leading-7 my-4">
        It&apos;s free and takes less than 30 seconds.
      </p>

      <div className="flex justify-center space-x-2">
        <Button asChild>
          <Link href="/signin">Create an account</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/signin">
            Sign in
            <ArrowLongRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
