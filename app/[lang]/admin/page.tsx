import { Separator } from "@/components/ui/separator";
import { GeneralForm } from "@/components/admin/general-form";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">General</h3>
        <p className="text-sm text-muted-foreground">
          Configure general settings for your school.
        </p>
      </div>
      <Separator />
      <GeneralForm />
    </div>
  );
}
