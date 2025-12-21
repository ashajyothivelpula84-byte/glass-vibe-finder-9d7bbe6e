import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const SpecializedAudits = () => {
  const primaryPackaging = [
    'Vials & Ampoules',
    'Syringe Barrels',
    'Elastomeric Closures',
  ];

  const secondaryPackaging = [
    'Cartons & Labels',
    'Leaflets & Inserts',
    'Blister Foils',
  ];

  const regulatoryAudits = [
    { title: 'EU GMP Readiness', description: 'Gap assessment for EU regulatory compliance' },
    { title: 'US FDA PAI Readiness', description: 'Pre-approval inspection preparation' },
    { title: 'Inspection Readiness Audits', description: 'General regulatory inspection preparation' },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Specialized Supplier & Quality System Audits"
        subtitle="Packaging supplier audits, regulatory gap assessments, and inspection readiness audits. Comprehensive coverage for specialized requirements."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Primary Packaging Material Audits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Primary packaging materials directly contact your product and are critical to product quality. Our audits assess supplier quality systems and manufacturing controls.
              </p>
              <div className="space-y-3">
                {primaryPackaging.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Secondary & Printed Packaging Audits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Secondary packaging and printed materials are essential for product identification and patient information. We audit suppliers for quality and compliance.
              </p>
              <div className="space-y-3">
                {secondaryPackaging.map((item) => (
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
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ISO 15378-Aligned Packaging Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For primary packaging manufacturers, we offer audits aligned to ISO 15378 requirements, the international standard for quality management systems in primary pharmaceutical packaging.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Regulatory Gap Assessments & Inspection Readiness
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regulatoryAudits.map((item) => (
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

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Discuss Your Specialized Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to define the scope for your packaging or inspection readiness audits.
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

export default SpecializedAudits;
