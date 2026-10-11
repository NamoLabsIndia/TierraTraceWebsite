import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import earthMap from '../../assets/earth-blue-marble.jpg';
import bumpMap from '../../assets/earth-topology.jpg';

/*
 * Textured 3D Earth for the homepage hero — mirrors the satellite globe on tierratrace.in.
 * Adapted from the 21st.dev "3D Globe" (aceternity): NASA Blue Marble texture + bump map,
 * soft atmosphere, rotate-to-focus on the active supply-chain stop, drag to spin.
 * Textures are bundled locally (NASA Blue Marble, public domain via three-globe, MIT).
 */

export type GlobeStop = { lat: number; lng: number };

const R = 2;
const BRAND = new THREE.Color('#31c35a');

function latLngToVec3(lat: number, lng: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(-(r * Math.sin(phi) * Math.cos(theta)), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}

/** Rotation that brings a lat/lng to face the camera (+z). */
function focusRotation(lat: number, lng: number) {
  const v = latLngToVec3(0, lng, 1);
  // The journey card covers the top of the globe, so the focused stop is parked below centre.
  return { y: -Math.atan2(v.x, v.z), x: (lat * Math.PI) / 180 + 0.42 };
}

const shortest = (from: number, to: number) => {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return from + d;
};

function Arc({ from, to }: { from: GlobeStop; to: GlobeStop }) {
  const line = useMemo(() => {
    const a = latLngToVec3(from.lat, from.lng, R * 1.005);
    const b = latLngToVec3(to.lat, to.lng, R * 1.005);
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const lift = 1 + a.distanceTo(b) * 0.16;
    mid.normalize().multiplyScalar(R * lift);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
    const mat = new THREE.LineBasicMaterial({ color: BRAND, transparent: true, opacity: 0.95 });
    return new THREE.Line(geo, mat);
  }, [from, to]);
  return <primitive object={line} />;
}

function Pin({ stop, active }: { stop: GlobeStop; active: boolean }) {
  const ring = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLngToVec3(stop.lat, stop.lng, R * 1.004), [stop]);
  const quat = useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
    return q;
  }, [pos]);
  useFrame(({ clock }) => {
    if (!ring.current) return;
    const t = (clock.elapsedTime % 1.8) / 1.8;
    ring.current.scale.setScalar(1 + t * 2.4);
    (ring.current.material as THREE.MeshBasicMaterial).opacity = active ? 0.7 * (1 - t) : 0;
  });
  return (
    <group position={pos} quaternion={quat}>
      <mesh>
        <circleGeometry args={[active ? 0.055 : 0.04, 32]} />
        <meshBasicMaterial color={BRAND} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[0.055, 0.075, 40]} />
        <meshBasicMaterial color={BRAND} transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Atmosphere() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { c: { value: new THREE.Color('#9fd8ff') } },
        vertexShader: `varying vec3 vN; varying vec3 vP;
          void main(){ vN = normalize(normalMatrix*normal); vP = (modelViewMatrix*vec4(position,1.)).xyz;
          gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
        fragmentShader: `uniform vec3 c; varying vec3 vN; varying vec3 vP;
          void main(){ float f = pow(1. - abs(dot(vN, normalize(-vP))), 2.6); gl_FragColor = vec4(c, f*0.14); }`,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false,
      }),
    [],
  );
  return (
    <mesh scale={1.05}>
      <sphereGeometry args={[R, 64, 32]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function Earth({ stops, active, drag }: { stops: GlobeStop[]; active: number; drag: React.MutableRefObject<{ x: number; y: number; at: number }> }) {
  const group = useRef<THREE.Group>(null);
  const [map, bump] = useLoader(THREE.TextureLoader, [earthMap, bumpMap]);
  const { gl } = useThree();
  useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
  }, [map, gl]);
  const reduce = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const target = focusRotation(stops[active].lat, stops[active].lng);
    const idle = performance.now() - drag.current.at > 2500;
    // Ease back to the focused stop unless the user has just dragged the globe.
    const k = reduce ? 1 : 1 - Math.pow(0.0025, dt);
    const ty = shortest(g.rotation.y, target.y + (idle ? 0 : drag.current.y));
    const tx = target.x + (idle ? 0 : drag.current.x);
    g.rotation.y += (ty - g.rotation.y) * (idle ? k * 0.6 : 1);
    g.rotation.x += (tx - g.rotation.x) * (idle ? k * 0.6 : 1);
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[R, 96, 96]} />
        <meshStandardMaterial map={map} bumpMap={bump} bumpScale={0.06} roughness={0.85} metalness={0} />
      </mesh>
      {stops.slice(0, -1).map((s, i) => (
        <Arc key={i} from={s} to={stops[i + 1]} />
      ))}
      {stops.map((s, i) => (
        <Pin key={i} stop={s} active={i === active} />
      ))}
    </group>
  );
}

export default function EarthGlobe({ stops, active }: { stops: GlobeStop[]; active: number }) {
  const drag = useRef({ x: 0, y: 0, at: 0 });
  const start = useRef<{ px: number; py: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const up = () => (start.current = null);
    window.addEventListener('pointerup', up);
    return () => window.removeEventListener('pointerup', up);
  }, []);

  return (
    <div
      className="h-full w-full cursor-grab touch-pan-y active:cursor-grabbing"
      onPointerDown={(e) => {
        if (performance.now() - drag.current.at > 2500) drag.current = { x: 0, y: 0, at: 0 };
        start.current = { px: e.clientX, py: e.clientY, x: drag.current.x, y: drag.current.y };
        drag.current.at = performance.now();
      }}
      onPointerMove={(e) => {
        if (!start.current) return;
        drag.current.y = start.current.y + (e.clientX - start.current.px) * 0.008;
        drag.current.x = Math.max(-0.8, Math.min(0.8, start.current.x + (e.clientY - start.current.py) * 0.006));
        drag.current.at = performance.now();
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ fov: 38, near: 0.1, far: 100, position: [0, 0, 7.4] }}
        aria-label="Rotating globe showing supply-chain routes"
        role="img"
      >
        <ambientLight intensity={1.15} />
        <directionalLight position={[-6, 3, 6]} intensity={2.1} />
        <directionalLight position={[6, -2, -4]} intensity={0.35} color="#88ccff" />
        <Earth stops={stops} active={active} drag={drag} />
        <Atmosphere />
      </Canvas>
    </div>
  );
}
