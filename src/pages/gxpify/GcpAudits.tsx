import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, CheckCircle, Scale, Factory, Truck, FlaskConical, HeartPulse, Building, Users, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GCP page images - 1 primary + 1 supporting (locked)
import heroImage from '@/assets/gxpify/gcp_primary_governance_01.jpg';
import supportingImage from '@/assets/gxpify/gcp_supporting_docs_01.jpg';

const GcpAudits = () => {
  const auditContexts = [
    'Sponsor GCP oversight and governance audits',
    'CRO qualification and oversight audits',
    'Investigator site audits'
  ];

  const vendorAudits = [
    'Central laboratories',
    'Bioanalytical laboratories',
    'Imaging vendors',
    'eClinical and data vendors'
  ];

  const programAudits = [
    'Trial Master File (TMF) governance',
    'Monitoring system oversight'
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single GCP audit only?',
      answer: 'Yes. Engagement is based on defined commissioning needs. A single audit does not imply additional audits.',
      category: 'gcp'
    },
    {
      question: 'Can audit firms commission GCP audits on behalf of sponsors?',
      answer: 'Yes. Audit firms may commission GCP audits on behalf of sponsors with scope and reporting aligned to sponsor requirements.',
      category: 'gcp'
    },
    {
      question: 'Does GxPify define or approve GCP audit scope?',
      answer: 'No. Scope is defined and approved by the commissioning sponsor or audit firm. GxPify executes within that scope.',
      category: 'gcp'
    }
  ];

  const auditDomains = [
    { title: 'GMP', description: 'Manufacturing, testing, packaging', icon: Factory, href: '/audits/gmp', active: false },
    { title: 'GDP', description: 'Storage, distribution, logistics', icon: Truck, href: '/audits/gdp', active: false },
    { title: 'GLP', description: 'Nonclinical, study-centric', icon: FlaskConical, href: '/audits/glp', active: false },
    { title: 'GCP', description: 'Clinical oversight, governance', icon: ClipboardCheck, href: '/audits/gcp', active: true },
    { title: 'GPvP', description: 'Pharmacovigilance systems', icon: HeartPulse, href: '/audits/gpvp', active: false }
  ];

  const relatedDomains = [
    { title: 'GMP Audit Services', href: '/audits/gmp', icon: Factory },
    { title: 'GDP Audit Services', href: '/audits/gdp', icon: Truck },
    { title: 'GLP Audit Services', href: '/audits/glp', icon: FlaskConical },
    { title: 'GPvP Audit Services', href: '/audits/gpvp', icon: HeartPulse }
  ];

  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="GCP clinical oversight governance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-4">
              <ClipboardCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Clinical</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
              GCP Audit Services
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Life Sciences Audits – Development to Pharmacovigilance
            </p>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V24C240 42 480 51 720 42C960 33 1200 12 1440 24V60H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* DOMAIN ICON STRIP */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {auditDomains.map((domain) => (
              <Link
                key={domain.title}
                to={domain.href}
                className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                  domain.active 
                    ? 'bg-accent/10 border border-accent/30' 
                    : 'hover:bg-secondary'
                }`}
              >
                <domain.icon className={`w-6 h-6 mb-1 ${domain.active ? 'text-accent' : 'text-muted-foreground'}`} />
                <span className={`text-sm font-medium ${domain.active ? 'text-accent' : 'text-foreground'}`}>
                  {domain.title}
                </span>
                <span className="text-xs text-muted-foreground text-center max-w-[120px]">
                  {domain.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Introductory Text */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Good Clinical Practice (GCP) audits provide independent evaluation of clinical oversight arrangements, vendor governance, investigator site compliance, and data integrity across regulated clinical research environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GxPify delivers commissioned GCP audits under client-approved scope and defined objectives. Audit execution is governed so outcomes support sponsor oversight, audit-firm reliance, and regulatory decision-making across clinical development programs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Engagements may involve a single GCP audit or multiple GCP audits across programs, vendors, or sites, strictly based on commissioning requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 — COMMISSIONED GCP AUDITS */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Commissioned GCP Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GCP audits are delivered exclusively as commissioned audit engagements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each audit is characterized by:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Scope and objectives defined and approved by the commissioning sponsor or audit firm</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Applicable GCP regulatory expectations relevant to audited activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied strictly within approved scope</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GCP audits may be commissioned directly by sponsors or by audit firms acting on behalf of sponsors.
            </p>
            <p className="text-sm text-muted-foreground">
              In all cases, audit execution and reporting remain governed, consistent, and traceable.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — GCP AUDIT CONTEXTS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              GCP Audit Contexts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              GCP audits focus on sponsor oversight arrangements, governance controls, and system effectiveness across clinical programs.
            </p>
            <p className="text-muted-foreground mb-6">Audit contexts may include:</p>

            {/* Main Contexts */}
            <ul className="space-y-3 mb-8">
              {auditContexts.map((context) => (
                <li key={context} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{context}</span>
                </li>
              ))}
            </ul>

            {/* Vendor Audits */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Vendor audits, including:</h3>
              </div>
              <ul className="space-y-2 ml-10">
                {vendorAudits.map((vendor) => (
                  <li key={vendor} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{vendor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program-Level Audits */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Monitor className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Program-level oversight audits, including:</h3>
              </div>
              <ul className="space-y-2 ml-10">
                {programAudits.map((program) => (
                  <li key={program} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Each context is evaluated within its own approved scope.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AUDIT EXECUTION AND JUDGMENT */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Execution and Judgment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Within the approved audit scope, the Lead Auditor is responsible for:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Executing the audit</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Evaluating audit evidence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Applying professional audit judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Issuing audit conclusions and reports</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mb-8">
              Audit judgment is applied to oversight arrangements, governance controls, and compliance, supporting inspection readiness and sponsor decision-making without interfering in clinical operations.
            </p>
            
            {/* Supporting Image */}
            <div className="rounded-xl overflow-hidden border border-border max-w-2xl mx-auto">
              <img 
                src={supportingImage} 
                alt="Audit execution and governance control" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — GLOBAL COVERAGE */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Global Coverage and Audit Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GxPify supports global sponsors and audit firms operating across regulated life-sciences markets.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground"><strong>Global Coverage</strong> reflects where sponsors and audit firms operate and commission GCP audits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground"><strong>Audit Delivery</strong> reflects where audits are executed in accordance with approved scope</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Audit planning, judgment, and reporting are conducted in English under defined governance controls.
            </p>
            <p className="text-sm text-muted-foreground">
              Where required, regional or language facilitation supports execution without altering audit accountability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — AUDIT GOVERNANCE */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Governance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All GCP audits operate within a defined governance framework that supports:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Clear scope definition prior to execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Consistent application of professional judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Structured, traceable reporting</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              This governance framework supports sponsor and audit-firm oversight and does not replace it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              GCP Audit Services — FAQs
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* SECTION 7 — RELATED GxP DOMAINS */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Related GxP Audit Domains
            </h2>
            <p className="text-muted-foreground mb-8">
              GCP Audit Services sits within the broader GxP audit framework.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {relatedDomains.map((domain) => (
                <Link
                  key={domain.title}
                  to={domain.href}
                  className="group bg-card rounded-lg p-4 border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
                >
                  <domain.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors block">
                    {domain.title}
                  </span>
                </Link>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/contact">
                Contact GxPify
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GcpAudits;
