import { Search } from 'lucide-react';
import { Container } from '../../../components/ui';

// Trace search accepts any of these as a starting point (web-core PRD §53.2).
const ENTRY_POINTS = ['Batch', 'Product', 'Order', 'Shipment', 'Supplier lot', 'Passport ID', 'QR scan'];

export function SearchStrip() {
  return (
    <section aria-label="Start a trace from anything" className="border-y border-tt-border bg-white">
      <Container className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex h-12 w-full max-w-[420px] shrink-0 items-center gap-3 rounded-full border border-tt-border bg-[#fafbfa] px-5">
          <Search className="h-4 w-4 text-tt-muted" aria-hidden />
          <span className="font-mono text-[14px] text-tt-ink">LOT-ARA-04-26805</span>
          <span aria-hidden className="h-5 w-[2px] animate-pulse bg-tt-green motion-reduce:animate-none" />
          <kbd className="ml-auto rounded-md border border-tt-border bg-white px-1.5 py-0.5 text-[11px] font-semibold text-tt-muted">
            ⌘K
          </kbd>
        </div>
        <div>
          <p className="text-[15px] font-medium text-tt-muted">Start a trace from anything you have in hand</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {ENTRY_POINTS.map((e) => (
              <li key={e} className="rounded-full bg-tt-green-50 px-3 py-1 text-[13px] font-semibold text-tt-green-ink">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
