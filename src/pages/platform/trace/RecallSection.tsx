import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Building2,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  GitFork,
  Home,
  Layers,
  Search,
  Settings,
  ShieldCheck,
  Shirt,
  Package,
  Plug,
  Sparkles,
  Sprout,
  Truck,
  TriangleAlert,
  Users,
  Waypoints,
  BookOpen,
  BarChart3,
  Leaf,
} from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { TRACE_RECALL, type RecallNode } from '../../../data/traceContent';
import { InView, Words } from '../../../lib/motion';
import './recall.css';

const FEATURE_ICONS = [Search, Users, FileText];

/** "Recall in seconds": a flagged supplier lot traced downstream, shown in a laptop running Trace. */
export function RecallSection() {
  const r = TRACE_RECALL;
  return (
    <section id={r.id} className="rc scroll-mt-28" aria-labelledby="rc-title">
      <div className="rc-copy">
        <InView as="p" className="rc-eyebrow m-rise">
          {r.eyebrow}
        </InView>
        <h2 id="rc-title" className="rc-title">
          <Words as="span" text={r.headline} className="rc-line" />
          <Words as="span" text={r.accent} className="rc-line rc-accent" delay={140} />
        </h2>
        <InView as="p" className="rc-body m-rise" delay={160}>
          {r.body}
        </InView>
        <InView as="ul" className="rc-features m-stagger" delay={220}>
          {r.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <li key={f.title}>
                <span className="rc-feature-icon">
                  <Icon strokeWidth={1.7} aria-hidden />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </li>
            );
          })}
        </InView>
      </div>

      <InView as="figure" className="rc-device m-rise" delay={200}>
        <div className="rc-lid">
          <span className="rc-cam" aria-hidden />
          <div className="rc-screen">
            <TraceApp />
          </div>
        </div>
        <div className="rc-base" aria-hidden>
          <span className="rc-notch" />
        </div>
        <figcaption className="rc-note">{r.note}</figcaption>
      </InView>
    </section>
  );
}

/* ---------- the Trace app shown on screen ---------- */

const NAV_ICONS = [Home, BookOpen, Waypoints, Leaf, ShieldCheck, BarChart3, Sparkles, Plug];
const METRIC_ICONS = [Shirt, Package, Truck, Users];
const ACTION_ICONS = [Users, Truck, FileText];

