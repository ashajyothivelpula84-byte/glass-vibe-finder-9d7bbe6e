import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GdpAudits = () => {
  const coverage = [
    { title: 'Warehouse Audits', description: 'Storage facility compliance and quality systems' },
    { title: 'Cold Storage Audits', description: 'Temperature-controlled logistics and monitoring' },
    { title: 'Distribution & Logistics Oversight', description: 'Transportation and supply chain integrity' },
  ];

  const faqItems = [
    {
      question: 'What does a GDP audit cover?',
      answer: 'Our GDP audits assess storage conditions, temperature monitoring, transportation practices, documentation systems, quality management, and overall compliance with Good Distribution Practice requirements.',
      category: 'gdp'
    },
    {
      question: 'Do you audit cold chain logistics?',
      answer: 'Yes. We conduct specialized cold chain audits covering temperature-controlled storage, monitoring systems, excursion management, and transportation validation.',
      category: 'gdp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GDP Audit Services"
        subtitle="Distribution and logistics audits ensuring product integrity throughout the pharmaceutical supply chain. Warehouses, cold chain, and transportation."
        badge="Distribution Excellence"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Scope Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Good Distribution Practice (GDP) is essential for maintaining product quality from manufacturer to patient. Our GDP audits assess your distribution network, storage facilities, and logistics operations to ensure compliance and product integrity.
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
              GDP audits are conducted by qualified auditors with relevant logistics and distribution expertise. Our risk-based approach focuses on critical control points throughout your distribution network.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Temperature mapping and monitoring assessment</li>
              <li>• Transportation validation review</li>
              <li>• Warehouse qualification evaluation</li>
              <li>• Documentation and traceability systems</li>
              <li>• Deviation and CAPA management</li>
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
            Discuss Your GDP Audit Needs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your distribution and logistics audits.
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

export default GdpAudits;
