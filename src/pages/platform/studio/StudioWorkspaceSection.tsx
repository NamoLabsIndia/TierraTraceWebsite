import { Check } from 'lucide-react';
import { STUDIO_WORKSPACE } from '../../../data/studioContent';
import { InView } from '../../../lib/motion';
import { Pill } from '../../home/sections/shared';
import { StudioScreen } from './StudioScreen';
import '../../home/sections/sections.css';
import './studio-workspace.css';
import './studio-screen.css';

/** Copy and calls to action on the left; the Studio app running on a desktop display on the right. */
export function StudioWorkspaceSection() {
  const w = STUDIO_WORKSPACE;
  return (
    <section className="sw" aria-labelledby="sw-title">
      <InView className="sw-copy m-rise">
        <Pill>{w.eyebrow}</Pill>
        <h2 id="sw-title" className="sw-title">
          {w.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <span className="sw-accent">{w.accent}</span>
        </h2>
        <p className="sw-body">{w.body}</p>
        <ul className="sw-points">
          {w.points.map((p) => (
            <li key={p}>
              <span className="sw-tick" aria-hidden>
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </InView>

      <InView className="sw-stage m-rise" delay={120}>
        <div className="sw-desk" aria-hidden />
        <figure className="sw-monitor" aria-label="TierraTrace Studio on a desktop display">
          <div className="sw-display">
            <div className="sw-bezel">
              <div className="sw-screen">
                <StudioScreen />
                <span className="sw-glare" aria-hidden />
              </div>
            </div>
          </div>
          <div className="sw-neck" aria-hidden />
          <div className="sw-foot" aria-hidden />
        </figure>
        <div className="sw-keyboard" aria-hidden />
        <div className="sw-trackpad" aria-hidden />
      </InView>
    </section>
  );
}
