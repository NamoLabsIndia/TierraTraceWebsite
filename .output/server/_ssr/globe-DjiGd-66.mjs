import { o as __toESM } from "../_runtime.mjs";
import { t as JOURNEYS } from "./journeys-Ck-G8co7.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as logo_default } from "./logo-DOlEJuKZ.mjs";
import { r as require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Globe$1 } from "../_libs/react-globe.gl+react-kapsule.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as BadgeCheck, D as Factory, J as Box, Q as Barcode, W as Calendar, a as Truck, b as Layers, h as PackageCheck, rt as Activity, s as ShieldCheck, v as MapPin, y as Leaf } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/globe-DjiGd-66.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	"Material": Layers,
	"Supplier": Factory,
	"Manufacturer": Factory,
	"Batch": Barcode,
	"Carbon": Leaf,
	"Certificate": BadgeCheck,
	"Timestamp": Calendar,
	"Origin": MapPin,
	"Component": Box,
	"Transporter": Truck,
	"Temperature": Activity,
	"Quality": PackageCheck
};
var containerVariants = {
	hidden: {
		opacity: 0,
		scale: .97,
		y: 16
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			],
			staggerChildren: .06
		}
	}
};
var fadeVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: .4 }
	}
};
var slideUpVariants = {
	hidden: {
		opacity: 0,
		y: 10
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .4,
			ease: "easeOut"
		}
	}
};
var badgeVariants = {
	hidden: {
		opacity: 0,
		scale: .85
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: .4,
			ease: "backOut"
		}
	}
};
var rowVariants = {
	hidden: {
		opacity: 0,
		y: 6
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .35,
			ease: "easeOut"
		}
	}
};
function EnterpriseInfoCard({ journey, step }) {
	const dataRows = Object.entries(step.metadata || {}).map(([key, val]) => {
		return {
			label: key,
			value: val,
			icon: iconMap[key] || Box
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: containerVariants,
		initial: "hidden",
		animate: "visible",
		className: "group relative w-full bg-white/96 backdrop-blur-xl rounded-[32px] overflow-hidden",
		style: {
			width: 560,
			maxWidth: "100%",
			border: "1px solid rgba(0,0,0,0.06)",
			boxShadow: "0 28px 70px rgba(0,0,0,0.14)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
				style: { boxShadow: "0 36px 90px rgba(0,0,0,0.18)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-8 pt-8 pb-6 border-b border-black/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeVariants,
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "TierraTrace",
								className: "h-14 w-auto object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: badgeVariants,
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-[#F0FBF4] rounded-full px-3 py-1.5 border border-[#16C15F]/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-[#16C15F] animate-pulse shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										initial: {
											opacity: 0,
											y: 4
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -4
										},
										className: "text-[10.5px] font-bold text-[#16C15F] tracking-[0.08em] uppercase whitespace-nowrap",
										children: step.event
									}, step.event)
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						variants: slideUpVariants,
						className: "text-[26px] font-bold text-black leading-tight tracking-tight mb-1.5",
						children: journey.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: slideUpVariants,
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "w-4 h-4 text-[#16C15F] shrink-0",
							strokeWidth: 2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-medium text-gray-500 truncate",
							children: step.location
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-0 px-4 py-4",
				children: dataRows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rowVariants,
					className: "flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-black/2 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 rounded-lg bg-[#F4F5F7] text-[#16C15F] flex items-center justify-center shrink-0 mt-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(row.icon, {
							strokeWidth: 1.5,
							className: "w-4 h-4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold text-gray-400 uppercase tracking-[0.07em] mb-0.5",
							children: row.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 4
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -4
								},
								transition: { duration: .18 },
								className: "text-[14px] font-semibold text-black leading-snug",
								style: { wordBreak: "break-word" },
								children: row.value
							}, row.value)
						})]
					})]
				}, row.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeVariants,
				className: "flex items-center gap-2.5 px-7 py-3.5 bg-[#F5FCF7] border-t border-[#16C15F]/10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						className: "w-4 h-4 text-[#16C15F] shrink-0",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[12px] font-medium text-gray-500",
						children: [
							"Verified on ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[#16C15F]",
								children: "TierraTrace"
							}),
							" Platform"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-[11px] text-gray-400 font-medium",
						children: step.status
					})
				]
			})
		]
	}, `${journey.id}-${step.id}`);
}
function getArcs(journey, currentStepIndex) {
	const arcs = [];
	for (let i = 0; i < currentStepIndex; i++) {
		const start = journey.steps[i];
		const end = journey.steps[i + 1];
		arcs.push({
			startLat: start.lat,
			startLng: start.lng,
			endLat: end.lat,
			endLng: end.lng,
			color: "#10C35A"
		});
	}
	return arcs;
}
function Globe({ className, onStepChange }) {
	const globeEl = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	const [dimensions, setDimensions] = (0, import_react.useState)({
		width: 800,
		height: 800
	});
	const [activeJourneyIdx, setActiveJourneyIdx] = (0, import_react.useState)(0);
	const [activeStepIdx, setActiveStepIdx] = (0, import_react.useState)(0);
	const [cardPos, setCardPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const activeJourney = JOURNEYS[activeJourneyIdx];
	const activeStep = activeJourney.steps[activeStepIdx];
	(0, import_react.useEffect)(() => {
		if (onStepChange) onStepChange(activeJourney, activeStep);
	}, [
		activeJourney,
		activeStep,
		onStepChange
	]);
	(0, import_react.useLayoutEffect)(() => {
		const onResize = () => {
			if (containerRef.current) setDimensions({
				width: containerRef.current.offsetWidth,
				height: containerRef.current.offsetHeight
			});
		};
		window.addEventListener("resize", onResize);
		onResize();
		return () => window.removeEventListener("resize", onResize);
	}, []);
	(0, import_react.useEffect)(() => {
		let isMounted = true;
		const interval = setInterval(() => {
			if (!isMounted) return;
			setActiveStepIdx((prev) => {
				const next = prev + 1;
				if (next >= activeJourney.steps.length) {
					setActiveJourneyIdx((j) => (j + 1) % JOURNEYS.length);
					return 0;
				}
				return next;
			});
		}, 2e3);
		return () => {
			isMounted = false;
			clearInterval(interval);
		};
	}, [activeJourneyIdx, activeJourney.steps.length]);
	(0, import_react.useEffect)(() => {
		if (globeEl.current && activeStep) {
			const currentPos = globeEl.current.pointOfView();
			if (currentPos.altitude > 3) globeEl.current.pointOfView({
				lat: activeStep.lat,
				lng: activeStep.lng,
				altitude: 2.4
			}, 800);
			else {
				globeEl.current.pointOfView({
					lat: currentPos.lat,
					lng: currentPos.lng,
					altitude: 2.8
				}, 300);
				setTimeout(() => {
					if (globeEl.current) globeEl.current.pointOfView({
						lat: activeStep.lat,
						lng: activeStep.lng,
						altitude: 2.4
					}, 600);
				}, 200);
			}
		}
	}, [activeStep]);
	(0, import_react.useEffect)(() => {
		let frameId;
		const trackPos = () => {
			if (globeEl.current && activeStep) try {
				const pos = globeEl.current.getScreenCoords(activeStep.lat, activeStep.lng);
				if (pos && !isNaN(pos.x) && !isNaN(pos.y)) setCardPos({
					x: pos.x,
					y: pos.y
				});
			} catch (e) {}
			frameId = requestAnimationFrame(trackPos);
		};
		trackPos();
		return () => cancelAnimationFrame(frameId);
	}, [activeStep, dimensions]);
	(0, import_react.useEffect)(() => {
		if (globeEl.current) {
			globeEl.current.controls().autoRotate = false;
			globeEl.current.controls().autoRotateSpeed = 0;
			globeEl.current.controls().enableZoom = false;
			globeEl.current.controls().enableRotate = false;
			globeEl.current.controls().enablePan = false;
			globeEl.current.pointOfView({
				lat: 20,
				lng: 70,
				altitude: 3.2
			}, 0);
			globeEl.current.scene();
		}
	}, []);
	const arcsData = getArcs(activeJourney, activeStepIdx);
	const nodesData = activeJourney.steps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: cn("relative mx-auto aspect-square w-full max-w-[800px] flex items-center justify-center pointer-events-none select-none", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe$1, {
			ref: globeEl,
			width: dimensions.width,
			height: dimensions.height,
			backgroundColor: "rgba(255,255,255,0)",
			globeImageUrl: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
			bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
			showAtmosphere: false,
			arcsData,
			arcColor: (d) => d.color,
			arcAltitude: .08,
			arcDashLength: .4,
			arcDashGap: .2,
			arcDashAnimateTime: 1200,
			arcStroke: .6,
			htmlElementsData: nodesData,
			htmlElement: (d) => {
				const isActive = d.id === activeStep.id;
				const isCompleted = d.id < activeStep.id;
				const el = document.createElement("div");
				if (isActive) el.innerHTML = `
                <div class="relative transform -translate-x-1/2 -translate-y-1/2">
                  <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#16C15F] rounded-full shadow-[0_0_15px_rgba(22,193,95,0.9)] z-40">
                    <div class="absolute inset-0 bg-[#16C15F] rounded-full animate-ping opacity-70"></div>
                  </div>
                </div>
              `;
				else if (isCompleted) el.innerHTML = `
              <div class="relative transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 opacity-60 hover:opacity-100">
                <div class="w-1.5 h-1.5 bg-primary/80 rounded-full shadow-[0_0_8px_rgba(16,195,90,0.5)]"></div>
              </div>
            `;
				else el.innerHTML = `<div style="display:none;"></div>`;
				return el;
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute pointer-events-auto transition-transform duration-100 ease-linear z-50",
			style: {
				transform: `translate(${cardPos.x}px, ${cardPos.y}px)`,
				left: 0,
				top: 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 origin-bottom scale-[0.45] sm:scale-50 pointer-events-none hover:pointer-events-auto transition-all",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnterpriseInfoCard, {
					journey: activeJourney,
					step: activeStep
				})
			})
		})]
	});
}
//#endregion
export { Globe };
