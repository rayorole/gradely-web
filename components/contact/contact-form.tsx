"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="grid grid-cols-4 my-28">
      <div className="col-span-4 lg:col-span-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Speak with us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our team can help you:
        </p>
        <ul className="my-3 ml-6 list-disc [&>li]:mt-2 text-sm font-medium leading-none">
          <li>Apply your school to use Gradely</li>
          <li>Learn more about Gradely</li>
          <li>Get help with your account</li>
        </ul>

        <Image
          src="/assets/contact-us-undraw.svg"
          width={500}
          height={500}
          alt="Undraw contact image"
          className="hidden lg:block mt-24"
        />
      </div>
      <div className="col-span-4 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              We&apos;ll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="first_name">First name</Label>
                  <Input id="first_name" placeholder="John" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="last_name">Last name</Label>
                  <Input id="last_name" placeholder="Doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="john.do@example.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="website">School website</Label>
                  <Input id="website" placeholder="myschool.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick one..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="be">Belgium</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="en">UK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Anything else?</Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
