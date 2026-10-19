import { useEffect } from 'react';
import { Contact, Pilot } from '../home/PilotContact';

/** Contact + pilot programme, moved off the homepage; the existing form is unchanged. */
export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — TierraTrace';
  }, []);
  return (
    <div className="pt-28 sm:pt-32">
      <Contact />
      <Pilot />
    </div>
  );
}
