import { ArrowRight } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { MISSION } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { SmartLink } from '../../../components/ui';
import { Pill } from './shared';

/** Frame 3 — cinematic turbine landscape with the mission card floating on the right. */
export function MissionSection() {
  return (
    <section id="mission" className="ms" aria-labelledby="mission-title">
      <div className="ms-media">
        <div className="ms-par m-parallax">
          <img src={MISSION.image.src} alt={MISSION.image.alt} width={1649} height={954} loading="lazy" decoding="async" />
        </div>
      </div>

      <InView as="article" className="ms-card">
        <div className="ms-card-head">
          <Pill tone="plain">{MISSION.label}</Pill>
          <div className="ms-brand">
            <img src={logo} alt="TierraTrace" width={360} height={163} loading="lazy" />
            <span>{MISSION.parent}</span>
          </div>
        </div>
        <Words as="h2" text={MISSION.headline} id="mission-title" className="ms-title" delay={150} />
        <InView as="p" className="ms-body m-rise" delay={350}>
          {MISSION.body}
        </InView>
        <InView className="m-rise" delay={450}>
          <SmartLink target={MISSION.cta.to} className="ms-cta">
            {MISSION.cta.label} <ArrowRight className="ms-cta-arrow h-5 w-5" aria-hidden />
          </SmartLink>
        </InView>
      </InView>
    </section>
  );
}
