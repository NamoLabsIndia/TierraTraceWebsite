import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { Box, FileCheck2, FileText, Images, Link2, ShieldCheck, Table2, Waypoints } from 'lucide-react';
import { TRACE_LEDGER, type LedgerStage } from '../../../data/traceContent';
import { InView, Words } from '../../../lib/motion';
import './ledger.css';

const CAP_ICONS = [Box, FileCheck2, Waypoints, ShieldCheck];

/**
 * "Open any stage": a fictional jaggery lot followed across five stages. Selecting a stage opens its ledger
 * event, the evidence attached to it and the ledger reference. All values are illustrative sample data.
 */
export function EvidencePanel() {
  const t = TRACE_LEDGER;
  return (
    <section id={t.id} className="lg" aria-labelledby="lg-title">
      <div className="lg-copy">
        <InView as="p" className="lg-eyebrow m-rise">
          {t.eyebrow}
        </InView>
        <h2 id="lg-title" className="lg-title">
          <Words as="span" text={t.headline} className="lg-title-line" />
          <Words as="span" text={t.accent} className="lg-title-line lg-title-accent" delay={120} />
        </h2>
        <InView as="p" className="lg-body m-rise" delay={160}>
          {t.body}
        </InView>
        <InView as="ul" className="lg-caps m-stagger" delay={200}>
          {t.capabilities.map((c, i) => {
            const Icon = CAP_ICONS[i];
            return (
              <li key={c.title}>
                <Icon className="lg-cap-icon" strokeWidth={1.6} aria-hidden />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            );
          })}
        </InView>
      </div>

      <Explorer />
    </section>
  );
}

