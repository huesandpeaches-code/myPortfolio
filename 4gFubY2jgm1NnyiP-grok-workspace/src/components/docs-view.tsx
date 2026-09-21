import { Link } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DOC_GROUPS, DOC_SECTIONS, type DocBlock, type DocSection } from "@/lib/docs";
import { cn } from "@/lib/utils";

export function DocsView({ slug }: { slug: string }) {
  const section = DOC_SECTIONS.find((s) => s.slug === slug) ?? DOC_SECTIONS[0];

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
          Contents
        </p>
        <nav className="flex flex-wrap gap-1 pb-2 lg:flex-col lg:flex-nowrap lg:overflow-visible lg:pb-0">
          {DOC_GROUPS.map((group) => (
            <div key={group} className="contents lg:mb-4 lg:block lg:min-w-0">
              <p className="mb-1 hidden text-[11px] font-medium uppercase tracking-wider text-subtle lg:block">
                {group}
              </p>
              {DOC_SECTIONS.filter((s) => s.group === group).map((item) => (
                <Link
                  key={item.slug}
                  to="/manual"
                  search={{ section: item.slug }}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors",
                    item.slug === section.slug
                      ? "bg-inset text-fg"
                      : "text-muted hover:bg-inset hover:text-fg",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <article className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          {section.group}
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {section.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted">{section.summary}</p>
        <div className="mt-8 space-y-5 border-t border-border pt-8">
          {section.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
        <Pager current={section} />
      </article>
    </div>
  );
}

function Block({ block }: { block: DocBlock }) {
  if (block.type === "p") {
    return <p className="max-w-2xl text-[17px] leading-7 text-fg">{block.text}</p>;
  }
  if (block.type === "h") {
    return (
      <h2 className="pt-4 font-display text-2xl tracking-tight text-fg">
        {block.text}
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="max-w-2xl list-disc space-y-2 pl-5 text-[17px] leading-7 text-fg">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="max-w-2xl list-decimal space-y-2 pl-5 text-[17px] leading-7 text-fg">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "callout") {
    return (
      <aside className="max-w-2xl rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
        <p className="text-xs font-medium uppercase tracking-wider text-subtle">
          {block.title}
        </p>
        <p className="mt-2 text-[15px] leading-6 text-fg">{block.text}</p>
      </aside>
    );
  }
  return <PromptBlock title={block.title} text={block.text} />;
}

function PromptBlock({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="max-w-full overflow-hidden rounded-xl border border-border bg-primary text-primary-fg">
      <div className="flex items-center justify-between gap-3 border-b border-primary-fg/10 px-4 py-2.5">
        <p className="text-xs font-medium uppercase tracking-wider text-primary-fg/70">
          {title}
        </p>
        <Button
          type="button"
          size="sm"
          variant="secondary"
          className="h-9 bg-primary-fg/10 text-primary-fg hover:bg-primary-fg/16 border-0"
          onClick={copy}
        >
          {copied ? <Check /> : <Copy />}
          {copied ? "Copied" : "Copy prompt"}
        </Button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 font-mono text-[12.5px] leading-5 text-primary-fg/90 whitespace-pre-wrap">
        {text}
      </pre>
    </div>
  );
}

function Pager({ current }: { current: DocSection }) {
  const index = DOC_SECTIONS.findIndex((s) => s.slug === current.slug);
  const prev = DOC_SECTIONS[index - 1];
  const next = DOC_SECTIONS[index + 1];

  return (
    <div className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
      {prev ? (
        <Link
          to="/manual"
          search={{ section: prev.slug }}
          className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-inset"
        >
          <p className="text-xs text-subtle">Previous</p>
          <p className="mt-1 font-medium">{prev.title}</p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to="/manual"
          search={{ section: next.slug }}
          className="rounded-xl border border-border bg-surface p-4 text-right transition-colors hover:bg-inset"
        >
          <p className="text-xs text-subtle">Next</p>
          <p className="mt-1 font-medium">{next.title}</p>
        </Link>
      ) : null}
    </div>
  );
}
