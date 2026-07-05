import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    // Some bustling global supply chain hubs
    const markers = [
      { location: [37.7595, -122.4367], size: 0.05 }, // SF
      { location: [40.7128, -74.0060], size: 0.04 }, // NY
      { location: [51.5074, -0.1278], size: 0.06 }, // London
      { location: [35.6895, 139.6917], size: 0.08 }, // Tokyo
      { location: [22.3193, 114.1694], size: 0.05 }, // HK
      { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
      { location: [28.6139, 77.2090], size: 0.06 }, // Delhi
      { location: [-23.5505, -46.6333], size: 0.05 }, // Sao Paulo
      { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
      { location: [48.8566, 2.3522], size: 0.05 }, // Paris
      { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
      { location: [31.2304, 121.4737], size: 0.09 }, // Shanghai
    ];

    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1400,
      height: 1400,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.5,
      scale: 1,
      mapSamples: 24000,
      mapBrightness: 8,
      baseColor: [0.03, 0.2, 0.08], // Deeper background for contrast
      markerColor: [0.0, 1.0, 0.4], // Brilliant neon green markers
      glowColor: [0.05, 0.8, 0.3], // Stronger overall glow
      markers: markers,
      onRender: (state) => {
        state.phi = phi;
        // Add a dynamic bobbing effect by slowly oscillating theta
        state.theta = 0.25 + Math.sin(phi * 1.5) * 0.1;
        
        // Dynamic pulsating markers
        const time = Date.now();
        state.markers = markers.map((m, i) => ({
          location: m.location as [number, number],
          size: m.size + Math.sin(time * 0.002 + i) * 0.02 // pulsing sizes
        }));

        phi += 0.005; // faster rotation
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
        }}
      />
    </div>
  );
}
