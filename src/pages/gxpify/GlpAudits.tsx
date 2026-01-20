import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, CheckCircle, Scale, FileText, ClipboardCheck, Building, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GLP page images - using a general lab-related image
import glpHeroImage from '@/assets/gxpify/gcp_primary_governance_01.jpg';
import glpSupportingImage from '@/assets/gxpify/gcp_supporting_docs_01.jpg';

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

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={glpHeroImage} 
            alt="GLP laboratory facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <FlaskConical className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Laboratory</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              GLP Audit Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Good Laboratory Practice (GLP) Audits
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
              GxPify undertakes commissioned GLP audits for sponsors and audit firms to evaluate non-clinical quality systems, study conduct, and data integrity within regulated laboratory environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GLP audits are delivered under client-approved scope, with defined objectives and governed execution, so audit outcomes support sponsor oversight, audit-firm reliance, and regulatory decision-making across non-clinical development programs.
            </p>
            <p className="text-sm text-muted-foreground">
              Engagements may involve facility-based audits, CRO qualification audits, or study-specific audits, based entirely on commissioning requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Commissioned GLP Audits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
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
                <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied within that approved scope</span>
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
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
                <h3 className="font-display text-xl font-semibold text-foreground">Facility and System-Focused Audits</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {facilityAudits.map((context) => (
                  <div key={context} className="flex items-start gap-3 p-4 bg-secondary border border-border rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{context}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Study-Focused Audits */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Microscope className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Study-Focused Audits</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {studyAudits.map((context) => (
                  <div key={context} className="flex items-start gap-3 p-4 bg-secondary border border-border rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{context}</span>
                  </div>
                ))}
              </div>
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
                Audit judgment is applied to compliance and system effectiveness, supporting regulatory confidence without extending into scientific interpretation or study outcome evaluation.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img 
                src={glpSupportingImage} 
                alt="Data integrity and traceability" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage and GLP Audit Delivery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
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
              All GLP audits delivered by GxPify operate within a defined governance framework that supports:
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
              GLP Audit Services — FAQs
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
            Contact us to define the scope for your GLP audit requirements.
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
            <Link to="/audits/gmp" className="text-muted-foreground hover:text-accent transition-colors">GMP Audit Services</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gdp" className="text-muted-foreground hover:text-accent transition-colors">GDP Audit Services</Link>
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

export default GlpAudits;
