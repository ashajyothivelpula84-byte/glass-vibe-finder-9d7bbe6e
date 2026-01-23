import { useState, useEffect } from 'react';
import { HelpCircle, Users, Target, Scale, Globe, FileText, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import faqsHeroImage from '@/assets/gxpify/faqs_primary_01.jpg';

// Page-specific FAQ data organized by section
const commissioningFaqs = [
  {
    question: 'Who can commission audits from GxPify?',
    answer: 'GxPify audits may be commissioned by life-sciences sponsors or by audit firms acting on behalf of sponsors.',
    category: 'commissioning'
  },
  {
    question: 'Does commissioning through an audit firm change audit governance?',
    answer: 'No. Whether audits are commissioned directly by sponsors or through audit firms, the same governance framework, scope discipline, and reporting standards apply.',
    category: 'commissioning'
  },
  {
    question: 'Can GxPify be engaged for a single audit only?',
    answer: 'Yes. Audits are undertaken based on defined commissioning needs. Engagement for one audit does not imply or require additional audits.',
    category: 'commissioning'
  }
];

const scopeFaqs = [
  {
    question: 'Who defines and approves audit scope?',
    answer: 'Audit scope and objectives are defined and approved by the commissioning sponsor or audit firm prior to execution.',
    category: 'scope'
  },
  {
    question: 'Can audit scope change during execution?',
    answer: 'Audit scope remains fixed during execution. Any scope clarification or change is addressed through formal commissioning alignment.',
    category: 'scope'
  },
  {
    question: 'Does GxPify expand audit scope based on observations?',
    answer: 'No. Observations are evaluated strictly within the approved audit scope. Scope expansion is not assumed or implied.',
    category: 'scope'
  }
];

const independenceFaqs = [
  {
    question: 'What does "independent audit" mean at GxPify?',
    answer: 'Independence refers to the application of professional audit judgment without operational responsibility. It does not mean audits are performed outside sponsor or audit-firm governance.',
    category: 'independence'
  },
  {
    question: 'Who owns audit judgment and conclusions?',
    answer: 'Professional audit judgment is applied by the Lead Auditor within the approved scope. This supports sponsor and audit-firm governance without replacing it.',
    category: 'independence'
  },
  {
    question: 'Does prior audit exposure affect independence?',
    answer: 'No. Each audit is evaluated independently, based on its own scope, evidence, and objectives.',
    category: 'independence'
  }
];

const deliveryFaqs = [
  {
    question: 'Does sponsor location affect audit execution or judgment?',
    answer: 'No. Sponsor location does not influence audit execution, interpretation, judgment, or reporting.',
    category: 'delivery'
  },
  {
    question: 'Are audits always delivered in the same geography?',
    answer: 'No. Audit delivery locations depend on the approved audit scope and the location of audited sites, vendors, or systems.',
    category: 'delivery'
  },
  {
    question: 'Does GxPify operate local audit networks?',
    answer: 'No. Audit judgment and reporting are not delegated to local networks.',
    category: 'delivery'
  }
];

const reportingFaqs = [
  {
    question: 'Are audit reports suitable for inspection readiness?',
    answer: 'Yes. Audit reports are structured to support governance use and inspection readiness, without providing remediation instructions.',
    category: 'reporting'
  },
  {
    question: 'Does GxPify implement corrective actions following audits?',
    answer: 'No. GxPify audits evaluate compliance and system effectiveness. Implementation decisions remain with the client.',
    category: 'reporting'
  }
];

const applicabilityFaqs = [
  {
    question: 'Are these principles consistent across all GxP audits?',
    answer: 'Yes. The same governance, scope discipline, and professional judgment framework applies across GMP, GDP, GLP, GCP, and GPvP audits.',
    category: 'applicability'
  }
];

const sections = [
  { id: 'commissioning', label: 'Commissioning & Engagement' },
  { id: 'scope', label: 'Audit Scope & Ownership' },
  { id: 'independence', label: 'Independence & Judgment' },
  { id: 'delivery', label: 'Delivery & Geography' },
  { id: 'reporting', label: 'Reporting & Outputs' },
  { id: 'applicability', label: 'GxP Applicability' },
  { id: 'pathways', label: 'Pathways' }
];

const pathwayLinks = [
  { label: 'Audit Governance & Methodology', href: '/audit-governance', description: 'How audits are governed and executed' },
  { label: 'GxP Audit Services', href: '/audits', description: 'Commissioned audit services overview' },
  { label: 'Resources', href: '/resources', description: 'Audit thinking and perspective' },
  { label: 'Global Coverage', href: '/global-coverage', description: 'Where audits are commissioned and delivered' }
];

const FAQs = () => {
  const [activeSection, setActiveSection] = useState('commissioning');

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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={faqsHeroImage} 
            alt="Governance clarity for GxP audit engagements" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Governance Clarifications</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Global FAQs
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Common Clarifications Across GxPify Audit Engagements
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
      <section className="py-12 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              GxPify audits are delivered within a defined governance framework designed to support 
              sponsor oversight, audit-firm reliance, and regulatory decision-making. This page addresses 
              frequently asked questions related to how audits are commissioned, scoped, governed, and delivered.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These FAQs are intended to provide clarity and alignment, not operational, preparatory, 
              or advisory guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              
              {/* Commissioning and Engagement Model */}
              <div id="commissioning" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Commissioning and Engagement Model
                  </h2>
                </div>
                <FAQAccordion faqs={commissioningFaqs} />
              </div>

              {/* Audit Scope and Ownership */}
              <div id="scope" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Audit Scope and Ownership
                  </h2>
                </div>
                <FAQAccordion faqs={scopeFaqs} />
              </div>

              {/* Independence and Professional Judgment */}
              <div id="independence" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Independence and Professional Judgment
                  </h2>
                </div>
                <FAQAccordion faqs={independenceFaqs} />
              </div>

              {/* Audit Delivery and Geography */}
              <div id="delivery" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Audit Delivery and Geography
                  </h2>
                </div>
                <FAQAccordion faqs={deliveryFaqs} />
              </div>

              {/* Reporting and Use of Audit Outputs */}
              <div id="reporting" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Reporting and Use of Audit Outputs
                  </h2>
                </div>
                <FAQAccordion faqs={reportingFaqs} />
              </div>

              {/* Applicability Across GxP Domains */}
              <div id="applicability" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Applicability Across GxP Domains
                  </h2>
                </div>
                <FAQAccordion faqs={applicabilityFaqs} />
              </div>

              {/* Pathways */}
              <div id="pathways" className="scroll-mt-24">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Pathways
                </h2>
                <p className="text-muted-foreground mb-6">
                  These clarifications support understanding of how GxPify audits are governed and delivered.
                </p>
                <div className="grid gap-4">
                  {pathwayLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary hover:border-primary/20 transition-colors group"
                    >
                      <div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Navigation */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                  On this page
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQs;
