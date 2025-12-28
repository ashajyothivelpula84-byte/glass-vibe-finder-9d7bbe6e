import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GmpAudits = () => {
  const coverage = [
    { title: 'Pharmaceutical GMP', description: 'Solid dosage, sterile, API manufacturing' },
    { title: 'Biologics GMP', description: 'Drug substance (DS) and drug product (DP)' },
    { title: 'Medical Device Quality Systems', description: 'ISO 13485 aligned assessments' },
    { title: 'Development / Pilot / Kilo GMP', description: 'Early-stage manufacturing audits' },
  ];

  const faqItems = [
    {
      question: 'Do you audit biologics manufacturing?',
      answer: 'Yes. We conduct comprehensive biologics GMP audits covering both drug substance (DS) and drug product (DP) manufacturing, including cell culture, purification, formulation, and fill-finish operations.',
      category: 'gmp'
    },
    {
      question: 'Do you audit development / pilot facilities?',
      answer: 'Yes. We provide GMP audits for development, pilot, and kilo-scale manufacturing facilities, helping organizations prepare for scale-up and commercial manufacturing.',
      category: 'gmp'
    },
    {
      question: 'Do you audit medical devices?',
      answer: 'Yes. Our medical device quality system audits cover ISO 13485 requirements and applicable regulatory standards for device manufacturers and component suppliers.',
      category: 'gmp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GMP Audit Services"
        subtitle="Comprehensive manufacturing audits for pharmaceuticals, biologics, and medical devices. From development through commercial production."
        badge="Manufacturing Excellence"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Scope Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our GMP audit services cover the full spectrum of pharmaceutical and biologics manufacturing, from early development through commercial production. We help you assess facility compliance, identify gaps, and prepare for regulatory inspections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coverage.map((item) => (
              <div key={item.title} className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance & Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every GMP audit follows our established governance framework with Lead Auditor accountability. We align our methodology to your specific requirements while maintaining the independence and objectivity essential for credible audits.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Risk-based audit approach</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Qualified domain experts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Clear scope definition</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Actionable reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqItems} />
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Discuss Your GMP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your manufacturing facility audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/audits">View All Audits</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GmpAudits;
