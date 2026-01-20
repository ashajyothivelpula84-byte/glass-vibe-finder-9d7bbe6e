import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Network, 
  Factory, 
  Truck, 
  FlaskConical, 
  ClipboardCheck, 
  HeartPulse,
  Scale,
  Layers,
  BookOpen,
  User,
  Users,
  FileText,
  Target,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// Home page images
import homeHero from '@/assets/gxpify/home_hero_01.jpg';
import homeSupportingDocs from '@/assets/gxpify/home_supporting_docs_01.jpg';
import homeSupportingSystems from '@/assets/gxpify/home_supporting_systems_02.jpg';

const GxpHome = () => {
  const auditDomains = [
    {
      title: 'GMP',
      description: 'APIs, drug products (non-sterile & sterile), biologics, combination products, device components, packaging, testing laboratories, supply chain',
      icon: Factory,
      href: '/audits/gmp'
    },
    {
      title: 'GDP',
      description: 'Storage, distribution, and logistics (India-based delivery)',
      icon: Truck,
      href: '/audits/gdp'
    },
    {
      title: 'GLP',
      description: 'Study-centric audits and CRO qualification',
      icon: FlaskConical,
      href: '/audits/glp'
    },
    {
      title: 'GCP',
      description: 'Oversight and governance audits of CROs, sites, and vendors',
      icon: ClipboardCheck,
      href: '/audits/gcp'
    },
    {
      title: 'GPvP',
      description: 'System-level and vendor-focused pharmacovigilance audits',
      icon: HeartPulse,
      href: '/audits/gpvp'
    }
  ];

  const whyAuditsMiss = [
    'Operating models within scope are not fully understood',
    'Execution is distributed across multiple vendors',
    'Accountability is assumed to transfer with outsourcing',
    'Scope is interpreted narrowly around documentation rather than system behavior'
  ];

  const pageFaqs = [
    {
      question: 'Are audits initiated by GxPify?',
      answer: 'No. All audits are commissioned by sponsors or audit firms, with scope and objectives defined prior to execution.',
      category: 'home'
    },
    {
      question: 'Does GxPify define audit scope?',
      answer: 'Audit scope is defined and approved by the commissioning party. GxPify executes audits and applies professional judgment within that approved scope.',
      category: 'home'
    },
    {
      question: 'Is GxPify independent from sponsors or audit firms?',
      answer: 'Independence refers to professional judgment and separation from operational responsibility, not separation from sponsor or audit-firm governance.',
      category: 'home'
    }
  ];

  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={homeHero} 
            alt="Global audit credibility" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Independent Audit Practice</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Audit Outcomes You Can{' '}
              <span className="text-accent">Stand Behind</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 animate-fade-in max-w-3xl">
              GxPify is a founder-led, audit-first practice delivering commissioned GxP audits under client-approved scope, governed execution, and single-point Lead Auditor accountability.
            </p>
            
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-8 animate-fade-in max-w-3xl">
              Audits are delivered to support sponsor oversight, audit-firm delivery, and regulatory decision-making across complex, outsourced life-sciences environments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
                <Link to="/audits">
                  Explore GxP Audit Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Request an Audit Discussion</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100V40C240 70 480 85 720 70C960 55 1200 20 1440 40V100H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* COMMISSIONED GxP AUDITS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Commissioned GxP Audits Across the Product Lifecycle
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify supports audits spanning the life-sciences product lifecycle — from development-related systems through manufacturing, distribution, clinical oversight, and pharmacovigilance governance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Audit domains include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-8">
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
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground max-w-4xl">
            Each audit engagement is commissioned independently, with scope and objectives defined by the commissioning party prior to execution.
          </p>
        </div>
      </section>

      {/* WHY AUDITS MISS */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Network className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Audit Insight</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Why Many Audits Miss What Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most audits do not fall short because procedures are missing. They fall short because:
              </p>
              <ul className="space-y-3 mb-6">
                {whyAuditsMiss.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                GxPify's audit approach focuses on how systems operate within the approved audit scope, so conclusions reflect actual execution across interfaces relevant to the engagement.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <img 
                  src={homeSupportingDocs} 
                  alt="Audit systems and interface analysis" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER-LED ACCOUNTABILITY */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <User className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Accountability</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Founder-Led Accountability
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              All GxPify audits are delivered under single-point Lead Auditor accountability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Within the client-approved audit scope, the Lead Auditor is responsible for executing the audit, evaluating audit evidence, and applying professional audit judgment. This model supports consistency, traceability, and defensible audit conclusions without altering client authority over audit intent or scope.
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL CLIENTS, DEFINED DELIVERY */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <img 
                  src={homeSupportingSystems} 
                  alt="Global coverage and delivery integration" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Coverage</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Global Clients. Defined Audit Delivery.
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
              <p className="text-sm text-muted-foreground">
                This distinction supports accurate expectations and consistent governance across geographies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SINGLE OR MULTIPLE AUDIT NEEDS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Flexibility</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Single or Multiple Audit Needs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Organizations may engage GxPify for:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Single Audit</h3>
                <p className="text-sm text-muted-foreground">A single audit requirement</p>
              </div>
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Multiple Audits</h3>
                <p className="text-sm text-muted-foreground">Multiple audit engagements across different GxP domains</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Each audit engagement retains its own defined scope, execution, and reporting, regardless of engagement size or audit mix.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIT GOVERNANCE */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Scale className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Governance</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Audit Governance as a Foundation
              </h2>
              <p className="text-muted-foreground">
                GxPify audits are delivered within a defined governance framework that supports:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <FileText className="w-6 h-6 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Clear scope definition before execution</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Scale className="w-6 h-6 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Consistent application of professional judgment</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <ClipboardCheck className="w-6 h-6 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Structured, traceable reporting</p>
              </div>
            </div>

            <p className="text-center text-muted-foreground mb-6">
              This governance framework exists to support sponsor and audit-firm oversight — not to replace or override it.
            </p>

            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/audit-governance">
                  Audit Governance & Methodology
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Resources</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Resources for Better Audit Decisions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GxPify shares audit-relevant perspectives intended to support:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Clearer audit scoping</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Understanding of outsourced operating models</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Identification of accountability blind spots</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mb-6">
              These resources inform audit thinking ahead of commissioning decisions.
            </p>
            <Button variant="outline" asChild>
              <Link to="/resources">
                View Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CLARIFYING FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Clarifying FAQs
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
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            If this audit-first, governance-aligned approach fits your expectations, you may explore audit services or initiate engagement through formal channels.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/audits">
              Explore GxP Audit Services
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
            <Link to="/audit-governance" className="text-muted-foreground hover:text-accent transition-colors">Audit Governance</Link>
            <span className="text-border">|</span>
            <Link to="/global-coverage" className="text-muted-foreground hover:text-accent transition-colors">Global Coverage</Link>
            <span className="text-border">|</span>
            <Link to="/india-asean" className="text-muted-foreground hover:text-accent transition-colors">India & ASEAN</Link>
            <span className="text-border">|</span>
            <Link to="/resources" className="text-muted-foreground hover:text-accent transition-colors">Resources</Link>
            <span className="text-border">|</span>
            <Link to="/faqs" className="text-muted-foreground hover:text-accent transition-colors">FAQs</Link>
            <span className="text-border">|</span>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GxpHome;
