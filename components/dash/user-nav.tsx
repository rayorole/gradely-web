"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import useSemver from "@/lib/semver";
import { Separator } from "../ui/separator";

export function UserNav(props: { session: Session | null | undefined }) {
  async function handleSignOut() {
    await signOut({
      callbackUrl: "/",
    });
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>
                {props.session?.user?.name?.charAt(0).toUpperCase() ||
                  props.session?.user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-[999]" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {props.session?.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {props.session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/dash/settings">
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dash/settings/appearance">
                Appearance
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem>
                Release info
                <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Release info</DialogTitle>
          <DialogDescription>
            Gradely is provided as is, without any warranty. We are not
            responsible for any data loss or damage.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Gradely &copy; {new Date().getFullYear()}
            </h4>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by{" "}
              <Link
                href="https://rayorole.github.io"
                className="hover:underline"
              >
                Ray Orole
              </Link>{" "}
              &#64; Campus Sint Ursula, Lier
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Version {useSemver()}</div>
            <Separator orientation="vertical" />
            <div>
              {process.env.NODE_ENV === "production" ? (
                <Link
                  href={`https://github.com/rayorole/gradely-web/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`}
                >
                  <p className="max-w-[180px] truncate hover:underline">
                    Commit {process.env.VERCEL_GIT_COMMIT_SHA}
                  </p>
                </Link>
              ) : (
                <Link
                  href={`https://github.com/rayorole/gradely-web/commit/${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`}
                  className="max-w-[180px] truncate hover:underline"
                >
                  <p className="max-w-[180px] truncate">
                    Commit {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
                  </p>
                </Link>
              )}
            </div>
            <Separator orientation="vertical" />
            <div>
              <Link
                href="https://github.com/rayorole/gradely-web/blob/dev/LICENSE"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
