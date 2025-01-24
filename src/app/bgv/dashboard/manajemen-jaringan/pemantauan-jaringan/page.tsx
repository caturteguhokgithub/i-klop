import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function NetworkMonitoringPage() {
  return (
    <DashboardLayout title="Pemantauan Jaringan">
      <EmptyState />
    </DashboardLayout>
  );
}
