import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Mail, p as ArrowRight, s as MapPin } from "../_libs/lucide-react.mjs";
import { n as Button, t as AppNav } from "./button-DCbQq31w.mjs";
import { n as useContentStore } from "./store-JT__rTIH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-Lqy_TcQr.js
var import_jsx_runtime = require_jsx_runtime();
function SiteView() {
	const c = useContentStore((s) => s.content);
	const initials = c.name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-subtle",
						children: c.availability
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-muted",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-xl leading-8 text-fg",
						children: c.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${c.email}`,
								children: ["Hire me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								children: "View work"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[200px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-40 overflow-hidden rounded-2xl border border-border bg-inset",
						children: c.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.photo,
							alt: c.name,
							className: "size-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-full items-center justify-center font-display text-4xl text-primary",
							children: initials
						})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-[17px] leading-7 text-fg",
							children: c.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), c.location]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), c.email]
							})]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: c.services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: service.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted",
							children: service.summary
						})]
					}, service.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "work",
				className: "border-y border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-4 py-16 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: "Selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6",
						children: c.projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "grid overflow-hidden rounded-xl border border-border bg-bg md:grid-cols-[240px_minmax(0,1fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-40 bg-inset",
								children: project.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: "",
									className: "size-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full min-h-40 items-center justify-center px-6 font-display text-lg text-primary",
									children: project.client
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-wider text-subtle",
										children: project.client
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-2xl",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[15px] leading-6 text-fg",
										children: project.result
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs text-muted",
										children: project.tools
									})
								]
							})]
						}, project.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight",
					children: "Clients"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: c.testimonials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "rounded-xl border border-border bg-surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[15px] leading-6",
							children: [
								"“",
								item.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-4 text-sm text-muted",
							children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-subtle",
								children: item.role
							})]
						})]
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight",
							children: "Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: c.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-9 items-center rounded-full border border-border bg-surface px-3 text-sm",
								children: skill
							}, skill))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 rounded-2xl bg-primary px-6 py-10 text-primary-fg sm:px-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl tracking-tight",
									children: "Start with a short note"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-primary-fg/80",
									children: "Describe the week you want back. I reply within one business day."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "mt-6 bg-primary-fg text-primary hover:bg-primary-fg/90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${c.email}`,
										children: [c.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								})
							]
						})
					]
				})
			})
		]
	});
}
function SitePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteView, {})]
	});
}
//#endregion
export { SitePage as component };
