import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Truck, FlaskConical, ClipboardCheck, HeartPulse, Shield, CheckCircle, Scale, Globe, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// Images - exactly 5 total (1 primary + 4 supporting)
import heroImage from '@/assets/gxpify/audit_governance_primary_01.jpg';
import supportingReliability from '@/assets/gxpify/home_supporting_systems_02.jpg';
import supportingCoverage from '@/assets/gxpify/home_supporting_global_04.jpg';
import supportingGovernance from '@/assets/gxpify/home_supporting_governance_05.jpg';
import supportingMultiAudit from '@/assets/gxpify/home_supporting_accountability_03.jpg';

const AuditsOverview = () => {
  const auditDomains = [
    {
      title: 'GMP Audits',
      description: 'Manufacturing, testing laboratories, packaging, supply chain, biologics, combination products, and device components',
      icon: Factory,
      href: '/audits/gmp'
    },
    {
      title: 'GDP Audits',
      description: 'Storage, distribution, logistics providers, and supply-chain interfaces',
      icon: Truck,
      href: '/audits/gdp'
    },
    {
      title: 'GLP Audits',
      description: 'CRO qualification, facility-based audits, and study-centric GLP audits',
      icon: FlaskConical,
      href: '/audits/glp'
    },
    {
      title: 'GCP Audits',
      description: 'Sponsor oversight, CRO and vendor governance, and investigator site audits',
      icon: ClipboardCheck,
      href: '/audits/gcp',
      badge: 'Limited'
    },
    {
      title: 'GPvP Audits',
      description: 'Selective system-level and vendor-focused pharmacovigilance audits',
      icon: HeartPulse,
      href: '/audits/gpvp',
      badge: 'Selective'
    }
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single audit only?',
      answer: 'Yes. Audits are undertaken based on defined commissioning needs. Engagement for one audit does not imply or require additional audits.',
      category: 'audits'
    },
    {
      question: 'Can audit firms commission multiple audits across different GxP domains?',
      answer: 'Yes. Each audit remains independently scoped, governed, and reported.',
      category: 'audits'
    },
    {
      question: 'Does commissioning multiple audits change audit governance?',
      answer: 'No. Governance, judgment discipline, and reporting remain consistent for each audit.',
      category: 'audits'
    }
  ];

  return (
    <PageLayout>
      {/* IMAGE 1 – PRIMARY HERO IMAGE */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Commissioned GxP Audits - Lifecycle governance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              Commissioned GxP Audits Across the Product Lifecycle
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
              GxPify undertakes commissioned GxP audits for sponsors and audit firms across the life-sciences product lifecycle — from development-stage systems through manufacturing, distribution, clinical oversight, and pharmacovigilance governance.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              All audits are delivered under client-approved scope, with defined objectives and governed execution, so outcomes remain usable, defensible, and aligned with sponsor or audit-firm oversight expectations.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Organizations may engage GxPify for a single audit, or multiple audit engagements across different GxP domains. Each audit engagement is commissioned, scoped, executed, and reported independently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="#audit-domains">
                  Explore Audit Domains
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 53.3C840 59 960 69 1080 69.3C1200 69 1320 59 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* SECTION 1 – COMMISSIONED AUDIT MODEL | NO IMAGE */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              What "Commissioned GxP Audits" Mean at GxPify
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At GxPify, audits are delivered as commissioned engagements, not exploratory, advisory, or preparatory exercises.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each audit engagement is characterized by:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Scope and objectives defined and approved by the commissioning sponsor or audit firm</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Applicable regulatory expectations agreed prior to execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied strictly within that scope</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Reporting issued to the commissioning party for governance and reliance</span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Audits may be commissioned:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Directly by sponsors, or</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">By audit firms acting on behalf of sponsors</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              In all cases, audit governance, judgment discipline, and reporting structure remain consistent and traceable.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE 2 – SUPPORTING: Reliability & Execution Discipline */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Reliability</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Reliability in Audit Execution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond domain coverage, GxPify emphasizes reliable audit execution — the factor that determines whether audit outputs remain meaningful after completion.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reliability at GxPify is reflected through:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Execution aligned strictly to the approved audit scope</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Consistent interpretation of audit evidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Clear ownership of professional audit judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Structured, governance-ready reporting</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This supports:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Sponsors relying on audits for regulatory and oversight decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Audit firms relying on delivered audits within broader audit programs</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingReliability} 
                alt="System alignment and judgment discipline" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – GxP AUDIT DOMAINS | ICONS ONLY */}
      <section id="audit-domains" className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              GxP Audit Domains
            </h2>
            <p className="text-muted-foreground">
              GxPify undertakes audits across the following GxP domains, based on commissioning requirements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {auditDomains.map((domain) => (
              <Link
                key={domain.title}
                to={domain.href}
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <domain.icon className="w-6 h-6 text-accent" />
                  </div>
                  {domain.badge && (
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded">
                      {domain.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {domain.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{domain.description}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  View {domain.title.replace(' Audits', '')} Services
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Each domain is commissioned, scoped, and reported independently, regardless of how many audits are undertaken.
          </p>
        </div>
      </section>

      {/* IMAGE 3 – SUPPORTING: Coverage vs Delivery Concept */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingCoverage} 
                alt="Coverage vs delivery abstraction" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Coverage & Delivery</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Global Coverage and Audit Delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GxPify supports global sponsors and audit firms operating across regulated life-sciences markets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Global Coverage</strong> reflects where sponsors and audit firms operate and commission audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Audit Delivery</strong> reflects where audits are executed in accordance with approved scope</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-8">
                Audit planning, judgment, and reporting are conducted in English under defined governance controls. Where required, language or regional facilitation is applied to support execution without altering audit accountability.
              </p>
              <Button variant="outline" asChild>
                <Link to="/global-coverage">
                  View Coverage & Delivery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE 4 – SUPPORTING: Governance Foundation */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Scale className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Governance</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Audit Governance as the Common Foundation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All GxP audits delivered by GxPify operate within a defined governance framework that supports:
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
                  <span className="text-foreground">Traceable and defensible reporting</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-8">
                This governance framework exists to support sponsor and audit-firm oversight — not to replace it.
              </p>
              <Button variant="outline" asChild>
                <Link to="/audit-governance">
                  Review Audit Governance & Methodology
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingGovernance} 
                alt="Governance framework abstraction" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE 5 – SUPPORTING: Multi-Audit / Program Use */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingMultiAudit} 
                alt="Modular audit structure" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Engagement Flexibility</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Single or Multiple Audit Engagements
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Organizations may engage GxPify for a single audit or multiple audit engagements across different GxP domains.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Independent scope per audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Consistent governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Program-ready outputs</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Each audit engagement is commissioned, scoped, executed, and reported independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION – FAQs | NO IMAGE */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Orientation FAQs
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* SECTION – PATHWAYS | NO IMAGE */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Pathways Forward
            </h2>
            <p className="text-muted-foreground">
              If you are evaluating specific audit needs, proceed to the relevant audit domain.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-10">
            {auditDomains.map((domain) => (
              <Link
                key={domain.title}
                to={domain.href}
                className="group bg-card rounded-lg p-4 border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 text-center"
              >
                <domain.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {domain.title.replace(' Audits', '')}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
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

export default AuditsOverview;
