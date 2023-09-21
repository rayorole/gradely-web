import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import AzureADProvider from "next-auth/providers/azure-ad";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { createTransport } from "nodemailer";
import type { User } from "@prisma/client";
import extractDomain from 'extract-domain';

import { magicLinkHtml, magicLinkText } from "@/lib/mail";

export const authOptions: NextAuthOptions = {
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
          from: `Gradely <${provider.from}>`,
          subject: `Sign in to Gradely`,
          text: magicLinkText({ url, host }),
          html: magicLinkHtml({ url }),
        });

        const failed = result.rejected.concat(result.pending).filter(Boolean);

        if (failed.length > 0) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
        }
      },
    }),

    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),

    // Custom Smartschool provider
    {
      id: "smartschool",
      name: "Smartschool",
      type: "oauth",
      version: "2.0",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      }
    }
  ],

  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },

  callbacks: {
    async session({ session, token, user }) {
      // Add property role from User model to the session
      // @ts-ignore
      session.user = { ...session.user, role: user.role } as User;
      return session;
    },
  },

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};
