import { STANDARDS } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { StandardsGrid } from '../../../components/standards/StandardsGrid';
import { Pill } from './shared';

/** Reporting frameworks on the landing page (last section before the footer). */
export function StandardsSection() {
  return (
    <section id={STANDARDS.id} className="st sx" aria-labelledby="standards-title">
      <div className="st-intro">
        <div>
          <Pill>Standards</Pill>
          <Words as="h2" text={STANDARDS.headline} id="standards-title" className="st-title" />
        </div>
        <InView as="p" className="st-lead m-rise" delay={150}>
          {STANDARDS.intro}
        </InView>
      </div>
      <StandardsGrid items={STANDARDS.items} note={STANDARDS.note} />
    </section>
  );
}
