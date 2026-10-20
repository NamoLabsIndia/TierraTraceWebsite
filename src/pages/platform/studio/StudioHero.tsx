import { useRef, type CSSProperties } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { STUDIO_HERO } from '../../../data/studioContent';
import { SmartLink } from '../../../components/ui';
import './studio-hero.css';

/** Full-bleed Studio hero: drifting card wall, dark grade, centred headline and two CTAs. */
export function StudioHero() {
  const h = STUDIO_HERO;
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <section className="sh" data-hero data-hero-tone="dark" aria-labelledby="sh-title">
      <StudioBackground />

      <div className="sh-content">
        <p className="sh-eyebrow sh-in">{h.eyebrow}</p>
        <h1 id="sh-title" className="sh-title sh-in" style={{ '--sh-d': '80ms' } as CSSProperties}>
          <span>{h.headline[0]}</span>
          <span>
            {h.headline[1]} <em>{h.headline[2]}</em>
          </span>
        </h1>
        <p className="sh-body sh-in" style={{ '--sh-d': '160ms' } as CSSProperties}>
          {h.body}
        </p>
        <div className="sh-ctas sh-in" style={{ '--sh-d': '240ms' } as CSSProperties}>
          <SmartLink target={h.primary.to} className="sh-primary">
            {h.primary.label} <ArrowRight className="sh-arrow h-5 w-5" aria-hidden />
          </SmartLink>
          <button type="button" className="sh-video" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog">
            <span className="sh-play" aria-hidden>
              <Play className="h-5 w-5" fill="currentColor" />
            </span>
            {h.video.label}
          </button>
        </div>
      </div>

      <dialog
        ref={dialog}
        className="sh-dialog"
        aria-labelledby="sh-dialog-title"
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        <div className="sh-dialog-inner">
          <button type="button" className="sh-close" onClick={() => dialog.current?.close()} aria-label="Close">
            <X className="h-5 w-5" aria-hidden />
          </button>
          {h.video.src ? (
            <>
              <h2 id="sh-dialog-title" className="sr-only">
                TierraTrace Studio overview
              </h2>
              <video className="sh-video-el" src={h.video.src} controls playsInline />
            </>
          ) : (
            <>
              <h2 id="sh-dialog-title" className="sh-dialog-title">
                Product overview video coming soon
              </h2>
              <p className="sh-dialog-body">
                We’re preparing a walkthrough of TierraTrace Studio. In the meantime, explore the six steps below or talk to
                our team for a live demo.
              </p>
              <div className="sh-dialog-actions">
                <SmartLink target="/contact" className="sh-primary sh-primary--dark">
                  Request a demo <ArrowRight className="h-4 w-4" aria-hidden />
                </SmartLink>
              </div>
            </>
          )}
        </div>
      </dialog>
    </section>
  );
}

/** Base collage + column layers cut from it; columns drift a few pixels out of phase. */
function StudioBackground() {
  const bg = STUDIO_HERO.background;
  return (
    <div className="sh-bg">
      <div className="sh-stage" style={{ '--sh-ar': bg.width / bg.height } as CSSProperties}>
        <img className="sh-base" src={bg.src} width={bg.width} height={bg.height} alt={bg.alt} fetchPriority="high" />
        {bg.columns.map((c, i) => (
          <img
            key={i}
            className="sh-col"
            src={c.src}
            alt=""
            aria-hidden
            decoding="async"
            style={
              {
                left: `${c.left}%`,
                width: `${c.width}%`,
                '--sh-amp': `${c.amp}px`,
                animationDuration: `${c.dur}s`,
                animationDelay: `${-c.phase * c.dur}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="sh-grade" aria-hidden />
    </div>
  );
}
