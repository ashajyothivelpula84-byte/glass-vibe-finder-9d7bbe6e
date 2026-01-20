import { Link } from 'react-router-dom';
import { ArrowRight, Factory, CheckCircle, Scale, FileText, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GMP page images
import gmpPharma from '@/assets/gxpify/gmp_primary_pharma_01.jpg';
import gmpSupporting from '@/assets/gxpify/gmp_supporting_docs_01.jpg';

const GmpAudits = () => {
  const auditContexts = [
    'KSM and API manufacturing',
    'Drug product manufacturing (sterile and non-sterile)',
    'Biologics and biotechnology manufacturing',
    'Combination products and device components',
    'Primary and secondary packaging operations',
    'Contract manufacturing and development organizations (CMDOs)',
    'Contract testing laboratories',
    'Supply-chain and vendor GMP audits'
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single GMP audit only?',
      answer: 'Yes. GMP audits are undertaken based on defined commissioning needs. Engagement for one GMP audit does not imply or require additional audits.',
      category: 'gmp'
    },
    {
      question: 'Can audit firms commission GMP audits on behalf of sponsors?',
      answer: 'Yes. Audit firms may commission GMP audits on behalf of sponsors. Scope, objectives, and reporting expectations are defined by the commissioning audit firm in alignment with sponsor requirements.',
      category: 'gmp'
    },
    {
      question: 'Does GxPify define or approve GMP audit scope?',
      answer: 'No. Audit scope is defined and approved by the commissioning sponsor or audit firm. GxPify executes the audit and applies professional judgment within that approved scope.',
      category: 'gmp'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={gmpPharma} 
            alt="GMP manufacturing facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <Factory className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Manufacturing</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              GMP Audit Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Good Manufacturing Practice (GMP) Audits
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V24C240 42 480 51 720 42C960 33 1200 12 1440 24V60H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify undertakes commissioned GMP audits for sponsors and audit firms across manufacturing, testing laboratories, packaging, and outsourced supply-chain operations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GMP audits are delivered under client-approved scope, with defined objectives and governed execution, so audit outcomes support sponsor oversight, audit-firm reliance, and regulatory decision-making across diverse manufacturing models.
            </p>
            <p className="text-sm text-muted-foreground">
              Engagements may involve a single GMP audit or multiple GMP audits across different manufacturing or supply-chain contexts, based entirely on commissioning requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Commissioned GMP Audits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Commissioned GMP Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At GxPify, GMP audits are delivered as commissioned audit engagements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each GMP audit is characterized by:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Scope and objectives defined and approved by the commissioning sponsor or audit firm</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Applicable GMP regulatory expectations relevant to the audited activities</span>
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
        </div>
      </section>

      {/* GMP Audit Contexts */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              GMP Audit Contexts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              GMP audits are typically commissioned for specific operational contexts, rather than as generic "GMP audits."
            </p>
            <p className="text-muted-foreground mb-6">Contexts may include:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {auditContexts.map((context) => (
                <div key={context} className="flex items-start gap-3 p-4 bg-secondary border border-border rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{context}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Each context is evaluated within its own approved scope.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Execution and Judgment */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Scale className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Judgment</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
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
                This model supports consistency, traceability, and defensible audit outcomes without altering client authority over audit intent or scope.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img 
                src={gmpSupporting} 
                alt="GMP audit judgment and evidence consistency" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage and GMP Audit Delivery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Global Coverage and GMP Audit Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GxPify supports global sponsors and audit firms operating across regulated life-sciences markets, including North America, Europe, and other globally regulated regions.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground"><strong>Global Coverage</strong> reflects where sponsors and audit firms operate and commission GMP audits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground"><strong>Audit Delivery</strong> reflects where GMP audits are executed in accordance with approved scope</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Audit planning, judgment, and reporting are conducted in English under defined governance controls.
            </p>
            <p className="text-sm text-muted-foreground">
              Where required, language or regional facilitation is applied to support execution without altering audit accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Governance */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <ClipboardCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Governance</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance as a Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All GMP audits delivered by GxPify operate within a defined governance framework that supports:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-card rounded-lg p-4 border border-border">
                <FileText className="w-5 h-5 text-accent mb-2" />
                <p className="text-foreground font-medium text-sm">Clear scope definition prior to execution</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <Scale className="w-5 h-5 text-accent mb-2" />
                <p className="text-foreground font-medium text-sm">Consistent application of professional judgment</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <ClipboardCheck className="w-5 h-5 text-accent mb-2" />
                <p className="text-foreground font-medium text-sm">Structured, traceable reporting</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              This governance framework exists to support sponsor and audit-firm oversight, not to replace it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              GMP Audit Services — FAQs
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Request an Audit Discussion
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your GMP audit requirements.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Contact GxPify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Related Audit Domains */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container-wide">
          <p className="text-center text-sm text-muted-foreground mb-4">Related GxP Audit Domains</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/audits/gdp" className="text-muted-foreground hover:text-accent transition-colors">GDP Audit Services</Link>
            <span className="text-border">|</span>
            <Link to="/audits/glp" className="text-muted-foreground hover:text-accent transition-colors">GLP Audit Services</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gcp" className="text-muted-foreground hover:text-accent transition-colors">GCP Audit Services</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gpvp" className="text-muted-foreground hover:text-accent transition-colors">GPvP Audit Services</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GmpAudits;
