import { createFileRoute } from "@tanstack/react-router";
import { AppNav } from "@/components/app-nav";
import { SiteView } from "@/components/site-view";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-fg">
      <AppNav />
      <SiteView />
    </div>
  );
}
