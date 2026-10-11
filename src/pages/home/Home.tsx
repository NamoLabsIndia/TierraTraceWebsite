import { useEffect } from 'react';
import { HomeHero } from './HomeHero';
import { Capabilities, Compliance, Industries, Lifecycle, LogoStrip, PlatformGrid, Why } from './HomeSections';
import { Contact, Pilot } from './PilotContact';

/** Homepage — rebuilt from tierratrace.in; "Platform" now lists the six products, each with its own page. */
export default function Home() {
  useEffect(() => {
    document.title = 'TierraTrace — Global Digital Product Passport & End-to-End Traceability';
  }, []);
  return (
    <>
      <HomeHero />
      <LogoStrip />
      <Why />
      <PlatformGrid />
      <Lifecycle />
      <Industries />
      <Capabilities />
      <Compliance />
      <Pilot />
      <Contact />
    </>
  );
}
