import { o as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/tweenjs__tween.js+unenv.mjs";
import { t as JOURNEYS } from "./journeys-Ck-G8co7.mjs";
import { t as logo_default } from "./logo-DOlEJuKZ.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion$1 } from "../_libs/motion.mjs";
import { D as Factory, E as FileCheck, H as ChartLine, J as Box, L as CircleCheck, N as ClipboardList, O as Eye, T as FileText, V as Check, X as Blocks, Z as Battery, a as Truck, c as Share2, et as ArrowRight, g as Network, j as Database, k as Earth, l as Scan, m as Package, o as Shield, p as Recycle, q as Brain, r as Wrench, s as ShieldCheck, tt as ArrowLeft, u as Scale, w as FingerprintPattern, x as Landmark, y as Leaf, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as p } from "../_libs/cobe+phenomenon.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uvvzU5q3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Reveal$1 = ({ children, delay = 0, className = "" }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 40
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-100px"
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay
		},
		className,
		children
	});
};
function DigitalProductPassport() {
	(0, import_react.useRef)(null);
	const JOURNEY_STEPS = [
		{
			step: "Raw Cotton Harvest",
			loc: "Rajkot, Gujarat",
			date: "May 12, 2025",
			time: "07:45 UTC"
		},
		{
			step: "Yarn Spinning",
			loc: "KPR Mills",
			date: "May 16, 2025",
			time: "10:30 UTC"
		},
		{
			step: "Garment Manufacturing",
			loc: "Tiruppur",
			date: "May 20, 2025",
			time: "11:05 UTC"
		},
		{
			step: "Retail",
			loc: "Paris",
			date: "May 26, 2025",
			time: "10:00 UTC"
		}
	];
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(0);
	const [viewState, setViewState] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		let timeouts = [];
		if (viewState === "scanning") timeouts.push(setTimeout(() => {
			setViewState("passport");
			setVisibleCount(0);
		}, 2500));
		else if (viewState === "passport") {
			const stepDelay = 1500;
			const showNext = (count) => {
				if (count < JOURNEY_STEPS.length) timeouts.push(setTimeout(() => {
					setVisibleCount(count + 1);
					showNext(count + 1);
				}, stepDelay));
				else timeouts.push(setTimeout(() => {
					setViewState("idle");
				}, 6e3));
			};
			timeouts.push(setTimeout(() => showNext(0), 800));
		}
		return () => timeouts.forEach(clearTimeout);
	}, [viewState]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "passport",
		className: "relative bg-white w-full overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1600px] px-6 pt-20 pb-0 lg:px-[80px] lg:pt-[120px] lg:pb-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal$1, {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center self-start rounded-full bg-[#16C15F]/10 px-3 py-1 mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] font-bold uppercase tracking-widest text-[#16C15F]",
								children: "Digital Product Passport"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-[42px] sm:text-[52px] xl:text-[64px] 2xl:text-[72px] font-bold text-black leading-[1.05] tracking-tight mb-8",
							children: [
								"Every Product.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"One ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#16C15F]",
									children: "Trusted Identity."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16px] xl:text-[18px] text-gray-500 leading-relaxed mb-10 max-w-[520px]",
							children: "Every product receives a cryptographically verifiable digital identity containing its origin, manufacturing history, certifications, sustainability data and lifecycle events."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-5 w-full",
							children: [
								{
									icon: FingerprintPattern,
									t: "Product Identity",
									d: "Every item receives a globally unique Digital Product Passport linked to QR, NFC and enterprise identifiers."
								},
								{
									icon: Box,
									t: "Blockchain Verification",
									d: "Every supply chain event is cryptographically secured using Hyperledger Fabric."
								},
								{
									icon: ShieldCheck,
									t: "Compliance Ready",
									d: "Built for ESPR, EU Digital Product Passport, CBAM, ESG and global regulatory frameworks."
								},
								{
									icon: Share2,
									t: "Enterprise APIs",
									d: "Connect seamlessly with ERP, PLM, MES, WMS and enterprise supply chain systems."
								}
							].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col rounded-[28px] border border-gray-100 bg-white p-7 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.05] hover:z-10 hover:border-[#16C15F]/40 hover:shadow-2xl cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-2xl bg-[#F5FCF7] text-[#16C15F] mb-6 border border-[#16C15F]/10 transition-colors duration-300 group-hover:bg-[#16C15F] group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
											className: "h-5 w-5",
											strokeWidth: 1.5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-[17px] font-bold text-black mb-2",
										children: f.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[14px] leading-relaxed text-gray-500",
										children: f.d
									})
								]
							}, i))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal$1, {
					delay: .2,
					className: "relative w-full h-[600px] lg:h-[750px] flex justify-center items-center rounded-[40px] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/dress_with_qr.png",
							alt: "Organic Dress with QR",
							loading: "lazy",
							decoding: "async",
							className: "absolute inset-0 w-full h-full object-cover object-[35%_65%] scale-[1.25]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 w-full max-w-[300px] lg:max-w-[340px] h-[600px] lg:h-[680px] mx-auto lg:mx-0 rounded-[48px] border-12 border-black shadow-2xl overflow-hidden flex flex-col bg-transparent ring-1 ring-white/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 inset-x-0 h-6 flex justify-center z-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-6 bg-black rounded-b-2xl" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full h-full overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: viewState === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: .9
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										exit: {
											opacity: 0,
											scale: .9
										},
										className: "relative z-20 flex flex-col items-center pointer-events-auto cursor-pointer group",
										onClick: () => setViewState("scanning"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform mb-4 group-hover:bg-white/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scan, { className: "w-8 h-8 text-white drop-shadow-md" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white text-sm font-bold tracking-[0.15em] uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-md",
											children: "Tap to Scan Tag"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: viewState === "scanning" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: 1.1
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										exit: { opacity: 0 },
										className: "relative z-10 flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative w-40 h-40 border-2 border-[#16C15F]/60 rounded-2xl flex items-center justify-center mb-6 bg-black/10 backdrop-blur-[1px] shadow-[0_0_30px_rgba(22,193,95,0.2)] overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#16C15F] rounded-tl-xl -translate-x-1 -translate-y-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#16C15F] rounded-tr-xl translate-x-1 -translate-y-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#16C15F] rounded-bl-xl -translate-x-1 translate-y-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#16C15F] rounded-br-xl translate-x-1 translate-y-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
													animate: { y: [-70, 70] },
													transition: {
														repeat: Infinity,
														duration: 1.5,
														ease: "easeInOut",
														repeatType: "reverse"
													},
													className: "w-full h-0.5 bg-[#16C15F] shadow-[0_0_12px_rgba(22,193,95,1)]"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white text-sm font-bold tracking-[0.2em] uppercase bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm",
											children: "Scanning Tag..."
										})]
									}) })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: viewState === "passport" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: 10
									},
									transition: {
										duration: .6,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "absolute inset-0 z-20 bg-white overflow-y-auto overflow-x-hidden no-scrollbar flex flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4 p-5 border-b border-gray-100 bg-gray-50/50 pt-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: "/polo_shirt.png",
														alt: "Organic Cotton Polo Shirt",
														className: "w-16 h-16 object-cover rounded-xl bg-white border border-gray-100 shadow-sm"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 mb-1.5",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/logo-BYCu5uk0.png",
																	alt: "TierraTrace",
																	className: "h-6 w-auto object-contain"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-gray-300" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "inline-flex items-center gap-1 rounded-full bg-[#E8F8F0] px-1.5 py-0.5 text-[9px] font-bold text-[#16C15F]",
																	children: "Live"
																})
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-[15px] font-bold text-black leading-tight",
															children: "Organic Cotton Polo Shirt"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between bg-white border border-gray-100 rounded-xl p-3 shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[11px] text-gray-500 font-medium",
														children: "Passport ID"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-black font-bold text-[13px]",
														children: "TT-DPP-009382"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "w-10 h-10 bg-white border border-gray-100 rounded-lg p-1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.tierratrace.in/p/TT-DPP-009382",
															alt: "QR",
															className: "w-full h-full opacity-90"
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-col gap-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#F5FCF7] px-2.5 py-1.5 border border-[#16C15F]/20 text-[#16C15F]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] font-bold uppercase tracking-wide",
															children: "Verified Identity"
														})]
													})
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "px-5 py-2.5 bg-white border-b border-gray-100 text-[11px] font-medium text-gray-500 text-center",
											children: ["Issued on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gray-800",
												children: "May 28, 2025 • 11:20 UTC"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 border-b border-gray-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4",
												children: "Supply Chain Journey"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative pl-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[9px] top-2 bottom-2 w-[2px] bg-[#16C15F]/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "space-y-5",
													children: JOURNEY_STEPS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
														initial: {
															opacity: 0,
															x: -10
														},
														animate: i < visibleCount ? {
															opacity: 1,
															x: 0
														} : {
															opacity: 0,
															x: -10
														},
														transition: { duration: .4 },
														className: "relative grid grid-cols-[1fr_auto] gap-2 items-start",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "absolute left-[-26px] top-0.5 bg-white rounded-full",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-[#16C15F] fill-[#F5FCF7]" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-[13px] font-bold text-black leading-tight",
																children: item.step
															}), item.loc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-[11px] text-gray-500 mt-0.5",
																children: item.loc
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-right shrink-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "text-[10px] font-bold text-[#16C15F]",
																	children: "Verified"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "text-[10px] text-gray-400 mt-0.5",
																	children: item.date
																})]
															})
														]
													}, i))
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 bg-gray-50/50 pb-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4",
												children: "Product Information"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-2.5",
												children: [
													{
														k: "Origin",
														v: "India",
														icon: Globe2$1
													},
													{
														k: "Manufacturer",
														v: "KPR Mills",
														icon: Box
													},
													{
														k: "Material",
														v: "100% Organic",
														icon: FileText
													},
													{
														k: "Footprint",
														v: "31.4kg CO₂e",
														icon: ShieldCheck
													}
												].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between items-center bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 text-gray-500",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(row.icon, { className: "w-3.5 h-3.5 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[12px]",
															children: row.k
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[12px] font-bold text-black",
														children: row.v
													})]
												}, i))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center mt-6 mb-8",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center gap-0.5 opacity-80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em] leading-none",
													children: "developed by"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "/Namo Labs Logo.png",
													alt: "Namo Labs",
													className: "h-16 w-auto object-contain"
												})]
											})
										})
									]
								}, "dpp-app") })]
							})]
						})
					]
				})]
			})
		})
	});
}
var Globe2$1 = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12h20" })
	]
});
function CobeGlobe() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let phi = 0;
		const markers = [
			{
				location: [37.7595, -122.4367],
				size: .05
			},
			{
				location: [40.7128, -74.006],
				size: .04
			},
			{
				location: [51.5074, -.1278],
				size: .06
			},
			{
				location: [35.6895, 139.6917],
				size: .08
			},
			{
				location: [22.3193, 114.1694],
				size: .05
			},
			{
				location: [1.3521, 103.8198],
				size: .07
			},
			{
				location: [28.6139, 77.209],
				size: .06
			},
			{
				location: [-23.5505, -46.6333],
				size: .05
			},
			{
				location: [-33.8688, 151.2093],
				size: .06
			},
			{
				location: [48.8566, 2.3522],
				size: .05
			},
			{
				location: [25.2048, 55.2708],
				size: .07
			},
			{
				location: [31.2304, 121.4737],
				size: .09
			}
		];
		if (!canvasRef.current) return;
		const globe = p(canvasRef.current, {
			devicePixelRatio: 2,
			width: 1400,
			height: 1400,
			phi: 0,
			theta: .25,
			dark: 1,
			diffuse: 1.5,
			scale: 1,
			mapSamples: 24e3,
			mapBrightness: 8,
			baseColor: [
				.03,
				.2,
				.08
			],
			markerColor: [
				0,
				1,
				.4
			],
			glowColor: [
				.05,
				.8,
				.3
			],
			markers,
			onRender: (state) => {
				state.phi = phi;
				state.theta = .25 + Math.sin(phi * 1.5) * .1;
				const time = Date.now();
				state.markers = markers.map((m, i) => ({
					location: m.location,
					size: m.size + Math.sin(time * .002 + i) * .02
				}));
				phi += .005;
			}
		});
		return () => {
			globe.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full h-full relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "w-full h-full",
			style: {
				width: "100%",
				height: "100%",
				contain: "layout paint size"
			}
		})
	});
}
var FeatureCard$1 = ({ icon: Icon, title, desc, direction }) => {
	const clipPath = direction === "left" ? "polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%)" : "polygon(7% 0, 100% 0, 100% 100%, 7% 100%, 0 50%)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
		whileHover: {
			y: -6,
			scale: 1.01
		},
		className: "group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 w-full sm:w-[430px] cursor-pointer bg-white hover:bg-[#fbfbfb] transition-all duration-300 rounded-2xl border border-black/5 lg:border-none lg:rounded-none lg:[clip-path:var(--clip-desktop)]",
		style: {
			"--clip-desktop": clipPath,
			filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.04))"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5 sm:h-6 sm:w-6",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[18px] sm:text-[20px] font-bold text-ink",
						children: title
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] leading-[1.6] text-ink-muted",
					children: desc
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "absolute right-6 h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 hidden sm:block" })
		]
	});
};
var TRUST_PHRASES = ["Built for Trust.", "Built to Trace."];
function TrustTypewriter() {
	const [text, setText] = (0, import_react.useState)("");
	const [phraseIdx, setPhraseIdx] = (0, import_react.useState)(0);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const full = TRUST_PHRASES[phraseIdx % TRUST_PHRASES.length];
		const speed = isDeleting ? 45 : 90;
		if (!isDeleting && text === full) {
			const t = setTimeout(() => setIsDeleting(true), 1800);
			return () => clearTimeout(t);
		}
		if (isDeleting && text === "") {
			setIsDeleting(false);
			setPhraseIdx((p) => p + 1);
			return;
		}
		const t = setTimeout(() => {
			setText(full.substring(0, text.length + (isDeleting ? -1 : 1)));
		}, speed);
		return () => clearTimeout(t);
	}, [
		text,
		isDeleting,
		phraseIdx
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.span, {
			animate: { opacity: [
				1,
				0,
				1
			] },
			transition: {
				repeat: Infinity,
				duration: .85
			},
			className: "ml-0.5 inline-block h-[1em] w-[2px] translate-y-px rounded-sm bg-primary align-middle"
		})]
	});
}
function PlatformCapabilities() {
	const [activeCheck, setActiveCheck] = (0, import_react.useState)(-1);
	(0, import_react.useEffect)(() => {
		const startTimeout = setTimeout(() => {
			let idx = 0;
			const interval = setInterval(() => {
				setActiveCheck(idx);
				idx = (idx + 1) % 5;
			}, 650);
			return () => clearInterval(interval);
		}, 800);
		return () => clearTimeout(startTimeout);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "platform",
		className: "relative overflow-hidden bg-white px-6 py-20 lg:px-[80px] lg:py-[120px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] opacity-[0.03]",
				style: { background: "radial-gradient(circle at top left, #16C15F 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.03]",
				style: { background: "radial-gradient(circle at bottom right, #16C15F 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "mb-8 inline-flex rounded-full bg-[#EAF9EF] px-5 py-1.5 text-[14px] font-semibold uppercase tracking-[2px] text-primary",
								children: "PLATFORM CAPABILITIES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.h2, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .1 },
								viewport: { once: true },
								className: "mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px]",
								children: [
									"Enterprise-grade ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"primitives for ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "product truth."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .2 },
								viewport: { once: true },
								className: "mt-5 max-w-[760px] text-balance text-[16.5px] leading-[1.55] text-ink-muted sm:text-lg",
								children: "A modern platform stack engineered to deliver verifiable trust across complex, multi-enterprise supply chains."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-24 flex min-h-[600px] flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute inset-0 z-0 hidden lg:flex items-center justify-center gap-[340px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_16px_rgba(22,193,95,0.2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "h-6 w-6 ml-0.5",
										strokeWidth: 2.5
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_16px_rgba(22,193,95,0.2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
										className: "h-6 w-6 mr-0.5",
										strokeWidth: 2.5
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "z-10 flex w-full lg:w-auto flex-col gap-4 sm:gap-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										initial: {
											opacity: 0,
											x: -40
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										transition: {
											delay: .1,
											duration: .5,
											ease: "easeOut"
										},
										viewport: { once: true },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard$1, {
											direction: "left",
											icon: FingerprintPattern,
											title: "Identity & Attestation",
											desc: "Create cryptographically verifiable digital identities for products, batches, serial numbers, QR, NFC and RFID."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										initial: {
											opacity: 0,
											x: -40
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										transition: {
											delay: .4,
											duration: .5,
											ease: "easeOut"
										},
										viewport: { once: true },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard$1, {
											direction: "left",
											icon: Brain,
											title: "AI Data Intelligence",
											desc: "AI models continuously analyse supplier data, detect anomalies, predict risks and generate operational insights."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										initial: {
											opacity: 0,
											x: -40
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										transition: {
											delay: .7,
											duration: .5,
											ease: "easeOut"
										},
										viewport: { once: true },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard$1, {
											direction: "left",
											icon: ClipboardList,
											title: "Compliance Engine",
											desc: "Automate ESG scoring, Digital Product Passport validation, policy enforcement and regulatory workflows."
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
								initial: {
									opacity: 0,
									scale: .9
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .6,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								viewport: { once: true },
								className: "relative z-20 flex h-[400px] w-full max-w-[350px] items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-[280px] w-[280px] sm:w-full max-w-[280px] items-center justify-center bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-105",
									style: { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-[2px] flex items-center justify-center bg-white",
										style: { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: logo_default,
												alt: "TierraTrace Core",
												className: "w-[240px] object-contain opacity-100"
											})
										})
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "z-10 flex w-full lg:w-auto flex-col gap-4 sm:gap-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										initial: {
											opacity: 0,
											x: 40
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										transition: {
											delay: .25,
											duration: .5,
											ease: "easeOut"
										},
										viewport: { once: true },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard$1, {
											direction: "right",
											icon: Blocks,
											title: "Immutable Ledger",
											desc: "Powered by Hyperledger Fabric to provide tamper-proof records, immutable audit trails and enterprise trust."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										initial: {
											opacity: 0,
											x: 40
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										transition: {
											delay: .55,
											duration: .5,
											ease: "easeOut"
										},
										viewport: { once: true },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard$1, {
											direction: "right",
											icon: Earth,
											title: "Global Data Mesh",
											desc: "Federated data architecture connecting manufacturers, suppliers, logistics providers, retailers and regulators."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										initial: {
											opacity: 0,
											x: 40
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										transition: {
											delay: .85,
											duration: .5,
											ease: "easeOut"
										},
										viewport: { once: true },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard$1, {
											direction: "right",
											icon: Landmark,
											title: "Regulatory Gateway",
											desc: "Secure APIs for Digital Product Passport exchanges, customs authorities and regulatory platforms."
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .5 },
						viewport: { once: true },
						className: "mx-auto mt-16 lg:mt-24 flex flex-col lg:flex-row h-auto lg:h-[110px] w-full max-w-[1450px] items-center justify-between gap-8 lg:gap-0 rounded-[30px] border border-[#ECECEC] bg-white p-8 lg:p-0 lg:px-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF9EF] text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "h-8 w-8",
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[20px] font-bold text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustTypewriter, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[20px] font-medium text-ink-muted",
									children: "Designed for Scale."
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap lg:flex-nowrap lg:h-12 items-center gap-y-3 gap-x-4 sm:gap-x-6 lg:gap-8 border-t lg:border-t-0 lg:border-l border-[#ECECEC] pt-6 lg:pt-0 lg:pl-8 w-full lg:w-auto",
							children: [
								"End-to-end Traceability",
								"Enterprise Security",
								"Interoperable by Design",
								"Hyperledger Fabric",
								"AI-Powered Intelligence"
							].map((text, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
									animate: activeCheck === idx ? { scale: [
										1,
										1.45,
										1
									] } : { scale: 1 },
									transition: {
										duration: .28,
										ease: "easeOut"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-5 w-5 transition-colors duration-200",
										strokeWidth: 3,
										style: { color: activeCheck === idx ? "#16C15F" : "#bbb" }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[14px] font-medium transition-colors duration-200",
									style: { color: activeCheck === idx ? "#111111" : "#aaaaaa" },
									children: text
								})]
							}, idx))
						})]
					})
				]
			})
		]
	});
}
var complianceRows = [
	{
		id: "eu-dpp",
		icon: "EU",
		title: "EU Digital Product Passport (ESPR)",
		jurisdiction: "European Union",
		status: "Ready"
	},
	{
		id: "cbam",
		icon: "CBAM",
		title: "CBAM",
		jurisdiction: "European Union",
		status: "Ready"
	},
	{
		id: "battery",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery, {
			className: "h-5 w-5",
			strokeWidth: 1.5
		}),
		title: "EU Battery Regulation",
		jurisdiction: "European Union",
		status: "Ready"
	},
	{
		id: "agec",
		icon: "AGEC",
		title: "France AGEC",
		jurisdiction: "France",
		status: "Ready"
	},
	{
		id: "uk-plastic",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
			className: "h-5 w-5",
			strokeWidth: 1.5
		}),
		title: "UK Plastic Packaging Tax",
		jurisdiction: "United Kingdom",
		status: "In review"
	},
	{
		id: "ftc",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
			className: "h-5 w-5",
			strokeWidth: 1.5
		}),
		title: "US FTC Green Guides",
		jurisdiction: "United States",
		status: "Ready"
	}
];
var capabilityRows = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
			className: "h-6 w-6",
			strokeWidth: 1.5
		}),
		title: "Enterprise Data Integration",
		desc: "Unified ingestion from ERP, MES, PLM, supplier and logistics systems."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
			className: "h-6 w-6",
			strokeWidth: 1.5
		}),
		title: "Trust & Verification Engine",
		desc: "Cryptographically verifiable claims powered by Hyperledger Fabric."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
			className: "h-6 w-6",
			strokeWidth: 1.5
		}),
		title: "Continuous Compliance",
		desc: "Automatically generate audit-ready evidence for every SKU, batch and shipment."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, {
			className: "h-6 w-6",
			strokeWidth: 1.5
		}),
		title: "Enterprise ESG Intelligence",
		desc: "AI-driven sustainability analytics, carbon accounting and executive reporting."
	}
];
function ComplianceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "compliance",
		className: "relative overflow-hidden bg-white px-6 py-20 lg:px-[80px] lg:py-[120px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[900px] flex-col items-center text-center mb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "mb-8 inline-flex rounded-full bg-[#EAF9EF] px-5 py-1.5 text-[14px] font-semibold uppercase tracking-[2px] text-primary",
						children: "COMPLIANCE & SUSTAINABILITY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 },
						viewport: { once: true },
						className: "mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px]",
						children: [
							"Stay ahead of every ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "product mandate"
							}),
							" — worldwide."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .2 },
						viewport: { once: true },
						className: "mt-5 max-w-[760px] text-balance text-[16.5px] leading-[1.55] text-ink-muted sm:text-lg",
						children: "TierraTrace continuously maps evolving global regulations to your products and automatically generates regulator-ready evidence across the entire supply chain."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 w-full lg:w-[48%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "flex flex-col rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center justify-between px-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] font-bold uppercase tracking-widest text-ink-muted",
								children: "Compliance Workspace"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
								className: "h-5 w-5 text-ink-muted",
								strokeWidth: 1.5
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col",
							children: complianceRows.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
								initial: { opacity: 0 },
								whileInView: { opacity: 1 },
								transition: { delay: .1 + idx * .1 },
								viewport: { once: true },
								className: `group relative flex h-[64px] cursor-pointer items-center justify-between rounded-xl border border-transparent px-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-[#FDFDFD] hover:shadow-[0_4px_12px_rgba(22,193,95,0.06)] ${idx !== complianceRows.length - 1 ? "border-b-black/5" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary",
										children: row.icon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[14px] font-semibold text-ink",
											children: row.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[12px] text-ink-muted",
											children: row.jurisdiction
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										className: "h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary",
										strokeWidth: 2
									})
								})]
							}, row.id))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 w-full lg:w-[48%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-4",
						children: capabilityRows.map((cap, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .3 + idx * .1 },
							viewport: { once: true },
							className: "group flex items-start gap-4 border-b border-black/5 pb-4 last:border-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105",
								children: cap.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 pt-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[15px] font-semibold text-ink",
									children: cap.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] leading-normal text-ink-muted",
									children: cap.desc
								})]
							})]
						}, cap.title))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .4 },
				viewport: { once: true },
				className: "mx-auto mt-20 flex h-auto min-h-[80px] w-full max-w-[1450px] flex-col items-center justify-between gap-6 rounded-[24px] border border-black/5 bg-white px-8 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] lg:flex-row lg:gap-0 lg:py-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
						className: "h-8 w-8 text-primary",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[16px] font-bold leading-tight text-ink",
							children: "Built for Trust."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[16px] font-medium leading-tight text-ink-muted",
							children: "Designed for Scale."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-8 border-t border-black/5 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white",
								children: "GS1"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-[28px] font-bold tracking-tighter text-ink",
								children: "W3C"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[24px] font-black tracking-tight text-ink",
								children: "ISO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-[12px] font-bold text-ink",
								children: "14067"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col border-l-2 border-ink pl-2 leading-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[14px] font-bold text-ink",
									children: "EU"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[14px] font-bold text-ink",
									children: "DPP"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[16px] font-bold text-ink tracking-tight",
								children: "HYPERLEDGER"
							})
						})
					]
				})]
			})
		]
	});
}
var ind_textile_default = "/assets/ind_textile-Br3oAy8d.png";
var ind_pharma_default = "/assets/ind_pharma-BPpZQXBL.png";
var ind_auto_default = "/assets/ind_auto-76t_aBKU.png";
var ind_logistics_default = "/assets/ind_logistics-B-FfqDgr.png";
var ind_electronics_default = "/assets/ind_electronics-C-gpO30P.png";
var ind_coffee_default = "/assets/ind_coffee-CPY6R6H2.png";
var ind_luxury_default = "/assets/ind_luxury-Dax1Lz8i.png";
var ind_enterprise_default = "/assets/ind_enterprise-QxtpNSuQ.png";
function Reveal({ children, delay = 0, y = 24, className = "", immediate = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
		initial: immediate ? false : {
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
function GlobeClientOnly() {
	const [GlobeComp, setGlobeComp] = import_react.useState(null);
	import_react.useEffect(() => {
		let active = true;
		import("./globe-DjiGd-66.mjs").then((mod) => {
			if (active) setGlobeComp(() => mod.Globe);
		});
		return () => {
			active = false;
		};
	}, []);
	if (!GlobeComp) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeComp, {});
}
function Hero() {
	const ref = import_react.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, .4]);
	const [activeData, setActiveData] = import_react.useState({
		journey: JOURNEYS[0],
		step: JOURNEYS[0].steps[0]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "top",
		className: "relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-20 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-br from-white via-[#f0fdf4] to-white" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nature-orb-1 absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full",
						style: { background: "radial-gradient(circle, rgba(16,195,90,0.12) 0%, rgba(16,195,90,0.04) 50%, transparent 75%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nature-orb-2 absolute -bottom-48 -left-48 w-[800px] h-[800px] rounded-full",
						style: { background: "radial-gradient(circle, rgba(16,195,90,0.10) 0%, rgba(16,195,90,0.03) 55%, transparent 75%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nature-orb-3 absolute top-1/2 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full",
						style: { background: "radial-gradient(circle, rgba(16,195,90,0.07) 0%, transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "nature-wave absolute inset-0 w-full h-full opacity-[0.07]",
						viewBox: "0 0 1440 900",
						fill: "none",
						preserveAspectRatio: "xMidYMid slice",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "waveGrad",
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#10C35A",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "30%",
									stopColor: "#10C35A",
									stopOpacity: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "70%",
									stopColor: "#10C35A",
									stopOpacity: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#10C35A",
									stopOpacity: "0"
								})
							]
						}) }), [
							0,
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							10
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M -100 ${80 + i * 75} C 200 ${40 + i * 75}, 400 ${130 + i * 75}, 720 ${80 + i * 75} S 1200 ${30 + i * 75}, 1540 ${100 + i * 75}`,
							stroke: "url(#waveGrad)",
							strokeWidth: "1.2",
							fill: "none"
						}, i))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nature-shimmer absolute inset-0",
						style: {
							backgroundImage: "radial-gradient(rgba(16,195,90,0.35) 1px, transparent 1px)",
							backgroundSize: "36px 36px",
							maskImage: "radial-gradient(ellipse 80% 60% at 60% 40%, black, transparent)",
							WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 60% 40%, black, transparent)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "particle-1 absolute bottom-24 left-[10%] w-2 h-2 rounded-full bg-primary/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "particle-2 absolute bottom-32 left-[22%] w-1.5 h-1.5 rounded-full bg-primary/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "particle-3 absolute bottom-16 left-[38%] w-2.5 h-2.5 rounded-full bg-primary/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "particle-4 absolute bottom-40 left-[55%] w-1 h-1 rounded-full bg-primary/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "particle-5 absolute bottom-20 left-[72%] w-2 h-2 rounded-full bg-primary/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "particle-6 absolute bottom-28 left-[88%] w-1.5 h-1.5 rounded-full bg-primary/20" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
				style: {
					y,
					opacity
				},
				className: "relative z-10 mx-auto max-w-[1400px] px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-8 lg:gap-4 items-start pt-8 lg:min-h-[calc(100vh-10rem)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center lg:items-start lg:text-left pt-10 sm:pt-16 lg:pt-20 px-2 sm:px-4 lg:pl-16 lg:pr-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								immediate: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 sm:mt-8 text-[32px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[48px] lg:text-[60px]",
									children: [
										"Every product.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Every journey.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary drop-shadow-sm",
											children: "We trace it."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								immediate: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 sm:mt-8 max-w-xl text-balance text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-ink-muted",
									children: "TierraTrace enables manufacturers to issue secure Digital Product Passports and achieve end-to-end traceability across the complete product lifecycle—from raw materials to recycling."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								immediate: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#pilot",
										className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-medium text-white shadow-[0_8px_25px_-8px_rgba(16,195,90,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(16,195,90,0.7)]",
										children: ["Request Pilot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#platform",
										className: "group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-medium text-ink shadow-sm transition-all hover:bg-surface hover:-translate-y-0.5",
										children: "Explore Platform"
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative hidden lg:flex items-center justify-center w-full lg:h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							className: "absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeClientOnly, {})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .45,
					className: "mt-10 sm:mt-16 lg:mt-12 max-w-6xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-[20px] sm:rounded-[24px] bg-white p-3 sm:p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-black/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[14px] font-semibold text-ink",
									children: "Trusted Identity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[12.5px] text-ink-muted leading-relaxed",
									children: "Unique digital identity for every product"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[14px] font-semibold text-ink",
									children: "End-to-End Visibility"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[12.5px] text-ink-muted leading-relaxed",
									children: "Track every movement in real time"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[14px] font-semibold text-ink",
									children: "Sustainability by Design"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[12.5px] text-ink-muted leading-relaxed",
									children: "Enable circularity & reduce impact"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[14px] font-semibold text-ink",
									children: "Compliance Ready"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[12.5px] text-ink-muted leading-relaxed",
									children: "Built for global standards & regulations"
								})] })]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-8 sm:mt-10 max-w-[1240px] px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted",
					children: "Designed for the world's most demanding supply chains"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden mask-[linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-max animate-marquee gap-14 py-4",
						children: [...Array(2)].flatMap((_, r) => [
							"KPR Mill",
							"Vardhman",
							"Tata Motors",
							"Bosch",
							"Sun Pharma",
							"Nestlé",
							"DHL",
							"Maersk",
							"Siemens",
							"Schneider Electric",
							"Samsung",
							"Foxconn"
						].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap text-[19px] font-semibold tracking-tight text-ink/40",
							children: name
						}, `${r}-${i}`)))
					})
				})]
			})
		]
	});
}
function SectionHeader({ eyebrow, title, desc, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px]",
				children: title
			}),
			desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-balance text-[16.5px] leading-[1.55] text-ink-muted sm:text-lg",
				children: desc
			})
		]
	});
}
function WhyTierraTrace() {
	const containerRef = (0, import_react.useRef)(null);
	useGSAP(() => {}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "why",
		ref: containerRef,
		className: "relative py-28 sm:py-36 bg-white overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 pointer-events-none opacity-[0.03]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCanvas, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1320px] px-6 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full lg:w-[55%]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold uppercase tracking-widest text-primary",
									children: "WHY TIERRATRACE"
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight text-ink",
									children: [
										"The Unified",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden lg:block" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Trust Infrastructure."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-[17px] sm:text-[19px] leading-[1.65] text-ink/70 max-w-xl font-medium",
									children: "Global regulators, buyers and consumers now demand proof — not claims. TierraTrace turns your supply chain into a source of truth through verifiable traceability, Digital Product Passports and enterprise blockchain infrastructure."
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full lg:w-[45%] h-[400px] sm:h-[500px] relative flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-[0.15]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCanvas, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 w-full max-w-[480px] px-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.img, {
									src: logo_default,
									alt: "TierraTrace",
									className: "w-full h-auto object-contain",
									animate: { clipPath: ["polygon(0% 0%, 100% 0%, 100% 55%, 0% 55%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 55%, 100% 55%, 100% 100%, 0% 100%)"] },
									transition: {
										duration: 1.2,
										ease: "easeInOut",
										repeat: Infinity,
										repeatDelay: .7
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveWordsCapsule, {})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HyperledgerIcon, {}),
							title: "Verifiable Trust",
							subtitle: "Secured by Hyperledger Fabric",
							desc: "Built on Hyperledger Fabric, every transaction is cryptographically anchored for immutable, auditable, and tamper-proof trust across the ecosystem.",
							footer: "Enterprise Blockchain Infrastructure",
							delay: 0,
							hoverType: "hyperledger",
							href: "https://share.google/3QHPSD3p99hsGsNPw"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "w-5 h-5" }),
							title: "Radical Transparency",
							subtitle: "One Platform to Track Everything",
							desc: "From raw materials to end customers, track every movement, every event, and every stakeholder in real time on a single, unified platform.",
							footer: "Unified Supply Chain Intelligence",
							delay: .1,
							hoverType: "network"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recycle, { className: "w-5 h-5" }),
							title: "Built for Circularity",
							subtitle: "Empowering the Circular Economy",
							desc: "Digital Product Passports carry forward a verifiable history — enabling reuse, remanufacture, and responsible end-of-life.",
							footer: "Future-ready Compliance",
							delay: .2,
							hoverType: "circular"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 relative overflow-hidden rounded-[24px] bg-[#0B0B0B] px-8 py-8 sm:py-10 sm:px-10 lg:px-12 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-full bg-[radial-gradient(ellipse_at_bottom,#10C35A15_0%,transparent_50%)] opacity-60 mix-blend-screen pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 grid gap-y-10 gap-x-4 sm:gap-12 grid-cols-2 lg:grid-cols-4 lg:divide-x divide-white/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricItem, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "w-6 h-6" }),
								val: 42,
								suffix: " Bn",
								title: "Products tracked",
								desc: "/ yr capacity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricItem, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "w-6 h-6" }),
								val: 180,
								suffix: "+",
								title: "Countries",
								desc: "in coverage graph"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricItem, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-6 h-6" }),
								val: 99.99,
								suffix: "%",
								title: "Platform SLA",
								desc: "for enterprise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricItem, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-6 h-6" }),
								val: "SOC 2",
								suffix: "",
								title: "Type II, ISO 27001,",
								desc: "GDPR Compliant"
							})
						]
					})]
				}) })
			]
		})]
	});
}
function ActiveWordsCapsule() {
	const words = [
		"TRACK",
		"VERIFY",
		"TRUST",
		"TRANSFORM"
	];
	const [activeIndex, setActiveIndex] = import_react.useState(0);
	import_react.useEffect(() => {
		const int = setInterval(() => {
			setActiveIndex((p) => (p + 1) % words.length);
		}, 2e3);
		return () => clearInterval(int);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute bottom-8 sm:bottom-12 z-10 flex items-center gap-4 sm:gap-6 rounded-full bg-white px-6 sm:px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-black/4",
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `text-[11px] sm:text-[12.5px] font-bold tracking-[0.15em] transition-colors duration-500 ${i === activeIndex ? "text-primary" : "text-ink"}`,
			children: w
		}), i < words.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-ink/20 text-[12px] font-black",
			children: "•"
		})] }, w))
	});
}
function FeatureCard({ icon, title, subtitle, desc, footer, delay, hoverType, href }) {
	const CardContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `group relative h-full flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:border-primary/40`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-10 w-10 place-items-center rounded-xl bg-[#F4F5F7] text-primary transition-transform duration-700 ease-out
        ${hoverType === "hyperledger" ? "group-hover:rotate-15" : ""} 
        ${hoverType === "circular" ? "group-hover:rotate-180" : ""} 
        ${hoverType === "network" ? "group-hover:scale-110" : ""}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-widest text-primary mb-2",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[17px] font-bold tracking-tight text-ink",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2.5 text-[13.5px] leading-[1.6] text-ink/70",
						children: desc
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 pt-5 border-t border-black/5 flex items-center gap-2 text-[13px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn more" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay,
		children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "block h-full cursor-pointer",
			children: CardContent
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full",
			children: CardContent
		})
	});
}
function MetricItem({ icon, val, suffix, title, desc }) {
	const numRef = import_react.useRef(null);
	const hasAnimated = import_react.useRef(false);
	import_react.useEffect(() => {
		const el = numRef.current;
		if (!el || typeof val !== "number") return;
		const isDecimal = val % 1 !== 0;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !hasAnimated.current) {
				hasAnimated.current = true;
				const start = performance_default.now();
				const duration = 7e3;
				const tick = (now) => {
					const elapsed = now - start;
					const progress = Math.min(elapsed / duration, 1);
					const current = val * (1 - Math.pow(1 - progress, 3));
					el.innerText = isDecimal ? current.toFixed(2) : Math.floor(current).toString();
					if (progress < 1) requestAnimationFrame(tick);
					else el.innerText = isDecimal ? val.toFixed(2) : val.toString();
				};
				requestAnimationFrame(tick);
				observer.disconnect();
			}
		}, { threshold: .3 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [val]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 px-0 sm:px-6 lg:px-8 py-0 sm:first:pl-0 sm:last:pr-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[28px] lg:text-[36px] font-bold tracking-tight text-white flex items-baseline leading-none mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						ref: numRef,
						children: typeof val === "number" ? "0" : val
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: suffix })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[14px] font-medium text-primary leading-tight",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] leading-relaxed text-white/50",
					children: desc
				})
			]
		})]
	});
}
function HyperledgerIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "w-6 h-6",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "32",
				width: "12",
				height: "24",
				rx: "6",
				fill: "#F05A4E",
				transform: "rotate(45 22 32)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "42",
				y: "32",
				width: "12",
				height: "24",
				rx: "6",
				fill: "#88D1D1",
				transform: "rotate(45 42 32)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "62",
				y: "32",
				width: "12",
				height: "24",
				rx: "6",
				fill: "#F05A4E",
				transform: "rotate(45 62 32)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "52",
				width: "24",
				height: "12",
				rx: "6",
				fill: "#88D1D1",
				transform: "rotate(45 22 52)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "72",
				width: "24",
				height: "12",
				rx: "6",
				fill: "#F05A4E",
				transform: "rotate(45 22 72)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "42",
				y: "52",
				width: "24",
				height: "12",
				rx: "6",
				fill: "#F05A4E",
				transform: "rotate(45 42 52)"
			})
		]
	});
}
function NetworkCanvas({ opacity = 1 }) {
	const canvasRef = import_react.useRef(null);
	import_react.useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let particles = [];
		const numParticles = window.innerWidth < 768 ? 20 : 45;
		let animationFrameId;
		const resize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};
		window.addEventListener("resize", resize);
		resize();
		for (let i = 0; i < numParticles; i++) particles.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - .5) * .4,
			vy: (Math.random() - .5) * .4
		});
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "#10C35A";
			ctx.strokeStyle = "rgba(16, 195, 90, 0.15)";
			ctx.lineWidth = 1;
			for (let i = 0; i < numParticles; i++) {
				let p = particles[i];
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
				if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
				ctx.beginPath();
				ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
				ctx.fill();
				for (let j = i + 1; j < numParticles; j++) {
					let p2 = particles[j];
					if (Math.hypot(p.x - p2.x, p.y - p2.y) < 120) {
						ctx.beginPath();
						ctx.moveTo(p.x, p.y);
						ctx.quadraticCurveTo(p.x, p2.y, p2.x, p2.y);
						ctx.stroke();
					}
				}
			}
			animationFrameId = requestAnimationFrame(draw);
		};
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) draw();
			else cancelAnimationFrame(animationFrameId);
		});
		observer.observe(canvas);
		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationFrameId);
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "absolute inset-0 w-full h-full pointer-events-none",
		style: { opacity }
	});
}
var LIFECYCLE = [
	{
		icon: Leaf,
		t: "Raw material",
		d: "Source origin, certifications and impact captured at point of extraction."
	},
	{
		icon: Factory,
		t: "Manufacture",
		d: "Batches, components and process events anchored in real time."
	},
	{
		icon: Truck,
		t: "Logistics",
		d: "Movements, custody transfers and conditions across every leg."
	},
	{
		icon: Package,
		t: "Distribution & retail",
		d: "Warehouse, retailer and marketplace flows unified in one graph."
	},
	{
		icon: FingerprintPattern,
		t: "Use",
		d: "Ownership, service history and consumer engagement follow the product."
	},
	{
		icon: Wrench,
		t: "Repair & reuse",
		d: "Extend product life with verifiable maintenance and secondhand records."
	},
	{
		icon: Recycle,
		t: "Recycle",
		d: "Certified end-of-life with recovered material claims for the next passport."
	}
];
var TypewriterText = ({ texts }) => {
	const [text, setText] = (0, import_react.useState)("");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const currentFullText = texts[index % texts.length];
		let typingSpeed = isDeleting ? 50 : 100;
		if (!isDeleting && text === currentFullText) {
			typingSpeed = 2e3;
			setTimeout(() => setIsDeleting(true), typingSpeed);
			return;
		} else if (isDeleting && text === "") {
			setIsDeleting(false);
			setIndex((prev) => prev + 1);
			typingSpeed = 500;
			return;
		}
		const timeout = setTimeout(() => {
			setText(currentFullText.substring(0, text.length + (isDeleting ? -1 : 1)));
		}, typingSpeed);
		return () => clearTimeout(timeout);
	}, [
		text,
		isDeleting,
		index,
		texts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block pr-1",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.span, {
			animate: { opacity: [
				0,
				1,
				0
			] },
			transition: {
				repeat: Infinity,
				duration: .8
			},
			className: "absolute right-0 top-[10%] h-[80%] w-[3px] bg-primary"
		})]
	});
};
function TraceabilitySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "traceability",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "End-to-end traceability",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["From raw material to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypewriterText, { texts: [
							"reuse and recycling.",
							"the final consumer.",
							"secondhand markets.",
							"responsible end-of-life."
						] })
					})] }),
					desc: "A single event graph follows every product through its full lifecycle — no blind spots, no reconciliation, no lost provenance."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-row items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap",
							children: "Powered by"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/hyperledger.jpg",
							alt: "Hyperledger Fabric",
							loading: "lazy",
							decoding: "async",
							className: "h-24 md:h-36 object-contain mix-blend-multiply"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						"aria-hidden": true,
						className: "absolute left-0 right-0 top-14 mx-auto hidden h-24 w-full max-w-6xl md:block",
						viewBox: "0 0 1200 100",
						fill: "none",
						preserveAspectRatio: "none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 20 50 C 200 -10, 300 110, 500 50 S 800 -10, 1000 50 S 1180 90, 1180 50",
							stroke: "#10C35A",
							strokeWidth: "1.5",
							strokeDasharray: "4 6",
							strokeLinecap: "round",
							fill: "none",
							opacity: "0.2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.path, {
							initial: { pathLength: 0 },
							whileInView: { pathLength: 1 },
							viewport: { once: true },
							transition: {
								duration: 6,
								ease: "easeInOut"
							},
							d: "M 20 50 C 200 -10, 300 110, 500 50 S 800 -10, 1000 50 S 1180 90, 1180 50",
							stroke: "#10C35A",
							strokeWidth: "2",
							strokeLinecap: "round",
							fill: "none"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7",
						children: LIFECYCLE.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-full flex-row sm:flex-col items-center rounded-xl sm:rounded-2xl border border-black/5 bg-white p-3 sm:p-5 text-left sm:text-center transition-all duration-300 sm:hover:scale-[1.4] hover:z-10 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(16,195,90,0.4)] cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "shrink-0 relative grid h-12 w-12 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "relative z-10 h-5 sm:h-5.5 w-5 sm:w-5.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center ml-3 sm:ml-0 sm:mt-4 sm:items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] sm:text-[11px] font-bold sm:font-medium uppercase tracking-widest text-ink-muted",
											children: ["Stage ", String(i + 1).padStart(2, "0")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 sm:mt-1 text-[14px] sm:text-[15px] font-semibold text-ink leading-tight",
											children: s.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 sm:mt-2 text-[12px] sm:text-[12.5px] leading-snug text-ink-muted line-clamp-1 sm:line-clamp-none",
											children: s.d
										})
									]
								})]
							})
						}, s.t))
					})]
				})
			]
		})
	});
}
var INDUSTRY_CARDS = [
	{
		title: "Textile & Apparel",
		desc: "Track every garment from fibre to finished product with complete supply chain transparency, sustainability insights, and Digital Product Passports.",
		features: [
			"Fibre-to-Garment Traceability",
			"ESG & Sustainability",
			"EU Digital Product Passport",
			"Supplier Transparency"
		],
		img: ind_textile_default
	},
	{
		title: "Pharmaceuticals",
		desc: "Secure every medicine with end-to-end batch traceability, regulatory compliance, cold-chain visibility, and tamper-proof manufacturing records.",
		features: [
			"Batch & Lot Tracking",
			"GMP Compliance",
			"Cold Chain Monitoring",
			"Anti-Counterfeit Protection"
		],
		img: ind_pharma_default
	},
	{
		title: "Automotive",
		desc: "Monitor every component from raw material to vehicle assembly, enabling complete visibility, recalls, warranty tracking, and supplier accountability.",
		features: [
			"Component Traceability",
			"Recall Management",
			"Warranty Records",
			"Supplier Network Visibility"
		],
		img: ind_auto_default
	},
	{
		title: "Electronics",
		desc: "Trace semiconductors, PCBs, batteries, and electronic assemblies through every manufacturing stage with immutable production records.",
		features: [
			"Component Traceability",
			"Manufacturing History",
			"Product Authentication",
			"Warranty Lifecycle"
		],
		img: ind_electronics_default
	},
	{
		title: "Logistics & Shipping",
		desc: "Track cargo across road, rail, sea, and air with real-time shipment visibility, secure documentation, and intelligent logistics monitoring.",
		features: [
			"Multi-Modal Tracking",
			"Shipment Visibility",
			"Customs Documentation",
			"Real-Time Logistics"
		],
		img: ind_logistics_default
	},
	{
		title: "Coffee",
		desc: "Deliver complete farm-to-cup transparency by tracking origin, harvest, processing, export, roasting, and retail with verified product history.",
		features: [
			"Farm-to-Cup Traceability",
			"Origin Verification",
			"Sustainability Metrics",
			"Fair Trade Records"
		],
		img: ind_coffee_default
	},
	{
		title: "Luxury Goods",
		desc: "Authenticate premium products through secure digital identities, ownership history, provenance records, and counterfeit protection.",
		features: [
			"Digital Authentication",
			"Ownership History",
			"Provenance Tracking",
			"Anti-Counterfeit Security"
		],
		img: ind_luxury_default
	},
	{
		title: "Custom Enterprise Solutions",
		desc: "Build industry-specific traceability solutions tailored to your manufacturing, compliance, and global supply chain requirements.",
		features: [
			"Custom Workflows",
			"Enterprise Integrations",
			"Blockchain Infrastructure",
			"Global Compliance"
		],
		img: ind_enterprise_default
	}
];
var TRUST_ITEMS = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
		}),
		title: "End-to-End Traceability",
		desc: "Complete visibility from raw material to end consumer."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "2",
					y1: "12",
					x2: "22",
					y2: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
			]
		}),
		title: "Global Supply Chains",
		desc: "Designed to operate across borders and time zones."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "11",
				width: "18",
				height: "11",
				rx: "2",
				ry: "2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })]
		}),
		title: "Blockchain Secured",
		desc: "Immutable, tamper-proof records at every supply chain event."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "14 2 14 8 20 8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "16",
					y1: "13",
					x2: "8",
					y2: "13"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "16",
					y1: "17",
					x2: "8",
					y2: "17"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "10 9 9 9 8 9" })
			]
		}),
		title: "Digital Product Passport",
		desc: "EU-compliant DPPs issued at scale for every product."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 11 12 14 22 4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })]
		}),
		title: "Compliance Ready",
		desc: "Built for ESPR, CBAM, Battery Regulation and global mandates."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "18",
					y1: "20",
					x2: "18",
					y2: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "12",
					y1: "20",
					x2: "12",
					y2: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "6",
					y1: "20",
					x2: "6",
					y2: "14"
				})
			]
		}),
		title: "Real-time Analytics",
		desc: "Live supply chain intelligence and ESG reporting dashboards."
	}
];
function Industries() {
	const containerRef = import_react.useRef(null);
	const trackRef = import_react.useRef(null);
	const trackWrapperRef = import_react.useRef(null);
	useGSAP(() => {
		gsapWithCSS.matchMedia().add("(min-width: 1024px)", () => {
			const track = trackRef.current;
			const trackWrapper = trackWrapperRef.current;
			if (!containerRef.current || !track || !trackWrapper) return;
			const cards = gsapWithCSS.utils.toArray(".industry-card");
			const getScrollAmount = () => -(track.scrollWidth - trackWrapper.clientWidth);
			const scrollTween = gsapWithCSS.to(track, {
				x: getScrollAmount,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: () => `+=${Math.abs(getScrollAmount())}`,
					pin: true,
					scrub: true,
					invalidateOnRefresh: true
				}
			});
			cards.forEach((card) => {
				gsapWithCSS.set(card, {
					scale: .97,
					opacity: .75
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: card,
					containerAnimation: scrollTween,
					start: "left right",
					end: "right left",
					scrub: true
				} }).to(card, {
					scale: 1,
					opacity: 1,
					duration: .5,
					ease: "power1.inOut"
				}).to(card, {
					scale: .97,
					opacity: .75,
					duration: .5,
					ease: "power1.inOut"
				});
			});
		});
	}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "industries",
		ref: containerRef,
		className: "relative lg:h-screen w-full bg-white flex items-center lg:overflow-hidden py-24 lg:py-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center h-full lg:pt-16 gap-12 lg:gap-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full lg:w-[38%] shrink-0 z-10 lg:pr-12 text-center lg:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Industries"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-[38px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[52px]",
						children: [
							"Built for",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden lg:block" }),
							"Every Industry.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden lg:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary lg:whitespace-nowrap",
								children: " Designed to Trace."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[16px] lg:text-[17px] leading-[1.75] text-ink-muted max-w-[380px] mx-auto lg:mx-0",
						children: "TierraTrace enables end-to-end traceability, transparency and Digital Product Passports across global supply chains."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "mt-10 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-primary",
						children: ["Explore Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: trackWrapperRef,
				className: "w-full lg:flex-1 lg:max-w-[720px] lg:ml-auto lg:overflow-hidden lg:h-[720px] relative -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: trackRef,
					className: "flex gap-4 lg:gap-6 lg:h-full w-max items-center pb-8 lg:pb-0",
					children: INDUSTRY_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "industry-card shrink-0 snap-center group relative flex flex-col overflow-hidden rounded-[28px] border border-black/4 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 lg:hover:-translate-y-3 lg:hover:border-primary lg:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] w-[300px] h-[550px] lg:w-[330px] lg:h-[620px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-[220px] shrink-0 overflow-hidden bg-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: card.img,
								alt: card.title,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col justify-between p-7 pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[19px] font-semibold tracking-tight text-ink leading-snug",
									children: card.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-[13.5px] leading-[1.6] text-ink/70",
									children: card.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 flex flex-col gap-2.5",
									children: card.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2.5 text-[13px] text-ink/80 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												width: "10",
												height: "10",
												viewBox: "0 0 14 14",
												fill: "none",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M11.6667 3.5L5.25 9.91667L2.33334 7",
													stroke: "currentColor",
													strokeWidth: "2",
													strokeLinecap: "round",
													strokeLinejoin: "round"
												})
											})
										}), feature]
									}, idx))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2 text-[13.5px] font-medium text-ink transition-colors duration-300 group-hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn more" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-[14px] w-[14px] transition-transform duration-300 group-hover:translate-x-1.5" })]
							})]
						})]
					}, card.title))
				})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1320px] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-black/6 pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6",
					children: TRUST_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-primary",
								children: item.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-[14px] font-semibold leading-tight text-ink",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] leading-[1.65] text-ink-muted",
								children: item.desc
							})
						]
					}, item.title))
				})
			})
		})
	})] });
}
function Pilot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pilot",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1240px] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-white sm:px-16 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-40",
						style: { background: "radial-gradient(closest-side, rgba(16,195,90,0.55), transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-[-200px] top-1/2 -translate-y-1/2 h-[700px] w-[700px] opacity-80 mix-blend-screen pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CobeGlobe, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-30",
						style: { background: "radial-gradient(closest-side, rgba(16,195,90,0.4), transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 lg:grid-cols-2 lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-white/80",
								children: "Pilot program"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px]",
								children: ["Ship your first product passport in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "12 weeks."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-[16px] leading-relaxed text-white/70",
								children: "A dedicated TierraTrace team pairs with yours — from a single product line to a full portfolio pilot with 3+ tiers of your supply chain."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4",
							children: [[
								{
									w: "01 · Discover",
									d: "Product & data-model scoping",
									details: "We analyze your supply chain data and define the passport schema tailored exactly to your product requirements."
								},
								{
									w: "02 · Design",
									d: "Passport schema, partner onboarding plan",
									details: "We design the end-to-end data flow and establish verification protocols for your suppliers."
								},
								{
									w: "03 · Deploy",
									d: "Live passports across pilot line",
									details: "We integrate with existing ERPs and issue live passports for your pilot product line."
								},
								{
									w: "04 · Scale",
									d: "Rollout across sites and categories",
									details: "Once the pilot succeeds, we automate issuance and scale across all categories and facilities."
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col rounded-2xl border border-white/10 bg-white/4 px-5 py-4 cursor-pointer hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(22,193,95,0.15)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] font-medium text-white transition-colors group-hover:text-primary",
										children: s.w
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12.5px] text-white/60",
										children: s.d
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-white/40 transition-transform duration-300 group-hover:text-primary group-hover:rotate-90" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-3 text-[12.5px] text-white/70 leading-relaxed border-t border-white/10 mt-3",
											children: s.details
										})
									})
								})]
							}, s.w)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-[1.03]",
								children: ["Apply for pilot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})]
					})
				]
			}) })
		})
	});
}
function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name") || "";
		const email = formData.get("email") || "";
		const company = formData.get("company") || "";
		const role = formData.get("role") || "";
		const industry = formData.get("industry") || "";
		const message = formData.get("message") || "";
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@namolabs.in&su=${encodeURIComponent(`New Briefing Request from ${name} (${company})`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nIndustry: ${industry}\n\nHow can we help?\n${message}`)}`;
		window.open(gmailUrl, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1240px] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Contact",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Let's build your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "product passport"
						}),
						" strategy."
					] }),
					desc: "Tell us about your products, your supply chain and the regulations you're preparing for. A specialist will reach out within one business day."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4 text-[15px] text-ink-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: "General inquiries"
					}), " — info@namolabs.in"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "Company website"
						}),
						" — ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.namolabs.in",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-primary transition-colors",
							children: "www.namolabs.in"
						})
					] })]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-4xl rounded-2xl border border-black/6 bg-white px-5 py-8 shadow-sm md:px-12 md:py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "name",
											label: "Full name",
											placeholder: "Your name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "email",
											label: "Work email",
											type: "email",
											placeholder: "you@company.com"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "company",
											label: "Company",
											placeholder: "Company name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "role",
											label: "Role",
											placeholder: "e.g. Head of Sustainability"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12.5px] font-medium text-ink",
										children: "Industry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										name: "industry",
										className: "mt-1.5 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink outline-none transition focus:border-primary",
										children: [
											"Steel & Aluminium",
											"Textiles",
											"Furniture",
											"Tires",
											"Chemicals",
											"Paints & Lubricants",
											"ICT",
											"Electronics",
											"Government / Regulator",
											"Other"
										].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12.5px] font-medium text-ink",
										children: "How can we help?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 4,
										placeholder: "Product lines, regions, timelines…",
										className: "mt-1.5 w-full appearance-none resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink outline-none transition focus:border-primary"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-[1.03]",
									children: ["Request a briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-center text-[11.5px] text-ink-muted",
									children: "By submitting you agree to our privacy policy."
								})
							]
						})
					})
				})]
			})
		})
	});
}
function Field({ name, label, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-[12.5px] font-medium text-ink",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		placeholder,
		className: "mt-1.5 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink outline-none transition focus:border-primary"
	})] });
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyTierraTrace, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalProductPassport, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TraceabilitySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformCapabilities, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComplianceSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pilot, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] })
	});
}
//#endregion
export { HomePage as component };
