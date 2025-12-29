import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GcpAudits = () => {
  const scopeItems = [
    'BA/BE (Bioavailability/Bioequivalence) Study Audits',
    'Phase I Clinical Trial Site Audits',
    'CRO Oversight & Inspection Readiness',
    'Clinical Data Integrity Assessments',
  ];

  const faqItems = [
    {
      question: 'What is the scope of GCP audits at GxPify?',
      answer: 'Our GCP audit services are limited to BA/BE studies and Phase I clinical trials only. We do not conduct audits for Phase II, III, or IV clinical trials. This focused scope ensures we maintain deep expertise in early-phase clinical research compliance.',
      category: 'gcp'
    },
    {
      question: 'Do you audit investigator sites for all trial phases?',
      answer: 'No. We only audit clinical investigator sites conducting BA/BE studies or Phase I trials. For later phase trials (Phase II-IV), we recommend engaging audit providers with broader clinical trial expertise.',
      category: 'gcp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GCP Audit Services"
        subtitle="Limited scope clinical trial audits focused on BA/BE studies and Phase I trials. Ensuring early-phase clinical research compliance."
        badge="Limited Scope"
      />

      {/* Scope Clarification Banner */}
      <section className="py-6 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900">
        <div className="container-wide">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Limited Scope Notice</h3>
              <p className="text-sm text-muted-foreground">
                GxPify GCP audit services are limited to <strong>BA/BE studies</strong> and <strong>Phase I clinical trials only</strong>. 
                We do not conduct audits for Phase II, III, or IV trials. This deliberate limitation ensures specialized expertise and focused quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Scope Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our GCP audit services focus exclusively on early-phase clinical research. This includes bioavailability/bioequivalence studies and Phase I clinical trials conducted at investigator sites and contract research organizations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By maintaining a focused scope, we ensure our auditors have deep, specialized expertise in the specific regulatory requirements and quality considerations relevant to early-phase clinical research.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                What We Audit
              </h3>
              <div className="space-y-3">
                {scopeItems.map((item) => (
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
              Every GCP audit is led by a qualified Lead Auditor with specific experience in early-phase clinical research. Our governance framework ensures independence, objectivity, and consistent quality.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Protocol compliance and deviation assessment</li>
              <li>• Informed consent process review</li>
              <li>• Source data verification</li>
              <li>• Clinical data integrity assessment</li>
              <li>• Regulatory documentation review</li>
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
            Discuss Your GCP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your BA/BE or Phase I clinical site audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/faqs">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GcpAudits;
