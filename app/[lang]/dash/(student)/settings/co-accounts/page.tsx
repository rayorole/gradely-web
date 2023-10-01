import { Separator } from "@/components/ui/separator";
import { CoAccountForm } from "@/components/dash/settings/coaccount-form";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export default async function SettingsCoAccountPage() {
  const session = await getServerSession(authOptions);

  const coAccounts = await prisma.user.findMany({
    where: {
      userId: {
        equals: session?.user.id,
      },
    },
  });

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Co accounts</h3>
        <p className="text-sm text-muted-foreground">
          Manage your co accounts.
        </p>
      </div>
      <Separator />
      <CoAccountForm coAccounts={coAccounts} />
    </div>
  );
}
