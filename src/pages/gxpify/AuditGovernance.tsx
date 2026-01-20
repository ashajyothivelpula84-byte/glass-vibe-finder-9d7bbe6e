import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ClipboardCheck, Shield, Scale, FileText, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import auditGovernanceHeroImage from '@/assets/gxpify/audit_governance_primary_01.jpg';

const AuditGovernance = () => {
  const governedDeliveryMeans = [
    'Audit scope and objectives are defined and approved prior to execution',
    'Audit execution remains aligned to the approved scope throughout',
    'Professional audit judgment is applied consistently and traceably',
    'Reporting follows a disciplined, governance-ready structure'
  ];

  const leadAuditorResponsibilities = [
    'Executing the audit',
    'Interpreting and evaluating audit evidence',
    'Applying professional audit judgment',
    'Issuing audit conclusions and final reports'
  ];

  const accountabilityEnsures = [
    'Clear ownership of audit judgment',
    'Consistency across engagements',
    'No fragmentation of audit responsibility'
  ];

  const methodologySteps = [
    { step: 1, title: 'Engagement clarification', description: 'Confirming scope, objectives, and governance' },
    { step: 2, title: 'Audit planning', description: 'Aligning execution approach to approved scope' },
    { step: 3, title: 'Audit execution', description: 'Evaluating system behavior and evidence' },
    { step: 4, title: 'Audit reporting', description: 'Consolidating evidence, judgment, and conclusions' }
  ];

  const reportingCharacteristics = [
    'Clear linkage between observations and supporting evidence',
    'Transparent articulation of professional audit judgment',
    'Language suitable for sponsor oversight and audit-firm reliance'
  ];

  const pageFaqs = [
    {
      question: 'Does GxPify define audit scope?',
      answer: 'No. Audit scope and objectives are defined and approved by the commissioning sponsor or audit firm.',
      category: 'governance'
    },
    {
      question: 'What does "independent" mean in GxPify audits?',
      answer: 'Independence refers to the application of professional audit judgment without operational responsibility — not separation from sponsor or audit-firm governance.',
      category: 'governance'
    },
    {
      question: 'Is the same governance applied across all GxP domains?',
      answer: 'Yes. The same governance framework applies across GMP, GDP, GLP, GCP, and GPvP audits.',
      category: 'governance'
    }
  ];

  const relatedLinks = [
    { label: 'GxP Audit Services', href: '/audits' },
    { label: 'GMP Audit Services', href: '/audits/gmp' },
    { label: 'GDP Audit Services', href: '/audits/gdp' },
    { label: 'GLP Audit Services', href: '/audits/glp' },
    { label: 'GCP Audit Services', href: '/audits/gcp' },
    { label: 'GPvP Audit Services', href: '/audits/gpvp' }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={auditGovernanceHeroImage} 
            alt="Audit governance and methodology framework" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <ClipboardCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Governance</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Audit Governance & Methodology
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Governed GxP Audit Delivery
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
              GxPify operates under a defined audit governance framework designed to preserve audit integrity, scope discipline, and consistency of professional judgment across all commissioned GxP audits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This framework exists to ensure audit outcomes are reliable for sponsor oversight, audit-firm reliance, and regulatory decision-making — without altering client authority over audit intent or scope.
            </p>
          </div>
        </div>
      </section>

      {/* What Governed Audit Delivery Means */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              What Governed Audit Delivery Means at GxPify
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At GxPify, audits are delivered as structured, commissioned engagements — not as ad-hoc evaluations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Governed audit delivery means:
            </p>
            <ul className="space-y-3 mb-6">
              {governedDeliveryMeans.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              This approach ensures audit outcomes remain predictable, defensible, and suitable for sponsor and audit-firm reliance.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Auditor Accountability */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <User className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Accountability</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Lead Auditor Accountability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All audits delivered by GxPify operate under single-point Lead Auditor accountability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Within the client-approved audit scope, the Lead Auditor is responsible for:
            </p>
            <ul className="space-y-3 mb-6">
              {leadAuditorResponsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This accountability model ensures:
            </p>
            <ul className="space-y-2 mb-6">
              {accountabilityEnsures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Client authority over audit intent and scope remains unchanged.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Control and Boundary Discipline */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Scope Control</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Scope Control and Boundary Discipline
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Audit governance at GxPify is anchored in formal scope control.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit scope is approved prior to execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit execution remains aligned to the approved scope</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Any scope clarification is addressed through commissioning channels</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              This discipline ensures audits remain objective evaluations of compliance and system effectiveness within the agreed scope.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Methodology */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Methodology</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Methodology (High-Level)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              While audit methodologies vary by GxP domain, all GxPify audits follow a consistent high-level structure:
            </p>
            <div className="space-y-4 mb-6">
              {methodologySteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-5 bg-secondary border border-border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Detailed methodology steps are applied within each engagement in alignment with applicable regulatory expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Reporting Discipline */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Reporting</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Reporting Discipline
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Audit reports issued by GxPify are structured to support governance use, not operational instruction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reporting is characterized by:
            </p>
            <ul className="space-y-3 mb-6">
              {reportingCharacteristics.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Reports are designed to be defensible, traceable, and inspection-relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Language and Facilitation Support */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Language Support</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Language and Facilitation Support
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Where audits are executed in environments where English is not the primary operating language, language facilitation may be applied to support audit execution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In all cases:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit scope, interpretation, judgment, and reporting remain in English</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Lead Auditor accountability is retained</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Facilitation supports execution only and does not own audit conclusions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Audit Governance — FAQs (Orientation)
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Pathways
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Audit governance underpins all GxPify audit services.
            </p>
            <p className="text-muted-foreground mb-4">Related pages include:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 p-4 bg-secondary border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span className="text-foreground">{link.label}</span>
                </Link>
              ))}
            </div>
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
            Contact us to discuss your audit requirements.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Contact GxPify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/audits" className="text-muted-foreground hover:text-accent transition-colors">Audit Services</Link>
            <span className="text-border">|</span>
            <Link to="/cat-framework" className="text-muted-foreground hover:text-accent transition-colors">CAT Framework</Link>
            <span className="text-border">|</span>
            <Link to="/resources" className="text-muted-foreground hover:text-accent transition-colors">Resources</Link>
            <span className="text-border">|</span>
            <Link to="/faqs" className="text-muted-foreground hover:text-accent transition-colors">FAQs</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AuditGovernance;
