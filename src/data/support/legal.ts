import type { LegalDoc } from './types';

/**
 * Privacy Policy and Terms of Use — DRAFTS FOR LEGAL REVIEW.
 *
 * What was verified (21 October 2026) and used below:
 * - Hosting: www.tierratrace.in is served by Vercel over HTTPS with HSTS (response headers).
 * - The website's own code sets no cookies and uses no localStorage/sessionStorage (source inspection);
 *   no analytics or advertising scripts are loaded.
 * - Third-party request: Google Fonts (index.html). Google's Fonts privacy FAQ states the API does not set
 *   cookies and receives the IP address, requested URL and HTTP headers to serve fonts.
 * - Personal data collected: the Contact form (name, work email, company, role, industry, message) and the
 *   Support form (name, business email, organisation, category, product/module, subject, description,
 *   privacy acknowledgement), sent to /api/support and emailed to the team via Resend when configured.
 * - Company name shown on the site: "Namo Labs India"; contact email: info@namolabs.in.
 * Everything else is marked with a `review` block and listed in `checklist`.
 */

export const PRIVACY: LegalDoc = {
  title: 'Privacy Policy',
  summary: 'How Namo Labs handles personal information collected through the TierraTrace website.',
  status: 'draft',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      body: [
        { t: 'p', text: 'This policy explains what personal information we collect through the TierraTrace website at www.tierratrace.in, why we collect it, who we share it with and the choices available to you.' },
      ],
    },
    {
      id: 'who-we-are',
      title: '2. Who we are',
      body: [
        { t: 'p', text: 'The website is operated by Namo Labs, which develops TierraTrace. You can contact us at [info@namolabs.in](mailto:info@namolabs.in).' },
        { t: 'review', text: 'Full registered legal name of the entity responsible for the website (shown on the site as “Namo Labs India”), its registration number and registered address.' },
      ],
    },
    {
      id: 'scope',
      title: '3. Scope of this policy',
      body: [
        { t: 'p', text: 'This policy covers the public website only. It does not cover the TierraTrace platform provided to customers under contract; processing within the platform is governed by the agreements with each customer.' },
      ],
    },
    {
      id: 'collect',
      title: '4. Information we collect',
      body: [
        { t: 'p', text: 'We collect information you choose to give us through our forms or by email, and limited technical information needed to deliver the website.' },
      ],
    },
    {
      id: 'you-provide',
      title: '5. Information you provide',
      body: [
        {
          t: 'table',
          head: ['Where', 'Information'],
          rows: [
            ['Contact form', 'Full name, work email, company, role (optional), industry (optional) and your message.'],
            ['Support form', 'Full name, business email, organisation (optional), support category, product or module, subject, description, and your acknowledgement of this policy.'],
            ['Email to us', 'Whatever you include in your message, and your email address.'],
          ],
        },
        { t: 'p', text: 'Please do not send passwords, access credentials or sensitive personal information through these channels.' },
      ],
    },
    {
      id: 'technical',
      title: '6. Technical and usage information',
      body: [
        { t: 'p', text: 'When you visit the website, our hosting provider processes technical information needed to deliver pages, such as your IP address, browser type and the pages requested. When pages load fonts from Google Fonts, Google receives your IP address, the requested URL and browser headers in order to serve the fonts.' },
        { t: 'p', text: 'We do not use analytics or advertising tools on the website.' },
        { t: 'review', text: 'Hosting provider log contents and retention as configured for this project (Vercel), and whether any analytics are planned.' },
      ],
    },
    {
      id: 'cookies',
      title: '7. Cookies and similar technologies',
      body: [
        { t: 'p', text: 'The website’s own code does not set cookies and does not store information in your browser. According to Google, the Google Fonts service does not set cookies.' },
        { t: 'review', text: 'Whether the hosting provider may set security or bot-protection cookies for this deployment, and whether a cookie notice is required as a result.' },
      ],
    },
    {
      id: 'use',
      title: '8. How we use information',
      body: [
        { t: 'list', items: ['To respond to your enquiry, support request or pilot request.', 'To discuss and provide TierraTrace services you ask about.', 'To keep the website and our forms secure, including preventing spam and abuse.', 'To meet legal obligations.'] },
        { t: 'p', text: 'We do not sell personal information and do not use it for advertising.' },
      ],
    },
    {
      id: 'legal-bases',
      title: '9. Legal bases for processing, where applicable',
      body: [
        { t: 'p', text: 'Where data protection law requires a legal basis, we rely on the basis appropriate to each purpose — for example, your consent or your request when you submit a form, and our legitimate interest in securing the website.' },
        { t: 'review', text: 'Bases relied on under each applicable law, including India’s Digital Personal Data Protection Act, 2023 and, if the website targets or monitors people in the EU/EEA or UK, the GDPR or UK GDPR. Applicability depends on Namo Labs’ operations and must be confirmed by counsel.' },
      ],
    },
    {
      id: 'sharing',
      title: '10. How we share information',
      body: [
        { t: 'p', text: 'We share personal information only with service providers who help us run the website and respond to you, and where required by law.' },
      ],
    },
    {
      id: 'processors',
      title: '11. Service providers and processors',
      body: [
        {
          t: 'table',
          head: ['Provider', 'Purpose'],
          rows: [
            ['Vercel', 'Website hosting and the server function that receives form submissions.'],
            ['Resend', 'Delivering form submissions to our team by email, once configured.'],
            ['Google (Google Fonts)', 'Serving the fonts used on the website.'],
          ],
        },
        { t: 'review', text: 'Data processing agreements with each provider, and the email mailbox provider used to receive and store enquiries.' },
      ],
    },
    {
      id: 'transfers',
      title: '12. International data transfers, where applicable',
      body: [
        { t: 'p', text: 'Our service providers may process information in countries other than the one you are in, including outside India.' },
        { t: 'review', text: 'Processing locations for each provider and the safeguards relied on for cross-border transfers under applicable law.' },
      ],
    },
    {
      id: 'retention',
      title: '13. Data retention',
      body: [
        { t: 'p', text: 'We keep enquiries for as long as needed to respond and follow up, and then delete them, unless we need to keep them longer to meet a legal obligation.' },
        { t: 'review', text: 'Specific retention periods for enquiries, support requests and email correspondence.' },
      ],
    },
    {
      id: 'security',
      title: '14. Information security',
      body: [
        { t: 'p', text: 'The website is served over HTTPS. Form submissions are validated on the server and sent to our team; access to them is limited to people who need it.' },
        { t: 'review', text: 'Any further security measures to be described for enquiry handling (for example, mailbox access controls).' },
      ],
    },
    {
      id: 'rights',
      title: '15. Your privacy rights',
      body: [
        { t: 'p', text: 'Depending on the law that applies to you, you may have the right to obtain a summary of the personal data we hold about you, to have it corrected, completed, updated or erased, to withdraw consent, to have a grievance addressed, and to nominate someone to exercise your rights on your behalf. To exercise any right, email [info@namolabs.in](mailto:info@namolabs.in).' },
        { t: 'review', text: 'The rights that apply and the response process, confirmed by counsel for each applicable law.' },
      ],
    },
    {
      id: 'regional',
      title: '16. Region-specific privacy disclosures',
      body: [
        { t: 'p', text: '**India.** The Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 (notified in November 2025, with phased commencement) set out obligations for organisations processing digital personal data in India.' },
        { t: 'review', text: 'Which DPDP obligations are in effect on the policy’s effective date, the grievance officer or contact required, and any notice requirements.' },
        { t: 'p', text: '**Other regions.** If you are in another jurisdiction, additional rights may apply.' },
        { t: 'review', text: 'Whether EU/EEA, UK or other regional disclosures are required, based on the website’s audience and operations.' },
      ],
    },
    {
      id: 'children',
      title: '17. Children’s privacy',
      body: [{ t: 'p', text: 'The website is intended for business audiences and is not directed at children. We do not knowingly collect personal information from children.' }],
    },
    {
      id: 'links',
      title: '18. Third-party links',
      body: [{ t: 'p', text: 'The website links to external sites, such as official publications cited in Insights. Their privacy practices are their own; please review their policies.' }],
    },
    {
      id: 'changes',
      title: '19. Changes to this policy',
      body: [{ t: 'p', text: 'We will update this policy when our practices change and show the date of the latest version at the top of this page.' }],
    },
    {
      id: 'contact',
      title: '20. Contact information',
      body: [
        { t: 'p', text: 'Questions about this policy or your information: [info@namolabs.in](mailto:info@namolabs.in).' },
        { t: 'review', text: 'Postal address, and a named grievance officer or privacy contact if required.' },
      ],
    },
  ],
  checklist: [
    'Registered legal entity name, registration number and registered address.',
    'Effective date, to be set only on approval.',
    'Applicability of the DPDP Act, 2023 and Rules, 2025, and of GDPR/UK GDPR; legal bases for each purpose.',
    'Grievance officer or privacy contact, if required.',
    'Retention periods for enquiries and correspondence.',
    'Hosting (Vercel) log contents and retention; any security cookies set by the host.',
    'Data processing agreements with Vercel, Resend and the receiving mailbox provider; processing locations and transfer safeguards.',
    'Whether Google Fonts should be self-hosted to avoid sending visitor IP addresses to Google.',
  ],
};

