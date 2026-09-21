import { GOAL_FOCUS, METRIC_GROUPS } from "@/lib/metrics";

export function MetricsView() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
        Field notes
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
        Meta Ads reporting metrics
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted">
        The numbers Marco uses in a weekly pack. Strategy stays with the client.
        Reporting stays consistent: same date range, same columns, every week.
      </p>

      <div className="mt-10 space-y-8">
        {METRIC_GROUPS.map((group) => (
          <section
            key={group.title}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-display text-2xl tracking-tight">{group.title}</h2>
              <p className="mt-1 text-sm text-muted">{group.question}</p>
            </div>
            <div className="divide-y divide-border">
              {group.rows.map((row) => (
                <div
                  key={row.name}
                  className="grid gap-1 px-5 py-3 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6"
                >
                  <p className="font-medium">{row.name}</p>
                  <p className="text-sm leading-6 text-muted">{row.meaning}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight">What to watch by goal</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {GOAL_FOCUS.map((item) => (
            <article
              key={item.goal}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <p className="text-xs uppercase tracking-wider text-subtle">{item.goal}</p>
              <p className="mt-2 text-sm leading-6">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="mt-10 rounded-xl border border-border bg-inset p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-subtle">
          A weekly line
        </p>
        <p className="mt-2 font-mono text-sm leading-6">
          Spend · Results · Cost per result · ROAS · CTR · CPC · Frequency
        </p>
        <p className="mt-3 text-sm text-muted">
          Flag big week-over-week moves. Leave kill/scale decisions to the client.
        </p>
      </aside>
    </div>
  );
}
