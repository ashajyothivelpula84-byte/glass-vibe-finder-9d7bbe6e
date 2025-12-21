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

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Discuss Your GMP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to define the scope for your manufacturing facility audits.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Request an Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default GmpAudits;
