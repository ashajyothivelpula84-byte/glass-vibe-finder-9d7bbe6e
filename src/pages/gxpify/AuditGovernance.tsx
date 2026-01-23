import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ClipboardCheck, Shield, Scale, FileText, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import heroImage from '@/assets/gxpify/audit_governance_primary_01.jpg';
import supportingImage from '@/assets/gxpify/audit_governance_supporting_01.jpg';

const AuditGovernance = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'governed-delivery', label: 'Governed Delivery' },
    { id: 'lead-auditor', label: 'Lead Auditor Accountability' },
    { id: 'scope-control', label: 'Scope Control' },
    { id: 'methodology', label: 'Audit Methodology' },
    { id: 'reporting', label: 'Reporting Discipline' },
    { id: 'language', label: 'Language Support' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'pathways', label: 'Pathways' },
  ];

  const governedDeliveryMeans = [
    'Audit scope and objectives are defined and approved prior to execution',
    'Audit execution remains aligned to the approved scope throughout',
    'Professional audit judgment is applied consistently and traceably',
    'Reporting follows a disciplined, governance-ready structure'
  ];

  const leadAuditorResponsibilities = [
    'Executing the audit',
    'Interpreting and evaluating audit evidence',
    'Applying professional audit judgment',
    'Issuing audit conclusions and final reports'
  ];

  const accountabilityEnsures = [
    'Clear ownership of audit judgment',
    'Consistency across engagements',
    'No fragmentation of audit responsibility'
  ];

  const scopeControlPoints = [
    'Audit scope is approved prior to execution',
    'Audit execution remains aligned to the approved scope',
    'Any scope clarification is addressed through commissioning channels'
  ];

  const methodologySteps = [
    { step: 1, title: 'Engagement clarification', description: 'Confirming scope, objectives, and governance' },
    { step: 2, title: 'Audit planning', description: 'Aligning execution approach to approved scope' },
    { step: 3, title: 'Audit execution', description: 'Evaluating system behavior and evidence' },
    { step: 4, title: 'Audit reporting', description: 'Consolidating evidence, judgment, and conclusions' }
  ];

  const reportingCharacteristics = [
    'Clear linkage between observations and supporting evidence',
    'Transparent articulation of professional audit judgment',
    'Language suitable for sponsor oversight and audit-firm reliance'
  ];

  const languagePoints = [
    'Audit scope, interpretation, judgment, and reporting remain in English',
    'Lead Auditor accountability is retained',
    'Facilitation supports execution only and does not own audit conclusions'
  ];

  const pageFaqs = [
    {
      question: 'Does GxPify define audit scope?',
      answer: 'No. Audit scope and objectives are defined and approved by the commissioning sponsor or audit firm.',
      category: 'governance'
    },
    {
      question: 'What does "independent" mean in GxPify audits?',
      answer: 'Independence refers to the application of professional audit judgment without operational responsibility.',
      category: 'governance'
    },
    {
      question: 'Is the same governance applied across all GxP domains?',
      answer: 'Yes. The same governance framework applies across GMP, GDP, GLP, GCP, and GPvP audits.',
      category: 'governance'
    }
  ];

  const pathwayLinks = [
    { label: 'GxP Audit Services', href: '/audits', description: 'Overview of commissioned audit services' },
    { label: 'GMP Audit Services', href: '/audits/gmp', description: 'Manufacturing and quality audits' },
    { label: 'GDP Audit Services', href: '/audits/gdp', description: 'Distribution and logistics audits' },
    { label: 'GLP Audit Services', href: '/audits/glp', description: 'Laboratory practice audits' },
    { label: 'GCP Audit Services', href: '/audits/gcp', description: 'Clinical practice audits' },
    { label: 'GPvP Audit Services', href: '/audits/gpvp', description: 'Pharmacovigilance audits' }
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
            alt="Audit governance and methodology framework" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 backdrop-blur-sm">
              <ClipboardCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Governance Framework</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Audit Governance & Methodology
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4">
              Governed GxP Audit Delivery
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
                    GxPify operates under a defined audit governance framework designed to preserve audit integrity, scope discipline, and consistency of professional judgment across all commissioned GxP audits.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This framework ensures audit outcomes are reliable for sponsor oversight, audit-firm reliance, and regulatory decision-making, without altering client authority over audit intent or audit scope.
                  </p>
                </div>
              </div>

              {/* What Governed Audit Delivery Means */}
              <div id="governed-delivery" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      What Governed Audit Delivery Means at GxPify
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Audits are delivered as structured, commissioned engagements, not as ad-hoc evaluations.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Governed audit delivery means:</p>
                  <ul className="space-y-3 mb-6">
                    {governedDeliveryMeans.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      This approach ensures audit outcomes remain predictable, defensible, and suitable for sponsor and audit-firm reliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lead Auditor Accountability */}
              <div id="lead-auditor" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Lead Auditor Accountability
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    All audits delivered by GxPify operate under single-point Lead Auditor accountability.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Within the client-approved audit scope, the Lead Auditor is responsible for:</p>
                  <ul className="space-y-2 mb-6">
                    {leadAuditorResponsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-foreground font-medium mb-4">This accountability model ensures:</p>
                  <ul className="space-y-2 mb-6">
                    {accountabilityEnsures.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Client authority over audit intent and scope remains unchanged.
                  </p>
                </div>
              </div>

              {/* Supporting Image - Accountability & Methodology */}
              <div className="mb-16">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img 
                    src={supportingImage} 
                    alt="Accountability and methodology flow" 
                    className="w-full h-auto max-h-[320px] object-cover"
                  />
                </div>
              </div>

              {/* Scope Control and Boundary Discipline */}
              <div id="scope-control" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Scope Control and Boundary Discipline
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Audit governance at GxPify is anchored in formal scope control.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {scopeControlPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-muted-foreground">
                    This discipline ensures audits remain objective evaluations of compliance and system effectiveness within the agreed scope.
                  </p>
                </div>
              </div>

              {/* Audit Methodology */}
              <div id="methodology" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <ClipboardCheck className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Audit Methodology (High-Level)
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    While audit methodologies vary by GxP domain, all GxPify audits follow a consistent high-level structure:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {methodologySteps.map((item) => (
                      <div key={item.step} className="flex items-start gap-4 p-4 bg-secondary/50 border border-border rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Detailed methodology steps are applied within each engagement in alignment with applicable regulatory expectations.
                  </p>
                </div>
              </div>

              {/* Reporting Discipline */}
              <div id="reporting" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Reporting Discipline
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Audit reports issued by GxPify are structured to support governance use, not operational instruction.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Reporting is characterized by:</p>
                  <ul className="space-y-3 mb-6">
                    {reportingCharacteristics.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-muted-foreground">
                    Reports are designed to be defensible, traceable, and inspection-relevant.
                  </p>
                </div>
              </div>

              {/* Language and Facilitation Support */}
              <div id="language" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Language and Facilitation Support
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Where audits are executed in environments where English is not the primary operating language, language facilitation may be applied to support audit execution.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">In all cases:</p>
                  <ul className="space-y-3">
                    {languagePoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div id="faqs" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Audit Governance — FAQs
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
                  Audit governance underpins all GxPify audit services.
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
                    Discuss Audit Governance
                  </h2>
                  <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
                    Contact us to understand how governance supports your audit requirements.
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

export default AuditGovernance;
