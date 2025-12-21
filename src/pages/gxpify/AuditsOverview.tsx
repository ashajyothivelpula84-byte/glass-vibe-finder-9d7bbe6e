import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import ServiceCard from '@/components/gxpify/ServiceCard';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { auditServices, faqs } from '@/data/gxpifyData';

const AuditsOverview = () => {
  const auditFaqs = faqs.filter(f => f.category === 'general').slice(0, 3);

  const auditPhases = [
    { phase: 1, title: 'Scope Definition', description: 'Client-defined objectives and boundaries' },
    { phase: 2, title: 'Audit Planning', description: 'Risk-based preparation and scheduling' },
    { phase: 3, title: 'On-site Execution', description: 'Thorough assessment by qualified auditors' },
    { phase: 4, title: 'Findings & Review', description: 'Comprehensive observation documentation' },
    { phase: 5, title: 'Reporting', description: 'Clear, actionable audit report delivery' },
    { phase: 6, title: 'Follow-up', description: 'CAPA verification if contracted' },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Independent GxP Audit Services"
        subtitle="Comprehensive audit services across the pharmaceutical and life sciences value chain. Client-defined scope. Risk-based methodology. Lead Auditor accountability."
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Methodology
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All GxPify audits follow a risk-based, lifecycle-aligned methodology. Our approach is tailored to each client's specific requirements while maintaining consistent quality and objectivity. Audit scope is always client-defined and contract-governed.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Risk-based prioritization</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Lifecycle-aligned assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Client-defined scope</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-foreground">Contract-governed methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Phases */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Standard Audit Phases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditPhases.map((phase) => (
              <div key={phase.phase} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-semibold text-sm">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Audit Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
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
            <FAQAccordion faqs={auditFaqs} />
            <div className="mt-6">
              <Link to="/faqs" className="text-primary font-medium hover:underline">
                View all FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Ready to Discuss Your Audit Requirements?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to define the scope and objectives for your next audit engagement.
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

export default AuditsOverview;