function TraceApp() {
  const a = TRACE_RECALL.app;
  return (
    <div className="rc-app">
      <aside className="rc-side" aria-hidden>
        <img src={logo} alt="" width={360} height={163} />
        <ul>
          {a.nav.map((n, i) => {
            const Icon = NAV_ICONS[i];
            return (
              <li key={n} className={n === 'Trace' ? 'is-on' : ''}>
                <Icon strokeWidth={1.7} />
                {n}
              </li>
            );
          })}
        </ul>
        <p className="rc-side-foot">
          <Settings strokeWidth={1.7} /> Settings
        </p>
      </aside>

      <div className="rc-top" aria-hidden>
        <img className="rc-top-logo" src={logo} alt="" width={360} height={163} />
        <span className="rc-search">
          <Search strokeWidth={1.8} /> Search lot, product, supplier…
        </span>
        <span className="rc-ws">
          <Building2 strokeWidth={1.7} /> {a.workspace} <ChevronDown strokeWidth={1.8} />
        </span>
      </div>

      <main className="rc-main">
        <p className="rc-back" aria-hidden>
          <ArrowLeft strokeWidth={1.8} /> Back to search
        </p>
        <div className="rc-main-head">
          <div>
            <p className="rc-h">Lot lineage</p>
            <p className="rc-sub">Trace the complete journey and see the downstream impact.</p>
          </div>
          <span className="rc-run" aria-hidden>
            <GitFork strokeWidth={1.8} /> Run impact analysis
          </span>
        </div>

        <div className="rc-lot">
          <img src={a.lot.image} alt="Raw cotton bolls" width={240} height={240} loading="lazy" decoding="async" />
          <div className="rc-lot-id">
            <small>Supplier lot</small>
            <b>{a.lot.id}</b>
            <span>{a.lot.meta}</span>
          </div>
          <div className="rc-lot-col">
            <small>Status</small>
            <span className="rc-issue">
              <TriangleAlert strokeWidth={2} aria-hidden /> Quality issue
            </span>
          </div>
          <div className="rc-lot-col">
            <small>Impact</small>
            <b>{a.impact.units}</b>
            <span>{a.impact.across}</span>
          </div>
        </div>

        <div className="rc-tabs" aria-hidden>
          {a.tabs.map((t, i) => (
            <span key={t} className={i === 0 ? 'is-on' : ''}>
              {t}
            </span>
          ))}
          <span className="rc-view">
            Tree view <ChevronDown strokeWidth={1.8} />
          </span>
        </div>

        <Genealogy />
      </main>

      <aside className="rc-summary" aria-label="Impact summary for the flagged lot">
        <p className="rc-sum-h">Impact summary</p>
        <ul className="rc-metrics">
          {a.metrics.map((m, i) => {
            const Icon = METRIC_ICONS[i];
            return (
              <li key={m.label}>
                <Icon strokeWidth={1.7} aria-hidden />
                <span>
                  <b>{m.value}</b>
                  <small>{m.label}</small>
                </span>
              </li>
            );
          })}
        </ul>
        <span className="rc-export" aria-hidden>
          <Download strokeWidth={1.9} /> Export impact set
        </span>
        <p className="rc-sum-h rc-sum-h--sm">Quick actions</p>
        <ul className="rc-actions" aria-hidden>
          {a.actions.map((x, i) => {
            const Icon = ACTION_ICONS[i];
            return (
              <li key={x}>
                <Icon strokeWidth={1.7} />
                <span>{x}</span>
                <ChevronRight strokeWidth={1.8} />
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

/* ---------- genealogy tree ---------- */

const KIND_ICONS = { raw: Sprout, yarn: Layers, garment: Shirt } as const;

/** ids on the path through `sel`: its ancestors, itself and everything downstream of it */
function pathThrough(root: RecallNode, sel: string) {
  const out = new Set<string>();
  const addAll = (n: RecallNode) => {
    out.add(n.id);
    n.children?.forEach(addAll);
  };
  const walk = (n: RecallNode, trail: string[]): boolean => {
    if (n.id === sel) {
      trail.forEach((t) => out.add(t));
      addAll(n);
      return true;
    }
    return !!n.children?.some((c) => walk(c, [...trail, n.id]));
  };
  walk(root, []);
  return out;
}

function Genealogy() {
  const root = TRACE_RECALL.tree;
  const [sel, setSel] = useState(root.id);
  const path = useMemo(() => pathThrough(root, sel), [root, sel]);

  const renderNode = (n: RecallNode, parentOn: boolean) => {
    const on = path.has(n.id);
    const Icon = KIND_ICONS[n.kind];
    return (
      <li key={n.id} className={`rc-branch ${on && parentOn ? 'is-path' : ''}`}>
        <button
          type="button"
          className={`rc-node is-${n.kind} ${on ? 'is-on' : 'is-dim'} ${n.id === sel ? 'is-sel' : ''}`}
          aria-pressed={n.id === sel}
          onClick={() => setSel(n.id)}
        >
          <span className="rc-node-icon">
            <Icon strokeWidth={1.7} aria-hidden />
          </span>
          <span className="rc-node-text">
            <b>{n.id}</b>
            <small>{n.qty}</small>
          </span>
          {n.flag && <span className="rc-flag" aria-label="Flagged by supplier" />}
        </button>
        {n.children && <ul>{n.children.map((c) => renderNode(c, on))}</ul>}
      </li>
    );
  };

  return (
    <div className="rc-tree-wrap">
      <ul className="rc-tree" aria-label="Lot genealogy: select a lot to highlight its path">
        {renderNode(root, true)}
      </ul>
    </div>
  );
}
