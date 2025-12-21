// GxPify Data - Mock data for the audit services website

export interface AuditService {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

// Audit Services Data
export const auditServices: AuditService[] = [
  {
    id: 'glp-gcp',
    title: 'GLP / GCP Audits',
    description: 'Laboratory and clinical site audits ensuring regulatory compliance for preclinical and clinical research.',
    icon: 'Flask',
    href: '/audits/glp-gcp'
  },
  {
    id: 'gmp',
    title: 'GMP Audits',
    description: 'Comprehensive manufacturing audits for pharmaceuticals, biologics, and medical devices.',
    icon: 'Factory',
    href: '/audits/gmp'
  },
  {
    id: 'vendor',
    title: 'Vendor & Supply Chain',
    description: 'Thorough supplier qualification and ongoing monitoring across your supply network.',
    icon: 'Truck',
    href: '/audits/vendor'
  },
  {
    id: 'gdp',
    title: 'GDP Audits',
    description: 'Distribution and logistics audits ensuring product integrity throughout the supply chain.',
    icon: 'Package',
    href: '/audits/gdp'
  },
  {
    id: 'gpvp',
    title: 'GPvP Audits',
    description: 'Pharmacovigilance system audits for MAHs and service providers worldwide.',
    icon: 'Shield',
    href: '/audits/gpvp'
  },
  {
    id: 'specialized',
    title: 'Specialized Audits',
    description: 'Packaging, regulatory gap assessments, and inspection readiness audits.',
    icon: 'ClipboardCheck',
    href: '/audits/specialized'
  }
];

// Global Coverage Countries
export const globalCoverageCountries = [
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
  { name: 'Germany / EU', code: 'EU', flag: '🇪🇺' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
];

// ASEAN Delivery Regions
export const aseanRegions = [
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬' },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾' },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳' },
];

// FAQs
export const faqs: FAQItem[] = [
  // General Audit FAQs
  {
    question: 'What type of audits does GxPify conduct?',
    answer: 'GxPify conducts independent GxP audits across the pharmaceutical and life sciences value chain, including GLP, GCP, GMP, GDP, and GPvP audits. We also perform specialized vendor, supplier, and supply chain audits.',
    category: 'general'
  },
  {
    question: 'Are these certification audits?',
    answer: 'No. GxPify provides independent audit services only. We do not certify, accredit, or provide regulatory approval. Our audits support your quality and compliance objectives as defined in your audit scope.',
    category: 'general'
  },
  {
    question: 'How is audit scope defined?',
    answer: 'Audit scope is always client-defined and contract-governed. We work with you to establish clear objectives, boundaries, and deliverables before any audit engagement begins.',
    category: 'general'
  },
  // Independence & Governance
  {
    question: 'How do you ensure audit independence?',
    answer: 'GxPify maintains strict independence through clear governance policies. Our auditors have no commercial or financial relationships with auditees. All potential conflicts are disclosed and managed proactively.',
    category: 'independence'
  },
  {
    question: 'Do you use external auditors?',
    answer: 'Yes, when required by geography or specialized expertise, we engage qualified external auditors and subject matter experts. All external resources operate under GxPify governance and accountability standards.',
    category: 'independence'
  },
  // Vendor Audits
  {
    question: 'What is the difference between vendor and supplier audits?',
    answer: 'While often used interchangeably, vendor audits typically focus on service providers (CDMOs, CROs, labs), while supplier audits focus on material providers (API, excipients, packaging). Both follow the same rigorous methodology.',
    category: 'vendor'
  },
  {
    question: 'Do you audit packaging suppliers?',
    answer: 'Yes. We audit both primary packaging (vials, syringes, closures) and secondary/printed packaging (cartons, labels, leaflets) suppliers, including ISO 15378-aligned assessments.',
    category: 'vendor'
  },
  // Global Coverage
  {
    question: 'Which countries do you serve?',
    answer: 'We serve global clients including organizations in the United States, Canada, United Kingdom, Germany, the European Union, and Japan. Audit delivery is executed in India and ASEAN regions.',
    category: 'coverage'
  },
  {
    question: 'How does the regional delivery model work?',
    answer: 'Audits are commissioned by global clients and executed by our Lead Auditor-led teams in India and ASEAN. This ensures global standards with regional execution capability.',
    category: 'coverage'
  },
  // CAT Framework
  {
    question: 'What is the CAT Framework?',
    answer: 'CAT (Consult · Assess · Train) is our integrated framework for training and QMS enablement, available in India and ASEAN only. It combines contextual consulting, gap assessment, and role-based GxP training.',
    category: 'cat'
  },
  {
    question: 'Is CAT separate from audit services?',
    answer: 'Yes. CAT is completely separate from our audit services to maintain independence. CAT clients in India/ASEAN cannot be audited by GxPify to avoid any conflict of interest.',
    category: 'cat'
  },
];

// Value Propositions
export const valueProps = [
  {
    title: 'Independent & Objective',
    description: 'No commercial relationships with auditees. Complete audit independence guaranteed.',
    icon: 'Scale'
  },
  {
    title: 'Risk-Based Approach',
    description: 'Lifecycle-aligned methodology focusing on what matters most to your quality objectives.',
    icon: 'Target'
  },
  {
    title: 'Global Standards',
    description: 'Consistent audit quality regardless of where your suppliers or facilities are located.',
    icon: 'Globe'
  },
  {
    title: 'Transparent Reporting',
    description: 'Clear, actionable findings with no hidden agendas or upselling tactics.',
    icon: 'FileText'
  },
  {
    title: 'Lead Auditor Accountability',
    description: 'Single-point accountability for every audit, ensuring quality and consistency.',
    icon: 'UserCheck'
  },
  {
    title: 'Confidential & Secure',
    description: 'Your audit data is protected by strict confidentiality protocols and secure systems.',
    icon: 'Lock'
  }
];

// How It Works Steps
export const howItWorksSteps = [
  {
    step: 1,
    title: 'Define Scope',
    description: 'Work with our team to establish clear audit objectives, scope, and deliverables tailored to your needs.'
  },
  {
    step: 2,
    title: 'Execute Audit',
    description: 'Our Lead Auditor-led team conducts thorough, risk-based audits following your defined methodology.'
  },
  {
    step: 3,
    title: 'Receive Report',
    description: 'Get comprehensive, actionable audit reports with clear findings and recommendations.'
  }
];

// Navigation Links
export const mainNavLinks = [
  {
    label: 'Audits',
    href: '/audits',
    children: [
      { label: 'Audits Overview', href: '/audits' },
      { label: 'GLP / GCP Services', href: '/audits/glp-gcp' },
      { label: 'GMP Services', href: '/audits/gmp' },
      { label: 'Vendor & Supply Chain', href: '/audits/vendor' },
      { label: 'GDP Services', href: '/audits/gdp' },
      { label: 'GPvP Services', href: '/audits/gpvp' },
      { label: 'Specialized Audits', href: '/audits/specialized' },
    ]
  },
  { label: 'Global Coverage', href: '/global-coverage' },
  { label: 'India & ASEAN', href: '/india-asean' },
  { label: 'CAT Framework', href: '/cat-framework' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About GxPify', href: '/about' },
    { label: 'Global Coverage', href: '/global-coverage' },
    { label: 'India & ASEAN Delivery', href: '/india-asean' },
  ],
  services: [
    { label: 'Audits Overview', href: '/audits' },
    { label: 'Vendor & Supply Chain', href: '/audits/vendor' },
    { label: 'CAT Framework', href: '/cat-framework' },
  ],
  support: [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms of Use', href: '/legal/terms' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
  ]
};
