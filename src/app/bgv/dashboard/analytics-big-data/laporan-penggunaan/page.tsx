import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function UsageReportPage() {
  return (
    <DashboardLayout title="Laporan Penggunaan">
      <EmptyState />
    </DashboardLayout>
  );
}
