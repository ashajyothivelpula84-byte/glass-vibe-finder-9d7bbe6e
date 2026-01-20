import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Truck, FlaskConical, ClipboardCheck, HeartPulse, Shield, CheckCircle, FileText, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// Images
import homeSupportingSystems from '@/assets/gxpify/home_supporting_systems_02.jpg';

const AuditsOverview = () => {
  const auditDomains = [
    {
      title: 'GMP Audits',
      description: 'Manufacturing, packaging, testing laboratories, supply chain, APIs, drug products (non-sterile & sterile), biologics, combination products, and device components',
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
      href: '/audits/gcp'
    },
    {
      title: 'GPvP Audits',
      description: 'Selective system-level and vendor-focused pharmacovigilance audits',
      icon: HeartPulse,
      href: '/audits/gpvp'
    }
  ];

  const reliabilityPoints = [
    'Execution aligned to the approved audit scope',
    'Consistent interpretation of audit evidence',
    'Clear ownership of professional audit judgment',
    'Structured, governance-ready reporting'
  ];

  const reliabilitySupports = [
    'Sponsors relying on audits for regulatory and oversight decisions',
    'Audit firms relying on delivered audits within broader audit programs'
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single audit only?',
      answer: 'Yes. Audits are undertaken based on defined commissioning needs. Engagement for one audit does not imply or require additional audits.',
      category: 'audits'
    },
    {
      question: 'Can audit firms commission multiple audits across different GxP domains?',
      answer: 'Yes. Audit firms may commission one or more audits across different GxP domains, with each audit independently scoped and governed.',
      category: 'audits'
    },
    {
      question: 'Does commissioning multiple audits change audit governance?',
      answer: 'No. Each audit engagement retains its own scope, execution, judgment, and reporting, regardless of the number of audits commissioned.',
      category: 'audits'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GxP Audit Services"
        subtitle="Commissioned GxP Audits Across the Product Lifecycle"
        badge="Audit Services"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify undertakes commissioned GxP audits for sponsors and audit firms across the life-sciences product lifecycle — from development-stage systems through manufacturing, distribution, clinical oversight, and pharmacovigilance governance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All audits are delivered under client-approved scope, with defined objectives and governed execution, so outcomes remain usable, defensible, and aligned with sponsor or audit-firm governance expectations.
            </p>
            <p className="text-sm text-muted-foreground">
              Organizations may engage GxPify for a single audit or multiple audit engagements across different GxP domains, based entirely on commissioning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Commissioned GxP Audits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Commissioned GxP Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At GxPify, audits are delivered as commissioned engagements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each audit engagement is characterized by:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Scope and objectives defined and approved by the commissioning party</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Applicable regulatory expectations agreed prior to execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied within that scope</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Reporting issued to the commissioning sponsor or audit firm</span>
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
              In all cases, audit execution and reporting remain governed, consistent, and traceable.
            </p>
          </div>
        </div>
      </section>

      {/* GxP Audit Domains */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              GxP Audit Domains Available
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
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <domain.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {domain.title}
                </h3>
                <p className="text-sm text-muted-foreground">{domain.description}</p>
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                  View {domain.title.replace(' Audits', '')} Audit Services
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Each audit domain is commissioned, scoped, and reported independently, regardless of how many audits are undertaken.
          </p>
        </div>
      </section>

      {/* Reliability in Audit Execution */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Reliability</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Reliability in Audit Execution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond domain coverage, GxPify emphasizes reliable audit execution — the factor that determines whether audit outputs remain meaningful after completion.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reliability at GxPify is reflected through:
              </p>
              <ul className="space-y-3 mb-6">
                {reliabilityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This approach supports:
              </p>
              <ul className="space-y-2">
                {reliabilitySupports.map((support) => (
                  <li key={support} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{support}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img 
                src={homeSupportingSystems} 
                alt="Consistency and traceability in audit execution" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage and Audit Delivery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Global Coverage and Audit Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GxPify supports global sponsors and audit firms operating across regulated life-sciences markets, including North America, Europe, and other globally regulated regions.
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              Audit planning, judgment, and reporting are conducted in English under defined governance controls.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Where required, language or regional facilitation is applied to support execution without altering audit accountability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link to="/global-coverage">
                  View Global Coverage
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/india-asean">
                  View India & Regional Audit Delivery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Governance */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Governance</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance as the Common Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All GxP audits delivered by GxPify operate within a defined governance framework that supports:
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
                <p className="text-foreground font-medium text-sm">Traceable and defensible reporting</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              This governance framework exists to support sponsor and audit-firm oversight, not to replace it.
            </p>
            <Button variant="outline" asChild>
              <Link to="/audit-governance">
                Review Audit Governance & Methodology
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              GxP Audit Services – FAQs
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
            Pathways Forward
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            If you are evaluating specific audit needs, you may proceed directly to the relevant audit domain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/audits/gmp">GMP</Link>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/audits/gdp">GDP</Link>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/audits/glp">GLP</Link>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/audits/gcp">GCP</Link>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/audits/gpvp">GPvP</Link>
            </Button>
          </div>
          <div className="mt-6">
            <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact GxPify</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/audits/gmp" className="text-muted-foreground hover:text-accent transition-colors">GMP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gdp" className="text-muted-foreground hover:text-accent transition-colors">GDP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/glp" className="text-muted-foreground hover:text-accent transition-colors">GLP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gcp" className="text-muted-foreground hover:text-accent transition-colors">GCP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gpvp" className="text-muted-foreground hover:text-accent transition-colors">GPvP</Link>
            <span className="text-border">|</span>
            <Link to="/audit-governance" className="text-muted-foreground hover:text-accent transition-colors">Audit Governance</Link>
            <span className="text-border">|</span>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AuditsOverview;
