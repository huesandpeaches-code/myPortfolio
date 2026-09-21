export type DocSection = {
  slug: string;
  title: string;
  group: string;
  summary: string;
  body: DocBlock[];
};

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "prompt"; title: string; text: string };

export const DOC_SECTIONS: DocSection[] = [
  {
    slug: "start",
    title: "Start here",
    group: "Manual",
    summary: "What this documentation is for, and how to use it.",
    body: [
      {
        type: "p",
        text: "This is the operating manual for a freelancer profile and portfolio site built for virtual work. It covers two jobs at once: how to ask an AI to build the site, and how to keep the site current without opening code every time a client result lands.",
      },
      {
        type: "p",
        text: "The original ask was a prompt. The follow-up was the real requirement: easy edits, new portfolio items, and updates you can make yourself. This manual treats that as the product, not a footnote.",
      },
      {
        type: "h",
        text: "How to read this",
      },
      {
        type: "ul",
        items: [
          "Prompting — copy-ready prompts for building or rebuilding the site.",
          "Keep it current — how the Studio works for profile, services, and projects.",
          "Live example — a full sample site you can rewrite in place.",
          "Publish — a short checklist before you send the link to a client.",
        ],
      },
      {
        type: "callout",
        title: "What is already running",
        text: "The public site is Marco da Jose’s VA portfolio. Open Studio to change copy, services, and cases. Open Metrics for the weekly Ads Manager glossary. Edits stay in this browser until you reset.",
      },
    ],
  },
  {
    slug: "what-you-get",
    title: "What a VA site needs",
    group: "Manual",
    summary: "The pages and facts that convert a visitor into a conversation.",
    body: [
      {
        type: "p",
        text: "A virtual assistant site is not a résumé dump. A visitor decides in under a minute whether you understand their week. The page has to answer four questions in order: who you help, what you take off their plate, proof it worked, and how to start.",
      },
      {
        type: "h",
        text: "Required sections",
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
          "Contact — form, email, or calendar. One primary path.",
        ],
      },
      {
        type: "h",
        text: "Tone that earns trust",
      },
      {
        type: "p",
        text: "Write like a calm operator. Avoid superlatives, sparkle language, and generic claims such as “I go above and beyond.” Replace them with a result, a timeframe, and the system you left behind.",
      },
      {
        type: "ul",
        items: [
          "Weak: Helped a client stay organized.",
          "Strong: Cut daily inbox time from 90 minutes to under 20 with a two-label system still in use a year later.",
        ],
      },
    ],
  },
  {
    slug: "prompting",
    title: "How to prompt",
    group: "Prompting",
    summary: "The shape of a prompt that produces a usable site instead of a pretty mock.",
    body: [
      {
        type: "p",
        text: "A good prompt names the job, the visitor, the sections, the design constraints, and the edit model. If you skip the edit model, you get a static page that looks finished and is expensive to keep alive.",
      },
      {
        type: "h",
        text: "Always include",
      },
      {
        type: "ul",
        items: [
          "Role and audience — Virtual Assistant, remote operators, coaches, studios.",
          "Exact sections and what each must contain.",
          "Design — professional, restrained, mobile-first, one accent color.",
          "Edit model — a single content file, a CMS, or an in-browser studio.",
          "Portfolio shape — title, client type, result, tools, optional image.",
          "How images are added — file upload, URL, or CMS media library.",
        ],
      },
      {
        type: "h",
        text: "Never leave implied",
      },
      {
        type: "p",
        text: "Do not assume the model will invent an admin panel. Ask for it. Do not assume it will store content separately from layout. Ask for a content object you can rewrite. Do not assume it will compress images. Ask for uploads that stay small enough for the browser.",
      },
      {
        type: "callout",
        title: "Rule of one source",
        text: "All public copy should come from one content object. The page renders it. The Studio writes it. If a heading is hard-coded in a component, it will rot.",
      },
    ],
  },
  {
    slug: "master-prompt",
    title: "Master prompt",
    group: "Prompting",
    summary: "Copy this into any capable builder when you want the full site.",
    body: [
      {
        type: "p",
        text: "Use this when you want a complete Virtual Assistant profile and portfolio, with content separated from layout so you can update it later. Replace the bracketed notes with your facts.",
      },
      {
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
- Comments only where I need to change a link or embed a calendar.`,
      },
    ],
  },
  {
    slug: "easy-edit-prompt",
    title: "Easy-edit prompt",
    group: "Prompting",
    summary: "Use this when the site already exists and you only need the update path.",
    body: [
      {
        type: "p",
        text: "If a builder already produced a pretty static page, do not start over. Ask it to extract content into one object and add a Studio. This is the prompt for that follow-up.",
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

Do not change the visual language except where needed to add the Studio and docs navigation.`,
      },
      {
        type: "h",
        text: "No-code variant",
      },
      {
        type: "p",
        text: "If you are using a visual builder instead of code, say so. Ask for CMS collections, not hard-coded cards.",
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

The live page binds to those collections. I need to upload new project images from the editor, duplicate a project as a template, and hide a draft without deleting it. Style: warm paper, ink type, one pine accent, mobile-first, conversion-oriented.`,
      },
    ],
  },
  {
    slug: "studio",
    title: "Using the Studio",
    group: "Keep it current",
    summary: "Where copy lives, how saves work, and what not to store.",
    body: [
      {
        type: "p",
        text: "Studio is the admin you asked for. It is not a second website. It is the form that writes the same object the Live site reads. Change a field, glance at Live site, send the link.",
      },
      {
        type: "h",
        text: "What you can edit",
      },
      {
        type: "ul",
        items: [
          "Identity — name, title, tagline, email, location, availability, bio.",
          "Photo — upload from your computer. The file is resized in the browser.",
          "Services — add or remove cards. Keep them outcome-shaped.",
          "Portfolio — add a case, attach a cover, rewrite the result line.",
          "Testimonials and skills — short, factual, current.",
        ],
      },
      {
        type: "h",
        text: "How storage works",
      },
      {
        type: "p",
        text: "Edits stay in this browser. That is enough for drafting and for a personal device you always use. It is not a backup. Before you replace a computer, copy the important lines somewhere durable, or export is a feature to ask for next.",
      },
      {
        type: "callout",
        title: "Do not paste secrets",
        text: "Never put client emails, invoices, passwords, or private documents into the Studio. The live page is public by nature. Use initials and roles, not confidential names, unless you have permission.",
      },
      {
        type: "h",
        text: "Reset",
      },
      {
        type: "p",
        text: "Reset to sample restores Elena Voss, the example operator. Use it when you want to see the original structure again. It will replace your draft in this browser.",
      },
    ],
  },
  {
    slug: "portfolio-uploads",
    title: "Adding portfolio work",
    group: "Keep it current",
    summary: "The exact sequence for a new case study, including images.",
    body: [
      {
        type: "p",
        text: "A portfolio item is a case note, not a screenshot gallery. One image is optional. The result line is not.",
      },
      {
        type: "h",
        text: "Add a case in five steps",
      },
      {
        type: "ol",
        items: [
          "Open Studio → Portfolio → Add project.",
          "Title the system you built, not the hours you billed.",
          "Name the client type (Independent coach), not a private individual, unless you have a release.",
          "Write one result with a number or a before/after.",
          "List tools, then optionally upload a cover. Save is automatic.",
        ],
      },
      {
        type: "h",
        text: "Images",
      },
      {
        type: "p",
        text: "Upload from your computer. The Studio compresses the file so the page stays light. Prefer a clean document mock, a simple diagram, or a quiet photograph of a workspace — not a selfie grid. If you have no image, leave it blank. Initials and typography will carry the card.",
      },
      {
        type: "ul",
        items: [
          "Good covers: a cropped Notion board, a one-page SOP header, a calm desk photograph you own.",
          "Skip: other people’s logos without permission, screenshots full of client names, low-contrast phone photos.",
        ],
      },
      {
        type: "h",
        text: "When to remove a case",
      },
      {
        type: "p",
        text: "Take it down if the work is stale, the client asked, or you no longer offer that service. Three strong cases beat eight vague ones.",
      },
    ],
  },
  {
    slug: "writing",
    title: "Writing the public copy",
    group: "Keep it current",
    summary: "Patterns that read as senior operations help.",
    body: [
      {
        type: "h",
        text: "Hero",
      },
      {
        type: "p",
        text: "One sentence. Name the buyer and the relief. Example: Calm operations for founders who would rather be in the work, not the inbox.",
      },
      {
        type: "h",
        text: "Services",
      },
      {
        type: "p",
        text: "Title the job. Summarize the outcome. Do not list ten micro-tasks. If a service needs a price, put a starting rate in the summary, not a menu of packages you cannot staff.",
      },
      {
        type: "h",
        text: "About",
      },
      {
        type: "p",
        text: "Three beats: who you help, how you work (async, retainers, time zone), and a proof of durability (years, a system still running). Stop before your origin story.",
      },
      {
        type: "h",
        text: "Contact",
      },
      {
        type: "p",
        text: "One email you actually read. If you use a calendar, replace the mailto with that link in a later pass. Do not offer five channels. Visitors pick none.",
      },
    ],
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
          "A single call to action in the hero.",
        ],
      },
      {
        type: "callout",
        title: "Sample content is a template",
        text: "Elena Voss is invented for this manual. Replace every line before you share the site as yours.",
      },
      {
        type: "h",
        text: "What to ask for next",
      },
      {
        type: "ul",
        items: [
          "A calendar embed once you have a booking link.",
          "Export and import of the content object as JSON.",
          "A custom domain and a real inbox behind the contact form.",
        ],
      },
    ],
  },
];

export const DOC_GROUPS = ["Manual", "Prompting", "Keep it current", "Ship"] as const;
