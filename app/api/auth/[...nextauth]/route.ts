import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import AzureADProvider from "next-auth/providers/azure-ad";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { createTransport } from "nodemailer";

import { magicLinkHtml, magicLinkText } from "@/lib/mail";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,

      sendVerificationRequest: async (params) => {
        const { identifier, url, provider } = params;
        const { host } = new URL(url);

        const transport = createTransport(provider.server);
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: `Sign in to Gradely`,
          text: magicLinkText({ url, host }),
          html: magicLinkHtml({ url }),
        });
        const failed = result.rejected.concat(result.pending).filter(Boolean);
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
        }
      },
    }),

    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
