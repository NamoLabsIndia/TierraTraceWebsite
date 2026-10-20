import collage from '../assets/studio/studio-collage.webp';
import col1 from '../assets/studio/studio-col-1.webp';
import col2 from '../assets/studio/studio-col-2.webp';
import col3 from '../assets/studio/studio-col-3.webp';
import col4 from '../assets/studio/studio-col-4.webp';
import col5 from '../assets/studio/studio-col-5.webp';

/**
 * TierraTrace Studio hero. The card collage is one supplied image (1672×941); the five column layers
 * are cut from it along seams that run through the gaps between cards, so each column can drift
 * vertically and the image reassembles exactly at rest. Regenerate the columns if the collage changes.
 */
export const STUDIO_HERO = {
  eyebrow: 'The AI Compliance & Reporting Canvas',
  headline: ['AI-powered Studio', 'for', 'ESG reporting.'] as const,
  body: 'A simple 6-step procedure for all companies to collect, analyse, report and comply with global sustainability standards.',
  primary: { label: 'Explore TierraTrace Studio', to: 'studio-canvas' },
  video: {
    label: 'Watch video',
    /** Set to a video file or embeddable URL when the overview video exists; null shows a "coming soon" dialog. */
    src: null as string | null,
  },
  background: {
    src: collage,
    width: 1672,
    height: 941,
    alt: 'A wall of TierraTrace cards: ESG performance, compliance, carbon intelligence, product passports and traceability',
    // left / width as % of the collage; amp in px; dur in s; phase as a fraction of the cycle
    columns: [
      { src: col1, left: 0, width: 20.634, amp: 7, dur: 23, phase: 0.1 },
      { src: col2, left: 13.935, width: 25.897, amp: 10, dur: 29, phase: 0.55 },
      { src: col3, left: 36.722, width: 24.282, amp: 6, dur: 20, phase: 0.3 },
      { src: col4, left: 54.246, width: 26.974, amp: 9, dur: 33, phase: 0.8 },
      { src: col5, left: 77.033, width: 22.967, amp: 7, dur: 26, phase: 0.45 },
    ],
  },
};
