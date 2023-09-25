"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ApiJsonResponse } from "@/types/api";
import { ToastAction } from "@/components/ui/toast";
import CoAccounts from "./coaccounts";
import { User } from "@prisma/client";
import { useState } from "react";

const items = [
  {
    id: "grades",
    label: "Grades",
  },
  {
    id: "reports",
    label: "Reports",
  },
  {
    id: "letters",
    label: "Letters",
  },
  {
    id: "parental-contact",
    label: "Parental contact",
  },
] as const;

const FormSchema = z.object({
  permissions: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  name: z.string().nonempty("Name is required."),
  email: z.string().email("Invalid email address."),
});

export function CoAccountForm({ coAccounts }: { coAccounts?: User[] }) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      permissions: ["grades", "reports", "letters", "parental-contact"],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Submit data to /api/settings/coaccount via POST request
    const res = await fetch("/api/settings/coaccount", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // Check if the response is ok
    if (!res.ok) {
      toast({
        title: "Error!",
        description: "Something went wrong.",
        variant: "destructive",
        action: <ToastAction altText="Close this modal">Close</ToastAction>,
      });
    }

    // If the response is ok, get the JSON data
    const body: ApiJsonResponse = await res.json();

    if (body.error) {
      toast({
        title: "Error!",
        description: body.message,
        variant: "destructive",
        action: <ToastAction altText="Close this modal">Close</ToastAction>,
      });
    }

    toast({
      title: "Success!",
      description: body.message,
      variant: "default",
      action: <ToastAction altText="Close this modal">Close</ToastAction>,
    });

    setOpen(false);
    window.location.reload();
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button type="button" variant="outline" size="sm" className="my-2">
            Add co account
            <UserGroupIcon className="w-4 h-4 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <DialogTitle>Add co account</DialogTitle>
                <DialogDescription>
                  Enter the details of your co account.
                </DialogDescription>
              </DialogHeader>
              <div className="grid w-full items-center gap-2">
                <div className="flex flex-col space-y-0.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-0.5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <div className="my-4">
                    <FormField
                      control={form.control}
                      name="permissions"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">
                              Permissions
                            </FormLabel>
                            <FormDescription>
                              Select the permissions you want to grant to your
                              co account.
                            </FormDescription>
                          </div>
                          {items.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="permissions"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button type="submit">Add co account</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <CoAccounts coAccounts={coAccounts} />
    </div>
  );
}
