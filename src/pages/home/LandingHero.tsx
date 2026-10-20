import { useId, type CSSProperties } from 'react';
import { Leaf } from 'lucide-react';
import { HERO, type HeroContent } from '../../data/heroContent';
import { SmartLink } from '../../components/ui';
import './landing-hero.css';

/**
 * Homepage hero — full-bleed cinematic landscape with the oversized TIERRATRACE wordmark
 * sitting between the sky and the hills, turbines and cooling tower. The site header (Nav) floats over it.
 * All copy and links come from data/heroContent.
 */
export function LandingHero({ content = HERO }: { content?: HeroContent }) {
  const bg = content.background;
  const style = {
    '--lh-px': bg.focus.x,
    '--lh-py': bg.focus.y,
    '--lh-px-portrait': bg.focus.portraitX,
    '--lh-hz': bg.horizon,
    '--lh-ar': bg.width / bg.height,
  } as CSSProperties;

  return (
    <section id="top" data-hero className="lh scroll-mt-0" aria-labelledby="lh-title" style={style}>
      <div className="lh-frame">
        <picture>
          <img
            className="lh-layer lh-photo"
            src={bg.src}
            width={bg.width}
            height={bg.height}
            alt={bg.alt}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <BackgroundWordmark text={content.wordmark} />
        {bg.foreground && (
          <img className="lh-layer lh-fore" src={bg.foreground} width={bg.width} height={bg.height} alt="" aria-hidden decoding="async" />
        )}
        <div className="lh-layer lh-scrim" aria-hidden />

        <div className="lh-bottom">
          <div className="lh-copy">
            <h1 id="lh-title" className="lh-title lh-rise" style={{ '--lh-d': '120ms' } as CSSProperties}>
              <span>{content.headline[0]}</span> <span>{content.headline[1]}</span>
            </h1>
            <div className="lh-row lh-rise" style={{ '--lh-d': '220ms' } as CSSProperties}>
              <p className="lh-body">{content.body}</p>
              <SmartLink target={content.cta.to} className="lh-cta">
                <Leaf className="h-4 w-4" aria-hidden />
                {content.cta.label}
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Decorative giant wordmark. SVG + textLength makes it span the frame exactly at any width. */
function BackgroundWordmark({ text }: { text: string }) {
  const gid = useId();
  return (
    <svg className="lh-wordmark lh-fade" viewBox="0 0 1000 182" preserveAspectRatio="xMidYMin meet" aria-hidden focusable="false">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.96" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.88" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <text x="0" y="176" fontSize="224" textLength="1000" lengthAdjust="spacingAndGlyphs" fill={`url(#${gid})`}>
        {text}
      </text>
    </svg>
  );
}
