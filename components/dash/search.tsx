"use client";
import {
  MagnifyingGlassIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "../ui/command";

export function Search() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="md:w-[100px] lg:w-[200px] flex justify-between text-muted-foreground"
        variant="outline"
        onClick={() => setOpen(!open)}
      >
        Search...
        <MagnifyingGlassIcon className="w-4 h-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for anything..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Grades</CommandItem>
            <CommandItem>Reports</CommandItem>
            <CommandItem>Letters</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Account">
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <CogIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
