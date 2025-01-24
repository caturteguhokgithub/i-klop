import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function SystemMonitoringPage() {
  return (
    <DashboardLayout title="Pemantauan Sistem">
      <EmptyState />
    </DashboardLayout>
  );
}
