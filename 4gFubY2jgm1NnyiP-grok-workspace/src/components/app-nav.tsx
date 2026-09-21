import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, BarChart3, Home, PenLine } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Site", icon: Home },
  { to: "/studio", label: "Studio", icon: PenLine },
  { to: "/metrics", label: "Metrics", icon: BarChart3 },
  { to: "/manual", label: "Manual", icon: BookOpen },
] as const;

export function AppNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-sm bg-primary text-primary-fg">
            <span className="font-display text-sm leading-none">M</span>
          </span>
          <span className="font-display text-base tracking-tight">Marco da Jose</span>
          <span className="hidden text-xs text-muted sm:inline">VA</span>
        </Link>
        <nav className="flex items-center gap-1">
          {LINKS.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname === link.to || pathname.startsWith(`${link.to}/`);
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm transition-colors",
                  active
                    ? "bg-inset text-fg"
                    : "text-muted hover:bg-inset hover:text-fg",
                )}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
