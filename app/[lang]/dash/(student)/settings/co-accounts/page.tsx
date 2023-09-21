import { Separator } from "@/components/ui/separator";
import { CoAccountForm } from "@/components/dash/settings/coaccount-form";

export default function SettingsCoAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Co accounts</h3>
        <p className="text-sm text-muted-foreground">
          Manage your co accounts.
        </p>
      </div>
      <Separator />
      <CoAccountForm />
    </div>
  );
}
