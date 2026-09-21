import { createFileRoute } from "@tanstack/react-router";
import { AppNav } from "@/components/app-nav";
import { StudioView } from "@/components/studio-view";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

function StudioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-fg">
      <AppNav />
      <StudioView />
    </div>
  );
}
