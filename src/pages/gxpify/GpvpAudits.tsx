import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GpvpAudits = () => {
  const coverage = [
    { title: 'MAH Pharmacovigilance System Audits', description: 'Marketing authorization holder PV system assessment' },
    { title: 'PV Service Provider Audits', description: 'Third-party pharmacovigilance vendor evaluation' },
    { title: 'Global Safety Oversight', description: 'Multi-regional PV compliance assessment' },
  ];

  const faqItems = [
    {
      question: 'What is covered in a GPvP audit?',
      answer: 'Our GPvP audits assess pharmacovigilance system master files, case processing, signal detection, risk management, PSMF maintenance, and overall compliance with applicable regulations.',
      category: 'gpvp'
    },
    {
      question: 'Do you audit PV service providers?',
      answer: 'Yes. We conduct audits of third-party pharmacovigilance service providers to ensure they meet quality and compliance requirements for the services contracted.',
      category: 'gpvp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GPvP Audit Services"
        subtitle="Pharmacovigilance system audits for marketing authorization holders and service providers. Ensuring patient safety through robust PV compliance."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Scope Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pharmacovigilance is fundamental to patient safety. Our GPvP audit services help marketing authorization holders and their service providers maintain robust pharmacovigilance systems that meet global regulatory expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coverage.map((item) => (
              <div key={item.title} className="p-6 bg-card border border-border rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Delivery Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GPvP audits are conducted by auditors with relevant pharmacovigilance expertise. Our approach covers key elements of PV system effectiveness and regulatory compliance.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• PSMF review and adequacy assessment</li>
              <li>• Case processing and reporting timeliness</li>
              <li>• Signal detection and management</li>
              <li>• Risk management plan implementation</li>
              <li>• Vendor oversight and quality agreements</li>
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
            Discuss Your GPvP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to define the scope for your pharmacovigilance system audits.
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

export default GpvpAudits;
