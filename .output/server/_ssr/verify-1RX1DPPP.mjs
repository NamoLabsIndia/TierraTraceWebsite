import "../_runtime.mjs";
import { r as require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Download, C as Github, F as CircleX, I as CirclePause, L as CircleCheck, M as Clock, R as CircleAlert, S as Globe, U as ChartColumn, et as ArrowRight, f as RotateCcw, i as Users, nt as Archive, s as ShieldCheck, t as Zap, z as ChevronRight } from "../_libs/lucide-react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 24, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
var PIPELINE_STAGES = [
	{
		step: 1,
		name: "Resolve",
		description: "Decode the identifier and resolve it to a registered record."
	},
	{
		step: 2,
		name: "Integrity",
		description: "Verify the record has not been altered since it was signed."
	},
	{
		step: 3,
		name: "Signature",
		description: "Confirm the cryptographic signature against the issuer's public key."
	},
	{
		step: 4,
		name: "Anchor",
		description: "Cross-check the record hash against the ledger anchor."
	},
	{
		step: 5,
		name: "Lifecycle",
		description: "Check the passport's current lifecycle status."
	},
	{
		step: 6,
		name: "Claims",
		description: "Validate every sustainability and compliance claim against evidence."
	},
	{
		step: 7,
		name: "Risk",
		description: "Score the scan against ten published risk signals."
	},
	{
		step: 8,
		name: "Record",
		description: "Log the verification event to the transparency audit trail."
	}
];
var VERDICT_RESULTS = [
	{
		label: "verified",
		icon: CircleCheck,
		color: "text-emerald-600",
		bg: "bg-emerald-50 border-emerald-200",
		description: "All eight stages passed. The record is valid and current."
	},
	{
		label: "could not be verified",
		icon: CircleAlert,
		color: "text-amber-600",
		bg: "bg-amber-50 border-amber-200",
		description: "One or more stages returned inconclusive results."
	},
	{
		label: "no record found",
		icon: CircleX,
		color: "text-slate-600",
		bg: "bg-slate-50 border-slate-200",
		description: "The identifier does not match any registered passport."
	},
	{
		label: "withdrawn",
		icon: Archive,
		color: "text-orange-600",
		bg: "bg-orange-50 border-orange-200",
		description: "The passport has been voluntarily withdrawn by the issuer."
	},
	{
		label: "recalled",
		icon: RotateCcw,
		color: "text-red-600",
		bg: "bg-red-50 border-red-200",
		description: "The product has been subject to a formal recall."
	},
	{
		label: "expired",
		icon: Clock,
		color: "text-slate-500",
		bg: "bg-slate-50 border-slate-200",
		description: "The passport's validity period has ended."
	},
	{
		label: "suspended",
		icon: CirclePause,
		color: "text-purple-600",
		bg: "bg-purple-50 border-purple-200",
		description: "The passport is temporarily suspended pending investigation."
	}
];
var RISK_SIGNALS = [
	{
		name: "Impossible-travel duplicate scans",
		detail: "Same identifier scanned from two geographically implausible locations within minutes."
	},
	{
		name: "Cloned-label scan patterns",
		detail: "Scan frequency and distribution inconsistent with a single genuine unit."
	},
	{
		name: "Geographic implausibility",
		detail: "Scan origin inconsistent with the product's certified supply chain geography."
	},
	{
		name: "Scan velocity anomaly",
		detail: "Scan rate far above statistical baseline for that product category."
	},
	{
		name: "Identifier format deviation",
		detail: "Identifier structure deviates from the registered GS1 or W3C DID format."
	},
	{
		name: "Lifecycle state conflict",
		detail: "Scan occurs after a withdrawal or recall event."
	},
	{
		name: "Claim evidence gap",
		detail: "A sustainability claim on the passport lacks a linked evidence record."
	},
	{
		name: "Anchor timestamp deviation",
		detail: "Ledger anchor timestamp inconsistent with claimed issuance date."
	},
	{
		name: "Certificate expiry proximity",
		detail: "Supplier certificate within the 30-day alert window at time of scan."
	},
	{
		name: "Unusual time-of-day pattern",
		detail: "Scan cluster concentrated in a time window atypical for that supply chain."
	}
];
function WebVerifyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-topographic pt-36 pb-24 sm:pt-44 sm:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nature-orb-1 pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nature-orb-2 pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto max-w-[1240px] px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-sm font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), "Web Verify"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 max-w-4xl text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-ink",
									children: [
										"A defensible answer in",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "under three seconds."
										}),
										" ",
										"No app. No account."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-ink-muted",
									children: "A consumer scans a QR code and gets a clear, defensible answer in under three seconds — no app or account required. Behind that simple moment is a full verification and fraud-detection system that never guesses and never gives a free-text answer."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/#pilot",
										className: "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black",
										children: ["Request pilot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#proof-bundle",
										className: "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-primary" }), "Proof bundle & open-source tool"]
									})]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pipeline",
				className: "py-24 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary",
								children: "Verification pipeline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink",
								children: "Eight stages. Fails closed."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-lg text-ink-muted",
								children: [
									"Every scan runs all eight stages in sequence. If there is doubt at any stage, the result never says ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-ink",
										children: "verified"
									}),
									". The system fails closed — not optimistically."
								]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: PIPELINE_STAGES.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative rounded-2xl border border-black/6 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-primary/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold",
											children: stage.step
										}),
										i < PIPELINE_STAGES.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-muted/40 z-10" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-ink",
											children: stage.name
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-muted",
									children: stage.description
								})]
							})
						}, stage.step))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "results",
				className: "py-24 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary",
								children: "Results"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink",
								children: "A closed set of seven possible results."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-ink-muted",
								children: "There are no free-text answers, no ambiguous messages, and no invented verdicts. Every scan resolves to exactly one of these seven outcomes — nothing else."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
						children: VERDICT_RESULTS.map((result, i) => {
							const Icon = result.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .06,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `rounded-2xl border p-5 ${result.bg}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-5 w-5 shrink-0 ${result.color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-semibold capitalize ${result.color}`,
											children: result.label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-ink-muted",
										children: result.description
									})]
								})
							}, result.label);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "proof-bundle",
				className: "py-24 bg-surface bg-dot-grid",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1240px] px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-16 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary",
								children: "Independent verification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink",
								children: "The platform's own word is never the last word."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-lg leading-relaxed text-ink-muted",
								children: [
									"Every verification produces a ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "downloadable proof bundle"
									}),
									" — a self-contained file containing the signed record, the ledger anchor reference, and the full verification trace."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-lg leading-relaxed text-ink-muted",
								children: [
									"Pair it with the ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "open-source verification tool"
									}),
									" and anyone — a regulator, an auditor, a journalist — can independently re-check the result offline, without ever calling back to TierraTrace's own servers. This is the single strongest trust claim available on this platform."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download proof bundle"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://github.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), "Open-source tool"]
								})]
							})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-black/6 bg-white p-8 shadow-lg ring-tierra",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold text-ink",
										children: "Proof Bundle"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-ink-muted",
										children: "Verifiable offline — no server call required"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: [
										"Signed passport record",
										"Ledger anchor reference",
										"Full pipeline trace",
										"Cryptographic chain of custody",
										"Open-standard W3C VC format"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-ink-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary" }), item]
									}, item))
								})]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "gs1-resolver",
				className: "py-24 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1240px] px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-16 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							className: "order-2 lg:order-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [
									{
										audience: "Consumer",
										sees: "Product passport — origin, materials, certifications",
										icon: Users,
										color: "bg-emerald-50 border-emerald-200 text-emerald-700"
									},
									{
										audience: "Certification body",
										sees: "Full compliance evidence pack with audit trail",
										icon: ShieldCheck,
										color: "bg-blue-50 border-blue-200 text-blue-700"
									},
									{
										audience: "Retailer",
										sees: "Batch provenance and supplier certification status",
										icon: ChartColumn,
										color: "bg-violet-50 border-violet-200 text-violet-700"
									},
									{
										audience: "Regulator",
										sees: "Complete evidence record for regulatory review",
										icon: Globe,
										color: "bg-orange-50 border-orange-200 text-orange-700"
									}
								].map((item) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-2xl border p-4 ${item.color}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 mb-2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-semibold",
												children: item.audience
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-xs leading-relaxed opacity-80",
												children: item.sees
											})
										]
									}, item.audience);
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "order-1 lg:order-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-widest text-primary",
									children: "GS1 Digital Link resolver"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink",
									children: "One scan. The right destination for who's asking."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-lg leading-relaxed text-ink-muted",
									children: "Scanning a product's code redirects to the right destination based on who's scanning. A consumer sees the product passport. A certification body sees the compliance evidence. A regulator sees the full audit trail. Same code, right context, every time."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-lg leading-relaxed text-ink-muted",
									children: [
										"This is implemented using the GS1 Digital Link standard. For a detailed explanation of how the standard works, see",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/compliance/gs1-digital-link",
											className: "font-medium text-primary underline-offset-4 hover:underline",
											children: "/compliance/gs1-digital-link"
										}),
										"."
									]
								})
							] })
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "risk-platform",
				className: "py-24 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-widest text-primary",
									children: "Risk platform"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink",
									children: "Ten published risk signals. Every score is explainable."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg text-ink-muted",
									children: "The risk platform scores every scan against ten named, published signals. A risk score is never a black-box number — it always decomposes into which named signals contributed and by how much. Every factor is auditable."
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-3 sm:grid-cols-2",
							children: RISK_SIGNALS.map((signal, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .04,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4 rounded-2xl border border-black/6 bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold",
										children: i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-ink",
										children: signal.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-ink-muted",
										children: signal.detail
									})] })]
								})
							}, signal.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 rounded-2xl border border-primary/20 bg-primary-soft p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-ink",
										children: "Explainable by design"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-ink-muted",
										children: "Every risk score on this platform is decomposable into its contributing named signals. There are no black-box numbers. If a scan returns a high-risk indicator, the platform shows exactly which of the ten signals triggered and what weight each carried."
									})] })]
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "bulk-verification",
				className: "py-24 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1240px] px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-16 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary",
								children: "Enterprise compliance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink",
								children: "Verify up to 50,000 identifiers in a single job."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-lg leading-relaxed text-ink-muted",
								children: [
									"Enterprise compliance teams don't scan one product at a time. Bulk verification accepts up to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "50,000 identifiers in a single job"
									}),
									" — upload a CSV, run the full eight-stage pipeline across the entire batch, and download a structured results report."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: [
									"Full eight-stage pipeline run on every identifier",
									"Structured CSV/JSON results with per-identifier verdicts",
									"Risk signal breakdown included for each result",
									"Audit-ready report format for regulatory submissions"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-ink-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: item
									})]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/#pilot",
									className: "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black",
									children: ["Talk to us about bulk verification ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-black/6 bg-gradient-to-br from-[#06331A] via-[#052614] to-[#02140A] p-10 text-white shadow-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[4rem] font-bold tracking-tight leading-none text-primary",
										children: "50,000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-xl font-semibold text-white/90",
										children: "identifiers per job"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 space-y-4 text-sm text-white/60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0 text-primary" }), "Full 8-stage pipeline on every identifier"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 shrink-0 text-primary" }), "Structured output with all seven possible verdicts"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 shrink-0 text-primary" }), "Designed for enterprise compliance teams"]
											})
										]
									})
								]
							})
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { WebVerifyPage as component };
