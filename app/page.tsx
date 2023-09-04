import Companies from "@/components/landing/companies";
import Cta from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Modules from "@/components/landing/modules";
import Navbar from "@/components/navbar/navbar";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Companies />
        <Modules />
        <Features />
        <Cta />
      </div>
      <Footer />
    </>
  );
}
