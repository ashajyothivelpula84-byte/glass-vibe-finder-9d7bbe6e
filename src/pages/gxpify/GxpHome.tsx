import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Network, 
  Building, 
  Factory, 
  Truck, 
  FlaskConical, 
  ClipboardCheck, 
  HeartPulse,
  MapPin,
  Scale,
  Layers,
  Award,
  BookOpen,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';

const GxpHome = () => {
  const auditServices = [
    {
      title: 'GMP Audit Services',
      description: 'Manufacturing & contract operations',
      icon: Factory,
      href: '/audits/gmp'
    },
    {
      title: 'GDP Audit Services',
      description: 'Warehousing, logistics & distribution',
      icon: Truck,
      href: '/audits/gdp'
    },
    {
      title: 'GLP Audit Services',
      description: 'Nonclinical research environments',
      icon: FlaskConical,
      href: '/audits/glp'
    },
    {
      title: 'GCP Audit Services (Limited)',
      description: 'BA/BE & Phase I only',
      icon: ClipboardCheck,
      href: '/audits/gcp'
    },
    {
      title: 'GPvP Audit Services (Selective)',
      description: 'Vendor-focused PV audits',
      icon: HeartPulse,
      href: '/audits/gpvp'
    }
  ];

  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-20 right-10 w-72 h-72 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-20 left-10 w-64 h-64 border border-primary-foreground/5 rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Independent Audit Practice</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Sponsor / Audit Firm Commissioned GxP Audits{' '}
              <span className="text-accent">Delivered Across India & ASEAN</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-in max-w-3xl">
              Independent, scope-driven audits supporting global life sciences organizations and audit firms 
              across development, manufacturing, distribution, and pharmacovigilance vendors (as applicable).
            </p>

            {/* Hero Icons */}
            <div className="flex flex-wrap gap-6 mb-10 animate-fade-in">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm">Audit Integrity</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm">Global Clients</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Network className="w-5 h-5 text-accent" />
                <span className="text-sm">Vendor Oversight</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
                <Link to="/audits">
                  Explore GxP Audit Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Discuss an Audit Requirement</Link>
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

      {/* WHO WE WORK WITH */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Building className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Our Clients</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Who We Work With
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GxPify supports life sciences sponsors and global audit firms seeking disciplined, 
                regulator-aligned audit oversight of outsourced activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Typical commissioning entities include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Pharmaceutical and biotechnology sponsors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Medical device and combination product organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Global audit firms acting on behalf of sponsors</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Audit delivery is aligned to defined scope, contractual mandate, and regulatory expectations.
              </p>
            </div>
            <div className="relative">
              <div className="bg-secondary rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-card rounded-xl">
                    <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">Global</p>
                    <p className="text-sm text-muted-foreground">Client Base</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-xl">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">Independent</p>
                    <p className="text-sm text-muted-foreground">Oversight</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-xl">
                    <Scale className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">Disciplined</p>
                    <p className="text-sm text-muted-foreground">Approach</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-xl">
                    <ClipboardCheck className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">Aligned</p>
                    <p className="text-sm text-muted-foreground">To Regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GxP AUDIT SERVICES */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              GxP Audit Services
            </h2>
            <p className="text-muted-foreground">
              GxPify delivers Sponsor / Audit Firm Commissioned GxP audits, including vendor and supply chain audits, across:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {auditServices.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Each audit is planned and executed with scope discipline, ensuring outcomes are relevant, defensible, and decision-useful.
            </p>
            <Button variant="outline" asChild>
              <Link to="/audits">
                View GxP Audit Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INDIA & ASEAN DELIVERY */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-secondary rounded-2xl p-8 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Single-point accountability</p>
                      <p className="text-sm text-muted-foreground">For audit judgment and reporting</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <ClipboardCheck className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Scope-aligned delivery</p>
                      <p className="text-sm text-muted-foreground">To sponsor or audit-firm commissioning scope</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Globe className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Local auditor usage</p>
                      <p className="text-sm text-muted-foreground">In ASEAN where required by geography or language</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Scale className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Consistent methodology</p>
                      <p className="text-sm text-muted-foreground">Across all engagements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Delivery Model</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                India & ASEAN Delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Audit delivery is primarily executed across India and ASEAN under a founder-led, 
                Lead Auditor–driven model.
              </p>
              <Button variant="outline" asChild>
                <Link to="/india-asean">
                  India & ASEAN Delivery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
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
                Audit Governance & Methodology
              </h2>
              <p className="text-muted-foreground">
                All audits are governed through a structured methodology covering:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">Pre-audit planning and scope alignment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">On-site or remote execution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">Risk-based observation classification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">Clear, defensible reporting</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  A strict separation is maintained between:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Audit services</span>
                  </li>
                  <li className="text-muted-foreground pl-8">and</li>
                  <li className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">QMS strengthening activities</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  undertaken separately under the CAT Framework
                </p>
              </div>
            </div>

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

      {/* CAT FRAMEWORK */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">QMS Strengthening</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                CAT Framework
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Clarify – Assess – Transfer (India & ASEAN)
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For small to mid-size life sciences organizations operating in India & ASEAN, 
                GxPify offers structured QMS strengthening support using the Clarify – Assess – Transfer (CAT) framework.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CAT engagements are:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Separate from audit assignments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Not undertaken for audit-firm–commissioned work</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Designed to strengthen internal systems without compromising audit independence</span>
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/cat-framework">
                  CAT Framework
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-secondary rounded-2xl p-8 border border-border text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">C</span>
                    </div>
                    <p className="font-semibold text-foreground">Clarify</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">A</span>
                    </div>
                    <p className="font-semibold text-foreground">Assess</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">T</span>
                    </div>
                    <p className="font-semibold text-foreground">Transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT GXPIFY */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              About GxPify
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GxPify is a founder-led audit practice built on extensive experience across pharmaceutical manufacturing, 
              regulatory affairs, corporate QA, development QA, and global audit delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The practice reflects a disciplined, audit-first philosophy grounded in operational realism and regulatory intent.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">
                About GxPify
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Knowledge Hub</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Resources
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Access practical perspectives on:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-foreground">Audit Governance</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-foreground">Vendor Qualification</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-foreground">Independence Principles</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-foreground">Scope Management</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Designed to support informed sponsor decision-making.
            </p>
            <Button variant="outline" asChild>
              <Link to="/resources">
                Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Discuss Your Audit Requirement
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Whether you represent a sponsor organization or an audit firm, GxPify supports clearly scoped, 
            professionally governed GxP audits across India and ASEAN.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Contact GxPify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default GxpHome;
