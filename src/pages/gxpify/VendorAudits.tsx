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
        badge="Supply Chain Integrity"
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
            Discuss Your Vendor Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your supplier qualification audits.
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

export default VendorAudits;
