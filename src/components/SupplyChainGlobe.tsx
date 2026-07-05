import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Globe from "react-globe.gl";

const ROUTES = [
  { startLat: 56.13, startLng: -106.34, endLat: 51.16, endLng: 10.45 }, // Canada -> Germany
  { startLat: 51.16, startLng: 10.45, endLat: 20.59, endLng: 78.96 }, // Germany -> India
  { startLat: 20.59, startLng: 78.96, endLat: 35.86, endLng: 104.19 }, // India -> China
  { startLat: 35.86, startLng: 104.19, endLat: -25.27, endLng: 133.77 }, // China -> Australia
  { startLat: -25.27, startLng: 133.77, endLat: 56.13, endLng: -106.34 }, // Australia -> Canada
];

const NODES = [
  { lat: 56.13, lng: -106.34, name: "Raw Materials", country: "Canada", icon: "🌱" },
  { lat: 51.16, lng: 10.45, name: "Manufacturing", country: "Germany", icon: "🏭" },
  { lat: 20.59, lng: 78.96, name: "Assembly", country: "India", icon: "🔧" },
  { lat: 35.86, lng: 104.19, name: "Distribution", country: "China", icon: "🚢" },
  { lat: -25.27, lng: 133.77, name: "Retail", country: "Australia", icon: "🏪" }
];

export default function SupplyChainGlobe() {
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState({ features: [] });
  const [dimensions, setDimensions] = useState({ width: 700, height: 700 });

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView({ lat: 25, lng: 40, altitude: 1.8 });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[760px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing">
      {/* Soft atmospheric green glow behind the globe */}
      <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full scale-[0.7] opacity-40 mix-blend-multiply pointer-events-none" />
      
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#10C35A"
        atmosphereAltitude={0.12}
        
        // Blank white base sphere
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png" 
        
        // Landmasses (Gray polygons)
        polygonsData={countries.features}
        polygonCapColor={() => "#F8F9FA"} // Tailwind gray-50
        polygonSideColor={() => "#E5E7EB"} // Tailwind gray-200
        polygonStrokeColor={() => "#FFFFFF"}
        
        // Arcs (Glowing green supply chain routes)
        arcsData={ROUTES}
        arcColor={() => "#10C35A"}
        arcAltitude={0.15} // Increased altitude to prevent Z-fighting with the globe surface
        arcStroke={0.6} // Slightly thicker for smoother rendering without aliasing

        
        // HTML markers for the nodes
        htmlElementsData={NODES}
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          el.innerHTML = `
            <div class="relative flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5 whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px]">
                ${d.icon}
              </div>
              <div class="flex flex-col">
                <span class="text-[11px] font-bold text-ink leading-none">${d.name}</span>
                <span class="text-[10px] font-medium text-ink-muted leading-none mt-0.5">${d.country}</span>
              </div>
              <!-- Pulsing dot -->
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(16,195,90,0.8)]">
                <div class="absolute inset-0 bg-primary rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          `;
          return el;
        }}
      />
    </div>
  );
}
