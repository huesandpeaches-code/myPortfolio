import type { ReactNode } from "react";
import { ImagePlus, Plus, RotateCcw, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { uid, type Project, type Service, type Testimonial } from "@/lib/content";
import { readImageFile } from "@/lib/images";
import { useContentStore } from "@/lib/store";

export function StudioView() {
  const content = useContentStore((s) => s.content);
  const patch = useContentStore((s) => s.patch);
  const reset = useContentStore((s) => s.reset);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Studio
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">
            Update the live site
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Every field writes to the same object the public page reads. Uploads are
            resized in the browser. Open Live site when you want to check the page.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => reset()}>
            <RotateCcw />
            Reset profile
          </Button>
          <Button asChild>
            <Link to="/">View live site</Link>
          </Button>
        </div>
      </div>

      <Section title="Identity">
        <Field label="Name">
          <Input
            value={content.name}
            onChange={(e) => patch({ name: e.target.value })}
          />
        </Field>
        <Field label="Title">
          <Input
            value={content.title}
            onChange={(e) => patch({ title: e.target.value })}
          />
        </Field>
        <Field label="Tagline">
          <Textarea
            value={content.tagline}
            onChange={(e) => patch({ tagline: e.target.value })}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email">
            <Input
              value={content.email}
              onChange={(e) => patch({ email: e.target.value })}
            />
          </Field>
          <Field label="Location">
            <Input
              value={content.location}
              onChange={(e) => patch({ location: e.target.value })}
            />
          </Field>
        </div>
        <Field label="Availability">
          <Input
            value={content.availability}
            onChange={(e) => patch({ availability: e.target.value })}
          />
        </Field>
        <Field label="About">
          <Textarea
            className="min-h-36"
            value={content.bio}
            onChange={(e) => patch({ bio: e.target.value })}
          />
        </Field>
        <Field label="Profile photo">
          <ImageField
            value={content.photo}
            onChange={(photo) => patch({ photo })}
          />
        </Field>
      </Section>

      <Section
        title="Services"
        action={
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              patch({
                services: [
                  ...content.services,
                  { id: uid("s"), title: "New service", summary: "Outcome in two lines." },
                ],
              })
            }
          >
            <Plus />
            Add
          </Button>
        }
      >
        <div className="space-y-4">
          {content.services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <div className="mb-3 flex justify-end">
                <IconButton
                  label="Remove service"
                  onClick={() =>
                    patch({
                      services: content.services.filter((s) => s.id !== service.id),
                    })
                  }
                />
              </div>
              <Field label="Title">
                <Input
                  value={service.title}
                  onChange={(e) =>
                    patch({
                      services: updateAt(content.services, index, {
                        ...service,
                        title: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
              <Field label="Summary">
                <Textarea
                  value={service.summary}
                  onChange={(e) =>
                    patch({
                      services: updateAt(content.services, index, {
                        ...service,
                        summary: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Portfolio"
        action={
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              patch({
                projects: [
                  ...content.projects,
                  {
                    id: uid("p"),
                    title: "New case",
                    client: "Client type",
                    result: "One measurable result.",
                    tools: "Tools used",
                  },
                ],
              })
            }
          >
            <Plus />
            Add project
          </Button>
        }
      >
        <div className="space-y-4">
          {content.projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <div className="mb-3 flex justify-end">
                <IconButton
                  label="Remove project"
                  onClick={() =>
                    patch({
                      projects: content.projects.filter((p) => p.id !== project.id),
                    })
                  }
                />
              </div>
              <Field label="Title">
                <Input
                  value={project.title}
                  onChange={(e) =>
                    patch({
                      projects: updateAt(content.projects, index, {
                        ...project,
                        title: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
              <Field label="Client type">
                <Input
                  value={project.client}
                  onChange={(e) =>
                    patch({
                      projects: updateAt(content.projects, index, {
                        ...project,
                        client: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
              <Field label="Result">
                <Textarea
                  value={project.result}
                  onChange={(e) =>
                    patch({
                      projects: updateAt(content.projects, index, {
                        ...project,
                        result: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
              <Field label="Tools">
                <Input
                  value={project.tools}
                  onChange={(e) =>
                    patch({
                      projects: updateAt(content.projects, index, {
                        ...project,
                        tools: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
              <Field label="Cover image">
                <ImageField
                  value={project.image}
                  onChange={(image) =>
                    patch({
                      projects: updateAt(content.projects, index, {
                        ...project,
                        image,
                      }),
                    })
                  }
                />
              </Field>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Testimonials"
        action={
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              patch({
                testimonials: [
                  ...content.testimonials,
                  {
                    id: uid("t"),
                    quote: "A short quote.",
                    name: "Name",
                    role: "Role",
                  },
                ],
              })
            }
          >
            <Plus />
            Add
          </Button>
        }
      >
        <div className="space-y-4">
          {content.testimonials.map((item, index) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <div className="mb-3 flex justify-end">
                <IconButton
                  label="Remove testimonial"
                  onClick={() =>
                    patch({
                      testimonials: content.testimonials.filter(
                        (t) => t.id !== item.id,
                      ),
                    })
                  }
                />
              </div>
              <Field label="Quote">
                <Textarea
                  value={item.quote}
                  onChange={(e) =>
                    patch({
                      testimonials: updateAt(content.testimonials, index, {
                        ...item,
                        quote: e.target.value,
                      }),
                    })
                  }
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <Input
                    value={item.name}
                    onChange={(e) =>
                      patch({
                        testimonials: updateAt(content.testimonials, index, {
                          ...item,
                          name: e.target.value,
                        }),
                      })
                    }
                  />
                </Field>
                <Field label="Role">
                  <Input
                    value={item.role}
                    onChange={(e) =>
                      patch({
                        testimonials: updateAt(content.testimonials, index, {
                          ...item,
                          role: e.target.value,
                        }),
                      })
                    }
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <Field label="Comma-separated tools">
          <Textarea
            value={content.skills.join(", ")}
            onChange={(e) =>
              patch({
                skills: e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              })
            }
          />
        </Field>
      </Section>
    </div>
  );
}

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display text-2xl tracking-tight">{title}</h2>
        {action}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <Label>{label}</Label>
      {children}
    </label>
  );
}

function IconButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-inset hover:text-danger"
    >
      <Trash2 className="size-4" />
    </button>
  );
}

function ImageField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string | undefined) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="size-16 overflow-hidden rounded-lg border border-border bg-inset">
        {value ? (
          <img src={value} alt="" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-subtle">
            <ImagePlus className="size-5" />
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <label className="inline-flex h-11 cursor-pointer items-center rounded-md border border-border bg-surface px-4 text-sm">
          Upload
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const next = await readImageFile(file);
              onChange(next);
            }}
          />
        </label>
        {value ? (
          <Button type="button" variant="ghost" onClick={() => onChange(undefined)}>
            Remove
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function updateAt<T extends Service | Project | Testimonial>(
  list: T[],
  index: number,
  next: T,
): T[] {
  return list.map((item, i) => (i === index ? next : item));
}
