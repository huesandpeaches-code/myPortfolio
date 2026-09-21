import { createFileRoute } from "@tanstack/react-router";
import { AppNav } from "@/components/app-nav";
import { MetricsView } from "@/components/metrics-view";

export const Route = createFileRoute("/metrics")({
  component: MetricsPage,
});

function MetricsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-fg">
      <AppNav />
      <MetricsView />
    </div>
  );
}
