import { ChartNoAxesCombined, CircleCheck, Eye, Leaf, PlugZap, Route, ShieldCheck, Sparkles } from 'lucide-react';

export type Product = {
  slug: string;
  name: string;
  /** Short line used in the Platform menu — copied from tierratrace.in. */
  tagline: string;
  icon: typeof Route;
  /** Menu icon on tierratrace.in (Insights uses an eye, Passport a check). */
  menuIcon: typeof Route;
  ready: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'studio',
    name: 'Studio',
    tagline: 'Visual configuration studio for Digital Product Passports and schemas.',
    icon: Sparkles,
    menuIcon: Sparkles,
    ready: true,
  },
  {
    slug: 'passport',
    name: 'Passport',
    tagline: 'Secure Digital Product Passports for complete lifecycle transparency.',
    icon: CircleCheck,
    menuIcon: CircleCheck,
    ready: true,
  },
  { slug: 'trace', name: 'Trace', tagline: 'End-to-End Traceability tracking.', icon: Route, menuIcon: Route, ready: true },
  { slug: 'carbon', name: 'Carbon', tagline: 'Carbon Footprint & Sustainability.', icon: Leaf, menuIcon: Leaf, ready: true },
  { slug: 'verify', name: 'Verify', tagline: 'Supplier & Product Verification.', icon: ShieldCheck, menuIcon: ShieldCheck, ready: true },
  {
    slug: 'insights',
    name: 'Insights',
    tagline: 'Analytics & Supply Chain Intelligence.',
    icon: ChartNoAxesCombined,
    menuIcon: Eye,
    ready: true,
  },
  { slug: 'connect', name: 'Connect', tagline: 'APIs & ERP Integrations.', icon: PlugZap, menuIcon: PlugZap, ready: true },
];

export const productBySlug = (slug?: string) => PRODUCTS.find((p) => p.slug === slug);
