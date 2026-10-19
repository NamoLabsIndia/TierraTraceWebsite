import { useId, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SOLUTIONS } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { SmartLink } from '../../../components/ui';
import { Pill } from './shared';

/** Frame 4 — editorial intro + three accordion rows; Studio open by default with its wide photograph. */
export function SolutionsSection() {
  const [open, setOpen] = useState<string | null>(SOLUTIONS.defaultOpen);
  const uid = useId();

  return (
    <section id="solutions" className="so sx" aria-labelledby="solutions-title">
      <div className="so-intro">
        <div>
          <Pill>{SOLUTIONS.label}</Pill>
          <Words as="h2" text={SOLUTIONS.headline} id="solutions-title" className="so-title" />
        </div>
        <InView as="p" className="so-lead m-rise" delay={200}>
          {SOLUTIONS.intro}
        </InView>
      </div>

      <ul className="so-list">
        {SOLUTIONS.items.map((s, i) => {
          const isOpen = open === s.id;
          const btnId = `${uid}-b-${s.id}`;
          const panelId = `${uid}-p-${s.id}`;
          return (
            <InView as="li" key={s.id} className={`so-item m-rise ${isOpen ? 'is-open' : ''}`} delay={i * 90}>
              <h3 className="so-head">
                <button
                  id={btnId}
                  type="button"
                  className="so-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : s.id)}
                >
                  <span className="so-name">{s.title}</span>
                  <span className="so-icon" aria-hidden>
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={btnId} className="so-panel" inert={!isOpen}>
                <div className="so-panel-inner">
                  <p className="so-body">
                    {s.body}{' '}
                    <SmartLink target={s.to} className="so-more">
                      Explore <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </SmartLink>
                  </p>
                  <div className="so-figure">
                    <img src={s.image.src} alt={s.image.alt} loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
              <span className="so-rule" aria-hidden />
            </InView>
          );
        })}
      </ul>
    </section>
  );
}
