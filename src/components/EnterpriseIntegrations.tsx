import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import logoUrl from '../assets/logo.png';

// --- DATA ---
const integrationCards = [
  { id: 1, logo: 'sap', title: 'SAP S/4HANA', category: 'ERP', badge: 'Certified Connector' },
  { id: 2, logo: 'oracle', title: 'Oracle Fusion', category: 'ERP', badge: 'Native Integration' },
  { id: 3, logo: 'microsoft', title: 'Microsoft Dynamics', category: 'ERP', badge: 'Verified' },
  { id: 4, logo: 'siemens', title: 'Siemens Opcenter', category: 'MES', badge: 'Industrial Ready' },
  { id: 5, logo: 'salesforce', title: 'Salesforce', category: 'CRM', badge: 'Certified' },
  { id: 6, logo: 'servicenow', title: 'ServiceNow', category: 'ITSM', badge: 'Supported' },
  { id: 7, logo: 'snowflake', title: 'Snowflake', category: 'Data Warehouse', badge: 'Native' },
  { id: 8, logo: 'databricks', title: 'Databricks', category: 'Lakehouse', badge: 'Supported' },
];

// Reusable animated reveal wrapper
const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export function EnterpriseIntegrations() {
  const [pulse, setPulse] = useState(0);

  // Trigger pulse animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="integrations" className="relative w-full bg-white overflow-hidden font-sans">
      
      {/* Very faint dotted enterprise grid behind everything */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-[80px] py-[80px] lg:py-[120px]">
        
        {/* TOP SECTION: Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* LEFT SIDE (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col items-start z-30">
            


            <Reveal delay={0.1}>
              <h2 className="text-[52px] md:text-[76px] font-extrabold leading-[1.1] text-black tracking-tight">
                Meets your stack<br />
                <span className="text-[#16C15F]">where it lives.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[20px] md:text-[22px] leading-[1.6] md:leading-[36px] text-[#666666] max-w-[560px] mt-[32px]">
                Connect ERP, MES, PLM, WMS, CRM, IoT and enterprise data platforms through secure APIs, event streams and industry-standard connectors without replacing existing infrastructure.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="flex flex-col sm:flex-row items-center gap-[20px] mt-[48px] w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 h-[64px] px-[32px] rounded-full bg-black text-white font-semibold text-[16px] hover:bg-gray-900 transition-colors shadow-lg w-full sm:w-auto group">
                Talk to Integration Experts 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center gap-2 h-[64px] px-[32px] rounded-full bg-white border border-[#E6E6E6] text-black font-semibold text-[16px] hover:bg-gray-50 transition-colors w-full sm:w-auto">
                View API Documentation
              </button>
            </Reveal>
            
          </div>

          {/* RIGHT SIDE (60%) */}
          <div className="relative w-full lg:w-[500px] xl:w-[550px] shrink-0 mt-16 lg:mt-0 lg:pl-12 flex flex-col justify-center lg:h-[800px]">
            
            {/* Center Node */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mx-auto mb-8 lg:mb-0 z-30 w-[220px] h-[220px] rounded-full bg-white border border-[#EEEEEE] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-6"
            >
              <img src={logoUrl} alt="TierraTrace Logo" className="h-14 w-auto object-contain mb-3" />
              <div className="text-center">
                <div className="text-[18px] font-bold text-[#16C15F] leading-tight">TierraTrace</div>
                <div className="text-[13px] font-medium text-gray-500 mt-0.5">Integration Layer</div>
              </div>
              
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-full border border-[#16C15F]/20 scale-[1.15]" />
              <div className="absolute inset-0 rounded-full border border-[#16C15F]/10 scale-[1.3]" />
            </motion.div>

            {/* SVG Connection Lines */}
            {/* Because the container is relative to its own size, we use absolute exact coordinates for the 10 paths. */}
            {/* The right side container is effectively w-[100%] h-[800px]. Center is at (50%, 50%). */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block" preserveAspectRatio="none">
                 <g stroke="#16C15F" strokeWidth="2" fill="none" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round">
                   {/* Top Left (SAP) */}
                   <path d="M 50% 50% L 20% 12%" />
                   {/* Top Center (Oracle) */}
                   <path d="M 50% 50% L 50% 5%" />
                   {/* Top Right (Microsoft) */}
                   <path d="M 50% 50% L 80% 12%" />
                   
                   {/* Middle Top Left (Siemens) */}
                   <path d="M 50% 50% L 10% 32%" />
                   {/* Middle Top Right (Salesforce) */}
                   <path d="M 50% 50% L 90% 32%" />
                   
                   {/* Bottom Left (Snowflake) */}
                   <path d="M 50% 50% L 10% 60%" />
                   {/* Bottom Right (ServiceNow) */}
                   <path d="M 50% 50% L 90% 60%" />
                   
                   {/* Bottom Center (Databricks) */}
                   <path d="M 50% 50% L 50% 85%" />
                 </g>
                 
                 {/* Pulse animations */}
                 <g>
                    {[
                      "M 20% 12% L 50% 50%", "M 50% 5% L 50% 50%", "M 80% 12% L 50% 50%",
                      "M 10% 32% L 50% 50%", "M 90% 32% L 50% 50%",
                      "M 10% 60% L 50% 50%", "M 90% 60% L 50% 50%",
                      "M 50% 85% L 50% 50%"
                    ].map((path, i) => (
                      <motion.circle
                        key={`${i}-${pulse}`}
                        r="3"
                        fill="#16C15F"
                        initial={{ offsetDistance: "0%", opacity: 0 }}
                        animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2, delay: i * 0.3 + (Math.random() * 0.5), ease: "easeInOut" }}
                        style={{ offsetPath: `path('${path}')` } as any}
                      />
                    ))}
                 </g>
            </svg>

            {/* Integration Cards */}
            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
              {/* Top Row */}
              <IntegrationCard data={integrationCards[0]} delay={0.5} className="absolute top-[5%] left-[20%] -translate-x-1/2 -translate-y-1/2" />
              <IntegrationCard data={integrationCards[1]} delay={0.6} className="absolute top-[1%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
              <IntegrationCard data={integrationCards[2]} delay={0.7} className="absolute top-[5%] left-[80%] -translate-x-1/2 -translate-y-1/2" />
              
              {/* Middle Top Row */}
              <IntegrationCard data={integrationCards[3]} delay={0.8} className="absolute top-[30%] left-[10%] -translate-x-1/2 -translate-y-1/2" />
              <IntegrationCard data={integrationCards[4]} delay={0.9} className="absolute top-[30%] left-[90%] -translate-x-1/2 -translate-y-1/2" />
              
              {/* Middle Bottom Row */}
              <IntegrationCard data={integrationCards[6]} delay={1.0} className="absolute top-[60%] left-[10%] -translate-x-1/2 -translate-y-1/2" />
              <IntegrationCard data={integrationCards[5]} delay={1.1} className="absolute top-[60%] left-[90%] -translate-x-1/2 -translate-y-1/2" />
              
              {/* Bottom Row */}
              <IntegrationCard data={integrationCards[7]} delay={1.2} className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Mobile / Tablet fallback for Cards (Stack) */}
            <div className="relative w-full z-20 flex lg:hidden flex-col gap-4 overflow-y-auto py-10 px-4 items-center mask-image-fade">
               {integrationCards.map((card, i) => (
                 <IntegrationCard key={card.id} data={card} delay={0.2 + (i*0.1)} className="relative w-full! max-w-[300px]" />
               ))}
            </div>

          </div>

        </div>

        {/* BOTTOM STRIP */}
        <Reveal delay={0.6} className="mt-[80px] lg:mt-0 z-30 relative">
          <div className="bg-white rounded-[30px] border border-[#ECECEC] p-[40px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#ECECEC]">
            
            <BottomFeature 
              icon={<Shield className="w-8 h-8 text-[#16C15F]" strokeWidth={1.5} />}
              title="Zero ERP Replacement"
              desc="Works alongside existing infrastructure."
            />
            
            <BottomFeature 
              icon={<Zap className="w-8 h-8 text-[#16C15F]" strokeWidth={1.5} />}
              title="Event-Driven Architecture"
              desc="Kafka, Webhooks, EPCIS 2.0 and more."
            />
            
            <BottomFeature 
              icon={<Lock className="w-8 h-8 text-[#16C15F]" strokeWidth={1.5} />}
              title="Enterprise Security"
              desc="OAuth2, JWT, TLS 1.3, mTLS and role-based access."
            />
            
            <BottomFeature 
              icon={<Globe className="w-8 h-8 text-[#16C15F]" strokeWidth={1.5} />}
              title="Global Standards"
              desc="GS1, W3C DPP, EPCIS, ISO 27001 and more."
            />

          </div>
        </Reveal>

      </div>
    </section>
  );
}

// Subcomponent: Individual Integration Card
function IntegrationCard({ data, delay, className = '' }: { data: any, delay: number, className?: string }) {
  
  const renderLogo = () => {
    if (data.logo === 'rest') {
      return <div className="text-[20px] font-mono font-bold tracking-tight text-black">{`{ REST API }`}</div>;
    }
    if (data.logo === 'grpc') {
      return <div className="text-[22px] font-bold text-black tracking-tighter">gRPC.</div>;
    }
    return (
      <img 
        src={`https://cdn.simpleicons.org/${data.logo}/000000`} 
        alt={data.title}
        className="h-7 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-110 opacity-90"
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -12 }}
      className={`group pointer-events-auto w-[250px] h-[135px] bg-white rounded-[28px] border border-black/5 p-[24px] shadow-sm hover:shadow-xl hover:border-[#16C15F]/30 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="h-8 mb-3 flex items-center">
          {renderLogo()}
        </div>
        <h4 className="text-[17px] font-bold text-black leading-tight truncate">{data.title}</h4>
        <div className="text-[13px] text-[#777777] font-medium truncate mt-0.5">{data.category}</div>
      </div>
      
      <div className="flex items-center gap-1.5 mt-auto">
        <CheckCircle2 className="w-[14px] h-[14px] text-[#16C15F] group-hover:drop-shadow-[0_0_4px_rgba(22,193,95,0.5)] transition-all" />
        <span className="text-[12px] font-semibold text-gray-800">{data.badge}</span>
      </div>
    </motion.div>
  );
}

// Subcomponent: Bottom Feature Column
function BottomFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 lg:px-8 first:pl-0">
      <div className="shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-[17px] font-bold text-black mb-1.5 leading-tight">{title}</h4>
        <p className="text-[14px] text-gray-500 leading-normal">{desc}</p>
      </div>
    </div>
  );
}
