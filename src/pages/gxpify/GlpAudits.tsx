import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FlaskConical, FileCheck, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GlpAudits = () => {
  const coverage = [
    { 
      title: 'GLP Laboratory Audits', 
      description: 'Non-clinical laboratory practices assessment including study conduct and data integrity',
      icon: FlaskConical
    },
    { 
      title: 'Facility Management Audits', 
      description: 'Equipment qualification, environmental controls, and facility maintenance review',
      icon: Building
    },
    { 
      title: 'Study-Specific Audits', 
      description: 'Protocol compliance, raw data verification, and final report assessment',
      icon: FileCheck
    },
  ];

  const faqItems = [
    {
      question: 'What is the scope of GLP audits?',
      answer: 'Our GLP audits cover non-clinical laboratory practices including study conduct, data integrity, facility management, and regulatory compliance for preclinical research organizations.',
      category: 'glp'
    },
    {
      question: 'Do you audit contract laboratories?',
      answer: 'Yes. We conduct GLP audits at contract laboratories conducting preclinical studies, assessing their quality systems, study conduct practices, and compliance with applicable GLP regulations.',
      category: 'glp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GLP Audit Services"
        subtitle="Independent audits for non-clinical laboratories ensuring regulatory compliance for preclinical research and safety studies."
        badge="Laboratory Compliance"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Scope Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our GLP audit services help sponsors and contract research organizations maintain compliance with Good Laboratory Practice regulations. We provide objective assessments of non-clinical laboratories conducting safety studies and preclinical research.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All audits are conducted by qualified auditors with relevant domain expertise, following a risk-based methodology tailored to your specific requirements.
              </p>
            </div>
            <div className="space-y-4">
              {coverage.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
                  <div className="p-3 bg-accent/10 rounded-lg h-fit">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance & Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every GLP audit is led by a qualified Lead Auditor who maintains single-point accountability for the engagement. Our governance framework ensures independence, objectivity, and consistent quality across all audit activities.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Risk-based audit planning aligned to your priorities</li>
              <li>• Clear scope definition before engagement</li>
              <li>• Qualified auditors with relevant expertise</li>
              <li>• Comprehensive, actionable reporting</li>
            </ul>
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
            <div className="mt-8">
              <Link to="/faqs" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 transition-colors">
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Discuss Your GLP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your laboratory audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/audit-governance">Audit Governance</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlpAudits;
