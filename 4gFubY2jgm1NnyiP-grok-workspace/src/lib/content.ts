export type Service = {
  id: string;
  title: string;
  summary: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  result: string;
  tools: string;
  image?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type SiteContent = {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  availability: string;
  bio: string;
  photo?: string;
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  skills: string[];
};

export const DEFAULT_CONTENT: SiteContent = {
  name: "Marco da Jose",
  title: "Virtual Assistant · Marketing Operations Support",
  tagline:
    "Reliable admin and Meta Ads support for founders and marketers who need clean systems and clear reports.",
  email: "huesandpeaches@gmail.com",
  location: "Remote · Philippines (PHT / GMT+8) · flexible hours",
  availability: "Open for remote VA and marketing-ops support",
  bio: "I’m a Virtual Assistant based in the Philippines, available across time zones. I handle the day-to-day work that keeps a small team moving: inbox and calendar, file systems, research, and light marketing operations—especially Meta Ads reporting, asset organization, and competitor checks in Ads Library. I work best with independent operators, e-commerce owners, and marketers who need someone careful with details and clear in writing. I don’t claim to be a senior media buyer. I keep admin and ads operations tidy so you can focus on decisions.",
  services: [
    {
      id: "s1",
      title: "Inbox & calendar",
      summary:
        "Triage email, draft replies for your approval, schedule calls, and keep your calendar current so nothing important sits unseen.",
    },
    {
      id: "s2",
      title: "Meta Ads admin & reporting",
      summary:
        "Pull and organize Ads Manager reports, track the metrics you define, keep creatives labeled, and prepare a weekly summary. Strategy and budget calls stay with you.",
    },
    {
      id: "s3",
      title: "Research & competitor monitoring",
      summary:
        "Ads Library scans, competitor page notes, vendor shortlists, and one-page briefs so you start from facts.",
    },
    {
      id: "s4",
      title: "Documents, CRM & onboarding",
      summary:
        "SOPs, simple trackers, client intake, CRM updates, and clean Drive or Notion systems that stay usable after handoff.",
    },
  ],
  projects: [
    {
      id: "p1",
      title: "Weekly Meta reporting pack",
      client: "E-commerce owner",
      result:
        "Built a simple weekly report from Ads Manager exports (spend, results, top ads, notes) so the owner stopped digging in the dashboard every morning. Review time dropped from about 45 minutes to under 10.",
      tools: "Meta Ads Manager, Google Sheets, Slack",
    },
    {
      id: "p2",
      title: "Inbox and calendar reset",
      client: "Freelance ads consultant",
      result:
        "Set up labels, priority rules, and a shared calendar so client messages and calls lived in one place. Reduced missed follow-ups during a busy launch week.",
      tools: "Gmail, Google Calendar, Notion",
    },
    {
      id: "p3",
      title: "Ads Library brief for a launch",
      client: "Small product brand",
      result:
        "Reviewed public ads from three competitors and summarized hooks, offers, and formats in a one-page brief the founder used before briefing creatives.",
      tools: "Meta Ads Library, Google Docs, Canva",
    },
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "Marco kept our weekly ad numbers clear and the files ordered. I finally stopped hunting for screenshots.",
      name: "A. Reyes",
      role: "E-commerce operator",
    },
    {
      id: "t2",
      quote: "Reliable on inbox and scheduling. Writes clearly and doesn’t need to be chased.",
      name: "L. Tan",
      role: "Independent consultant",
    },
    {
      id: "t3",
      quote: "The competitor brief was short, usable, and on time. Exactly what we needed before launch.",
      name: "M. Cruz",
      role: "Product brand founder",
    },
  ],
  skills: [
    "Google Workspace",
    "Notion",
    "Slack",
    "Canva",
    "Meta Business Suite",
    "Ads Manager reporting",
    "Excel / Sheets",
    "Zoom",
    "Calendly",
    "Trello / Asana",
  ],
};

export function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
