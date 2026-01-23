import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, Globe, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import heroImage from '@/assets/gxpify/delivery_india_asean_01.jpg';

const IndiaAsean = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'what-delivery-means', label: 'What Audit Delivery Means' },
    { id: 'india-delivery', label: 'Primary Delivery: India' },
    { id: 'regional-delivery', label: 'Regional Delivery' },
    { id: 'language-support', label: 'Language Support' },
    { id: 'global-coverage', label: 'Relationship to Global Coverage' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'pathways', label: 'Pathways' },
  ];

  const auditDeliveryMeans = [
    'Commissioned and scope-defined',
    'Governed from initiation through reporting',
    'Aligned to Lead Auditor accountability'
  ];

  const indiaAudits = [
    'GMP audits (manufacturing, testing laboratories, packaging, supply chain)',
    'GDP audits (distribution, logistics, and warehousing)',
    'GLP audits (CRO qualification and study audits)',
    'GCP audits (oversight, CRO, site, and vendor audits)',
    'Selective GPvP audits (system governance and vendor oversight)'
  ];

  const indiaExecutionPoints = [
    'Approved audit scope',
    'Applicable regulatory expectations',
    'Defined governance and reporting standards'
  ];

  const regionalDeliveryPoints = [
    'Is applied selectively, based on audit scope and site location',
    'Operates under the same governance framework',
    'Does not imply permanent regional presence or delegated judgment'
  ];

  const languagePoints = [
    'Audit scope, interpretation, judgment, and reporting remain in English',
    'Lead Auditor accountability is retained',
    'Facilitation supports execution only and does not own audit conclusions'
  ];

  const pageFaqs = [
    {
      question: 'Does audit delivery in India affect audit judgment or quality?',
      answer: 'No. All audits are delivered under the same governance framework with consistent application of professional judgment, regardless of location.',
      category: 'delivery'
    },
    {
      question: 'Are audits delivered outside India part of a local audit network?',
      answer: 'No. Regional audit delivery does not involve delegated audit networks or local ownership of audit judgment.',
      category: 'delivery'
    },
    {
      question: 'Does delivery location determine audit scope?',
      answer: 'No. Audit scope is defined and approved by the commissioning sponsor or audit firm prior to execution.',
      category: 'delivery'
    }
  ];

  const pathwayLinks = [
    { label: 'Global Coverage', href: '/global-coverage', description: 'Where sponsors and audit firms commission audits' },
    { label: 'Audit Governance & Methodology', href: '/audit-governance', description: 'Governance framework for all audits' },
    { label: 'GxP Audit Services', href: '/audits', description: 'Overview of commissioned audit services' }
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
            src={heroImage} 
            alt="India and regional audit delivery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Audit Delivery</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              India & Regional Audit Delivery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Where Commissioned GxP Audits Are Executed
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
                    GxPify delivers commissioned GxP audits across India and select regions in alignment with client-approved audit scope and governed delivery controls.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This page explains where audits are executed and how delivery remains consistent, predictable, and accountable, regardless of geography.
                  </p>
                </div>
              </div>

              {/* What Audit Delivery Means */}
              <div id="what-delivery-means" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <ClipboardCheck className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      What "Audit Delivery" Means at GxPify
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At GxPify, audit delivery refers to the execution of commissioned audits — on-site, remote, or hybrid — at locations defined by the approved audit scope.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Audit delivery is always:</p>
                  <ul className="space-y-3 mb-6">
                    {auditDeliveryMeans.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      Delivery location does not alter audit intent, independence of judgment, or reporting discipline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary Audit Delivery Geography: India */}
              <div id="india-delivery" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Primary Audit Delivery Geography: India
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    India represents a primary audit delivery geography for GxPify, reflecting the concentration of regulated life-sciences operations and outsourced activities.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Audits delivered in India may include:</p>
                  <ul className="space-y-2 mb-6">
                    {indiaAudits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-foreground font-medium mb-4">All audits delivered in India are executed under:</p>
                  <ul className="space-y-2">
                    {indiaExecutionPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Regional Audit Delivery */}
              <div id="regional-delivery" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Regional Audit Delivery (When Commissioned)
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In addition to India, audit delivery may be undertaken in other regions when required by the commissioned audit scope.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Regional delivery:</p>
                  <ul className="space-y-3 mb-6">
                    {regionalDeliveryPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Audit interpretation, judgment, and reporting remain governed and consistent, regardless of execution location.
                  </p>
                </div>
              </div>

              {/* Language and Facilitation Support */}
              <div id="language-support" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Language and Facilitation Support
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Where audits are executed in environments where English is not the primary operating language, language facilitation may be applied to support audit execution.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">In all cases:</p>
                  <ul className="space-y-3 mb-6">
                    {languagePoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground">
                    This approach supports execution efficiency without compromising audit integrity.
                  </p>
                </div>
              </div>

              {/* Relationship to Global Coverage */}
              <div id="global-coverage" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Relationship to Global Coverage
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground">
                        <span className="font-medium">India & Regional Audit Delivery</span>{' '}
                        <span className="text-muted-foreground">explains where audits are executed.</span>
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground">
                        <span className="font-medium">Global Coverage</span>{' '}
                        <span className="text-muted-foreground">explains where sponsors and audit firms operate and commission audits.</span>
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6 italic">
                    These concepts are intentionally separated to ensure clarity, accuracy, and defensible positioning.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div id="faqs" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    India & Regional Audit Delivery — FAQs
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
                  Audit delivery operates within the same governance framework across all audit services.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
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
                    Discuss Audit Delivery
                  </h2>
                  <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
                    Contact us to discuss audit requirements for suppliers in India and regional locations.
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

export default IndiaAsean;
