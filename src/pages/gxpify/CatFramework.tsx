import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { faqs } from '@/data/gxpifyData';

const CatFramework = () => {
  const catFaqs = faqs.filter(f => f.category === 'cat');

  const catSteps = [
    {
      letter: 'C',
      title: 'Consult',
      subtitle: 'Context for Training & QMS',
      description: 'We begin by understanding your organization\'s context, regulatory requirements, and specific needs. This informs the scope of assessment and training.',
    },
    {
      letter: 'A',
      title: 'Assess',
      subtitle: 'Gap & Lifecycle Readiness',
      description: 'A structured assessment of your quality management system against applicable requirements, identifying gaps and improvement opportunities.',
    },
    {
      letter: 'T',
      title: 'Train',
      subtitle: 'Role-Based GxP Training',
      description: 'Targeted, role-based training programs designed to address identified gaps and build GxP competency across your organization.',
    },
  ];

  const whoIsItFor = [
    'Pharmaceutical manufacturers seeking GxP training',
    'Organizations building or improving QMS',
    'Companies preparing for inspections (training focus)',
    'Teams requiring role-based competency development',
  ];

  return (
    <PageLayout>
      <PageHero
        title="CAT Framework"
        subtitle="Consult · Assess · Train — Our integrated framework for training and QMS enablement, available in India and ASEAN only."
      >
        <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full">
          India & ASEAN Only
        </span>
      </PageHero>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Purpose of CAT
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The CAT Framework is designed specifically for training and QMS enablement — not auditing. It provides organizations in India and ASEAN with structured support to build GxP competency and improve their quality management systems through a consultative, assessment-driven approach.
            </p>
          </div>

          {/* CAT Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {catSteps.map((step) => (
              <div key={step.letter} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-display font-bold text-xl mb-4">
                  {step.letter}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-accent mb-3">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Independence */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Governance & Independence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CAT is completely separate from our audit services to maintain independence. This separation is fundamental to our governance model.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Important:</p>
                    <p className="text-sm text-muted-foreground">
                      Organizations receiving CAT services in India and ASEAN cannot be audited by GxPify to avoid any conflict of interest.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CAT and audit services are organizationally separate</li>
                  <li>• No cross-over of personnel between functions</li>
                  <li>• Clear boundaries maintained in all engagements</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Who CAT Is For
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The CAT Framework is designed for organizations in India and ASEAN seeking to strengthen their GxP competencies and quality systems.
              </p>
              <div className="space-y-3">
                {whoIsItFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={catFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Interested in Training & QMS Support?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to discuss how the CAT Framework can support your organization's GxP competency and quality system development.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Training & QMS Enquiry
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default CatFramework;
