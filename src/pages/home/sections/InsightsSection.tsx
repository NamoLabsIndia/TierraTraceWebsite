import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { INSIGHTS } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { CarouselControls, Pill } from './shared';
import { useScrollTrack } from '../../../lib/useScrollTrack';

/** Frame 6 — editorial heading + horizontally scrolling image cards that bleed off the right edge. */
export function InsightsSection() {
  const { ref: track, progress, canPrev, canNext, step } = useScrollTrack<HTMLUListElement>();

  return (
    <section id="insights" className="in sx" aria-labelledby="insights-title">
      <div className="in-intro">
        <div>
          <Pill>{INSIGHTS.label}</Pill>
          <Words as="h2" text={INSIGHTS.headline} id="insights-title" className="in-title" />
        </div>
        <div className="in-side">
          <InView as="p" className="in-lead m-rise" delay={200}>
            {INSIGHTS.intro}
          </InView>
          <InView className="m-rise" delay={320}>
            <CarouselControls
              label="Insight cards"
              progress={progress}
              canPrev={canPrev}
              canNext={canNext}
              onPrev={() => step(-1)}
              onNext={() => step(1)}
            />
          </InView>
        </div>
      </div>

      <ul ref={track} className="in-track" aria-label="Insights">
        {INSIGHTS.items.map((c, i) => (
          <InView as="li" key={c.title} className="in-card m-img" delay={i * 110}>
            <Link to={c.to} className="in-link" draggable={false}>
              <span className="in-media">
                <img src={c.image.src} alt={c.image.alt} loading="lazy" decoding="async" draggable={false} />
              </span>
              <span className="in-shade" aria-hidden />
              <span className="in-card-title">{c.title}</span>
              <span className="in-go" aria-hidden>
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </InView>
        ))}
      </ul>
    </section>
  );
}
