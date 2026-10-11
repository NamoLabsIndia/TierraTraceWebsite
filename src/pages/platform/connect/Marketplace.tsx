import { useState } from 'react';
import { ArrowRight, Cloud, Cpu } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { DemoCard } from '../../../components/product';

/* GA catalogue — 19 connector blueprints (web-connect PRD §8.4). */
type BP = { name: string; vendor: string; cat: string; beta?: boolean; grade: 'A' | 'B'; edge?: boolean };
export const BLUEPRINTS: BP[] = [
  { name: 'SAP S/4HANA', vendor: 'SAP', cat: 'ERP', grade: 'A' },
  { name: 'Oracle Fusion Cloud', vendor: 'Oracle', cat: 'ERP', grade: 'A' },
  { name: 'Microsoft Dynamics 365', vendor: 'Microsoft', cat: 'ERP', grade: 'A' },
  { name: 'OPC UA Server', vendor: 'OPC Foundation', cat: 'Manufacturing', grade: 'A', edge: true },
  { name: 'MQTT Broker', vendor: 'OASIS', cat: 'IoT & Edge', grade: 'A', edge: true },
  { name: 'Barcode Scan Station', vendor: 'TierraTrace Edge', cat: 'IoT & Edge', beta: true, grade: 'B', edge: true },
  { name: 'RFID Reader (LLRP)', vendor: 'TierraTrace Edge', cat: 'IoT & Edge', beta: true, grade: 'B', edge: true },
  { name: 'Apache Kafka', vendor: 'Apache', cat: 'Messaging', grade: 'A' },
  { name: 'RabbitMQ / AMQP', vendor: 'VMware', cat: 'Messaging', grade: 'A' },
  { name: 'AWS EventBridge', vendor: 'Amazon', cat: 'Cloud Events', grade: 'A' },
  { name: 'Azure Event Hubs', vendor: 'Microsoft', cat: 'Cloud Events', grade: 'A' },
  { name: 'CSV / Excel Import', vendor: 'TierraTrace', cat: 'Files', grade: 'B' },
  { name: 'SFTP File Transfer', vendor: 'TierraTrace', cat: 'Files', grade: 'A' },
  { name: 'PostgreSQL CDC', vendor: 'PostgreSQL', cat: 'Files', beta: true, grade: 'B' },
  { name: 'Email Ingest (IMAP)', vendor: 'TierraTrace', cat: 'Files', beta: true, grade: 'B' },
  { name: 'REST API (Generic)', vendor: 'Generic', cat: 'API', grade: 'A' },
  { name: 'GraphQL API', vendor: 'Generic', cat: 'API', grade: 'A' },
  { name: 'SOAP Web Service', vendor: 'Generic', cat: 'API', grade: 'B' },
  { name: 'Inbound Webhook', vendor: 'TierraTrace', cat: 'API', grade: 'B' },
];
const CATS = ['All', 'ERP', 'Manufacturing', 'IoT & Edge', 'Messaging', 'Cloud Events', 'Files', 'API'];

export function Marketplace() {
  const [cat, setCat] = useState('ERP');
  const list = BLUEPRINTS.filter((b) => cat === 'All' || b.cat === cat).slice(0, 6);
  const count = BLUEPRINTS.filter((b) => cat === 'All' || b.cat === cat).length;

  return (
    <DemoCard label="Connector marketplace">
      <div className="flex items-center justify-between border-b border-tt-border px-5 py-4 sm:px-6">
        <img src={logo} alt="" className="h-7 w-auto" />
        <span className="text-[12px] font-medium text-tt-muted">19 blueprints · Marketplace</span>
      </div>
      <div className="overflow-x-auto px-5 pt-4 [scrollbar-width:none] sm:px-6">
        <div role="tablist" aria-label="Category" className="flex w-max gap-1.5">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`tt-press whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                cat === c ? 'bg-tt-ink text-white' : 'bg-[#f3f4f5] text-tt-muted hover:text-tt-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <ul key={cat} className="tt-swap-enter grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-2 sm:px-6">
        {list.map((b) => (
          <li key={b.name} className="group rounded-2xl border border-tt-border p-3.5 transition-colors duration-200 hover:border-tt-green/40">
            <div className="flex items-start justify-between gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#f3f4f5] text-[13px] font-bold">
                {b.name.slice(0, 2).toUpperCase()}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  b.beta ? 'bg-tt-amber-50 text-tt-amber' : 'bg-tt-green-50 text-tt-green-ink'
                }`}
              >
                {b.beta ? 'Beta' : 'GA'}
              </span>
            </div>
            <p className="mt-2.5 text-[14px] font-semibold leading-tight">{b.name}</p>
            <p className="mt-0.5 text-[12px] text-tt-muted">
              {b.vendor} · {b.cat}
            </p>
            <div className="mt-2.5 flex items-center justify-between text-[11px]">
              <span className="inline-flex items-center gap-1 text-tt-muted">
                {b.edge ? <Cpu className="h-3 w-3" aria-hidden /> : <Cloud className="h-3 w-3" aria-hidden />}
                {b.edge ? 'Edge agent' : 'Cloud gateway'} · Security {b.grade}
              </span>
              <span className="inline-flex items-center gap-0.5 font-semibold text-tt-green-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Configure <ArrowRight className="h-3 w-3" aria-hidden />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {count > 6 && <p className="px-6 pb-4 text-[12px] text-tt-muted">+{count - 6} more in this category</p>}
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-tt-border bg-[#fafbfa] px-5 py-3 text-[11px] text-tt-muted sm:px-6">
        <span className="inline-flex items-center gap-1.5 font-semibold text-tt-green-ink">
          <span className="tt-pulse h-1.5 w-1.5 rounded-full bg-tt-green" /> All integration services operational
        </span>
        <span>gateway 38ms</span>
        <span>edge agents 3/3</span>
      </figcaption>
    </DemoCard>
  );
}
