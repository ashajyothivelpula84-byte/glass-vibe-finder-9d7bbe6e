import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import globalCoverageHeroImage from '@/assets/gxpify/global_coverage_01.jpg';

const GlobalCoverage = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'what-coverage-means', label: 'What Coverage Means' },
    { id: 'coverage-vs-delivery', label: 'Coverage vs Delivery' },
    { id: 'governance-support', label: 'Governance Support' },
    { id: 'delivery-relationship', label: 'Audit Delivery' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'pathways', label: 'Pathways' },
  ];

  const coverageMeans = [
    'Where sponsors and audit firms are headquartered or operate',
    'Where audit commissioning and oversight decisions originate',
    'Where audit outcomes are relied upon for governance and regulatory purposes'
  ];

  const separationBenefits = [
    'Accurate representation of audit capability',
    'Clear accountability for execution and professional judgment',
    'Predictable audit outcomes across regions'
  ];

  const governanceEnables = [
    'Align audit governance with sponsor and audit-firm expectations',
    'Apply consistent professional audit judgment regardless of sponsor location',
    'Support cross-regional oversight without delegating audit judgment'
  ];

  const deliveryDeterminers = [
    'The commissioned audit scope',
    'The location of audited sites, vendors, or systems',
    'Applicable regulatory and governance requirements'
  ];

  const pageFaqs = [
    {
      question: 'Does Global Coverage mean audits are delivered worldwide?',
      answer: 'No. Global Coverage refers to the locations of sponsors and audit firms supported. Audit delivery locations depend on the approved audit scope and are addressed separately.',
      category: 'coverage'
    },
    {
      question: 'Does sponsor location affect audit judgment or reporting?',
      answer: 'No. Audit judgment, interpretation, and reporting are applied consistently under the same governance framework, regardless of sponsor location.',
      category: 'coverage'
    },
    {
      question: 'Is Global Coverage linked to local offices or audit networks?',
      answer: 'No. Global Coverage does not imply local offices, delegated audit networks, or distributed audit judgment.',
      category: 'coverage'
    }
  ];

  const pathwayLinks = [
    { label: 'India & Regional Audit Delivery', href: '/india-asean', description: 'Where audits are executed' },
    { label: 'Audit Governance & Methodology', href: '/audit-governance', description: 'Governance framework details' },
    { label: 'GxP Audit Services', href: '/audits', description: 'Overview of audit services' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={globalCoverageHeroImage} 
            alt="Global coverage network visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Sponsor Geography</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Global Coverage
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Where GxPify Supports Sponsors — and How Geography Is Interpreted
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V24C240 42 480 51 720 42C960 33 1200 12 1440 24V60H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Introduction */}
              <div id="intro" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    GxPify supports global sponsors and audit firms operating across regulated life-sciences markets.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This page explains what Global Coverage means at GxPify and how it differs from audit delivery locations, so expectations remain accurate, defensible, and aligned with audit governance principles.
                  </p>
                </div>
              </div>

              {/* What "Global Coverage" Means */}
              <div id="what-coverage-means" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      What "Global Coverage" Means at GxPify
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Global Coverage refers to the operating locations of sponsors and audit firms that commission audits from GxPify.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">It reflects:</p>
                  <ul className="space-y-3 mb-6">
                    {coverageMeans.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground font-medium">
                      Global Coverage does not describe where audits are physically executed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coverage Is Distinct from Audit Delivery */}
              <div id="coverage-vs-delivery" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Coverage Is Distinct from Audit Delivery
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At GxPify, coverage and delivery are intentionally separated concepts:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="font-medium text-foreground mb-1">Global Coverage</p>
                      <p className="text-sm text-muted-foreground">Describes who is supported</p>
                    </div>
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="font-medium text-foreground mb-1">Audit Delivery</p>
                      <p className="text-sm text-muted-foreground">Describes where audits are executed in accordance with approved scope</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground font-medium mb-4">This separation ensures:</p>
                  <ul className="space-y-3">
                    {separationBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How Global Coverage Supports Governance */}
              <div id="governance-support" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      How Global Coverage Supports Governance
                    </h2>
                  </div>
                  
                  <p className="text-foreground font-medium mb-4">Global Coverage enables GxPify to:</p>
                  <ul className="space-y-3 mb-6">
                    {governanceEnables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Audit scope, interpretation, judgment, and reporting remain governed and consistent, irrespective of where sponsors operate globally.
                  </p>
                </div>
              </div>

              {/* Relationship to Audit Delivery */}
              <div id="delivery-relationship" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Relationship to Audit Delivery
                  </h2>
                  
                  <p className="text-foreground font-medium mb-4">Audit delivery locations are determined by:</p>
                  <ul className="space-y-3 mb-6">
                    {deliveryDeterminers.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Details on where audits are executed are addressed separately on:{' '}
                      <Link to="/india-asean" className="text-accent hover:underline font-medium">
                        India & Regional Audit Delivery
                      </Link>
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Maintaining this separation avoids overstatement and preserves audit integrity.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div id="faqs" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Global Coverage — FAQs
                  </h2>
                  <FAQAccordion faqs={pageFaqs} />
                </div>
              </div>

              {/* Pathways */}
              <div id="pathways" className="mb-16">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Pathways
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Global Coverage provides context for how audits are commissioned and relied upon.
                </p>
                <div className="grid gap-4">
                  {pathwayLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group p-5 bg-card border border-border rounded-xl hover:border-accent/50 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground group-hover:text-accent transition-colors">{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 bg-primary text-primary-foreground rounded-xl">
                <div className="text-center">
                  <h2 className="font-display text-2xl font-bold mb-4">
                    Discuss Global Audit Commissioning
                  </h2>
                  <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
                    Contact us to understand how global coverage supports your audit requirements.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link to="/contact">
                      Request an Audit Discussion
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - On This Page Navigation (Desktop Only) */}
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="p-5 bg-card border border-border rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    On this page
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-accent/10 text-accent font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                      >
                        {section.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlobalCoverage;
