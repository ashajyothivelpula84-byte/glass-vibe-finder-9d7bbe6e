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
        badge="Patient Safety"
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
            Discuss Your GPvP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your pharmacovigilance system audits.
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

export default GpvpAudits;
