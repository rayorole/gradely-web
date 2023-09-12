"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const integrations: { title: string; href: string; description: string }[] = [
  {
    title: "Smartschool",
    href: "/docs/integrations/smartschool",
    description:
      "Sign in with your Smartschool account and view your grades and assignments.",
  },
  {
    title: "Mail",
    href: "/docs/integrations/mail",
    description:
      "Receive notifications about your grades and report cards in your mailbox.",
  },
  {
    title: "Microsoft",
    href: "/docs/integrations/microsoft",
    description:
      "Sign in with your Microsoft account and view your grades and assignments.",
  },
];

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/assets/gradely.png"
                      alt="Gradely"
                      width={24}
                      height={24}
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">Gradely</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A modern way to manage your students grades.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#services" title="Services">
                Check out our services and what we offer.
              </ListItem>
              <ListItem href="/#features" title="Features">
                Learn more about our features and how they can help you.
              </ListItem>
              <ListItem href="/#integrations" title="Integrations">
                We offer integrations with other services to speed up your work.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Integrations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {integrations.map((integration) => (
                <ListItem
                  key={integration.title}
                  title={integration.title}
                  href={integration.href}
                >
                  {integration.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
