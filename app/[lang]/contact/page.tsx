import Footer from "@/components/landing/footer";
import Navbar from "@/components/navbar/navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/i18n.config";
import ContactForm from "@/components/contact/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gradely | Contact",
  description: "Contact us for help with your account or to learn more.",
};

export default async function Home({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const session = await getServerSession(authOptions);
  const translation = await getDictionary(lang);

  return (
    <div>
      <Navbar session={session} />
      <div className="container">
        <ContactForm />
      </div>
      <Footer withSvg={false} />
    </div>
  );
}
