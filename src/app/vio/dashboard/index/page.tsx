import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function DashboardIndexPage() {
  return (
    <DashboardLayout title="Dashboard" company="vio">
      <EmptyState />
    </DashboardLayout>
  );
}
