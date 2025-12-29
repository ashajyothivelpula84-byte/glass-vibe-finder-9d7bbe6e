import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, Factory, Truck, FlaskConical, ClipboardCheck, HeartPulse, Shield, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const AuditsOverview = () => {
  const auditPortfolio = [
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
      title: 'GCP Audit Services',
      description: 'Limited Scope – BA/BE & Phase I only',
      icon: ClipboardCheck,
      href: '/audits/gcp',
      badge: 'Limited Scope'
    },
    {
      title: 'GPvP Audit Services',
      description: 'Selective – Vendor-focused PV audits',
      icon: HeartPulse,
      href: '/audits/gpvp',
      badge: 'Selective'
    }
  ];

  const pageFaqs = [
    {
      question: 'Are these audits conducted globally?',
      answer: 'Audits are commissioned globally and primarily delivered across India & ASEAN. Our Lead Auditor–driven model ensures consistent quality regardless of audit location.',
      category: 'overview'
    },
    {
      question: 'Do you bundle audits with consulting or training?',
      answer: 'No. Audit services are delivered independently of QMS strengthening activities. This separation is maintained to preserve audit independence and objectivity.',
      category: 'overview'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="Audit Services"
        subtitle="Sponsor / Audit Firm Commissioned GxP Audits"
        badge="GxP Audit Services"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                <Search className="w-6 h-6 text-accent" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GxPify delivers Sponsor / Audit Firm Commissioned GxP audits supporting oversight of outsourced 
                life sciences activities across the product lifecycle.
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit services are designed to support:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <CheckCircle className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Vendor Qualification</h3>
                <p className="text-sm text-muted-foreground">Vendor qualification and continued reliance</p>
              </div>
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <Shield className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Risk-Based Oversight</h3>
                <p className="text-sm text-muted-foreground">Risk-based oversight of outsourced operations</p>
              </div>
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <Scale className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Regulatory Readiness</h3>
                <p className="text-sm text-muted-foreground">Regulatory readiness and inspection defensibility</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              All audits are conducted under defined scope, contractual terms, and applicable regulatory expectations, 
              with clear separation from QMS enablement activities.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Portfolio */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Audit Portfolio
            </h2>
            <p className="text-muted-foreground">
              Each audit offering is deliberately scoped to preserve depth, relevance, and governance integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {auditPortfolio.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Frequently Asked Questions
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
            Discuss an Audit Requirement
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope and objectives for your next audit engagement.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Contact GxPify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links Section */}
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
