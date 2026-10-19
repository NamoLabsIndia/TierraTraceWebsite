import landscape from '../assets/hero/tierratrace-hero-landscape.webp';
import landscapeSmall from '../assets/hero/tierratrace-hero-landscape-small.webp';
import foreground from '../assets/hero/tierratrace-hero-foreground.webp';

/**
 * Everything the landing hero says or links to lives here (the header lives in components/layout/Nav).
 * Link targets follow SmartLink: a bare id scrolls to that home section, a "/path" routes.
 */

export type HeroLink = { label: string; to: string };

export type HeroContent = {
  wordmark: string;
  headline: [string, string];
  body: string;
  cta: HeroLink;
  background: {
    /** Full landscape photo (1577×997). Swap this file to change the scene. */
    src: string;
    /** Smaller variant served to narrow viewports. */
    srcSmall: string;
    width: number;
    height: number;
    /**
     * Optional cut-out of whatever should stand IN FRONT of the wordmark (here: hills, turbines, cooling tower),
     * same size as `src`. Set to null when swapping in a new photo without a matching cut-out.
     */
    foreground: string | null;
    /**
     * Crop focus as 0–1 fractions (object-position): `x`/`y` for landscape viewports, `portraitX` for
     * portrait ones. `horizon` is where the horizon sits in the photo (0–1 of its height); the wordmark's
     * baseline is pinned to it, so update it when swapping the photo.
     */
    focus: { x: number; y: number; portraitX: number };
    horizon: number;
    alt: string;
    /** Licence attribution, rendered in the footer. Null for owned/generated imagery. */
    credit: { text: string; href: string } | null;
  };
};

export const HERO: HeroContent = {
  wordmark: 'TIERRATRACE',
  headline: ['Building Transparent Supply Chains', 'for a Sustainable Future'],
  body: 'We help businesses trace products, materials and supply chains with trusted data to build a more transparent, resilient and sustainable world.',
  cta: { label: 'Explore Our Solutions', to: 'solutions' },
  background: {
    src: landscape,
    srcSmall: landscapeSmall,
    width: 1577,
    height: 997,
    foreground,
    focus: { x: 0.5, y: 0.6, portraitX: 0.52 },
    horizon: 0.456,
    alt: 'Wind turbines and a cooling tower above a green field with solar panels at sunset',
    credit: null,
  },
};
