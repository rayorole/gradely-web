"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const params = useSearchParams();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const rateLimitRes = await fetch(
        `/api/signin/ratelimit?identifier=${formValues.email}`,
        {
          cache: "no-store",
        }
      );

      if (!rateLimitRes.ok) {
        if (rateLimitRes.status === 429) {
          setError("Too many requests, please try again later.");
        } else {
          setError("An unknown error occurred.");
        }

        setLoading(false);
        return;
      }

      const res = await signIn("email", {
        redirect: false,
        email: formValues.email,
        callbackUrl: "/dash",
      });

      setLoading(false);

      if (!res?.error) {
        const rateLimitRes = await fetch(`/api/signin/ratelimit`, {
          method: "POST",
          body: JSON.stringify({
            identifier: formValues.email,
          }),
        });

        if (!rateLimitRes.ok) {
          setError("An unknown error occurred.");

          setLoading(false);
          return;
        }

        setSuccess(true);
        setFormValues({ email: "" });
        setError(null);
      } else {
        setError("Invalid email");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const signInMicrosoft = async () => {
    try {
      setLoading(true);

      const res = await signIn("azure-ad", {
        redirect: false,
        callbackUrl: "/",
      });

      setLoading(false);

      if (!res?.error) {
        // router.push("/");
      } else {
        console.log(res.error);
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if there is a ?error= query param
    if (params.has("error")) {
      switch (params.get("error")) {
        case "OAuthAccountNotLinked":
          setError("This email is already in use by another account.");
          break;

        default:
          setError("An unknown error occurred.");
          break;
      }
    }
  }, [params]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email" className="text-red-500">
              {error}
            </Label>
            <Input
              id="email"
              placeholder="john.doe@school.com"
              type="email"
              autoCapitalize="none"
              name="email"
              autoComplete="email"
              required
              autoCorrect="off"
              disabled={loading}
              value={formValues.email}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <Button
            type={success ? "button" : "submit"}
            disabled={loading}
            className={cn(
              "w-full",
              success ? "bg-green-700 hover:bg-green-700" : "bg-primary"
            )}
          >
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {success ? (
              <>
                Check your email
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="ml-2 h-4 w-4"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: 0,
                      type: "tween",
                      ease: "easeOut",
                      duration: 0.3,
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t dark:border-zinc-700 dark:border-dashed" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex-col flex gap-2">
        <Button variant="outline" type="button" disabled={loading}>
          {loading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Image
              src="/assets/smartschool.png"
              width={16}
              height={16}
              className="mr-2"
              alt="Smartschool"
            />
          )}{" "}
          Smartschool
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={loading}
          onClick={signInMicrosoft}
        >
          {loading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Image
              src="/assets/microsoft.png"
              width={16}
              height={16}
              className="mr-2"
              alt="Smartschool"
            />
          )}
          Microsoft
        </Button>
      </div>
    </div>
  );
}
