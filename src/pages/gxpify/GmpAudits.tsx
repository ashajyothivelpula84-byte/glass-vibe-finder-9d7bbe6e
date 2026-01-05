import { Link } from 'react-router-dom';
import { ArrowRight, Factory, CheckCircle, ClipboardCheck, FileText, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GMP page images
import gmpPharma from '@/assets/gxpify/gmp_primary_pharma_01.jpg';
import gmpBiologics from '@/assets/gxpify/gmp_primary_biologics_02.jpg';
import gmpDevices from '@/assets/gxpify/gmp_primary_devices_03.jpg';
import gmpQc from '@/assets/gxpify/gmp_primary_qc_04.jpg';
import gmpSupporting from '@/assets/gxpify/gmp_supporting_docs_01.jpg';

const GmpAudits = () => {
  const facilityImages = [
    { src: gmpPharma, alt: 'Pharmaceutical Manufacturing Facility', label: 'Pharma Manufacturing' },
    { src: gmpBiologics, alt: 'Biologics Production Facility', label: 'Biologics Facility' },
    { src: gmpDevices, alt: 'Medical Devices Manufacturing', label: 'Medical Devices' },
    { src: gmpQc, alt: 'Quality Control Laboratory', label: 'QC Laboratory' },
  ];

  const auditScope = [
    'API manufacturers',
    'Finished dosage form manufacturers (OSDs, topicals, sterile products)',
    'Biologics (Drug Substance & Drug Product)',
    'Primary packaging material manufacturers',
    'Device component suppliers',
    'Contract manufacturing organizations (CDMOs)',
  ];

  const auditFocus = [
    { title: 'Quality System Effectiveness', icon: CheckCircle },
    { title: 'Data Integrity and Documentation Practices', icon: FileText },
    { title: 'Deviation, Change, and CAPA Systems (assessment only)', icon: ClipboardCheck },
    { title: 'Supplier and Material Controls', icon: Package },
  ];

  const pageFaqs = [
    {
      question: 'Are CAPAs implemented after GMP audits?',
      answer: 'No. CAPA implementation is the responsibility of the audited organization. GxPify assesses CAPA systems but does not implement corrective actions, maintaining audit independence.',
      category: 'gmp'
    },
    {
      question: 'Are these regulatory inspections?',
      answer: 'No. These are sponsor / audit-firm commissioned audits. GxPify does not conduct regulatory inspections or provide regulatory approval. Our audits support your internal oversight and vendor qualification decisions.',
      category: 'gmp'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="GMP Audit Services"
        subtitle="Vendor & Supply Chain Oversight"
        badge="Manufacturing"
      />

      {/* Facility Images Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {facilityImages.map((image) => (
              <div key={image.label} className="group relative rounded-xl overflow-hidden border border-border shadow-md">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-primary-foreground">
                  {image.label}
                </p>
              </div>
            ))}
          </div>

          {/* Introduction */}
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                <Factory className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  GxPify conducts Sponsor / Audit Firm Commissioned GMP audits supporting oversight of 
                  outsourced manufacturing and supply chain activities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These audits primarily function as vendor audits, supporting sponsor decision-making 
                  related to qualification, continued reliance, and regulatory risk management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Scope */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Scope
            </h2>
            <p className="text-muted-foreground mb-8">
              GMP audits may cover, as commissioned:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {auditScope.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Focus */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Audit Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {auditFocus.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-secondary border border-border rounded-xl">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Image Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img 
                src={gmpSupporting} 
                alt="GMP audit documentation and batch records" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Documentation & Records Review
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our GMP audits include thorough review of batch records, SOPs, and quality documentation 
                to assess compliance with regulatory requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Batch record review and verification</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">SOP compliance assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Training record evaluation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Equipment qualification documentation</span>
                </li>
              </ul>
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
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Request a GMP Audit Discussion
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your manufacturing facility audits.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Contact GxPify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/audits/gdp" className="text-muted-foreground hover:text-accent transition-colors">GDP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/glp" className="text-muted-foreground hover:text-accent transition-colors">GLP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gcp" className="text-muted-foreground hover:text-accent transition-colors">GCP</Link>
            <span className="text-border">|</span>
            <Link to="/audits/gpvp" className="text-muted-foreground hover:text-accent transition-colors">GPvP</Link>
            <span className="text-border">|</span>
            <Link to="/audit-governance" className="text-muted-foreground hover:text-accent transition-colors">Audit Governance</Link>
            <span className="text-border">|</span>
            <Link to="/faqs" className="text-muted-foreground hover:text-accent transition-colors">FAQs</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GmpAudits;