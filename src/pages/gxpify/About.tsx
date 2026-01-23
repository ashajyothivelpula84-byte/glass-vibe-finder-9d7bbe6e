import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, CheckCircle, XCircle, Globe, Shield, Database, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import heroImage from '@/assets/gxpify/about_founder_01.jpg';

const About = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'founder-led', label: 'Founder-Led Accountability' },
    { id: 'global-exposure', label: 'Global Audit Exposure' },
    { id: 'lifecycle', label: 'System & Lifecycle Experience' },
    { id: 'data-integrity', label: 'Data Integrity Perspective' },
    { id: 'why-established', label: 'Why GxPify Was Established' },
    { id: 'what-we-do', label: 'What GxPify Does' },
    { id: 'alignment', label: 'Alignment with Global Coverage' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'pathways', label: 'Pathways' },
  ];

  const founderAccountabilities = [
    'Executing commissioned audits',
    'Evaluating audit evidence',
    'Applying professional audit judgment',
    'Issuing audit conclusions and reports'
  ];

  const globalExposureSupports = [
    'Consistent audit judgment across differing regulatory expectations',
    'Evaluation of oversight effectiveness in distributed operating models',
    'Interpretation of system behavior independent of geography'
  ];

  const lifecycleExperience = [
    'Development and non-clinical environments',
    'Manufacturing and supply chain operations',
    'Corporate and global quality oversight',
    'Vendor, CMDO, CRO, and partner governance'
  ];

  const dataIntegrityExperience = [
    'Electronic quality and regulatory systems',
    'Data integrity governance and controls',
    'Digital interfaces supporting regulated activities'
  ];

  const industryChallenges = [
    'Audits focused on isolated observations rather than system behavior',
    'Fragmented delivery models with diluted accountability',
    'Blurred boundaries between audit evaluation and operational involvement',
    'Inconsistent application of professional judgment'
  ];

  const auditOutcomes = [
    'Meaningful for oversight decisions',
    'Defensible during inspections',
    'Usable across sponsors, partners, and audit firms'
  ];

  const whatGxpifyDoesNot = [
    'Operate or manage client quality systems',
    'Own remediation or implementation activities',
    'Act as an external Quality Unit or DQA',
    'Deliver operational consulting or transformation services'
  ];

  const alignmentReinforces = [
    'Global reach',
    'Centralized accountability',
    'Consistent audit judgment'
  ];

  const pageFaqs = [
    {
      question: 'Is GxPify a global audit firm?',
      answer: 'No. GxPify operates under founder-led accountability, not a distributed audit network.',
      category: 'about'
    },
    {
      question: 'Who issues audit conclusions?',
      answer: 'Audit conclusions are issued by the Founder & Lead Auditor under approved scope.',
      category: 'about'
    },
    {
      question: 'Does global exposure imply local audit teams?',
      answer: 'No. Global exposure reflects experience, not a delivery footprint.',
      category: 'about'
    }
  ];

  const pathwayLinks = [
    { label: 'GxP Audit Services', href: '/audits', description: 'Overview of audit services' },
    { label: 'Audit Governance & Methodology', href: '/audit-governance', description: 'Governance framework details' },
    { label: 'Global Coverage', href: '/global-coverage', description: 'Where sponsors are supported' },
    { label: 'Resources', href: '/resources', description: 'Audit thinking and perspective' }
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
            alt="About GxPify - Founder-led audit practice" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 backdrop-blur-sm">
              <User className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Founder-Led Practice</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              About GxPify
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Founder-Led Audits with Global Perspective
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
                    GxPify is a founder-led, audit-first practice delivering commissioned GxP audits under defined scope, governed execution, and disciplined application of professional judgment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The practice exists to support regulatory confidence, sponsor oversight, and audit-firm delivery across complex, outsourced life-sciences environments — where system behavior, not checklist completion, determines audit value.
                  </p>
                </div>
              </div>

              {/* Founder-Led Accountability */}
              <div id="founder-led" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Founder-Led Accountability
                    </h2>
                  </div>
                  
                  <p className="text-foreground font-medium mb-6">
                    GxPify operates under single-point founder accountability for audit execution and reporting.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">Within client-approved audit scope, the Founder & Lead Auditor is accountable for:</p>
                  <ul className="space-y-3 mb-6">
                    {founderAccountabilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      Audit accountability is clear, visible, and defensible, while client authority over audit intent and scope definition remains unchanged.
                    </p>
                  </div>
                </div>
              </div>

              {/* Global Audit Exposure */}
              <div id="global-exposure" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Global Audit Exposure (Clarified)
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Founder's audit experience spans regulated operations across multiple global regions, including complex outsourced and cross-border supply chains.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">This exposure supports:</p>
                  <ul className="space-y-3 mb-6">
                    {globalExposureSupports.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      GxPify does not operate through regional delivery teams, affiliates, or subcontracted auditors. Audit conclusions are issued under centralized, founder-led accountability, regardless of location.
                    </p>
                  </div>
                </div>
              </div>

              {/* System-Level and Lifecycle Experience */}
              <div id="lifecycle" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      System-Level and Lifecycle Experience
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    GxPify audits are informed by direct experience across the life-sciences product lifecycle, including:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {lifecycleExperience.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    This breadth enables audits that evaluate how systems operate across lifecycle handoffs, not just how they are documented at a single point.
                  </p>
                </div>
              </div>

              {/* Regulated Systems and Data Integrity Perspective */}
              <div id="data-integrity" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Regulated Systems and Data Integrity Perspective
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Audit judgment at GxPify is informed by hands-on experience with regulated electronic and data-driven environments, including:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {dataIntegrityExperience.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    This perspective supports credible evaluation of system dependencies, electronic evidence, and data flows across all GxP domains.
                  </p>
                </div>
              </div>

              {/* Why GxPify Was Established */}
              <div id="why-established" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Why GxPify Was Established
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    GxPify was established in response to recurring audit-delivery challenges observed across the industry:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {industryChallenges.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-foreground font-medium mb-4">
                    By anchoring audits in scope discipline, governance, and accountability, GxPify delivers outcomes that are:
                  </p>
                  <ul className="space-y-2">
                    {auditOutcomes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What GxPify Does — and Does Not Do */}
              <div id="what-we-do" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      What GxPify Does — and Does Not Do
                    </h2>
                  </div>
                  
                  <p className="text-foreground font-medium mb-6">
                    GxPify focuses exclusively on commissioned audit delivery.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">GxPify does not:</p>
                  <ul className="space-y-3 mb-6">
                    {whatGxpifyDoesNot.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    These boundaries are intentional and preserve audit independence.
                  </p>
                </div>
              </div>

              {/* Alignment with Global Coverage */}
              <div id="alignment" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Alignment with Global Coverage (Explicit)
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground">
                        <span className="font-medium">This page</span>{' '}
                        <span className="text-muted-foreground">establishes who holds audit accountability and how judgment is applied</span>
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground">
                        <Link to="/global-coverage" className="font-medium text-accent hover:underline">Global Coverage</Link>{' '}
                        <span className="text-muted-foreground">explains where audits may be executed and how centralized oversight is maintained</span>
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-foreground font-medium mb-4">Together, they reinforce:</p>
                  <ul className="space-y-2 mb-6">
                    {alignmentReinforces.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Without implying scale, networks, or regional delegation.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div id="faqs" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    About GxPify — FAQs
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
                  For additional context:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
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

export default About;
