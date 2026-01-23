import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle, XCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import heroImage from '@/assets/gxpify/cat_primary_01.jpg';
import supportingImage from '@/assets/gxpify/cat_supporting_qms_01.jpg';

const CatFramework = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'what-cat-is', label: 'What CAT Is / Is Not' },
    { id: 'when-used', label: 'When CAT Is Used' },
    { id: 'three-elements', label: 'The Three Elements' },
    { id: 'governance', label: 'Governance & Independence' },
    { id: 'who-for', label: 'Who CAT Is For' },
    { id: 'relationship', label: 'Relationship to Audits' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'pathways', label: 'Pathways' },
  ];

  const catIs = [
    'A structured, time-bound framework',
    'Applied outside of audit engagements',
    'Focused on clarity, understanding, and informed handover',
    'Governed to preserve audit independence'
  ];

  const catIsNot = [
    'An audit',
    'An inspection simulation',
    'A consulting or remediation service',
    'A substitute for sponsor or audit-firm governance'
  ];

  const whenUsed = [
    'Early-stage or start-up organizations preparing for regulated operations',
    'Organizations transitioning between development phases',
    'New or evolving outsourcing and operating models',
    'Situations where scope, ownership, or system boundaries are unclear'
  ];

  const governanceSafeguards = [
    'CAT engagements are not converted into audits',
    'CAT outputs do not serve as audit evidence',
    'Cooling-off principles are applied before any audit engagement',
    'CAT is not offered to audit firms'
  ];

  const intendedFor = [
    'Start-ups and early-development life sciences organizations',
    'Small-to-mid-sized organizations evolving toward regulated operations',
    'Organizations seeking clarity before engaging sponsors or audit firms'
  ];

  const notIntendedFor = [
    'Established sponsor audit programs',
    'Audit-firm delivery models',
    'Inspection-facing audit substitution'
  ];

  const pageFaqs = [
    {
      question: 'Is CAT an audit?',
      answer: 'No. CAT does not produce audit conclusions or opinions.',
      category: 'cat'
    },
    {
      question: 'Can CAT lead directly into an audit?',
      answer: 'No. CAT outputs are not reused as audit evidence. Any audit engagement requires separate commissioning and governance alignment.',
      category: 'cat'
    },
    {
      question: 'Does CAT compromise audit independence?',
      answer: 'No. CAT operates under defined safeguards and cooling-off principles to preserve audit independence.',
      category: 'cat'
    },
    {
      question: 'Is CAT available globally?',
      answer: 'CAT availability is selective and based on engagement fit, operating context, and governance considerations.',
      category: 'cat'
    }
  ];

  const pathwayLinks = [
    { label: 'Audit Governance & Methodology', href: '/audit-governance', description: 'Governance framework details' },
    { label: 'GxP Audit Services', href: '/audits', description: 'Overview of audit services' },
    { label: 'About GxPify', href: '/about', description: 'Our approach and philosophy' },
    { label: 'Contact', href: '/contact', description: 'Discuss your requirements' }
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
            alt="CAT Framework - Clarify Assess Transfer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 backdrop-blur-sm">
              <Layers className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Non-Audit Framework</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              CAT (Clarify–Assess–Transfer) Framework
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Structured Clarity for Early-Stage and Evolving GxP Systems
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
                    The CAT (Clarify–Assess–Transfer) framework is a non-audit, non-judgmental capability offered by GxPify to support organizations that are building, transitioning, or stabilizing GxP systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    CAT exists to provide structured clarity — not audit conclusions — in situations where formal audits are not yet appropriate or effective.
                  </p>
                </div>
              </div>

              {/* What CAT Is — and Is Not */}
              <div id="what-cat-is" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    What CAT Is — and Is Not
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground font-medium mb-4">CAT is:</p>
                      <ul className="space-y-2">
                        {catIs.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground font-medium mb-4">CAT is not:</p>
                      <ul className="space-y-2">
                        {catIsNot.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-secondary/50 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm text-muted-foreground">
                      CAT does not generate audit opinions, audit classifications, or audit-ready conclusions.
                    </p>
                  </div>
                </div>
              </div>

              {/* When CAT Is Used */}
              <div id="when-used" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    When CAT Is Used
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    CAT is applied when audits would be premature or ineffective, including:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {whenUsed.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    CAT enables organizations to understand their current state before audits are commissioned.
                  </p>
                </div>
              </div>

              {/* Supporting Image - Three-Stage Progression */}
              <div className="mb-16">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img 
                    src={supportingImage} 
                    alt="Three-stage progression visualization" 
                    className="w-full h-auto max-h-[320px] object-cover"
                  />
                </div>
              </div>

              {/* The Three Elements of CAT */}
              <div id="three-elements" className="mb-16">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  The Three Elements of CAT
                </h2>
                
                <div className="space-y-6">
                  {/* Clarify */}
                  <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-display font-bold text-xl">
                        C
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground">Clarify</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Clarify focuses on understanding and documenting:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Operating models</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Accountability structures</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">System boundaries</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Interfaces across vendors, functions, or lifecycle stages</span>
                      </li>
                    </ul>
                    <div className="p-3 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        Clarify answers: "What actually exists today — and who owns what?"
                      </p>
                    </div>
                  </div>

                  {/* Assess */}
                  <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-display font-bold text-xl">
                        A
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground">Assess</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Assess involves a structured, non-audit evaluation of:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Alignment between intended and actual system behavior</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Gaps in governance, handoffs, or accountability</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Areas of ambiguity that could undermine future audits</span>
                      </li>
                    </ul>
                    <div className="p-3 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        Assess answers: "Where are the risks, ambiguities, or weak signals?"
                      </p>
                    </div>
                  </div>

                  {/* Transfer */}
                  <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-display font-bold text-xl">
                        T
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground">Transfer</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Transfer ensures outputs are:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Clearly documented</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Formally transferred back to the organization</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">Suitable for leadership decision-making or future audit planning</span>
                      </li>
                    </ul>
                    <div className="p-3 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        Transfer answers: "What should leadership do next — and what is ready for audit versus not?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governance and Independence Safeguards */}
              <div id="governance" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Governance and Independence Safeguards
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    CAT is governed separately from audit services.
                  </p>
                  
                  <p className="text-foreground font-medium mb-4">Key safeguards include:</p>
                  <ul className="space-y-3 mb-6">
                    {governanceSafeguards.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground italic">
                    These safeguards preserve the integrity of both CAT and audit services.
                  </p>
                </div>
              </div>

              {/* Who CAT Is Intended For */}
              <div id="who-for" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Who CAT Is Intended For
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground font-medium mb-4">CAT is selectively offered to:</p>
                      <ul className="space-y-2">
                        {intendedFor.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg">
                      <p className="text-foreground font-medium mb-4">CAT is not intended for:</p>
                      <ul className="space-y-2">
                        {notIntendedFor.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Relationship to GxPify Audits */}
              <div id="relationship" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Relationship to GxPify Audits
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    CAT and audits are intentionally separate.
                  </p>
                  
                  {/* Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-medium text-foreground">CAT</th>
                          <th className="text-left py-3 px-4 font-medium text-foreground">Audits</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 text-muted-foreground">Non-audit framework</td>
                          <td className="py-3 px-4 text-muted-foreground">Commissioned audit engagement</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 text-muted-foreground">No audit judgment</td>
                          <td className="py-3 px-4 text-muted-foreground">Formal audit judgment</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 text-muted-foreground">Internal clarity</td>
                          <td className="py-3 px-4 text-muted-foreground">External governance reliance</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-muted-foreground">Not inspection-facing</td>
                          <td className="py-3 px-4 text-muted-foreground">Inspection-relevant outputs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6 italic">
                    CAT exists to support readiness for audits — not to replace them.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div id="faqs" className="mb-16">
                <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    CAT — FAQs
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
                  CAT is positioned separately from audit services.
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
                    Discuss QMS Strengthening
                  </h2>
                  <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
                    Contact us to explore how the CAT Framework can support your organization.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link to="/contact">
                      Discuss QMS Strengthening
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

export default CatFramework;
