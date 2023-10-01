"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TrashIcon } from "@heroicons/react/24/outline";
import { User } from "@prisma/client";
import { ApiJsonResponse } from "@/types/api";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function CoAccounts({ coAccounts }: { coAccounts?: User[] }) {
  const deleteCoAccount = async (coAccount: User) => {
    const res = await fetch("/api/settings/coaccount", {
      method: "DELETE",
      body: JSON.stringify({
        id: coAccount.id,
      }),
    });

    const data = (await res.json()) as ApiJsonResponse;

    if (data.error) {
      toast({
        title: "Error!",
        description: "Something went wrong.",
        variant: "destructive",
        action: <ToastAction altText="Close this modal">Close</ToastAction>,
      });
      return;
    }

    window.location.reload();
  };
  return (
    <>
      {coAccounts?.map((coAccount, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between space-x-4 py-4 border-t"
        >
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={coAccount.image!} />
              <AvatarFallback>
                {coAccount
                  .name!.split(" ")
                  .map((name) => name[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">
                {coAccount.name}
              </p>
              <p className="text-sm text-muted-foreground">{coAccount.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Owner{" "}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0" align="end">
                <Command>
                  <CommandInput placeholder="Select new role..." />
                  <CommandList>
                    <CommandEmpty>No roles found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                        <p>Viewer</p>
                        <p className="text-sm text-muted-foreground">
                          Can view and comment.
                        </p>
                      </CommandItem>
                      <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                        <p>Developer</p>
                        <p className="text-sm text-muted-foreground">
                          Can view, comment and edit.
                        </p>
                      </CommandItem>
                      <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                        <p>Billing</p>
                        <p className="text-sm text-muted-foreground">
                          Can view, comment and manage billing.
                        </p>
                      </CommandItem>
                      <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                        <p>Owner</p>
                        <p className="text-sm text-muted-foreground">
                          Admin-level access to all resources.
                        </p>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                deleteCoAccount(coAccount);
              }}
            >
              <TrashIcon className="h-4 w-4 text-red-400" />
            </Button>
          </div>
        </div>
      ))}

      {coAccounts?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg font-medium text-center">
            You don&apos;t have any co accounts yet.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Co accounts are useful for sharing your account with other people
            without having to share your password.
          </p>
        </div>
      )}
    </>
  );
}
