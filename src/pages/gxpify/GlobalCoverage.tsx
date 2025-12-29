import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Building2, FileText, Users, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

const GlobalCoverage = () => {
  const commissioningRegions = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'European Union', flag: '🇪🇺', note: 'Ireland, Germany, Netherlands, etc.' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'APAC', flag: '🌏' },
  ];

  const commissioningTypes = [
    {
      icon: Building2,
      title: 'Sponsors',
      description: 'Overseeing outsourced activities'
    },
    {
      icon: Users,
      title: 'Global Audit Firms',
      description: 'Acting under sponsor mandate'
    }
  ];

  const governancePoints = [
    'Defined scope',
    'Contractual terms',
    'Applicable regulatory expectations'
  ];

  const pageFaqs = [
    {
      id: 'gc-1',
      question: 'Are these regulatory inspections?',
      answer: 'No. GxPify conducts audits, not inspections.',
      category: 'coverage'
    },
    {
      id: 'gc-2',
      question: 'Do you represent clients before regulators?',
      answer: 'No. GxPify does not provide regulatory representation.',
      category: 'coverage'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="Global Coverage"
        subtitle="Sponsor / Audit Firm Commissioning Model"
        badge="Worldwide Reach"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              GxPify supports global life sciences organizations and audit firms that commission audits for outsourced activities.
            </p>
            
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Commissioning Clients Typically Operate From
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {commissioningRegions.map((region) => (
                <div key={region.name} className="p-5 bg-card border border-border rounded-lg">
                  <span className="text-3xl mb-3 block">{region.flag}</span>
                  <h3 className="font-display font-semibold text-foreground">{region.name}</h3>
                  {region.note && (
                    <p className="text-sm text-muted-foreground mt-1">{region.note}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Audit scope, regulatory focus, and reporting expectations are driven by client commissioning requirements, not geography alone.
            </p>
          </div>
        </div>
      </section>

      {/* Commissioning Clarity */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Commissioning Clarity
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Engagements May Be Commissioned By
                </h3>
                <div className="space-y-4">
                  {commissioningTypes.map((type) => (
                    <div key={type.title} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{type.title}</h4>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  All Audits Are Governed By
                </h3>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <ul className="space-y-3">
                    {governancePoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
            Discuss Global Audit Commissioning
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to learn more about how we support your global audit program.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-muted border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/india-asean" className="text-muted-foreground hover:text-accent transition-colors">
              India & ASEAN Delivery
            </Link>
            <span className="text-border">|</span>
            <Link to="/audits" className="text-muted-foreground hover:text-accent transition-colors">
              Audit Services
            </Link>
            <span className="text-border">|</span>
            <Link to="/audit-governance" className="text-muted-foreground hover:text-accent transition-colors">
              Audit Governance
            </Link>
            <span className="text-border">|</span>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlobalCoverage;
