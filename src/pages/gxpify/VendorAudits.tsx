import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { faqs } from '@/data/gxpifyData';

const VendorAudits = () => {
  const vendorCategories = [
    { title: 'API Manufacturer Audits', description: 'Active pharmaceutical ingredient suppliers' },
    { title: 'CDMO Audits', description: 'Contract development and manufacturing organizations' },
    { title: 'Contract Testing Laboratory (CTL) Audits', description: 'Analytical and testing service providers' },
    { title: 'KSM & Starting Material Supplier Audits', description: 'Key starting materials and intermediates' },
    { title: 'Excipient Supplier Audits', description: 'Pharmaceutical excipient manufacturers' },
  ];

  const deviceComponents = [
    'Auto-Injectors',
    'Prefilled Syringes',
    'Cartridges & Delivery Components',
  ];

  const vendorFaqs = faqs.filter(f => f.category === 'vendor');

  return (
    <PageLayout>
      <PageHero
        title="Vendor & Supply Chain Audit Services"
        subtitle="Thorough supplier qualification and ongoing monitoring across your pharmaceutical supply network. API, CDMO, CTL, excipients, and device components."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Scope Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Supply chain integrity is critical to product quality and patient safety. Our vendor audit services provide comprehensive, independent assessments of your suppliers and service providers, from APIs and excipients to contract manufacturers and testing laboratories.
            </p>
          </div>

          <div className="space-y-6">
            {vendorCategories.map((category) => (
              <div key={category.title} className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Device Component & Combination Product Suppliers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We also audit suppliers of device components used in drug-device combination products, ensuring your delivery systems meet quality and regulatory requirements.
              </p>
              <div className="space-y-3">
                {deviceComponents.map((component) => (
                  <div key={component} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{component}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Vendor Audit Methodology
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vendor audits follow a risk-based approach, prioritizing critical quality attributes and supplier risk factors. Each audit is tailored to your specific supply chain requirements and regulatory context.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Risk-based supplier prioritization</li>
                <li>• Quality agreement alignment</li>
                <li>• Regulatory compliance assessment</li>
                <li>• Clear, actionable findings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={vendorFaqs} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Discuss Your Vendor Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to define the scope for your supplier qualification audits.
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

export default VendorAudits;
