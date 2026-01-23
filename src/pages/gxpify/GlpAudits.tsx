import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, CheckCircle, Scale, Factory, Truck, ClipboardCheck, HeartPulse, Building, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GLP page images - exactly 5 total (1 primary + 4 supporting)
import heroImage from '@/assets/gxpify/gcp_primary_governance_01.jpg';
import supportingArchiving from '@/assets/gxpify/gcp_supporting_docs_01.jpg';
import supportingDataIntegrity from '@/assets/gxpify/home_supporting_systems_02.jpg';
import supportingCoverage from '@/assets/gxpify/home_supporting_global_04.jpg';

const GlpAudits = () => {
  const facilityAudits = [
    'CRO qualification and requalification',
    'Sponsor-owned GLP test facilities',
    'Laboratory quality systems and governance',
    'Data integrity frameworks and controls',
    'Archiving, retention, and record-management systems'
  ];

  const studyAudits = [
    'Ongoing or completed non-clinical studies',
    'Study conduct and protocol adherence',
    'Raw data and metadata traceability',
    'Alignment between study data, reports, and submissions'
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single GLP audit only?',
      answer: 'Yes. GLP audits are undertaken based on defined commissioning needs. Engagement for one GLP audit does not imply or require additional audits.',
      category: 'glp'
    },
    {
      question: 'Can audit firms commission GLP audits on behalf of sponsors?',
      answer: 'Yes. Audit firms may commission GLP audits on behalf of sponsors. Scope, objectives, and reporting expectations are defined by the commissioning audit firm in alignment with sponsor requirements.',
      category: 'glp'
    },
    {
      question: 'Does GxPify define or approve GLP audit scope?',
      answer: 'No. Audit scope is defined and approved by the commissioning sponsor or audit firm. GxPify executes the audit and applies professional judgment within that approved scope.',
      category: 'glp'
    }
  ];

  const auditDomains = [
    { title: 'GMP', description: 'Manufacturing, testing, packaging', icon: Factory, href: '/audits/gmp', active: false },
    { title: 'GDP', description: 'Storage, distribution, logistics', icon: Truck, href: '/audits/gdp', active: false },
    { title: 'GLP', description: 'Nonclinical, study-centric', icon: FlaskConical, href: '/audits/glp', active: true },
    { title: 'GCP', description: 'Clinical oversight, governance', icon: ClipboardCheck, href: '/audits/gcp', active: false },
    { title: 'GPvP', description: 'Pharmacovigilance systems', icon: HeartPulse, href: '/audits/gpvp', active: false }
  ];

  const relatedDomains = [
    { title: 'GMP Audit Services', href: '/audits/gmp', icon: Factory },
    { title: 'GDP Audit Services', href: '/audits/gdp', icon: Truck },
    { title: 'GCP Audit Services', href: '/audits/gcp', icon: ClipboardCheck },
    { title: 'GPvP Audit Services', href: '/audits/gpvp', icon: HeartPulse }
  ];

  return (
    <PageLayout>
      {/* PAGE TITLE */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <FlaskConical className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Laboratory</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3">
              GLP Audit Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Good Laboratory Practice (GLP) Audits
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text */}
      <section className="pb-8 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify undertakes commissioned GLP audits for sponsors and audit firms to evaluate non-clinical quality systems, study conduct, and data integrity within regulated laboratory environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GLP audits are delivered under client-approved scope, with defined objectives and governed execution, so audit outcomes support sponsor oversight, audit-firm reliance, and regulatory decision-making across non-clinical development programs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Engagements may involve facility-based audits, CRO qualification audits, or study-specific audits, based entirely on commissioning requirements.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY IMAGE (IMAGE 1) - GLP System Context */}
      <section className="pb-12 bg-background">
        <div className="container-wide">
          <div className="rounded-xl overflow-hidden border border-border">
            <img 
              src={heroImage} 
              alt="GLP system context - non-clinical laboratory governance" 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* DOMAIN ICON STRIP */}
      <section className="py-8 bg-background border-y border-border">
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

      {/* Commissioned GLP Audits */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Commissioned GLP Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At GxPify, GLP audits are delivered as commissioned audit engagements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each GLP audit is characterized by:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Scope and objectives defined and approved by the commissioning sponsor or audit firm</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Applicable GLP regulatory expectations relevant to the audited activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied strictly within that approved scope</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GLP audits may be commissioned directly by sponsors or by audit firms acting on behalf of sponsors.
            </p>
            <p className="text-sm text-muted-foreground">
              In all cases, audit execution and reporting remain governed, consistent, and traceable.
            </p>
          </div>
        </div>
      </section>

      {/* GLP Audit Contexts */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              GLP Audit Contexts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              GLP audits are typically commissioned for defined laboratory or study contexts, depending on sponsor oversight needs and development stage.
            </p>

            {/* Facility and System-Focused Audits */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Building className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Facility and System-Focused Audits</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {facilityAudits.map((context) => (
                  <li key={context} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{context}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study-Focused Audits */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Microscope className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Study-Focused Audits</h3>
              </div>
              <ul className="space-y-3">
                {studyAudits.map((context) => (
                  <li key={context} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{context}</span>
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

      {/* SUPPORTING IMAGE 2 - Archiving & Record Governance */}
      <section className="pb-8 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingArchiving} 
                alt="Archiving and record governance" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audit Execution and Judgment */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Execution and Judgment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Within the client-approved audit scope, the Lead Auditor is responsible for:
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
            <p className="text-sm text-muted-foreground">
              Audit judgment is applied to compliance and system effectiveness, supporting regulatory confidence without extending into scientific interpretation or study outcome evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORTING IMAGE 3 - Data Integrity & Traceability */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingDataIntegrity} 
                alt="Data integrity and traceability" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage and GLP Audit Delivery */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Global Coverage and GLP Audit Delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GxPify supports global sponsors and audit firms operating across regulated life-sciences markets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Global Coverage</strong> reflects where sponsors and audit firms operate and commission GLP audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Audit Delivery</strong> reflects where GLP audits are executed in accordance with approved scope</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Audit planning, judgment, and reporting are conducted in English under defined governance controls.
              </p>
              <p className="text-sm text-muted-foreground">
                Where required, language or regional facilitation is applied to support execution without altering audit accountability.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingCoverage} 
                alt="Global coverage and delivery" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audit Governance as a Foundation (Text Only) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Governance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance as a Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All GLP audits delivered by GxPify operate within a defined governance framework that supports:
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
              This governance framework exists to support sponsor and audit-firm oversight, not to replace it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs (Text Only) */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              GLP Audit Services — FAQs
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* Related GxP Audit Domains */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Related GxP Audit Domains
            </h2>
            <p className="text-muted-foreground mb-8">
              GLP Audit Services sits within the broader GxP audit framework.
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

export default GlpAudits;
