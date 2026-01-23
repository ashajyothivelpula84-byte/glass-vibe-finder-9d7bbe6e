import { Link } from 'react-router-dom';
import { ArrowRight, Truck, CheckCircle, Scale, Globe, Factory, FlaskConical, ClipboardCheck, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GDP page images - exactly 5 total (1 primary + 4 supporting)
import heroImage from '@/assets/gxpify/gdp_primary_warehouse_01.jpg';
import supportingCommissioned from '@/assets/gxpify/gdp_supporting_docs_01.jpg';
import supportingContexts from '@/assets/gxpify/gdp_primary_coldchain_02.jpg';
import supportingJudgment from '@/assets/gxpify/home_supporting_accountability_03.jpg';
import supportingCoverage from '@/assets/gxpify/home_supporting_global_04.jpg';

const GdpAudits = () => {
  const auditContexts = [
    'Finished-product distribution centers',
    'Third-party logistics providers (3PLs)',
    'Transporters, including temperature-controlled transport',
    'Wholesalers and distributors',
    'Regional depots and contracted warehousing providers',
    'Supply-chain vendors supporting GDP-relevant activities'
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single GDP audit only?',
      answer: 'Yes. GDP audits are undertaken based on defined commissioning needs. Engagement for one GDP audit does not imply or require additional audits.',
      category: 'gdp'
    },
    {
      question: 'Can audit firms commission GDP audits on behalf of sponsors?',
      answer: 'Yes. Audit firms may commission GDP audits on behalf of sponsors. Scope, objectives, and reporting expectations are defined by the commissioning audit firm in alignment with sponsor requirements.',
      category: 'gdp'
    },
    {
      question: 'Does GxPify define or approve GDP audit scope?',
      answer: 'No. Audit scope is defined and approved by the commissioning sponsor or audit firm. GxPify executes the audit and applies professional judgment within that approved scope.',
      category: 'gdp'
    }
  ];

  const auditDomains = [
    { title: 'GMP', description: 'Manufacturing, testing, packaging', icon: Factory, href: '/audits/gmp', active: false },
    { title: 'GDP', description: 'Storage, distribution, logistics', icon: Truck, href: '/audits/gdp', active: true },
    { title: 'GLP', description: 'Nonclinical, study-centric', icon: FlaskConical, href: '/audits/glp', active: false },
    { title: 'GCP', description: 'Clinical oversight, governance', icon: ClipboardCheck, href: '/audits/gcp', active: false },
    { title: 'GPvP', description: 'Pharmacovigilance systems', icon: HeartPulse, href: '/audits/gpvp', active: false }
  ];

  const relatedDomains = [
    { title: 'GMP Audit Services', href: '/audits/gmp', icon: Factory },
    { title: 'GLP Audit Services', href: '/audits/glp', icon: FlaskConical },
    { title: 'GCP Audit Services', href: '/audits/gcp', icon: ClipboardCheck },
    { title: 'GPvP Audit Services', href: '/audits/gpvp', icon: HeartPulse }
  ];

  return (
    <PageLayout>
      {/* HERO SECTION (PRIMARY IMAGE — IMAGE 1) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="GDP distribution system - warehouse and logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-4">
              <Truck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Distribution</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
              Good Distribution Practice (GDP) Audits
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Commissioned GDP audits delivered under client-approved scope, governed execution, and single-point Lead Auditor accountability.
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
              GxPify undertakes commissioned GDP audits for sponsors and audit firms where distribution and supply-chain controls are critical to product quality and regulatory compliance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GDP audits are delivered under client-approved scope, with defined objectives and governed execution, so audit outcomes support sponsor oversight, audit-firm reliance, and regulatory decision-making across complex distribution models.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Engagements may involve a single GDP audit or multiple GDP audits across distribution partners, based entirely on commissioning requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Commissioned GDP Audits - Text (left) | IMAGE 2 (right) */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Commissioned GDP Audits
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At GxPify, GDP audits are delivered as commissioned audit engagements.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each GDP audit is characterized by:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Scope and objectives defined and approved by the commissioning sponsor or audit firm</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Applicable GDP regulatory expectations relevant to the audited activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied within that approved scope</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Audits may be commissioned directly by sponsors or by audit firms acting on behalf of sponsors.
              </p>
              <p className="text-sm text-muted-foreground">
                In all cases, audit execution and reporting remain governed, consistent, and traceable.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingCommissioned} 
                alt="Commissioned audit scope and boundary control" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: GDP Audit Contexts - IMAGE 3 (left) | Text (right) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            GDP Audit Contexts
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingContexts} 
                alt="Distribution network with controlled interfaces" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GDP audits are typically commissioned to evaluate control effectiveness across distribution interfaces, rather than isolated logistics activities.
              </p>
              <p className="text-muted-foreground mb-4">Contexts may include:</p>
              <ul className="space-y-3 mb-6">
                {auditContexts.map((context) => (
                  <li key={context} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{context}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Each context is evaluated within its own approved scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Audit Execution & Judgment - Text (left) | IMAGE 4 (right) */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Audit Execution and Judgment
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
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
                This model supports consistency, traceability, and defensible audit outcomes without altering client authority over audit intent or scope.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingJudgment} 
                alt="Single-point audit accountability" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Global Coverage & GDP Delivery - Text (left) | IMAGE 5 (right) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Global Coverage and GDP Audit Delivery
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GxPify supports global sponsors and audit firms operating across regulated life-sciences markets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Global Coverage</strong> reflects where sponsors and audit firms operate and commission GDP audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Audit Delivery</strong> reflects where GDP audits are executed in accordance with approved scope</span>
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
                alt="Coverage vs delivery separation" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Audit Governance (Text Only) */}
      <section className="py-16 md:py-20 bg-secondary">
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
              All GDP audits delivered by GxPify operate within a defined governance framework that supports:
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              GDP Audit Services — FAQs (Orientation)
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* Pathways (Text Links Only) */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Pathways
            </h2>
            <p className="text-muted-foreground mb-8">
              GDP Audit Services sits within the broader GxP audit framework. Related audit domains include:
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

export default GdpAudits;
