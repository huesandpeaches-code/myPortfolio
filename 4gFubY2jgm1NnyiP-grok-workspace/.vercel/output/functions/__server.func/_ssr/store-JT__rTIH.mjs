import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-JT__rTIH.js
var DEFAULT_CONTENT = {
	name: "Elena Voss",
	title: "Virtual Assistant for independent operators",
	tagline: "Calm operations for founders who would rather be in the work, not the inbox.",
	email: "hello@elenavoss.studio",
	location: "Remote · GMT+8",
	availability: "Open for two retainers",
	bio: "I keep the operational layer of a small business quiet and current: inbox, calendar, research, and the documents that usually stall a week. Ten years supporting consultants, coaches, and product studios. I work async, write clearly, and treat every client system as if I will still be in it a year from now.",
	services: [
		{
			id: "s1",
			title: "Inbox & calendar",
			summary: "Triage, drafts, scheduling, and a weekly brief so nothing important sits unseen."
		},
		{
			id: "s2",
			title: "Client onboarding",
			summary: "Forms, contracts, kickoff notes, and a repeatable path from yes to first working session."
		},
		{
			id: "s3",
			title: "Research & briefs",
			summary: "Competitor scans, vendor shortlists, and one-page notes you can act on the same day."
		},
		{
			id: "s4",
			title: "Documents & decks",
			summary: "Proposals, SOPs, and clean file systems in Google Workspace, Notion, or both."
		}
	],
	projects: [
		{
			id: "p1",
			title: "Inbox rebuild for a coaching practice",
			client: "Independent coach",
			result: "Cut daily email time from 90 minutes to under 20, with a two-label system still in use a year later.",
			tools: "Gmail, Notion, Calendly"
		},
		{
			id: "p2",
			title: "Onboarding kit for a product studio",
			client: "Five-person studio",
			result: "New clients now complete kickoff in four days instead of two weeks. Zero lost files in six months.",
			tools: "Google Drive, Notion, Slack"
		},
		{
			id: "p3",
			title: "Vendor research for a launch",
			client: "E-commerce founder",
			result: "Shortlisted three fulfillment partners with cost, SLA, and risk in a single brief.",
			tools: "Sheets, Docs, Loom"
		}
	],
	testimonials: [
		{
			id: "t1",
			quote: "Elena made the operational noise disappear. I stopped thinking about my calendar.",
			name: "Priya N.",
			role: "Founder, coaching practice"
		},
		{
			id: "t2",
			quote: "Clear writing, no chasing, and systems that still work after she steps back.",
			name: "James K.",
			role: "Studio director"
		},
		{
			id: "t3",
			quote: "The research briefs are the reason we did not pick the wrong warehouse.",
			name: "Sofia R.",
			role: "E-commerce operator"
		}
	],
	skills: [
		"Google Workspace",
		"Notion",
		"Slack",
		"Asana",
		"Calendly",
		"Canva",
		"Excel",
		"Zoom"
	]
};
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
var useContentStore = create()(persist((set) => ({
	content: DEFAULT_CONTENT,
	hydrated: false,
	setHydrated: (value) => set({ hydrated: value }),
	setContent: (content) => set({ content }),
	patch: (partial) => set((state) => ({ content: {
		...state.content,
		...partial
	} })),
	reset: () => set({ content: DEFAULT_CONTENT })
}), {
	name: "northline-site-content",
	partialize: (state) => ({ content: state.content }),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated(true);
	}
}));
//#endregion
export { useContentStore as n, uid as t };
