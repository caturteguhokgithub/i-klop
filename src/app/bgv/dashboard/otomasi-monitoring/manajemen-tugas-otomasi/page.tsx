import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function AutomationTaskPage() {
  return (
    <DashboardLayout title="Manajemen Tugas Otomasi">
      <EmptyState />
    </DashboardLayout>
  );
}
