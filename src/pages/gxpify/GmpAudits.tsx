import { Link } from 'react-router-dom';
import { ArrowRight, Factory, CheckCircle, Scale, Globe, ClipboardCheck, Truck, FlaskConical, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';

// GMP page images - exactly 5 total (1 primary + 4 supporting)
import heroImage from '@/assets/gxpify/gmp_primary_pharma_01.jpg';
import supportingCommissioned from '@/assets/gxpify/gmp_supporting_docs_01.jpg';
import supportingContexts from '@/assets/gxpify/gmp_primary_biologics_02.jpg';
import supportingJudgment from '@/assets/gxpify/gmp_primary_qc_04.jpg';
import supportingCoverage from '@/assets/gxpify/gmp_primary_devices_03.jpg';

const GmpAudits = () => {
  const auditContexts = [
    'KSM and API manufacturing',
    'Drug product manufacturing (sterile and non-sterile)',
    'Biologics and biotechnology manufacturing',
    'Combination products and device components',
    'Primary and secondary packaging operations',
    'Contract manufacturing and development organizations (CDMOs)',
    'Contract testing laboratories',
    'Supply-chain and vendor GMP audits'
  ];

  const pageFaqs = [
    {
      question: 'Can GxPify be engaged for a single GMP audit only?',
      answer: 'Yes. GMP audits are undertaken based on defined commissioning needs. Engagement for one GMP audit does not imply or require additional audits.',
      category: 'gmp'
    },
    {
      question: 'Can audit firms commission GMP audits on behalf of sponsors?',
      answer: 'Yes. Audit firms may commission GMP audits on behalf of sponsors. Scope, objectives, and reporting expectations are defined by the commissioning audit firm in alignment with sponsor requirements.',
      category: 'gmp'
    },
    {
      question: 'Does GxPify define or approve GMP audit scope?',
      answer: 'No. Audit scope is defined and approved by the commissioning sponsor or audit firm. GxPify executes the audit and applies professional judgment within that approved scope.',
      category: 'gmp'
    }
  ];

  const relatedDomains = [
    { title: 'GDP Audit Services', href: '/audits/gdp', icon: Truck },
    { title: 'GLP Audit Services', href: '/audits/glp', icon: FlaskConical },
    { title: 'GCP Audit Services', href: '/audits/gcp', icon: ClipboardCheck },
    { title: 'GPvP Audit Services', href: '/audits/gpvp', icon: HeartPulse }
  ];

  return (
    <PageLayout>
      {/* PAGE TITLE */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Factory className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Manufacturing</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3">
              GMP Audit Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Good Manufacturing Practice (GMP) Audits
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY IMAGE (HERO – Full Width) */}
      <section className="bg-background">
        <div className="container-wide">
          <div className="rounded-xl overflow-hidden border border-border">
            <img 
              src={heroImage} 
              alt="GMP manufacturing facility - pharmaceutical production" 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introductory Text */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify undertakes commissioned GMP audits for sponsors and audit firms across manufacturing, testing, packaging, and outsourced supply-chain operations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GMP audits are delivered under client-approved scope, with defined objectives and governed execution, so audit outcomes support sponsor oversight, audit-firm reliance, and regulatory decision-making across diverse manufacturing and supply-chain models.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Engagements may involve a single GMP audit or multiple GMP audits across different manufacturing or supply-chain contexts, based entirely on commissioning requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Commissioned GMP Audits + Supporting Image 1 */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Commissioned GMP Audits
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingCommissioned} 
                alt="Commissioned engagement and scope governance" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At GxPify, GMP audits are delivered as commissioned audit engagements.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each GMP audit is characterized by:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Scope and objectives defined and approved by the commissioning sponsor or audit firm</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Applicable GMP regulatory expectations relevant to the audited activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Audit execution, evidence evaluation, and professional judgment applied strictly within the approved scope</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Audits may be commissioned directly by sponsors or by audit firms acting on behalf of sponsors.
              </p>
              <p className="text-sm text-muted-foreground">
                In all cases, audit execution and reporting remain governed, consistent, and traceable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: GMP Audit Contexts + Supporting Image 2 */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            GMP Audit Contexts
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GMP audits are typically commissioned for specific operational contexts, rather than as generic "GMP audits."
              </p>
              <p className="text-muted-foreground mb-4">Contexts may include:</p>
              <ul className="space-y-3 mb-6">
                {auditContexts.map((context) => (
                  <li key={context} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{context}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Each context is evaluated within its own approved scope.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingContexts} 
                alt="Modular GMP operational contexts" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Audit Execution and Judgment + Supporting Image 3 */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Audit Execution and Judgment
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingJudgment} 
                alt="Professional judgment and accountability" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Within the client-approved audit scope, the Lead Auditor is responsible for:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Executing the audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Evaluating audit evidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Applying professional audit judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Issuing audit conclusions and reports</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                This model supports consistency, traceability, and defensible audit outcomes without altering client authority over audit intent or scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Global Coverage and GMP Audit Delivery + Supporting Image 4 */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Global Coverage and GMP Audit Delivery
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GxPify supports global sponsors and audit firms operating across regulated life-sciences markets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Global Coverage</strong> reflects where sponsors and audit firms operate and commission GMP audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground"><strong>Audit Delivery</strong> reflects where GMP audits are executed in accordance with approved scope</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Audit planning, judgment, and reporting are conducted in English under defined governance controls.
              </p>
              <p className="text-sm text-muted-foreground">
                Where required, language or regional facilitation supports execution without altering audit accountability.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={supportingCoverage} 
                alt="Global oversight and delivery separation" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Audit Governance (Text Only) */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Governance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Audit Governance as a Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All GMP audits delivered by GxPify operate within a defined governance framework that supports:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Clear scope definition prior to execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Consistent application of professional judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Structured, traceable reporting</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              This governance framework exists to support sponsor and audit-firm oversight, not to replace it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs (Text Only) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              GMP Audit Services — FAQs (Orientation)
            </h2>
            <FAQAccordion faqs={pageFaqs} />
          </div>
        </div>
      </section>

      {/* Pathways (Orientation Links) */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Pathways
            </h2>
            <p className="text-muted-foreground mb-8">
              GMP Audit Services sits within the broader GxP audit framework. Related audit domains include:
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {relatedDomains.map((domain) => (
                <Link
                  key={domain.title}
                  to={domain.href}
                  className="group bg-card rounded-lg p-4 border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
                >
                  <domain.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors block">
                    {domain.title}
                  </span>
                </Link>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/contact">
                Contact GxPify
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GmpAudits;
