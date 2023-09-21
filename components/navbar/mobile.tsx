"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Session } from "next-auth";
import { LangPicker } from "./lang-picker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";

export default function MobileNav(props: {
  session: Session | null | undefined;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`lg:hidden supports-backdrop-blur:bg-background/60 ${
          open ? "fixed" : "sticky"
        } w-full top-0 z-50 border-b bg-background/95 backdrop-blur dark:border-zinc-800`}
      >
        <div className="flex h-14 items-center justify-between px-4">
          <a href="/" className="flex items-center space-x-1">
            <Image
              src="/assets/gradely.png"
              alt="Gradely"
              width={36}
              height={36}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Gradely
            </h4>
          </a>

          <div className="flex items-center space-x-2">
            <Button asChild size="sm">
              {props.session ? (
                <Link href="/dash" className="flex items-center">
                  <span>Dashboard</span>
                  <ArrowRightIcon className="h-3 w-3 ml-2" />
                </Link>
              ) : (
                <Link href="/signin" className="flex items-center">
                  <span>Sign in</span>
                  <ArrowRightOnRectangleIcon className="h-3 w-3 ml-2" />
                </Link>
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars4Icon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="fixed inset-0 z-40 bg-white"
        variants={{
          hidden: {
            opacity: 0,
            height: 0,
            display: "none",
            transition: {
              duration: 0.2,
            },
          },
          visible: {
            opacity: 1,
            height: "100%",
            display: "block",
            transition: {
              duration: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-white mt-16 px-5">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-start">
                  <Button variant="link" asChild>
                    <Link href="/#services">Services</Link>
                  </Button>
                  <Button variant="link" asChild>
                    <Link href="/#features">Features</Link>
                  </Button>
                  <Button variant="link" asChild>
                    <Link href="/#integrations">Integrations</Link>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="space-y-2">
            <LangPicker className="w-full" />
            <Button asChild className="w-full">
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}