export const TERMS: LegalDoc = {
  title: 'Terms of Use',
  summary: 'The terms that apply to using the public TierraTrace website.',
  status: 'draft',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      body: [{ t: 'p', text: 'These terms govern your use of the public TierraTrace website at www.tierratrace.in. They do not govern use of the TierraTrace platform, which is provided under a separate written agreement.' }],
    },
    {
      id: 'company',
      title: '2. Company information',
      body: [
        { t: 'p', text: 'The website is operated by Namo Labs. Contact: [info@namolabs.in](mailto:info@namolabs.in).' },
        { t: 'review', text: 'Contracting entity’s full legal name, registration details and registered address.' },
      ],
    },
    {
      id: 'acceptance',
      title: '3. Acceptance of terms',
      body: [{ t: 'p', text: 'By using the website you agree to these terms. If you do not agree, please do not use the website.' }],
    },
    {
      id: 'scope',
      title: '4. Scope of the website',
      body: [{ t: 'p', text: 'The website provides information about TierraTrace, research and analysis in Insights, help and documentation, and forms to contact us. Using the website does not create a customer relationship or give access to the TierraTrace platform.' }],
    },
    {
      id: 'use',
      title: '5. Website use',
      body: [{ t: 'p', text: 'You may browse the website and use its features for lawful purposes connected with learning about TierraTrace or contacting us.' }],
    },
    {
      id: 'permitted',
      title: '6. Permitted use',
      body: [{ t: 'list', items: ['Reading and sharing links to pages.', 'Printing or saving pages for your own internal reference.', 'Quoting short extracts with attribution and a link to the source page.'] }],
    },
    {
      id: 'prohibited',
      title: '7. Prohibited activities',
      body: [
        {
          t: 'list',
          items: [
            'Attempting to gain unauthorised access to the website, its server functions or related systems.',
            'Interfering with the website’s operation, including by automated high-volume requests.',
            'Submitting spam, malicious code or unlawful content through our forms.',
            'Misrepresenting your identity or affiliation.',
            'Copying substantial parts of the website for commercial use without permission.',
          ],
        },
      ],
    },
    {
      id: 'accounts',
      title: '8. Accounts and access, where applicable',
      body: [{ t: 'p', text: 'The website does not offer accounts. Access to the TierraTrace platform is governed by the agreement under which it is provided.' }],
    },
    {
      id: 'ip',
      title: '9. Intellectual property',
      body: [
        { t: 'p', text: 'TierraTrace and the TierraTrace logo are trademarks used by Namo Labs. Website content is owned by Namo Labs or used under licence. Some photographs are used under Creative Commons licences; credits and licences are listed in the website footer.' },
        { t: 'review', text: 'Trademark registration status for TierraTrace (the site uses the ™ symbol) and the precise ownership statement.' },
      ],
    },
    {
      id: 'submissions',
      title: '10. User-submitted information',
      body: [{ t: 'p', text: 'Information you send through our forms is used to respond to you, as described in our [Privacy Policy](/privacy). Please do not send confidential information through the website; we can agree a suitable channel for it.' }],
    },
    {
      id: 'product-info',
      title: '11. Product information and availability',
      body: [{ t: 'p', text: 'Product descriptions on the website are general information. Features, availability and terms are confirmed in a written agreement. Sample data, demos and examples on the website are illustrative. Research in Insights is general information, not legal advice, and using TierraTrace does not by itself ensure compliance with any law.' }],
    },
    {
      id: 'third-party',
      title: '12. Third-party services and links',
      body: [{ t: 'p', text: 'The website links to third-party websites and uses third-party services described in the Privacy Policy. We are not responsible for third-party content or practices.' }],
    },
    {
      id: 'availability',
      title: '13. Service changes and availability',
      body: [{ t: 'p', text: 'We may change, suspend or withdraw any part of the website. We aim to keep it available and accurate but do not promise uninterrupted availability or that content is always complete or current.' }],
    },
    {
      id: 'disclaimers',
      title: '14. Disclaimers',
      body: [
        { t: 'p', text: 'The website and its content are provided for general information.' },
        { t: 'review', text: 'Disclaimer wording, consistent with applicable law (including consumer protection law where relevant).' },
      ],
    },
    {
      id: 'liability',
      title: '15. Limitation of liability',
      body: [{ t: 'review', text: 'Limitation of liability clause, including any caps and exclusions, to be drafted by counsel for the governing law chosen.' }],
    },
    {
      id: 'indemnity',
      title: '16. Indemnification, where appropriate',
      body: [{ t: 'review', text: 'Whether an indemnity is appropriate for a public information website, and its wording.' }],
    },
    {
      id: 'suspension',
      title: '17. Suspension and termination',
      body: [{ t: 'p', text: 'We may restrict access to the website or our forms for anyone who breaches these terms or misuses the website.' }],
    },
    {
      id: 'privacy',
      title: '18. Privacy',
      body: [{ t: 'p', text: 'Our [Privacy Policy](/privacy) explains how we handle personal information collected through the website.' }],
    },
    {
      id: 'changes',
      title: '19. Changes to these terms',
      body: [{ t: 'p', text: 'We may update these terms. The date of the latest version will be shown at the top of this page; continued use after an update means you accept the updated terms.' }],
    },
    {
      id: 'law',
      title: '20. Governing law and dispute resolution',
      body: [{ t: 'review', text: 'Governing law, jurisdiction and any dispute-resolution mechanism, to be decided by Namo Labs with counsel.' }],
    },
    {
      id: 'contact',
      title: '21. Contact information',
      body: [
        { t: 'p', text: 'Questions about these terms: [info@namolabs.in](mailto:info@namolabs.in).' },
        { t: 'review', text: 'Postal address for legal notices.' },
      ],
    },
  ],
  checklist: [
    'Contracting entity’s legal name, registration details and address for notices.',
    'Effective date, to be set only on approval.',
    'Governing law, jurisdiction and dispute resolution.',
    'Disclaimer, limitation of liability and indemnity clauses.',
    'Trademark status of “TierraTrace”.',
    'Whether separate platform terms or customer agreements should be linked once available.',
  ],
};
