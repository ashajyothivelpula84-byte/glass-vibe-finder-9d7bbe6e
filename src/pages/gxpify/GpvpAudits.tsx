import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, FileCheck, Database, Users, Bell, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GpvpAudits = () => {
  const auditScope = [
    'Case processing vendors',
    'Literature screening vendors',
    'Safety database support providers',
    'AE intake and call center operations',
  ];

  const auditFocus = [
    { title: 'Case Handling Workflows', icon: FileCheck },
    { title: 'Data Integrity and Timelines', icon: Database },
    { title: 'Vendor Quality Oversight', icon: Users },
    { title: 'Signal Escalation Processes (vendor level)', icon: Bell },
  ];

  const pageFaqs = [
    {
      question: 'Do you audit MAH PV systems?',
      answer: 'No, unless commissioned through a global audit firm. Core MAH-level PV system audits are not undertaken directly as part of standard GxPify GPvP audit services.',
      category: 'gpvp'
    },
    {
      question: 'Are PV audits offered globally?',
      answer: 'Yes, subject to scope and governance. GPvP audits can be commissioned globally with delivery primarily across India and ASEAN regions.',
      category: 'gpvp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GPvP Audit Services (Selective)"
        subtitle="Vendor-Focused Pharmacovigilance Oversight"
        badge="Selective"
      />

      {/* Scope Notice */}
      <section className="py-6 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900">
        <div className="container-wide">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Selective Scope Notice</h3>
              <p className="text-sm text-muted-foreground">
                GPvP audit services are <strong>vendor-focused only</strong>. Core MAH-level PV system audits 
                are not undertaken directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                <HeartPulse className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  GxPify conducts selective, vendor-focused GPvP audits, supporting sponsor oversight of 
                  outsourced pharmacovigilance activities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  GPvP audits are offered where vendor performance directly impacts sponsor safety obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Scope */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Scope
            </h2>
            <p className="text-muted-foreground mb-8">
              GPvP audits may include:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {auditScope.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              Core MAH-level PV system audits are not undertaken directly.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Focus */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Audit Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {auditFocus.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-secondary border border-border rounded-xl">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
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
            Request a GPvP Audit Discussion
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your pharmacovigilance vendor audits.
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
            <Link to="/audits/gmp" className="text-muted-foreground hover:text-accent transition-colors">GMP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gdp" className="text-muted-foreground hover:text-accent transition-colors">GDP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/glp" className="text-muted-foreground hover:text-accent transition-colors">GLP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gcp" className="text-muted-foreground hover:text-accent transition-colors">GCP</Link>
            <span className="text-border">|</span>
            <Link to="/audit-governance" className="text-muted-foreground hover:text-accent transition-colors">Audit Governance</Link>
            <span className="text-border">|</span>
            <Link to="/faqs" className="text-muted-foreground hover:text-accent transition-colors">FAQs</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GpvpAudits;
