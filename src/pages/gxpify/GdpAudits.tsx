import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Thermometer, AlertTriangle, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import gdpHeroImage from '@/assets/gxpify/gdp_primary_warehouse_01.jpg';
import gdpColdchainImage from '@/assets/gxpify/gdp_primary_coldchain_02.jpg';
import gdpSupportingImage from '@/assets/gxpify/gdp_supporting_docs_01.jpg';

const GdpAudits = () => {
  const auditScope = [
    'Warehouses and depots',
    'Cold storage facilities',
    'Transportation and logistics providers',
    'Temperature-controlled distribution',
    'Returns, recalls, and complaint handling',
  ];

  const auditFocus = [
    { title: 'Temperature Control and Monitoring', icon: Thermometer },
    { title: 'Deviation and Excursion Management', icon: AlertTriangle },
    { title: 'Vendor Qualification and Oversight', icon: Users },
    { title: 'Distribution Documentation and Traceability', icon: FileText },
  ];

  const pageFaqs = [
    {
      question: 'Do you audit cold chain operations?',
      answer: 'Yes, where included in the commissioned scope. Cold chain audits cover temperature-controlled storage, monitoring systems, excursion management, and transportation validation.',
      category: 'gdp'
    },
    {
      question: 'Are remote GDP audits supported?',
      answer: 'Yes, subject to scope and feasibility. Remote audits may be appropriate for certain elements of GDP assessment, particularly documentation review and system evaluations.',
      category: 'gdp'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={gdpHeroImage} 
            alt="GDP warehouse controlled temperature storage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <Truck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Distribution</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              GDP Audit Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Distribution & Cold Chain Oversight
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V24C240 42 480 51 720 42C960 33 1200 12 1440 24V60H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  GxPify conducts Sponsor / Audit Firm Commissioned GDP audits supporting oversight of 
                  pharmaceutical distribution and logistics operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  GDP audits focus on ensuring product integrity throughout the supply chain, 
                  particularly where third-party logistics providers are involved.
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
              GDP audits may include:
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

      {/* Cold Chain Image Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={gdpColdchainImage} 
                  alt="Cold chain storage facility" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Cold Chain Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our GDP audits include comprehensive assessment of cold chain operations, 
                  covering temperature-controlled storage, monitoring systems, excursion 
                  management protocols, and transportation qualification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Focus */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Audit Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {auditFocus.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
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

      {/* Supporting Image */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Documentation & Traceability
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive review of distribution records, shipment documentation, 
                  governance policies, and compliance frameworks ensures full traceability 
                  across your supply chain operations.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={gdpSupportingImage} 
                  alt="Distribution audit documentation review" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
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
            Request a GDP Audit Discussion
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to define the scope for your distribution and logistics audits.
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
            <Link to="/audits/gmp" className="text-muted-foreground hover:text-accent transition-colors">GMP</Link>
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

export default GdpAudits;
