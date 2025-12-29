import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GpvpAudits = () => {
  const coverage = [
    { title: 'PV Service Provider Audits', description: 'Third-party pharmacovigilance vendor evaluation and qualification' },
    { title: 'Vendor Oversight Assessments', description: 'Evaluation of contracted PV service quality and compliance' },
    { title: 'PV Quality Agreement Reviews', description: 'Assessment of vendor agreements and oversight mechanisms' },
  ];

  const faqItems = [
    {
      question: 'What does "selective" mean for GPvP audits?',
      answer: 'Our GPvP audit services are selective, focusing primarily on vendor-related pharmacovigilance assessments. This includes PV service provider audits and vendor oversight evaluations, rather than comprehensive MAH PV system audits.',
      category: 'gpvp'
    },
    {
      question: 'Do you audit full MAH pharmacovigilance systems?',
      answer: 'Our GPvP services focus on vendor-related PV audits. For comprehensive MAH pharmacovigilance system audits, we recommend engaging audit providers with broader PV system coverage.',
      category: 'gpvp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GPvP Audit Services"
        subtitle="Selective pharmacovigilance audits focused on vendor assessments and PV service provider evaluations."
        badge="Selective Scope"
      />

      {/* Scope Clarification Banner */}
      <section className="py-6 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900">
        <div className="container-wide">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Selective Scope Notice</h3>
              <p className="text-sm text-muted-foreground">
                GxPify GPvP audit services are <strong>vendor-focused only</strong>. We specialize in PV service provider audits 
                and vendor oversight assessments, not comprehensive MAH pharmacovigilance system audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Scope Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our selective GPvP audit services focus on vendor-related pharmacovigilance assessments. 
              We help sponsors evaluate and qualify their contracted PV service providers, ensuring vendor compliance 
              with applicable regulations and quality requirements.
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
