import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Image
            src="/assets/undraw-404.png"
            alt="404"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Page not found
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Maybe
            you&apos;ve mistyped the URL?
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              Go back home <HomeModernIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
