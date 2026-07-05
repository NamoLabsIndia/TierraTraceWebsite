"use client"
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import GlobeGl from "react-globe.gl";
import { JOURNEYS } from "@/data/journeys";
import { cn } from "@/lib/utils";

// Helper to calculate arcs up to current step
function getArcs(journey: any, currentStepIndex: number) {
  const arcs = [];
  for (let i = 0; i < currentStepIndex; i++) {
    const start = journey.steps[i];
    const end = journey.steps[i + 1];
    arcs.push({
      startLat: start.lat,
      startLng: start.lng,
      endLat: end.lat,
      endLng: end.lng,
      color: "#10C35A", // Emerald green
    });
  }
  return arcs;
}

import { Journey, JourneyStep } from "@/data/journeys";
import { EnterpriseInfoCard } from "../EnterpriseInfoCard";

export function Globe({ className, onStepChange }: { className?: string, onStepChange?: (journey: Journey, step: JourneyStep) => void }) {
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });

  const activeJourney = JOURNEYS[activeJourneyIdx];
  const activeStep = activeJourney.steps[activeStepIdx];

  useEffect(() => {
    if (onStepChange) {
      onStepChange(activeJourney, activeStep);
    }
  }, [activeJourney, activeStep, onStepChange]);

  useLayoutEffect(() => {
    const onResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Journey progression logic
  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (!isMounted) return;
      
      setActiveStepIdx((prev) => {
        const next = prev + 1;
        if (next >= activeJourney.steps.length) {
          // Move to next journey directly
          setActiveJourneyIdx((j) => (j + 1) % JOURNEYS.length);
          return 0;
        }
        return next;
      });
    }, 2000); // 2 seconds per stage

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [activeJourneyIdx, activeJourney.steps.length]);

  // Camera movement logic
  useEffect(() => {
    if (globeEl.current && activeStep) {
      // Zoom out slightly first, then zoom in to continent scale
      const currentPos = globeEl.current.pointOfView();
      
      // If we are far away (e.g. initial load), just zoom straight in
      if (currentPos.altitude > 3.0) {
        globeEl.current.pointOfView({ lat: activeStep.lat, lng: activeStep.lng, altitude: 2.4 }, 800);
      } else {
        // Cinematic arc zoom: zoom out, then zoom in
        globeEl.current.pointOfView({ lat: currentPos.lat, lng: currentPos.lng, altitude: 2.8 }, 300);
        setTimeout(() => {
          if (globeEl.current) {
            globeEl.current.pointOfView({ lat: activeStep.lat, lng: activeStep.lng, altitude: 2.4 }, 600);
          }
        }, 200);
      }
    }
  }, [activeStep]);

  // Track screen coordinates
  useEffect(() => {
    let frameId: number;
    const trackPos = () => {
      if (globeEl.current && activeStep) {
        try {
          const pos = globeEl.current.getScreenCoords(activeStep.lat, activeStep.lng);
          if (pos && !isNaN(pos.x) && !isNaN(pos.y)) {
            setCardPos({ x: pos.x, y: pos.y });
          }
        } catch (e) {}
      }
      frameId = requestAnimationFrame(trackPos);
    };
    trackPos();
    return () => cancelAnimationFrame(frameId);
  }, [activeStep, dimensions]);

  // Initial setup
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = false;
      globeEl.current.controls().autoRotateSpeed = 0;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enableRotate = false;
      globeEl.current.controls().enablePan = false;
      globeEl.current.pointOfView({ lat: 20, lng: 70, altitude: 3.2 }, 0); // Start far away
      
      // Add subtle atmosphere
      const scene = globeEl.current.scene();
      // We could add custom lighting here if needed
    }
  }, []);

  const arcsData = getArcs(activeJourney, activeStepIdx);
  const nodesData = activeJourney.steps;

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[800px] flex items-center justify-center pointer-events-none select-none",
        className
      )}
    >
      <GlobeGl
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(255,255,255,0)"
        
        // High-res NASA Blue Marble textures
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        showAtmosphere={false}
        
        // Arcs
        arcsData={arcsData}
        arcColor={(d: any) => d.color}
        arcAltitude={0.08}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1200}
        arcStroke={0.6}
        
        // HTML Markers
        htmlElementsData={nodesData}
        htmlElement={(d: any) => {
          const isActive = d.id === activeStep.id;
          const isCompleted = d.id < activeStep.id;
          
          const el = document.createElement('div');
          
            // We just render the pulsing node anchor here. The card is rendered as an overlay in React.
            if (isActive) {
              el.innerHTML = `
                <div class="relative transform -translate-x-1/2 -translate-y-1/2">
                  <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#16C15F] rounded-full shadow-[0_0_15px_rgba(22,193,95,0.9)] z-40">
                    <div class="absolute inset-0 bg-[#16C15F] rounded-full animate-ping opacity-70"></div>
                  </div>
                </div>
              `;
          } else if (isCompleted) {
            el.innerHTML = `
              <div class="relative transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 opacity-60 hover:opacity-100">
                <div class="w-1.5 h-1.5 bg-primary/80 rounded-full shadow-[0_0_8px_rgba(16,195,90,0.5)]"></div>
              </div>
            `;
          } else {
            el.innerHTML = `<div style="display:none;"></div>`;
          }
          
          return el;
        }}
      />
      
      {/* Tracker Card Overlay */}
      <div 
        className="absolute pointer-events-auto transition-transform duration-100 ease-linear z-50"
        style={{ 
          transform: `translate(${cardPos.x}px, ${cardPos.y}px)`,
          left: 0,
          top: 0
        }}
      >
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 origin-bottom scale-[0.45] sm:scale-50 pointer-events-none hover:pointer-events-auto transition-all">
           <EnterpriseInfoCard journey={activeJourney} step={activeStep} />
        </div>
      </div>
    </div>
  );
}
