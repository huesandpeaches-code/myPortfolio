import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Check, u as Copy } from "../_libs/lucide-react.mjs";
import { n as Route$2 } from "./router-DkNE5_CJ.mjs";
import { n as Button, r as cn, t as AppNav } from "./button-DCbQq31w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsYsBmb6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DOC_SECTIONS = [
	{
		slug: "start",
		title: "Start here",
		group: "Manual",
		summary: "What this documentation is for, and how to use it.",
		body: [
			{
				type: "p",
				text: "This is the operating manual for a freelancer profile and portfolio site built for virtual work. It covers two jobs at once: how to ask an AI to build the site, and how to keep the site current without opening code every time a client result lands."
			},
			{
				type: "p",
				text: "The original ask was a prompt. The follow-up was the real requirement: easy edits, new portfolio items, and updates you can make yourself. This manual treats that as the product, not a footnote."
			},
			{
				type: "h",
				text: "How to read this"
			},
			{
				type: "ul",
				items: [
					"Prompting — copy-ready prompts for building or rebuilding the site.",
					"Keep it current — how the Studio works for profile, services, and projects.",
					"Live example — a full sample site you can rewrite in place.",
					"Publish — a short checklist before you send the link to a client."
				]
			},
			{
				type: "callout",
				title: "What is already running",
				text: "You are inside Northline. Open Studio to change names, copy, and projects. Open Live site to see the public page. Nothing you type here is sent to a server; it stays in this browser until you reset."
			}
		]
	},
	{
		slug: "what-you-get",
		title: "What a VA site needs",
		group: "Manual",
		summary: "The pages and facts that convert a visitor into a conversation.",
		body: [
			{
				type: "p",
				text: "A virtual assistant site is not a résumé dump. A visitor decides in under a minute whether you understand their week. The page has to answer four questions in order: who you help, what you take off their plate, proof it worked, and how to start."
			},
			{
				type: "h",
				text: "Required sections"
			},
			{
				type: "ol",
				items: [
					"Hero — name, title, one sentence, one action (book or write).",
					"About — who you are for, how you work, where you sit in time zones.",
					"Services — four to six offers written as outcomes, not tool lists.",
					"Portfolio — three to six case notes with a measurable result.",
					"Testimonials — short quotes with a real role attached.",
					"Skills — tools as badges, never as the headline.",
					"Contact — form, email, or calendar. One primary path."
				]
			},
			{
				type: "h",
				text: "Tone that earns trust"
			},
			{
				type: "p",
				text: "Write like a calm operator. Avoid superlatives, sparkle language, and generic claims such as “I go above and beyond.” Replace them with a result, a timeframe, and the system you left behind."
			},
			{
				type: "ul",
				items: ["Weak: Helped a client stay organized.", "Strong: Cut daily inbox time from 90 minutes to under 20 with a two-label system still in use a year later."]
			}
		]
	},
	{
		slug: "prompting",
		title: "How to prompt",
		group: "Prompting",
		summary: "The shape of a prompt that produces a usable site instead of a pretty mock.",
		body: [
			{
				type: "p",
				text: "A good prompt names the job, the visitor, the sections, the design constraints, and the edit model. If you skip the edit model, you get a static page that looks finished and is expensive to keep alive."
			},
			{
				type: "h",
				text: "Always include"
			},
			{
				type: "ul",
				items: [
					"Role and audience — Virtual Assistant, remote operators, coaches, studios.",
					"Exact sections and what each must contain.",
					"Design — professional, restrained, mobile-first, one accent color.",
					"Edit model — a single content file, a CMS, or an in-browser studio.",
					"Portfolio shape — title, client type, result, tools, optional image.",
					"How images are added — file upload, URL, or CMS media library."
				]
			},
			{
				type: "h",
				text: "Never leave implied"
			},
			{
				type: "p",
				text: "Do not assume the model will invent an admin panel. Ask for it. Do not assume it will store content separately from layout. Ask for a content object you can rewrite. Do not assume it will compress images. Ask for uploads that stay small enough for the browser."
			},
			{
				type: "callout",
				title: "Rule of one source",
				text: "All public copy should come from one content object. The page renders it. The Studio writes it. If a heading is hard-coded in a component, it will rot."
			}
		]
	},
	{
		slug: "master-prompt",
		title: "Master prompt",
		group: "Prompting",
		summary: "Copy this into any capable builder when you want the full site.",
		body: [{
			type: "p",
			text: "Use this when you want a complete Virtual Assistant profile and portfolio, with content separated from layout so you can update it later. Replace the bracketed notes with your facts."
		}, {
			type: "prompt",
			title: "Full build prompt",
			text: `Build a modern, professional single-page website for a freelance Virtual Assistant.

Purpose: attract independent operators, coaches, and small studios who need remote operations help.

Identity:
- Name: [your name]
- Title: Virtual Assistant & remote operations specialist
- Audience: [who you help]
- Tone: calm, precise, results-first. No hype.

Sections:
1. Hero — name, title, one-sentence tagline, primary CTA (Hire me / Book a call), secondary CTA (View work).
2. About — short bio, time zone, availability, photo or initials mark.
3. Services — 4–6 cards. Each has a title and a two-line outcome, not a task dump.
4. Portfolio — 3–6 case notes. Each has title, client type, measurable result, tools used, optional image.
5. Testimonials — 3 quotes with name and role.
6. Skills — tool badges (Google Workspace, Notion, Slack, Asana, Calendly, Canva, Excel, Zoom).
7. Contact — email plus a short form (name, email, what they need).

Edit model (required):
- All copy lives in one content object (JSON or equivalent).
- Provide an in-browser Studio so I can update name, bio, services, testimonials, skills, and portfolio without editing code.
- I must be able to add, edit, reorder, and remove portfolio items.
- I must be able to upload a profile photo and project images from my computer. Store them as compressed data URLs or in a media folder with clear instructions.
- Include a Reset to sample action and a Live site preview.

Design:
- Light editorial look. Warm paper background, ink text, one deep green/pine accent.
- Fully responsive. Touch targets at least 44px. No horizontal overflow on a phone.
- Semantic HTML, accessible labels, visible focus.
- No purple gradients, no emoji icons, no lorem ipsum in the finished UI.

Technical:
- React + Tailwind, ready to run.
- Persist Studio edits in localStorage so a refresh keeps my copy.
- Comments only where I need to change a link or embed a calendar.`
		}]
	},
	{
		slug: "easy-edit-prompt",
		title: "Easy-edit prompt",
		group: "Prompting",
		summary: "Use this when the site already exists and you only need the update path.",
		body: [
			{
				type: "p",
				text: "If a builder already produced a pretty static page, do not start over. Ask it to extract content into one object and add a Studio. This is the prompt for that follow-up."
			},
			{
				type: "prompt",
				title: "Make it editable",
				text: `Refactor this Virtual Assistant portfolio so I can update it without touching layout code.

Requirements:
- Move all public copy (name, title, tagline, about, services, projects, testimonials, skills, contact) into a single content object.
- Add a Studio page with forms for every field.
- Portfolio: add, edit, remove, and reorder items. Each item has title, client, result, tools, and an optional image upload.
- Profile photo upload with client-side resize so files stay small.
- Persist changes in localStorage. Provide Reset to sample.
- Keep the public site reading only from that content object.
- Write a short in-app documentation page explaining how to update text and add a new case study.

Do not change the visual language except where needed to add the Studio and docs navigation.`
			},
			{
				type: "h",
				text: "No-code variant"
			},
			{
				type: "p",
				text: "If you are using a visual builder instead of code, say so. Ask for CMS collections, not hard-coded cards."
			},
			{
				type: "prompt",
				title: "Visual builder prompt",
				text: `Design a professional Virtual Assistant portfolio in a visual editor I can keep using.

Collections I must be able to edit without a developer:
- Profile (name, title, tagline, bio, photo, email, availability)
- Services (title, summary)
- Projects (title, client, result, tools, cover image)
- Testimonials (quote, name, role)

The live page binds to those collections. I need to upload new project images from the editor, duplicate a project as a template, and hide a draft without deleting it. Style: warm paper, ink type, one pine accent, mobile-first, conversion-oriented.`
			}
		]
	},
	{
		slug: "studio",
		title: "Using the Studio",
		group: "Keep it current",
		summary: "Where copy lives, how saves work, and what not to store.",
		body: [
			{
				type: "p",
				text: "Studio is the admin you asked for. It is not a second website. It is the form that writes the same object the Live site reads. Change a field, glance at Live site, send the link."
			},
			{
				type: "h",
				text: "What you can edit"
			},
			{
				type: "ul",
				items: [
					"Identity — name, title, tagline, email, location, availability, bio.",
					"Photo — upload from your computer. The file is resized in the browser.",
					"Services — add or remove cards. Keep them outcome-shaped.",
					"Portfolio — add a case, attach a cover, rewrite the result line.",
					"Testimonials and skills — short, factual, current."
				]
			},
			{
				type: "h",
				text: "How storage works"
			},
			{
				type: "p",
				text: "Edits stay in this browser. That is enough for drafting and for a personal device you always use. It is not a backup. Before you replace a computer, copy the important lines somewhere durable, or export is a feature to ask for next."
			},
			{
				type: "callout",
				title: "Do not paste secrets",
				text: "Never put client emails, invoices, passwords, or private documents into the Studio. The live page is public by nature. Use initials and roles, not confidential names, unless you have permission."
			},
			{
				type: "h",
				text: "Reset"
			},
			{
				type: "p",
				text: "Reset to sample restores Elena Voss, the example operator. Use it when you want to see the original structure again. It will replace your draft in this browser."
			}
		]
	},
	{
		slug: "portfolio-uploads",
		title: "Adding portfolio work",
		group: "Keep it current",
		summary: "The exact sequence for a new case study, including images.",
		body: [
			{
				type: "p",
				text: "A portfolio item is a case note, not a screenshot gallery. One image is optional. The result line is not."
			},
			{
				type: "h",
				text: "Add a case in five steps"
			},
			{
				type: "ol",
				items: [
					"Open Studio → Portfolio → Add project.",
					"Title the system you built, not the hours you billed.",
					"Name the client type (Independent coach), not a private individual, unless you have a release.",
					"Write one result with a number or a before/after.",
					"List tools, then optionally upload a cover. Save is automatic."
				]
			},
			{
				type: "h",
				text: "Images"
			},
			{
				type: "p",
				text: "Upload from your computer. The Studio compresses the file so the page stays light. Prefer a clean document mock, a simple diagram, or a quiet photograph of a workspace — not a selfie grid. If you have no image, leave it blank. Initials and typography will carry the card."
			},
			{
				type: "ul",
				items: ["Good covers: a cropped Notion board, a one-page SOP header, a calm desk photograph you own.", "Skip: other people’s logos without permission, screenshots full of client names, low-contrast phone photos."]
			},
			{
				type: "h",
				text: "When to remove a case"
			},
			{
				type: "p",
				text: "Take it down if the work is stale, the client asked, or you no longer offer that service. Three strong cases beat eight vague ones."
			}
		]
	},
	{
		slug: "writing",
		title: "Writing the public copy",
		group: "Keep it current",
		summary: "Patterns that read as senior operations help.",
		body: [
			{
				type: "h",
				text: "Hero"
			},
			{
				type: "p",
				text: "One sentence. Name the buyer and the relief. Example: Calm operations for founders who would rather be in the work, not the inbox."
			},
			{
				type: "h",
				text: "Services"
			},
			{
				type: "p",
				text: "Title the job. Summarize the outcome. Do not list ten micro-tasks. If a service needs a price, put a starting rate in the summary, not a menu of packages you cannot staff."
			},
			{
				type: "h",
				text: "About"
			},
			{
				type: "p",
				text: "Three beats: who you help, how you work (async, retainers, time zone), and a proof of durability (years, a system still running). Stop before your origin story."
			},
			{
				type: "h",
				text: "Contact"
			},
			{
				type: "p",
				text: "One email you actually read. If you use a calendar, replace the mailto with that link in a later pass. Do not offer five channels. Visitors pick none."
			}
		]
	},
	{
		slug: "publish",
		title: "Publish checklist",
		group: "Ship",
		summary: "What to verify before a client sees the URL.",
		body: [
			{
				type: "ol",
				items: [
					"Your real name and a title a stranger would search.",
					"A tagline with a buyer in it.",
					"An email that reaches you.",
					"At least three services and three cases with results.",
					"No placeholder names left from the sample (search for Elena).",
					"Images you own, compressed, no client secrets in frame.",
					"Phone layout: no sideways scroll, buttons easy to tap.",
					"A single call to action in the hero."
				]
			},
			{
				type: "callout",
				title: "Sample content is a template",
				text: "Elena Voss is invented for this manual. Replace every line before you share the site as yours."
			},
			{
				type: "h",
				text: "What to ask for next"
			},
			{
				type: "ul",
				items: [
					"A calendar embed once you have a booking link.",
					"Export and import of the content object as JSON.",
					"A custom domain and a real inbox behind the contact form."
				]
			}
		]
	}
];
var DOC_GROUPS = [
	"Manual",
	"Prompting",
	"Keep it current",
	"Ship"
];
function DocsView({ slug }) {
	const section = DOC_SECTIONS.find((s) => s.slug === slug) ?? DOC_SECTIONS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:sticky lg:top-20 lg:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-medium uppercase tracking-[0.14em] text-subtle",
				children: "Contents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-wrap gap-1 pb-2 lg:flex-col lg:flex-nowrap lg:overflow-visible lg:pb-0",
				children: DOC_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents lg:mb-4 lg:block lg:min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 hidden text-[11px] font-medium uppercase tracking-wider text-subtle lg:block",
						children: group
					}), DOC_SECTIONS.filter((s) => s.group === group).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						search: { section: item.slug },
						className: cn("block rounded-md px-3 py-2 text-sm transition-colors", item.slug === section.slug ? "bg-inset text-fg" : "text-muted hover:bg-inset hover:text-fg"),
						children: item.title
					}, item.slug))]
				}, group))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
					children: section.group
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl leading-tight tracking-tight sm:text-5xl",
					children: section.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-base text-muted",
					children: section.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-5 border-t border-border pt-8",
					children: section.body.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { block }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, { current: section })
			]
		})]
	});
}
function Block({ block }) {
	if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "max-w-2xl text-[17px] leading-7 text-fg",
		children: block.text
	});
	if (block.type === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "pt-4 font-display text-2xl tracking-tight text-fg",
		children: block.text
	});
	if (block.type === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "max-w-2xl list-disc space-y-2 pl-5 text-[17px] leading-7 text-fg",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	});
	if (block.type === "ol") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "max-w-2xl list-decimal space-y-2 pl-5 text-[17px] leading-7 text-fg",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	});
	if (block.type === "callout") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "max-w-2xl rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-wider text-subtle",
			children: block.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-[15px] leading-6 text-fg",
			children: block.text
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBlock, {
		title: block.title,
		text: block.text
	});
}
function PromptBlock({ title, text }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copy() {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-full overflow-hidden rounded-xl border border-border bg-primary text-primary-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 border-b border-primary-fg/10 px-4 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wider text-primary-fg/70",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				size: "sm",
				variant: "secondary",
				className: "h-9 bg-primary-fg/10 text-primary-fg hover:bg-primary-fg/16 border-0",
				onClick: copy,
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy prompt"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "max-h-[28rem] overflow-auto p-4 font-mono text-[12.5px] leading-5 text-primary-fg/90 whitespace-pre-wrap",
			children: text
		})]
	});
}
function Pager({ current }) {
	const index = DOC_SECTIONS.findIndex((s) => s.slug === current.slug);
	const prev = DOC_SECTIONS[index - 1];
	const next = DOC_SECTIONS[index + 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2",
		children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			search: { section: prev.slug },
			className: "rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-inset",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "Previous"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-medium",
				children: prev.title
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			search: { section: next.slug },
			className: "rounded-xl border border-border bg-surface p-4 text-right transition-colors hover:bg-inset",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "Next"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-medium",
				children: next.title
			})]
		}) : null]
	});
}
function Home() {
	const { section } = Route$2.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsView, { slug: section ?? "start" })]
	});
}
//#endregion
export { Home as component };
