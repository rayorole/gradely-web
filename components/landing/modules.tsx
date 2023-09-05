import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Modules() {
  return (
    <div className="my-40" id="services">
      <h1 className="mt-6 mb-12 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100 text-center">
        It&apos;s not only about grades
        <span className="text-zinc-500">, Right?</span>
      </h1>

      <div className="space-y-48">
        <section className="flex space-x-8">
          <div className="w-[450px] flex flex-col justify-between">
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                🕑 Parent-teacher conference scheduling
              </h2>

              <p className="my-4 text-lg leading-tight text-zinc-600 dark:text-zinc-300">
                Schedule and manage parent-teacher conferences with ease. No
                more back and forth emails.
              </p>

              <Button variant="link" asChild className="pl-0">
                <Link href="/signin">
                  Explore
                  <ArrowLongRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <Image
              src="/assets/undraw-bookmarks.svg"
              width={700}
              height={500}
              className="w-64 h-fit"
              alt="Notion Temp"
            />
          </div>
          <div className="w-full">
            <Image
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=90/front-static/pages/home/engineering-wiki-V2.png"
              width={1920}
              height={1200}
              className="rounded-lg shadow-lg w-full h-full object-cover object-center"
              alt="Notion Temp"
            />
          </div>
        </section>
        <section className="flex space-x-8 my-20">
          <div className="w-[450px] flex flex-col justify-between">
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                📊 Student performance analytics
              </h2>

              <p className="my-4 text-lg leading-tight text-zinc-600 dark:text-zinc-300">
                Get insights on your students&apos; performance and identify the
                ones that need help.
              </p>

              <Button variant="link" asChild className="pl-0">
                <Link href="/signin">
                  Explore
                  <ArrowLongRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <Image
              src="/assets/undraw-help.svg"
              width={320}
              height={300}
              className="w-64 h-fit"
              alt="Student Help"
            />
          </div>
          <div className="w-full">
            <Image
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=90/front-static/pages/home/meeting-notes.png"
              width={1920}
              height={1200}
              className="rounded-lg shadow-lg w-full h-full object-cover object-center"
              alt="Notion Temp"
            />
          </div>
        </section>
        <section className="flex space-x-8 my-20">
          <div className="w-[450px] flex flex-col justify-between">
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                📜 Automated report cards
              </h2>

              <p className="my-4 text-lg leading-tight text-zinc-600 dark:text-zinc-300">
                Automatically generate report cards for your students. No more
                manual work.
              </p>

              <Button variant="link" asChild className="pl-0">
                <Link href="/signin">
                  Explore
                  <ArrowLongRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <Image
              src="/assets/undraw-reports.svg"
              width={320}
              height={300}
              className="w-64 h-fit"
              alt="Automated Report Cards"
            />
          </div>
          <div className="w-full">
            <Image
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=90/front-static/pages/home/meeting-notes.png"
              width={1920}
              height={1200}
              className="rounded-lg shadow-lg w-full h-full object-cover object-center"
              alt="Notion Temp"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
