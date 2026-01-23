import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
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
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// Home page images: exactly 5 images (1 hero + 4 supporting)
import homeHero from '@/assets/gxpify/home_hero_01.jpg';
import homeSupportingDocs from '@/assets/gxpify/home_supporting_docs_01.jpg';
import homeSupportingAccountability from '@/assets/gxpify/home_supporting_accountability_03.jpg';
import homeSupportingGlobal from '@/assets/gxpify/home_supporting_global_04.jpg';
import homeSupportingGovernance from '@/assets/gxpify/home_supporting_governance_05.jpg';

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
      {/* SECTION 1 — HERO (IMAGE #1 – PRIMARY) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0">
          <img 
            src={homeHero} 
            alt="Governed audit execution" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-editorial-h1 font-semibold text-primary-foreground mb-6 leading-tight">
              Audit Outcomes You Can Stand Behind
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10">
              Founder-led, audit-first GxP audits under client-approved scope and governed execution
            </p>

            {/* CTA */}
            <div>
              <Button asChild className="btn-formal bg-surface text-foreground border-border hover:bg-accent-soft">
                <Link to="/audits">
                  Explore GxP Audit Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V32C240 56 480 68 720 56C960 44 1200 20 1440 32V80H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — COMMISSIONED GXP AUDITS ACROSS THE PRODUCT LIFECYCLE (No image — icons only) */}
      <section className="section-editorial">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
              Commissioned GxP Audits Across the Product Lifecycle
            </h2>
            <p className="text-body text-secondary leading-relaxed mb-8">
              GxPify supports audits spanning the life-sciences product lifecycle — from development-related systems through manufacturing, distribution, clinical oversight, and pharmacovigilance governance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {auditDomains.map((domain) => (
              <Link
                key={domain.title}
                to={domain.href}
                className="group flex flex-col items-center p-6 bg-surface rounded-lg border border-border hover:border-accent transition-all duration-150"
              >
                <div className="p-3 bg-accent-soft rounded-lg mb-4 group-hover:bg-accent/10 transition-colors duration-150">
                  <domain.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-150">
                  {domain.title}
                </h3>
              </Link>
            ))}
          </div>

          <p className="text-sm text-secondary text-center mt-8 max-w-2xl mx-auto">
            Each audit engagement is commissioned independently, with scope and objectives defined by the commissioning party prior to execution.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHY MANY AUDITS MISS WHAT MATTERS (IMAGE #2 – SUPPORTING) */}
      <section className="section-editorial bg-accent-soft/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-text">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded mb-4">
                <Network className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Audit Insight</span>
              </div>
              <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
                Why Many Audits Miss What Matters
              </h2>
              <p className="text-body text-secondary leading-relaxed mb-6">
                Most audits do not fall short because procedures are missing. They fall short because:
              </p>
              <ul className="space-y-3">
                {whyAuditsMiss.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body text-secondary leading-relaxed mt-6">
                GxPify's audit approach focuses on how systems operate within the approved audit scope, so conclusions reflect actual execution across interfaces relevant to the engagement.
              </p>
            </div>
            <div className="relative">
              <img 
                src={homeSupportingDocs} 
                alt="Fragmented audit interfaces and handoffs" 
                className="img-editorial w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOUNDER-LED ACCOUNTABILITY (IMAGE #3 – SUPPORTING) */}
      <section className="section-editorial">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded mb-4">
              <User className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Accountability</span>
            </div>
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
              Founder-Led Accountability
            </h2>
            <p className="text-body text-secondary leading-relaxed mb-4">
              All GxPify audits are delivered under single-point Lead Auditor accountability.
            </p>
            <p className="text-body text-secondary leading-relaxed mb-8">
              Within the client-approved audit scope, the Lead Auditor is responsible for executing the audit, evaluating audit evidence, and applying professional audit judgment. This model supports consistency, traceability, and defensible audit conclusions without altering client authority over audit intent or scope.
            </p>
            
            {/* Image centered below text */}
            <img 
              src={homeSupportingAccountability} 
              alt="Stable central accountability structure" 
              className="img-editorial w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — GLOBAL CLIENTS. DEFINED AUDIT DELIVERY. (IMAGE #4 – SUPPORTING, FULL WIDTH SHALLOW) */}
      <section className="section-editorial bg-accent-soft/30">
        <div className="container-wide">
          {/* Full-width shallow image */}
          <img 
            src={homeSupportingGlobal} 
            alt="Cross-regional audit coverage abstraction" 
            className="img-editorial w-full h-48 md:h-64 object-cover mb-12"
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded mb-4">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Coverage</span>
            </div>
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
              Global Clients. Defined Audit Delivery.
            </h2>
            <p className="text-body text-secondary leading-relaxed mb-6">
              GxPify supports global sponsors and audit firms operating across regulated life-sciences markets, including North America, Europe, and other globally regulated regions.
            </p>
            <ul className="space-y-3 text-left max-w-xl mx-auto mb-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground"><strong className="font-semibold">Global Coverage</strong> reflects where sponsors and audit firms operate and commission audits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground"><strong className="font-semibold">Audit Delivery</strong> reflects where audits are executed in accordance with approved scope</span>
              </li>
            </ul>
            <p className="text-sm text-secondary">
              This distinction supports accurate expectations and consistent governance across geographies.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SINGLE OR MULTIPLE AUDIT NEEDS (No image) */}
      <section className="section-editorial">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded mb-4">
              <Layers className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Flexibility</span>
            </div>
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
              Single or Multiple Audit Needs
            </h2>
            <p className="text-body text-secondary leading-relaxed mb-6">
              Organizations may engage GxPify for:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">A single audit requirement, or</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Multiple audit engagements across different GxP domains</span>
              </li>
            </ul>
            <p className="text-body text-secondary leading-relaxed">
              Each audit engagement retains its own defined scope, execution, and reporting, regardless of engagement size or audit mix.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — AUDIT GOVERNANCE AS A FOUNDATION (IMAGE #5 – SUPPORTING) */}
      <section className="section-editorial bg-accent-soft/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded mb-4">
                <Scale className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Governance</span>
              </div>
              <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
                Audit Governance as a Foundation
              </h2>
              <p className="text-body text-secondary leading-relaxed mb-6">
                GxPify audits are delivered within a defined governance framework that supports:
              </p>
            </div>

            <ul className="space-y-3 mb-8 max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Clear scope definition before execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Consistent application of professional judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Structured, traceable reporting</span>
              </li>
            </ul>

            <p className="text-body text-secondary text-center leading-relaxed mb-8">
              This governance framework exists to support sponsor and audit-firm oversight — not to replace or override it.
            </p>

            {/* Image below text */}
            <img 
              src={homeSupportingGovernance} 
              alt="Governance framework with repeating structured forms" 
              className="img-editorial w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — RESOURCES FOR BETTER AUDIT DECISIONS (No image) */}
      <section className="section-editorial">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Resources</span>
            </div>
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
              Resources for Better Audit Decisions
            </h2>
            <p className="text-body text-secondary leading-relaxed mb-6">
              GxPify shares audit-relevant perspectives intended to support:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Clearer audit scoping</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Understanding of outsourced operating models</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Identification of accountability blind spots</span>
              </li>
            </ul>
            <p className="text-body text-secondary leading-relaxed mb-8">
              These resources inform audit thinking ahead of commissioning decisions.
            </p>
            <Button variant="outline" asChild className="btn-formal">
              <Link to="/resources">
                View Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — HOME PAGE FAQs (No image) */}
      <section className="section-editorial bg-accent-soft/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-8">
              Home Page FAQs (Orientation)
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* SECTION 10 — PATHWAYS FORWARD (No image) */}
      <section className="section-editorial">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-editorial-h2 font-semibold text-foreground mb-6">
              Pathways Forward
            </h2>
            <p className="text-body text-secondary leading-relaxed mb-8">
              If this audit-first, governance-aligned approach fits your expectations, you may explore audit services or initiate engagement through formal channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-formal bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/audits">
                  Explore GxP Audit Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="btn-formal">
                <Link to="/contact">
                  Contact GxPify
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER NAVIGATION (No images — text only) */}
      <section className="py-8 border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/about" className="text-secondary hover:text-accent transition-colors duration-150">About GxPify</Link>
            <span className="text-border">•</span>
            <Link to="/audits" className="text-secondary hover:text-accent transition-colors duration-150">GxP Audit Services</Link>
            <span className="text-border">•</span>
            <Link to="/audit-governance" className="text-secondary hover:text-accent transition-colors duration-150">Audit Governance & Methodology</Link>
            <span className="text-border">•</span>
            <Link to="/global-coverage" className="text-secondary hover:text-accent transition-colors duration-150">Coverage & Delivery</Link>
            <span className="text-border">•</span>
            <Link to="/resources" className="text-secondary hover:text-accent transition-colors duration-150">Audit Resources</Link>
            <span className="text-border">•</span>
            <Link to="/faqs" className="text-secondary hover:text-accent transition-colors duration-150">Global FAQs</Link>
            <span className="text-border">•</span>
            <Link to="/contact" className="text-secondary hover:text-accent transition-colors duration-150">Contact</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GxpHome;
