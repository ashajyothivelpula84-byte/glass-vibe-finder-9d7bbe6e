import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Target, RefreshCw, Layers, Building2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import heroImage from '@/assets/gxpify/resources_primary_01.jpg';

const Resources = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'intended', label: 'What This Page Provides' },
    { id: 'lifecycle', label: 'Product Lifecycle Understanding' },
    { id: 'scope', label: 'Audit Scope Must Be Bounded' },
    { id: 'governed', label: 'Governed View of Execution' },
    { id: 'outsourced', label: 'Outsourced Models' },
    { id: 'thought-leadership', label: 'Thought Leadership' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'pathways', label: 'Pathways' },
  ];

  const intendedProvides = [
    'Why audits succeed or fail beyond documentation',
    'How scope clarity affects audit value',
    'Where systemic risk typically emerges',
    'How disciplined audit execution is framed'
  ];

  const lifecyclePoints = [
    'Risks rarely remain confined to a single activity',
    'Early-stage decisions often surface as late-stage issues',
    'Oversight gaps frequently emerge at lifecycle handoffs'
  ];

  const scopePoints = [
    'Vague scope leads to fragmented evaluation',
    'Implicit assumptions replace explicit boundaries',
    'Observations lose context and weight'
  ];

  const governedCharacteristics = [
    'Scope and objectives are clarified prior to execution',
    'Audit activities align to approved boundaries',
    'Evidence is evaluated systematically',
    'Conclusions are traceable to observed system behavior'
  ];

  const outsourcedPoints = [
    'Accountability does not transfer with outsourcing',
    'Systemic issues often arise at vendor interfaces',
    'Oversight gaps emerge when governance assumptions go untested'
  ];

  const pageFaqs = [
    {
      question: 'Is this page intended to help organizations prepare for audits?',
      answer: 'No. This page provides auditor perspective, not preparatory guidance.',
      category: 'resources'
    },
    {
      question: 'Does this page replace Audit Governance or Global FAQs?',
      answer: 'No. Those pages address different objectives. Resources focuses on audit thinking, not rules or clarifications.',
      category: 'resources'
    },
    {
      question: 'Is this content applicable across all GxP audit types?',
      answer: 'Yes. The perspectives apply broadly across GMP, GDP, GLP, GCP, and GPvP audits, as they relate to system behavior, scope clarity, and accountability.',
      category: 'resources'
    }
  ];

  const pathwayLinks = [
    { label: 'Audit Governance & Methodology', href: '/audit-governance', description: 'Governance framework details' },
    { label: 'GxP Audit Services', href: '/audits', description: 'Overview of audit services' },
    { label: 'Global FAQs', href: '/faqs', description: 'Common questions answered' }
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
            alt="Audit resources and knowledge" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Audit Perspective</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Audit Thinking for Better Scope, Stronger Judgment, and Defensible Outcomes
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
                    The Resources page presents audit-relevant perspective drawn from real-world GxP audit execution across complex, outsourced life-sciences environments.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    It exists to support how audits are framed, interpreted, and relied upon — not how systems are built, prepared, remediated, or operated.
                  </p>
                </div>
              </div>

              {/* What This Page Is Intended to Provide */}
              <div id="intended" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      What This Page Is Intended to Provide
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    This page offers audit-relevant perspective on:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {intendedProvides.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      The content reflects audit thinking, not operational instruction or readiness guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Product Lifecycle Understanding Matters */}
              <div id="lifecycle" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Why Product Lifecycle Understanding Matters in Audits
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Effective GxP audits require more than familiarity with regulations.
                  </p>
                  <p className="text-foreground font-medium mb-6">
                    They require understanding how products, data, and accountability move across the lifecycle.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">Across GMP, GDP, GLP, GCP, and GPvP environments:</p>
                  <ul className="space-y-3 mb-6">
                    {lifecyclePoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Lifecycle awareness supports accurate interpretation of system behavior and more meaningful audit conclusions.
                  </p>
                </div>
              </div>

              {/* Why Audit Scope Must Be Explicit and Bounded */}
              <div id="scope" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Why Audit Scope Must Be Explicit and Bounded
                    </h2>
                  </div>
                  
                  <p className="text-foreground font-medium mb-6">
                    Unclear audit scope is one of the most common reasons audit outcomes fail to support regulatory or governance decisions.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">From an audit perspective:</p>
                  <ul className="space-y-3 mb-6">
                    {scopePoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground">
                    Conceptual frameworks (e.g., SIPOC, IPO) are referenced only to illustrate how auditors interpret scope and interfaces — not to prescribe how scope should be designed.
                  </p>
                </div>
              </div>

              {/* A Governed View of Audit Execution */}
              <div id="governed" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    A Governed View of Audit Execution
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    While audit methodologies may differ, disciplined audits share common characteristics:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {governedCharacteristics.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      This reinforces that audits are structured, governed evaluations — not ad-hoc inspections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Outsourced Operating Models */}
              <div id="outsourced" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Outsourced Operating Models and Accountability Blind Spots
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Modern life-sciences operations rely heavily on outsourcing across manufacturing, testing, distribution, research, and safety activities.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">From an audit perspective:</p>
                  <ul className="space-y-3 mb-6">
                    {outsourcedPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Understanding outsourced operating models is critical to evaluating sponsor oversight effectiveness and long-term compliance sustainability.
                  </p>
                </div>
              </div>

              {/* Selected Thought Leadership */}
              <div id="thought-leadership" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Selected Thought Leadership
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    From time to time, GxPify shares reflections drawn from audit execution and quality leadership experience.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Selected perspectives are published via LinkedIn and updated periodically.
                  </p>
                  
                  <a 
                    href="https://www.linkedin.com/company/gxpify" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* FAQs */}
              <div id="faqs" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Resources — FAQs
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
                  These perspectives may be useful when exploring how audits are governed and commissioned.
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
                    Discuss Audit Requirements
                  </h2>
                  <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
                    Contact us to discuss your audit scope and commissioning requirements.
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

export default Resources;
