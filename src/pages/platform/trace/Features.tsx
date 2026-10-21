import type { CSSProperties, ReactNode } from "react";
import { Braces, Check, FileSpreadsheet, FileText } from "lucide-react";
import { TRACE_FEATURES } from "../../../data/traceContent";
import { InView, Words } from "../../../lib/motion";
import "./features.css";

const VISUALS: Record<string, () => ReactNode> = {
  stages: StagesVisual,
  gaps: GapsVisual,
  splits: SplitsVisual,
  mass: MassVisual,
  custody: CustodyVisual,
  exports: ExportsVisual,
};

/** "Built for real supply chains": six capability cards, each with a small illustrative interface. */
export function Features() {
  const f = TRACE_FEATURES;
  return (
    <section className="ft6" aria-labelledby="ft6-title">
      <div className="ft6-head">
        <InView as="p" className="ft6-eyebrow m-rise">
          {f.eyebrow}
        </InView>
        <h2 id="ft6-title" className="ft6-title">
          <Words as="span" text={f.headline} />{" "}
          <Words as="span" text={f.accent} className="ft6-accent" delay={140} />
        </h2>
      </div>

      <ul className="ft6-grid">
        {f.cards.map((c, i) => {
          const Visual = VISUALS[c.id];
          return (
            <InView
              as="li"
              key={c.id}
              className="ft6-cell m-rise"
              delay={(i % 3) * 80 + Math.floor(i / 3) * 60}
            >
              <article className="ft6-card">
                <div className="ft6-text">
                  <span className="ft6-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
                <div
                  className={`ft6-vis ${c.image ? "has-photo" : ""}`}
                  aria-hidden
                >
                  {c.image && (
                    <img
                      className="ft6-photo"
                      src={c.image.src}
                      alt={c.image.alt}
                      loading="lazy"
                      decoding="async"
                      style={
                        { objectPosition: c.image.position } as CSSProperties
                      }
                    />
                  )}
                  <div className="ft6-ui">
                    <Visual />
                  </div>
                </div>
              </article>
            </InView>
          );
        })}
      </ul>
      <p className="ft6-note">{f.note}</p>
    </section>
  );
}

/* ---------- card visuals ---------- */

function StagesVisual() {
  return (
    <ol className="ft6-panel ft6-stages">
      {TRACE_FEATURES.stages.map((s, i) => (
        <li key={s} className={i === 0 ? "is-on" : ""}>
          <i />
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function GapsVisual() {
  return (
    <ul className="ft6-panel ft6-gaps">
      {TRACE_FEATURES.gaps.map((g) => (
        <li key={g.stage} className={`is-${g.state}`}>
          <i>{g.state === "ok" && <Check strokeWidth={3} />}</i>
          <span>
            {g.stage}
            <small>{g.label}</small>
          </span>
        </li>
      ))}
    </ul>
  );
}

function SplitsVisual() {
  const s = TRACE_FEATURES.split;
  return (
    <div className="ft6-split">
      <svg
        className="ft6-split-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M50 30 V 46 H 26 V 62" />
        <path d="M50 46 H 74 V 62" />
      </svg>
      <span className="ft6-lot is-parent">
        <b>{s.parent.id}</b>
        {s.parent.qty}
      </span>
      {s.children.map((c, i) => (
        <span key={c.id} className={`ft6-lot is-child is-${i}`}>
          <b>{c.id}</b>
          {c.qty}
        </span>
      ))}
    </div>
  );
}

function MassVisual() {
  const m = TRACE_FEATURES.mass;
  return (
    <div className="ft6-panel ft6-mass">
      <p className="ft6-mass-head">
        <b>Mass balance</b>
        <span>Within tolerance</span>
      </p>
      <dl>
        <div>
          <dt>Input</dt>
          <dd>{m.input}</dd>
        </div>
        <div>
          <dt>Output</dt>
          <dd>{m.output}</dd>
        </div>
        <div>
          <dt>Variance</dt>
          <dd>
            {m.variance}
            <small>max {m.tolerance}</small>
          </dd>
        </div>
      </dl>
      <span
        className="ft6-bar"
        style={{ "--fill": `${m.fill}%` } as CSSProperties}
      >
        <i />
      </span>
    </div>
  );
}

function CustodyVisual() {
  return (
    <ol className="ft6-panel ft6-custody">
      {TRACE_FEATURES.custody.map((c) => (
        <li key={c.label} className={c.done ? "is-done" : ""}>
          <i />
          <span>{c.label}</span>
        </li>
      ))}
    </ol>
  );
}

const EXPORT_ICONS = [FileSpreadsheet, Braces, FileText];

function ExportsVisual() {
  const f = TRACE_FEATURES;
  return (
    <div className="ft6-exports">
      <ul className="ft6-panel">
        {f.exports.map((e, i) => {
          const Icon = EXPORT_ICONS[i];
          return (
            <li key={e}>
              <Icon strokeWidth={1.7} />
              <span>Export as {e}</span>
            </li>
          );
        })}
      </ul>
      <div className="ft6-panel ft6-evidence">
        <small>Attached evidence</small>
        <span className="ft6-thumbs">
          <span className="ft6-doc">
            <i />
            <i />
            <i />
          </span>
          {f.evidenceThumbs.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </span>
      </div>
    </div>
  );
}
