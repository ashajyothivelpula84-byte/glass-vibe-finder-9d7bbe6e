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

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Discuss Your GLP/GCP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to define the scope for your research facility or clinical site audits.
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

export default GlpGcpAudits;
