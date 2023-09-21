"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const langs = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Nederlands",
    value: "nl",
  },
  {
    label: "Français",
    value: "fr",
  },
  {
    label: "Deutsch",
    value: "de",
  },
];

export function LangPicker({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { lang } = useParams();
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[180px] justify-between", className)}
        >
          {value
            ? langs.find((lang) => lang.value === value)?.label
            : langs.find((objLang) => objLang.value === lang)?.label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-full p-0", className)}>
        <Command>
          <CommandInput placeholder="Search lang..." className="h-9" />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {langs.map((langO) => (
              <CommandItem
                key={langO.value}
                value={langO.value}
                onSelect={() => {
                  console.log(langO.value);
                  setValue(langO.value);
                  setOpen(false);

                  router.push(redirectedPathName(langO.value));
                }}
              >
                {langO.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    langO.value === lang ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
