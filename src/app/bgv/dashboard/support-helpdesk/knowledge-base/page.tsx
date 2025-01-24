import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function KnowledgeBasePage() {
  return (
    <DashboardLayout title="Knowledge Base">
      <EmptyState />
    </DashboardLayout>
  );
}
