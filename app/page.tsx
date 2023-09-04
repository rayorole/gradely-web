import Companies from "@/components/landing/companies";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/navbar/navbar";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Companies />
        <Features />
      </div>
      <Footer />
    </>
  );
}
