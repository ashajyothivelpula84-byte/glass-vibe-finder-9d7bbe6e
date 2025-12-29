// GxPify Data - Mock data for the audit services website

export interface AuditService {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  scopeNote?: string;
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
    id: 'gmp',
    title: 'GMP Audits',
    description: 'Comprehensive manufacturing audits for pharmaceuticals, biologics, and medical devices.',
    icon: 'Factory',
    href: '/audits/gmp'
  },
  {
    id: 'gdp',
    title: 'GDP Audits',
    description: 'Distribution and logistics audits ensuring product integrity throughout the supply chain.',
    icon: 'Package',
    href: '/audits/gdp'
  },
  {
    id: 'glp',
    title: 'GLP Audits',
    description: 'Non-clinical laboratory audits ensuring regulatory compliance for preclinical research.',
    icon: 'FlaskConical',
    href: '/audits/glp'
  },
  {
    id: 'gcp',
    title: 'GCP Audits (Limited)',
    description: 'Clinical trial audits limited to BA/BE studies and Phase I trials only.',
    icon: 'Stethoscope',
    href: '/audits/gcp',
    scopeNote: 'BA/BE & Phase I only'
  },
  {
    id: 'gpvp',
    title: 'GPvP Audits (Selective)',
    description: 'Pharmacovigilance audits focused on vendor-related PV system assessments.',
    icon: 'Shield',
    href: '/audits/gpvp',
    scopeNote: 'Vendor-focused PV audits only'
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
    answer: 'GxPify conducts independent GxP audits across the pharmaceutical and life sciences value chain, including GLP, GCP (limited to BA/BE and Phase I), GMP, GDP, and GPvP audits (selective, vendor-focused).',
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
  {
    question: 'Why does GxPify not implement CAPA?',
    answer: 'Implementing CAPA for audit findings would compromise our independence for future audits. Clients are responsible for developing and implementing their own corrective actions. This separation maintains audit integrity and ensures objective assessment.',
    category: 'independence'
  },
  // GCP (Limited) clarification
  {
    question: 'Why is GCP audit scope limited?',
    answer: 'Our GCP audit services are intentionally limited to BA/BE studies and Phase I trials. This focused scope ensures deep, specialized expertise. For Phase II-IV trials, we recommend engaging audit providers with broader clinical trial coverage.',
    category: 'gcp'
  },
  // GPvP (Selective) clarification
  {
    question: 'What does "selective" mean for GPvP audits?',
    answer: 'Our GPvP audit services are selective, focusing primarily on vendor-related pharmacovigilance assessments. This includes PV service provider audits and vendor oversight evaluations, rather than comprehensive MAH PV system audits.',
    category: 'gpvp'
  },
  // Local auditor usage
  {
    question: 'How does local auditor usage work in ASEAN?',
    answer: 'For ASEAN-based audits, we may engage qualified local auditors who operate under GxPify governance. The Lead Auditor maintains single-point accountability regardless of local auditor involvement.',
    category: 'coverage'
  },
  // Global Coverage
  {
    question: 'Which countries do you serve?',
    answer: 'We serve global clients including organizations in the United States, Canada, United Kingdom, Germany, the European Union, and Japan. Audit delivery is executed in India and ASEAN regions.',
    category: 'coverage'
  },
  {
    question: 'Do you cover China, Middle East, or Africa?',
    answer: 'Currently, our primary focus is India and ASEAN for audit delivery. For audits in China, Middle East, or Africa, please contact us to discuss specific requirements and potential arrangements.',
    category: 'coverage'
  },
  // CAT Framework
  {
    question: 'What is the CAT Framework?',
    answer: 'CAT (Clarify · Assess · Transfer) is our integrated framework for QMS strengthening, available in India and ASEAN only. It includes contextual consulting, gap assessment, and role-based GxP training for small to mid-size organizations.',
    category: 'cat'
  },
  {
    question: 'Is CAT separate from audit services?',
    answer: 'Yes. CAT is completely separate from our audit services to maintain independence. CAT clients in India/ASEAN cannot be audited by GxPify to avoid any conflict of interest. A cooling-off period applies before audit services can be provided to former CAT clients.',
    category: 'cat'
  },
  {
    question: 'What is the cooling-off period for CAT clients?',
    answer: 'Organizations that have received CAT Framework services must observe a cooling-off period before GxPify can conduct audit services for them. This ensures complete independence and prevents any perception of conflict of interest.',
    category: 'cat'
  },
  // QMS enablement vs audits
  {
    question: 'What is the difference between QMS enablement and audits?',
    answer: 'QMS enablement (through CAT Framework) helps organizations build and strengthen their quality management systems. Audits are independent assessments of existing systems. These services are deliberately separated to maintain audit independence.',
    category: 'general'
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

// Navigation Links - Updated to match sitemap
export const mainNavLinks = [
  {
    label: 'GxP Audit Services',
    href: '/audits',
    children: [
      { label: 'GMP Audit Services', href: '/audits/gmp' },
      { label: 'GDP Audit Services', href: '/audits/gdp' },
      { label: 'GLP Audit Services', href: '/audits/glp' },
      { label: 'GCP Audit Services (Limited)', href: '/audits/gcp' },
      { label: 'GPvP Audit Services (Selective)', href: '/audits/gpvp' },
    ]
  },
  { label: 'India & ASEAN Delivery', href: '/india-asean' },
  { label: 'Global Coverage', href: '/global-coverage' },
  { label: 'Audit Governance', href: '/audit-governance' },
  { label: 'CAT Framework', href: '/cat-framework' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'GxP Audit Services', href: '/audits' },
    { label: 'India & ASEAN Delivery', href: '/india-asean' },
    { label: 'Audit Governance', href: '/audit-governance' },
    { label: 'CAT Framework', href: '/cat-framework' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Use', href: '/legal/terms' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
  ],
  // Keep these for backward compatibility but they won't be used in footer
  company: [
    { label: 'About GxPify', href: '/about' },
    { label: 'Global Coverage', href: '/global-coverage' },
    { label: 'India & ASEAN Delivery', href: '/india-asean' },
  ],
  services: [
    { label: 'Audits Overview', href: '/audits' },
    { label: 'Audit Governance', href: '/audit-governance' },
    { label: 'CAT Framework', href: '/cat-framework' },
  ],
  support: [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ]
};
