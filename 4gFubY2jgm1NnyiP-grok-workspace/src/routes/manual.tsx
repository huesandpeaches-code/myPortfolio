import { createFileRoute } from "@tanstack/react-router";
import { AppNav } from "@/components/app-nav";
import { DocsView } from "@/components/docs-view";

type DocsSearch = {
  section?: string;
};

export const Route = createFileRoute("/manual")({
  validateSearch: (search: Record<string, unknown>): DocsSearch => ({
    section: typeof search.section === "string" ? search.section : "start",
  }),
  component: ManualPage,
});

function ManualPage() {
  const { section } = Route.useSearch();
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-fg">
      <AppNav />
      <DocsView slug={section ?? "start"} />
    </div>
  );
}
