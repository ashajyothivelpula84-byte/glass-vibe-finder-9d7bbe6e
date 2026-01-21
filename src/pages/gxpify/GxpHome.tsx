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
  FileText,
  CheckCircle
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
    'Fragmented execution',
    'Outsourced handoffs',
    'Assumed accountability',
    'Document-centric scope'
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0">
          <img 
            src={homeHero} 
            alt="Governed audit execution" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight">
              Audit Outcomes You Can Stand Behind
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-10 animate-fade-in">
              Founder-led, audit-first GxP audits under client-approved scope and governed execution
            </p>

            {/* CTA */}
            <div className="animate-fade-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
                <Link to="/audits">
                  Explore GxP Audit Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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

      {/* SECTION 2 — COMMISSIONED GXP AUDITS (No image — icons only) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Commissioned GxP Audits Across the Product Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {auditDomains.map((domain) => (
              <Link
                key={domain.title}
                to={domain.href}
                className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                  <domain.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {domain.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY MANY AUDITS MISS (IMAGE #2 – SUPPORTING) */}
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
              <ul className="space-y-3 mb-6">
                {whyAuditsMiss.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <img 
                  src={homeSupportingDocs} 
                  alt="Fragmented audit interfaces and handoffs" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOUNDER-LED ACCOUNTABILITY (IMAGE #3 – SUPPORTING) */}
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Within the approved audit scope, the Founder & Lead Auditor retains single-point responsibility for execution, judgment, and reporting.
            </p>
            
            {/* Image centered below text */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-3xl mx-auto">
              <img 
                src={homeSupportingAccountability} 
                alt="Stable central accountability structure" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — GLOBAL CLIENTS, DEFINED DELIVERY (IMAGE #4 – SUPPORTING, FULL WIDTH SHALLOW) */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          {/* Full-width shallow image */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg mb-12 max-h-64">
            <img 
              src={homeSupportingGlobal} 
              alt="Cross-regional audit coverage abstraction" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Coverage</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Global Clients. Defined Audit Delivery.
            </h2>
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground"><strong>Global Coverage</strong> = where clients operate</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground"><strong>Audit Delivery</strong> = where audits are executed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SINGLE OR MULTIPLE AUDIT NEEDS (No image) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Layers className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Flexibility</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Single or Multiple Audit Needs
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Single audit engagement</h3>
              </div>
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Multiple GxP domains</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Each audit retains independent scope.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — AUDIT GOVERNANCE AS A FOUNDATION (IMAGE #5 – SUPPORTING) */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Scale className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Governance</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Audit Governance as a Foundation
              </h2>
            </div>

            <ul className="space-y-3 mb-8 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Scope defined before execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Consistent professional judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Structured, traceable reporting</span>
              </li>
            </ul>

            {/* Image below text */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-3xl mx-auto">
              <img 
                src={homeSupportingGovernance} 
                alt="Governance framework with repeating structured forms" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — RESOURCES (No image) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Resources</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Resources for Better Audit Decisions
            </h2>
            <Button variant="outline" asChild>
              <Link to="/resources">
                View Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CLARIFYING FAQs (No image) */}
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

      {/* SECTION 10 — PATHWAYS FORWARD (No image) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Pathways Forward
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
                <Link to="/audits">
                  Explore GxP Audit Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Contact GxPify
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER LINKS (No images — text only) */}
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
