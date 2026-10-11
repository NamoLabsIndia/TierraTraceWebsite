import { useState } from 'react';
import { ArrowDownRight, ArrowUpLeft, Building2, Download, FileWarning, Hand, Package, Shirt, Sprout, Truck } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

type TreeNode = { id: string; label: string; meta: string; icon: typeof Package; children?: TreeNode[]; flag?: boolean };

/*
 * Mirrors PRD journey §8.3 "Recall Impact Assessment": a supplier flags a cotton lot,
 * compliance opens it, and asks for downstream impact. Upstream is the same graph read backwards.
 */
const DOWNSTREAM: TreeNode = {
  id: 'src',
  label: 'Supplier lot SUP-CT-7781',
  meta: 'Raw cotton · 12,000 kg · flagged by supplier',
  icon: Sprout,
  flag: true,
  children: [
    {
      id: 'y1',
      label: 'Yarn lot LOT-YRN-2291',
      meta: '7,800 kg consumed · split into 2 sublots',
      icon: Package,
      children: [
        { id: 'g1', label: 'Garment batch LOT-ARA-04-26805', meta: '1,240 tees', icon: Shirt },
        { id: 'g2', label: 'Garment batch LOT-ARA-04-26811', meta: '980 tees', icon: Shirt },
      ],
    },
    {
      id: 'y2',
      label: 'Yarn lot LOT-YRN-2304',
      meta: '4,200 kg consumed · merged with LOT-YRN-2299',
      icon: Package,
      children: [{ id: 'g3', label: 'Garment batch LOT-ARA-05-27002', meta: '1,610 tees', icon: Shirt }],
    },
  ],
};

const UPSTREAM: TreeNode = {
  id: 'g',
  label: 'Garment batch LOT-ARA-04-26805',
  meta: '1,240 tees · Tiruppur unit 2',
  icon: Shirt,
  children: [
    {
      id: 'y',
      label: 'Yarn lot LOT-YRN-2291',
      meta: '412 kg consumed · Coimbatore mill',
      icon: Package,
      children: [
        { id: 'c1', label: 'Supplier lot SUP-CT-7781', meta: '260 kg · Gujarat co-op', icon: Sprout, flag: true },
        { id: 'c2', label: 'Supplier lot SUP-CT-7790', meta: '152 kg · Gujarat co-op', icon: Sprout },
      ],
    },
    { id: 'd', label: 'Dye lot DYE-RX-118', meta: '18 kg reactive dye · certificate valid', icon: Package },
  ],
};

const IMPACT = [
  { n: '3', label: 'Garment batches', icon: Shirt },
  { n: '3,830', label: 'Units affected', icon: Package },
  { n: '6', label: 'Shipments', icon: Truck },
  { n: '4', label: 'Customers', icon: Building2 },
];

export function ImpactExplorer() {
  const [dir, setDir] = useState<'down' | 'up'>('down');
  const tree = dir === 'down' ? DOWNSTREAM : UPSTREAM;

  return (
    <section id="impact" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Recall in seconds, not weeks"
          title="One flagged lot."
          accent="Every affected customer, instantly."
          lead="When a supplier reports a problem, open the lot and ask for downstream impact. TierraTrace walks the full genealogy — through splits and merges, with quantities at every link — and groups the result so you can act."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Reveal>
            <div className="h-full rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[15px] font-semibold">Genealogy</p>
                <div role="tablist" aria-label="Trace direction" className="inline-flex rounded-full bg-[#f3f4f5] p-1">
                  {[
                    { id: 'down' as const, label: 'Downstream', more: ' impact', icon: ArrowDownRight },
                    { id: 'up' as const, label: 'Upstream', more: ' lineage', icon: ArrowUpLeft },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={dir === t.id}
                      aria-controls="genealogy-tree"
                      onClick={() => setDir(t.id)}
                      className={`tt-press inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold ${
                        dir === t.id ? 'bg-white text-tt-ink shadow-sm' : 'text-tt-muted hover:text-tt-ink'
                      }`}
                    >
                      <t.icon className="h-3.5 w-3.5" aria-hidden /> {t.label}
                      <span className="hidden sm:inline">{t.more}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div id="genealogy-tree" role="tabpanel" key={dir} className="tt-swap-enter mt-6">
                <ul role="tree" aria-label={dir === 'down' ? 'Downstream impact' : 'Upstream lineage'}>
                  <Branch node={tree} depth={0} />
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-[28px] bg-tt-ink p-6 text-white sm:p-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-green">Impact set · SUP-CT-7781</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {IMPACT.map((m) => (
                  <li key={m.label} className="rounded-2xl bg-white/[0.06] p-4">
                    <m.icon className="h-4 w-4 text-tt-green" aria-hidden />
                    <p className="mt-3 text-[28px] font-bold leading-none tracking-tight">{m.n}</p>
                    <p className="mt-1.5 text-[13px] text-white/60">{m.label}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-2 pt-6">
                <ImpactAction icon={Download} label="Export impact set" hint="Customers, shipments, quantities" />
                <ImpactAction icon={Hand} label="Hold 3 batches" hint="One confirmed action, each hold audited" />
                <ImpactAction icon={FileWarning} label="Open recall dossier" hint="Regulator-ready, all entities linked" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ImpactAction({ icon: Icon, label, hint }: { icon: typeof Download; label: string; hint: string }) {
  return (
    <button
      type="button"
      className="tt-press flex w-full items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-left hover:bg-white/[0.06]"
    >
      <Icon className="h-4 w-4 shrink-0 text-tt-green" aria-hidden />
      <span>
        <span className="block text-[14px] font-semibold">{label}</span>
        <span className="block text-[12px] text-white/55">{hint}</span>
      </span>
    </button>
  );
}

function Branch({ node, depth }: { node: TreeNode; depth: number }) {
  const Icon = node.icon;
  return (
    <li role="treeitem" aria-expanded={node.children ? true : undefined} aria-level={depth + 1} className="relative">
      <div
        className={`relative z-[1] flex items-center gap-3 rounded-2xl border px-3.5 py-3 ${
          node.flag ? 'border-tt-amber/35 bg-tt-amber-50' : 'border-tt-border bg-white'
        }`}
      >
        <span className={`hidden h-9 w-9 shrink-0 place-items-center rounded-xl sm:grid ${node.flag ? 'bg-white' : 'bg-[#f3f4f5]'}`}>
          <Icon className={`h-[18px] w-[18px] ${node.flag ? 'text-tt-amber' : 'text-tt-ink'}`} aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-[12px] font-medium text-tt-muted">{node.label.slice(0, node.label.lastIndexOf(' '))}</span>
          <span className="block truncate font-mono text-[13px] font-semibold sm:text-[14px]">{node.label.slice(node.label.lastIndexOf(' ') + 1)}</span>
          <span className="block text-[12px] text-tt-muted sm:truncate sm:text-[13px]">{node.meta}</span>
        </span>
      </div>
      {node.children && (
        <ul role="group" className="relative ml-[14px] mt-2 space-y-2 border-l-2 border-tt-border pl-3 sm:ml-[22px] sm:pl-7">
          {node.children.map((c) => (
            <Branch key={c.id} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
