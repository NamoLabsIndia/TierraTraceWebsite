import { useEffect } from 'react';
import { Contact, Pilot } from '../home/PilotContact';

/** Contact + pilot programme, in the homepage's editorial design; the form fields are unchanged. */
export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — TierraTrace';
  }, []);
  return (
    <>
      <Contact />
      <Pilot />
    </>
  );
}
