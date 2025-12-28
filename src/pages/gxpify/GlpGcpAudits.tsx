import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GlpGcpAudits = () => {
  const coverage = [
    'GLP Laboratory Audits',
    'GCP Clinical Site Audits',
    'CRO Oversight Audits',
    'Sponsor Oversight & Inspection Readiness',
  ];

  const faqItems = [
    {
      question: 'What is the scope of GLP audits?',
      answer: 'Our GLP audits cover non-clinical laboratory practices including study conduct, data integrity, facility management, and regulatory compliance for preclinical research organizations.',
      category: 'glp-gcp'
    },
    {
      question: 'Do you audit investigator sites?',
      answer: 'Yes. We conduct GCP audits at clinical investigator sites, assessing protocol compliance, informed consent processes, source documentation, and overall site quality systems.',
      category: 'glp-gcp'
    },
    {
      question: 'How do CRO oversight audits work?',
      answer: 'CRO oversight audits evaluate your contracted research organization\'s quality systems, study conduct practices, and compliance with applicable regulations and your specific requirements.',
      category: 'glp-gcp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GLP & GCP Audit Services"
        subtitle="Independent audits for laboratories, clinical sites, and contract research organizations ensuring regulatory compliance for preclinical and clinical research."
        badge="Research Compliance"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Scope Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our GLP and GCP audit services help sponsors, CROs, and research facilities maintain compliance with applicable regulations. We provide objective assessments across the entire research lifecycle, from preclinical studies through clinical trials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All audits are conducted by qualified auditors with relevant domain expertise, following a risk-based methodology tailored to your specific requirements.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Typical Coverage
              </h3>
              <div className="space-y-3">
                {coverage.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
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
              Every GLP/GCP audit is led by a qualified Lead Auditor who maintains single-point accountability for the engagement. Our governance framework ensures independence, objectivity, and consistent quality across all audit activities.
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
            Discuss Your GLP/GCP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your research facility or clinical site audits.
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

export default GlpGcpAudits;
