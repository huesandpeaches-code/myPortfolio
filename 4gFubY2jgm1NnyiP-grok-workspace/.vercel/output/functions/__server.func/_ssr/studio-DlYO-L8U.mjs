import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Plus, l as ImagePlus, n as Trash2, r as RotateCcw } from "../_libs/lucide-react.mjs";
import { n as Button, r as cn, t as AppNav } from "./button-DCbQq31w.mjs";
import { n as useContentStore, t as uid } from "./store-JT__rTIH.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-none outline-none transition-colors placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg outline-none transition-colors placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
async function readImageFile(file, maxWidth = 960) {
	return resizeDataUrl(await fileToDataUrl(file), maxWidth);
}
function fileToDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read file"));
		reader.onload = () => resolve(String(reader.result));
		reader.readAsDataURL(file);
	});
}
function resizeDataUrl(dataUrl, maxWidth) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			const scale = Math.min(1, maxWidth / img.width);
			const width = Math.round(img.width * scale);
			const height = Math.round(img.height * scale);
			const canvas = document.createElement("canvas");
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext("2d");
			if (!ctx) {
				resolve(dataUrl);
				return;
			}
			ctx.drawImage(img, 0, 0, width, height);
			resolve(canvas.toDataURL("image/jpeg", .82));
		};
		img.onerror = () => reject(/* @__PURE__ */ new Error("Could not load image"));
		img.src = dataUrl;
	});
}
function StudioView() {
	const content = useContentStore((s) => s.content);
	const patch = useContentStore((s) => s.patch);
	const reset = useContentStore((s) => s.reset);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl tracking-tight",
						children: "Update the live site"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted",
						children: "Every field writes to the same object the public page reads. Uploads are resized in the browser. Open Live site when you want to check the page."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => reset(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Reset sample"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/site",
							children: "View live site"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Identity",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: content.name,
							onChange: (e) => patch({ name: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: content.title,
							onChange: (e) => patch({ title: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tagline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: content.tagline,
							onChange: (e) => patch({ tagline: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.email,
								onChange: (e) => patch({ email: e.target.value })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Location",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.location,
								onChange: (e) => patch({ location: e.target.value })
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Availability",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: content.availability,
							onChange: (e) => patch({ availability: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "About",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "min-h-36",
							value: content.bio,
							onChange: (e) => patch({ bio: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Profile photo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
							value: content.photo,
							onChange: (photo) => patch({ photo })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Services",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => patch({ services: [...content.services, {
						id: uid("s"),
						title: "New service",
						summary: "Outcome in two lines."
					}] }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add"]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: content.services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
									label: "Remove service",
									onClick: () => patch({ services: content.services.filter((s) => s.id !== service.id) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: service.title,
									onChange: (e) => patch({ services: updateAt(content.services, index, {
										...service,
										title: e.target.value
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Summary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: service.summary,
									onChange: (e) => patch({ services: updateAt(content.services, index, {
										...service,
										summary: e.target.value
									}) })
								})
							})
						]
					}, service.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Portfolio",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => patch({ projects: [...content.projects, {
						id: uid("p"),
						title: "New case",
						client: "Client type",
						result: "One measurable result.",
						tools: "Tools used"
					}] }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add project"]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: content.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
									label: "Remove project",
									onClick: () => patch({ projects: content.projects.filter((p) => p.id !== project.id) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: project.title,
									onChange: (e) => patch({ projects: updateAt(content.projects, index, {
										...project,
										title: e.target.value
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Client type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: project.client,
									onChange: (e) => patch({ projects: updateAt(content.projects, index, {
										...project,
										client: e.target.value
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Result",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: project.result,
									onChange: (e) => patch({ projects: updateAt(content.projects, index, {
										...project,
										result: e.target.value
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tools",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: project.tools,
									onChange: (e) => patch({ projects: updateAt(content.projects, index, {
										...project,
										tools: e.target.value
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Cover image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
									value: project.image,
									onChange: (image) => patch({ projects: updateAt(content.projects, index, {
										...project,
										image
									}) })
								})
							})
						]
					}, project.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Testimonials",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => patch({ testimonials: [...content.testimonials, {
						id: uid("t"),
						quote: "A short quote.",
						name: "Name",
						role: "Role"
					}] }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add"]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: content.testimonials.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
									label: "Remove testimonial",
									onClick: () => patch({ testimonials: content.testimonials.filter((t) => t.id !== item.id) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Quote",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: item.quote,
									onChange: (e) => patch({ testimonials: updateAt(content.testimonials, index, {
										...item,
										quote: e.target.value
									}) })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: item.name,
										onChange: (e) => patch({ testimonials: updateAt(content.testimonials, index, {
											...item,
											name: e.target.value
										}) })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Role",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: item.role,
										onChange: (e) => patch({ testimonials: updateAt(content.testimonials, index, {
											...item,
											role: e.target.value
										}) })
									})
								})]
							})
						]
					}, item.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Skills",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Comma-separated tools",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: content.skills.join(", "),
						onChange: (e) => patch({ skills: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
					})
				})
			})
		]
	});
}
function Section({ title, action, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: title
			}), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function IconButton({ label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-inset hover:text-danger",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
	});
}
function ImageField({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "size-16 overflow-hidden rounded-lg border border-border bg-inset",
			children: value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: value,
				alt: "",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-full items-center justify-center text-subtle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-5" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "inline-flex h-11 cursor-pointer items-center rounded-md border border-border bg-surface px-4 text-sm",
				children: ["Upload", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: "image/*",
					className: "sr-only",
					onChange: async (e) => {
						const file = e.target.files?.[0];
						if (!file) return;
						onChange(await readImageFile(file));
					}
				})]
			}), value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				onClick: () => onChange(void 0),
				children: "Remove"
			}) : null]
		})]
	});
}
function updateAt(list, index, next) {
	return list.map((item, i) => i === index ? next : item);
}
function StudioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioView, {})]
	});
}
//#endregion
export { StudioPage as component };
