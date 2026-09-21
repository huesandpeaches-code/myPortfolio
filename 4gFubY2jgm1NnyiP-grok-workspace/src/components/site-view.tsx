import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContentStore } from "@/lib/store";

export function SiteView() {
  const c = useContentStore((s) => s.content);
  const parts = c.name.split(" ").filter(Boolean);
  const initials = `${parts[0]?.[0] ?? ""}${parts[parts.length - 1]?.[0] ?? ""}`.toUpperCase();

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
          {c.availability}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          {c.name}
        </h1>
        <p className="mt-3 text-lg text-muted">{c.title}</p>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-fg">{c.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${c.email}`}>
              Hire me
              <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#work">View work</a>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[200px_minmax(0,1fr)]">
          <div>
            <div className="size-40 overflow-hidden rounded-2xl border border-border bg-inset">
              {c.photo ? (
                <img
                  src={c.photo}
                  alt={c.name}
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex size-full items-center justify-center font-display text-4xl text-primary">
                  {initials}
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">About</h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-7 text-fg">{c.bio}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {c.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4" />
                {c.email}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl tracking-tight">Services</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {c.services.map((service) => (
            <article
              key={service.id}
              className="rounded-xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight">Selected work</h2>
          <div className="mt-8 grid gap-6">
            {c.projects.map((project) => (
              <article
                key={project.id}
                className="grid overflow-hidden rounded-xl border border-border bg-bg md:grid-cols-[240px_minmax(0,1fr)]"
              >
                <div className="min-h-40 bg-inset">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      className="size-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-40 items-center justify-center px-6 font-display text-lg text-primary">
                      {project.client}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-subtle">
                    {project.client}
                  </p>
                  <h3 className="mt-1 font-display text-2xl">{project.title}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-fg">
                    {project.result}
                  </p>
                  <p className="mt-4 text-xs text-muted">{project.tools}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl tracking-tight">Clients</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {c.testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <p className="text-[15px] leading-6">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-muted">
                {item.name}
                <span className="block text-xs text-subtle">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight">Tools</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {c.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex h-9 items-center rounded-full border border-border bg-surface px-3 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary px-6 py-10 text-primary-fg sm:px-10">
            <h2 className="font-display text-3xl tracking-tight">
              Start with a short note
            </h2>
            <p className="mt-3 max-w-xl text-primary-fg/80">
              Describe the week you want back. I reply within one business day.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-primary-fg text-primary hover:bg-primary-fg/90"
            >
              <a href={`mailto:${c.email}`}>
                {c.email}
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
