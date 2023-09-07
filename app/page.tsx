import Companies from "@/components/landing/companies";
import Cta from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Modules from "@/components/landing/modules";
import Navbar from "@/components/navbar/navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />
      <div className="container">
        <Hero />
        <Companies />
        <Modules />
        <Features />
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
