import { useEffect } from 'react';
import { Hero } from './Hero';
import { Standards } from './Standards';
import { PublishFlow } from './PublishFlow';
import { Features } from './Features';
import { Versions } from './Versions';
import { CTA, MorePlatform } from '../../../components/Closing';

export default function PassportPage() {
  useEffect(() => {
    document.title = 'TierraTrace Passport — Digital Product Passports';
  }, []);
  return (
    <>
      <Hero />
      <Standards />
      <PublishFlow />
      <Features />
      <Versions />
      <MorePlatform current="passport" />
      <CTA />
    </>
  );
}
