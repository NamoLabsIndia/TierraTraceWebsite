import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as logo_default } from "./logo-DOlEJuKZ.mjs";
import { n as gsapWithCSS, r as require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { B as ChevronDown, G as Building2, K as Briefcase, L as CircleCheck, O as Eye, P as CircuitBoard, Y as BookOpen, _ as Menu, d as Route, et as ArrowRight, n as X, s as ShieldCheck, y as Leaf } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as List, c as Viewport, i as Link$1, n as Indicator, o as Root2, r as Item, s as Trigger, t as Content } from "../_libs/@radix-ui/react-navigation-menu+[...].mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CCLDRPEA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NavigationMenu = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, {
	ref,
	className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuViewport, {})]
}));
NavigationMenu.displayName = Root2.displayName;
var NavigationMenuList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
	...props
}));
NavigationMenuList.displayName = List.displayName;
var NavigationMenuItem = Item;
var navigationMenuTriggerStyle = cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
var NavigationMenuTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
	ref,
	className: cn(navigationMenuTriggerStyle(), "group", className),
	...props,
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
			"aria-hidden": "true"
		})
	]
}));
NavigationMenuTrigger.displayName = Trigger.displayName;
var NavigationMenuContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className),
	...props
}));
NavigationMenuContent.displayName = Content.displayName;
var NavigationMenuLink = Link$1;
var NavigationMenuViewport = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("absolute left-0 top-full flex justify-center"),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
		className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
		ref,
		...props
	})
}));
NavigationMenuViewport.displayName = Viewport.displayName;
var NavigationMenuIndicator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
	ref,
	className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
}));
NavigationMenuIndicator.displayName = Indicator.displayName;
var ListItem = import_react.forwardRef(({ className, title, children, icon: Icon, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			ref,
			className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5",
			...props,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm font-medium leading-none",
				children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }), title]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "line-clamp-2 text-sm leading-snug text-ink-muted mt-1",
				children
			})]
		})
	}) });
});
ListItem.displayName = "ListItem";
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto mt-3 flex w-[min(1240px,94%)] items-center justify-between rounded-full border border-black/5 bg-white/75 px-4 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_10px_40px_-20px_rgba(16,195,90,0.15)] backdrop-blur-xl sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "flex shrink-0 items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "TierraTrace",
						className: "h-10 w-auto sm:h-12"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-[46%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavigationMenuList, {
						className: "space-x-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
								href: "/#why",
								className: navigationMenuTriggerStyle(),
								children: "Why TierraTrace"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavigationMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuTrigger, {
								className: "bg-transparent hover:bg-black/5",
								children: "Platform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "row-span-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-primary/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md",
												href: "/platform/passport",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mb-2 text-lg font-medium",
														children: "TierraTrace Passport"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm leading-tight text-ink-muted",
														children: "Secure Digital Product Passports for complete lifecycle transparency."
													})
												]
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
										href: "/platform/traceability",
										title: "TierraTrace Trace",
										icon: Route,
										children: "End-to-End Traceability tracking."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
										href: "/platform/carbon",
										title: "TierraTrace Carbon",
										icon: Leaf,
										children: "Carbon Footprint & Sustainability."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
										href: "/platform/verify",
										title: "TierraTrace Verify",
										icon: ShieldCheck,
										children: "Supplier & Product Verification."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
										href: "/platform",
										title: "TierraTrace Insights",
										icon: Eye,
										children: "Analytics & Supply Chain Intelligence."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
										href: "/platform/connect",
										title: "TierraTrace Connect",
										icon: CircuitBoard,
										children: "APIs & ERP Integrations."
									})
								]
							}) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
								href: "/#industries",
								className: navigationMenuTriggerStyle(),
								children: "Industries"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
								href: "/#compliance",
								className: navigationMenuTriggerStyle(),
								children: "Compliance"
							}) })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuList, {
						className: "space-x-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavigationMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuTrigger, {
							className: "bg-transparent hover:bg-black/5",
							children: "About"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "grid w-[300px] gap-3 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
									href: "https://www.namolabs.in/",
									target: "_blank",
									rel: "noopener noreferrer",
									title: "Company",
									icon: Building2,
									children: "Learn about our mission and team."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
									href: "/#resources",
									title: "Resources",
									icon: BookOpen,
									children: "Case studies, whitepapers, and guides."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItem, {
									href: "https://www.namolabs.in/careers",
									target: "_blank",
									rel: "noopener noreferrer",
									title: "Careers",
									icon: Briefcase,
									children: "Join us in building product truth."
								})
							]
						}) })] })
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#contact",
							className: "hidden rounded-full px-4 py-2 text-[13.5px] font-medium text-ink transition hover:bg-black/5 sm:inline-flex",
							children: "Contact sales"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/#pilot",
							className: "hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition hover:bg-black sm:inline-flex",
							children: ["Request pilot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden",
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -10,
				scale: .95
			},
			transition: {
				duration: .2,
				ease: "easeOut"
			},
			className: "absolute inset-x-4 top-[calc(100%+8px)] rounded-2xl border border-black/5 bg-white p-4 shadow-xl lg:hidden origin-top z-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#why",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft",
						children: "Why TierraTrace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/platform",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft",
						children: "Platform"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#industries",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft",
						children: "Industries"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#compliance",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft",
						children: "Compliance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col border-t border-black/5 pt-2 mt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-2 text-[12px] font-bold uppercase tracking-wider text-ink-muted",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.namolabs.in/about",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => setOpen(false),
								className: "rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft",
								children: "Company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#resources",
								onClick: () => setOpen(false),
								className: "rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft",
								children: "Resources"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.namolabs.in/careers",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => setOpen(false),
								className: "rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft",
								children: "Careers"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#pilot",
						onClick: () => setOpen(false),
						className: "mt-2 flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-medium text-white",
						children: ["Request pilot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		}) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-white/10 bg-gradient-to-br from-[#06331A] via-[#052614] to-[#02140A] text-white py-20 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] opacity-[0.15]",
				style: { background: "radial-gradient(circle at top left, #16C15F 0%, transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] opacity-[0.1]",
				style: { background: "radial-gradient(circle at bottom right, #16C15F 0%, transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-[1240px] px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "TierraTrace",
						className: "h-16 w-auto brightness-0 invert drop-shadow-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-[14px] leading-relaxed text-white/70",
						children: "The global Digital Product Passport & end-to-end traceability platform. A Namo Labs product."
					})] }), [
						{
							t: "Platform",
							l: [
								{
									label: "Product Passport",
									href: "/platform/passport"
								},
								{
									label: "Traceability",
									href: "/platform/traceability"
								},
								{
									label: "Web Verify",
									href: "/platform/verify"
								},
								{
									label: "Compliance",
									href: "/#compliance"
								}
							]
						},
						{
							t: "Company",
							l: [
								{
									label: "About Namo Labs",
									href: "https://www.namolabs.in/about"
								},
								{
									label: "Careers",
									href: "https://www.namolabs.in/careers"
								},
								{
									label: "Contact",
									href: "https://www.namolabs.in/contact"
								}
							]
						},
						{
							t: "Resources",
							l: [
								{
									label: "EU DPP guide",
									href: "#"
								},
								{
									label: "CBAM playbook",
									href: "#"
								},
								{
									label: "Trust center",
									href: "#"
								},
								{
									label: "Security",
									href: "#"
								}
							]
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12px] font-bold uppercase tracking-widest text-white/90",
						children: c.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-[14.5px] text-white/60",
						children: c.l.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							target: item.href.startsWith("http") ? "_blank" : void 0,
							rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0,
							className: "transition-colors duration-300 hover:text-white",
							children: item.label
						}) }, item.label))
					})] }, c.t))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-white/50 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Namo Labs. All rights reserved. TierraTrace™"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.namolabs.in/privacy",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition-colors hover:text-white",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.namolabs.in/terms",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition-colors hover:text-white",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "transition-colors hover:text-white",
								children: "Security"
							})
						]
					})]
				})]
			})
		]
	});
}
var styles_default = "/assets/styles-BQy_bNmG.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TierraTrace — Global Digital Product Passport & End-to-End Traceability" },
			{
				name: "description",
				content: "TierraTrace is the enterprise platform for Digital Product Passports and full lifecycle traceability — from raw material to reuse and recycling."
			},
			{
				name: "author",
				content: "Namo Labs"
			},
			{
				property: "og:title",
				content: "TierraTrace — Digital Product Passport Platform"
			},
			{
				property: "og:description",
				content: "Secure Digital Product Passports and end-to-end traceability for Fortune 500 manufacturers, governments, and supply chain leaders."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=League+Spartan:wght@700;800;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				async: true,
				src: "https://www.googletagmanager.com/gtag/js?id=G-08PG308MSC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-08PG308MSC');` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-uvvzU5q3.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var homepageJsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "https://www.tierratrace.in/#organization",
			name: "TierraTrace",
			url: "https://www.tierratrace.in/",
			logo: `https://www.tierratrace.in${logo_default}`,
			description: "TierraTrace is the enterprise platform for Digital Product Passports and full lifecycle traceability — from raw material to reuse and recycling.",
			parentOrganization: {
				"@type": "Organization",
				name: "Namo Labs",
				url: "https://www.namolabs.in/"
			},
			contactPoint: {
				"@type": "ContactPoint",
				email: "info@namolabs.in",
				contactType: "sales"
			},
			knowsAbout: [
				"EU Digital Product Passport (ESPR)",
				"CBAM",
				"EU Battery Regulation"
			]
		},
		{
			"@type": "WebSite",
			"@id": "https://www.tierratrace.in/#website",
			url: "https://www.tierratrace.in/",
			name: "TierraTrace",
			inLanguage: "en",
			publisher: { "@id": "https://www.tierratrace.in/#organization" }
		},
		{
			"@type": "WebPage",
			"@id": "https://www.tierratrace.in/#webpage",
			url: "https://www.tierratrace.in/",
			name: "TierraTrace — Global Digital Product Passport & End-to-End Traceability",
			inLanguage: "en",
			isPartOf: { "@id": "https://www.tierratrace.in/#website" },
			about: { "@id": "https://www.tierratrace.in/#software" }
		},
		{
			"@type": "SoftwareApplication",
			"@id": "https://www.tierratrace.in/#software",
			name: "TierraTrace",
			description: "TierraTrace enables manufacturers to issue secure Digital Product Passports and achieve end-to-end traceability across the complete product lifecycle—from raw materials to recycling.",
			url: "https://www.tierratrace.in/",
			applicationCategory: "BusinessApplication",
			operatingSystem: "Web",
			author: { "@id": "https://www.tierratrace.in/#organization" }
		}
	]
};
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [{
			property: "og:image",
			content: `https://www.tierratrace.in${logo_default}`
		}],
		links: [{
			rel: "canonical",
			href: "https://www.tierratrace.in/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(homepageJsonLd)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./verify-1RX1DPPP.mjs");
var Route$1 = createFileRoute("/platform/verify")({
	head: () => ({
		meta: [
			{ title: "Web Verify — TierraTrace" },
			{
				name: "description",
				content: "Instant, defensible product verification in under three seconds. Eight-stage pipeline, explainable risk signals, and an open-source offline verification tool — no app or account required."
			},
			{
				property: "og:title",
				content: "Web Verify — TierraTrace"
			},
			{
				property: "og:description",
				content: "A consumer scans a QR code and gets a defensible answer in under three seconds. Behind that moment is a full verification and fraud-detection system."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.tierratrace.in/platform/verify"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	PlatformVerifyRoute: Route$1.update({
		id: "/platform/verify",
		path: "/platform/verify",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