function Explorer() {
  const stages = TRACE_LEDGER.stages;
  const uid = useId();
  const [index, setIndex] = useState(1); // open on Processing, the stage with the most evidence
  const [evidenceId, setEvidenceId] = useState<string | null>(stages[1].evidence[0]?.id ?? null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[index];

  const select = (i: number, focus = false) => {
    setIndex(i);
    setEvidenceId(stages[i].evidence[0]?.id ?? null);
    const el = tabRefs.current[i];
    if (focus) el?.focus();
    // keep the chosen stage in view when the row scrolls (phones)
    el?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  };

  const onKey = (e: KeyboardEvent) => {
    const map: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: stages.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    select((map[e.key] + stages.length) % stages.length, true);
  };

  return (
    <div className="lg-vis" style={{ '--sel': index, '--count': stages.length } as CSSProperties}>
      <div className="lg-journey">
        <InView className="lg-stages m-stagger" role="tablist" aria-label="Supply-chain stages for the sample lot" onKeyDown={onKey}>
          {stages.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${s.id}`}
              aria-selected={i === index}
              aria-controls={`${uid}-panel`}
              tabIndex={i === index ? 0 : -1}
              className={`lg-stage ${i === index ? 'is-on' : ''}`}
              onClick={() => select(i)}
            >
              <span className="lg-stage-n">{s.n}</span>
              <span className="lg-stage-name">{s.name}</span>
              <span className="lg-stage-place">{s.place}</span>
              <span className="lg-stage-img">
                <img src={s.image.src} alt={s.image.alt} width={480} height={360} loading="lazy" decoding="async" />
              </span>
              <span className={`lg-stage-dot ${s.status === 'recorded' ? 'is-ok' : ''}`}>
                <span className="sr-only">{s.status === 'recorded' ? 'Event recorded' : 'No event recorded yet'}</span>
              </span>
            </button>
          ))}
        </InView>
        {/* the journey line: recorded portion in green, a marker at the selected stage */}
        <div className="lg-track" aria-hidden>
          <span className="lg-track-fill" />
          <span className="lg-track-marker" />
        </div>
        <span className="lg-link" aria-hidden />
      </div>

      <EventPanel stage={stage} panelId={`${uid}-panel`} labelledBy={`${uid}-tab-${stage.id}`} evidenceId={evidenceId} onEvidence={setEvidenceId} />

      <p className="lg-note">{TRACE_LEDGER.note}</p>
    </div>
  );
}

const EVIDENCE_ICONS: Record<string, typeof FileText> = { PDF: FileText, CSV: Table2 };

function EventPanel({
  stage,
  panelId,
  labelledBy,
  evidenceId,
  onEvidence,
}: {
  stage: LedgerStage;
  panelId: string;
  labelledBy: string;
  evidenceId: string | null;
  onEvidence: (id: string) => void;
}) {
  const t = TRACE_LEDGER;
  const ok = stage.status === 'recorded';
  const selected = stage.evidence.find((e) => e.id === evidenceId) ?? null;

  return (
    <InView as="div" className="lg-panel m-rise" delay={160}>
      <div id={panelId} role="tabpanel" aria-labelledby={labelledBy}>
        <div key={stage.id} className="lg-panel-in">
          <div className="lg-panel-head">
            <div>
              <p className="lg-kicker">Stage · {stage.name}</p>
              <p className="lg-lot">{t.lot}</p>
            </div>
            <span className={`lg-chip ${ok ? 'is-ok' : ''}`}>
              <i aria-hidden />
              {ok ? 'Integrity check passed' : 'No ledger record yet'}
            </span>
          </div>

          <div className="lg-panel-grid">
            <dl className="lg-fields">
              <Field label="Event" value={stage.event} />
              <Field label="Organisation" value={stage.organisation} />
              <Field label="Date & time" value={stage.time} note={ok ? 'Sample data' : undefined} />
              <Field label="Transaction ref." value={stage.txRef} mono={ok} />
              <Field
                label="Evidence"
                value={ok ? `${stage.evidence.length} documents linked` : 'None attached'}
              />
              <Field
                label="Record integrity"
                value={ok ? 'Evidence hashes match the ledger record' : 'Nothing to verify until the event is recorded'}
                status={ok ? 'ok' : 'pending'}
              />
            </dl>

            <div className="lg-evidence">
              <p className="lg-sub">Evidence</p>
              {stage.evidence.length ? (
                <>
                  <ul>
                    {stage.evidence.map((e) => {
                      const Icon = EVIDENCE_ICONS[e.type] ?? Images;
                      const on = e.id === selected?.id;
                      return (
                        <li key={e.id}>
                          <button type="button" className={on ? 'is-on' : ''} aria-pressed={on} onClick={() => onEvidence(e.id)}>
                            <Icon className="lg-ev-icon" strokeWidth={1.6} aria-hidden />
                            <span>
                              <b>{e.name}</b>
                              <small>{e.type}</small>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  {selected && (
                    <div key={selected.id} className="lg-ev-detail">
                      <p>
                        <span>Linked to</span> {selected.linkedTo}
                      </p>
                      <p>
                        <span>Document hash</span> <code>{selected.hash}</code>
                      </p>
                      <p>
                        <span>Anchored in</span> <code>{stage.eventId}</code>
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="lg-empty">No evidence attached yet. It will appear here once the store records receipt.</p>
              )}
            </div>
          </div>

          <div className="lg-ledger">
            <span className="lg-ledger-link" aria-hidden />
            <p className="lg-sub">
              <Link2 className="h-3.5 w-3.5" aria-hidden /> Ledger record
            </p>
            <dl>
              <div>
                <dt>Ledger</dt>
                <dd>{t.ledger}</dd>
              </div>
              <div>
                <dt>Block</dt>
                <dd className="is-mono">{stage.block}</dd>
              </div>
              <div>
                <dt>Event ID</dt>
                <dd className="is-mono">{stage.eventId}</dd>
              </div>
              <div>
                <dt>Evidence refs</dt>
                <dd>{ok ? `${stage.evidence.length} document hashes` : '—'}</dd>
              </div>
              <div>
                <dt>Verification</dt>
                <dd className={ok ? 'is-ok' : ''}>{ok ? 'References match' : 'Pending'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </InView>
  );
}

function Field({
  label,
  value,
  note,
  mono,
  status,
}: {
  label: string;
  value: string;
  note?: string;
  mono?: boolean;
  status?: 'ok' | 'pending';
}) {
  return (
    <div className="lg-field">
      <dt>{label}</dt>
      <dd className={mono ? 'is-mono' : ''}>
        {status && <i className={`lg-dot ${status === 'ok' ? 'is-ok' : ''}`} aria-hidden />}
        {value}
        {note && <em>{note}</em>}
      </dd>
    </div>
  );
}
