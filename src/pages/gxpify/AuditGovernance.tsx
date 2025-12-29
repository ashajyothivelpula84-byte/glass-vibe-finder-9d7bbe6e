import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ClipboardList, FileCheck, Users, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const AuditGovernance = () => {
  const lifecycleSteps = [
    {
      phase: 'Plan',
      title: 'Audit Planning',
      description: 'Scope definition, risk assessment, resource allocation, and audit schedule development based on client requirements.',
      icon: ClipboardList,
      items: ['Client scope definition', 'Risk-based prioritization', 'Auditor assignment', 'Logistics coordination']
    },
    {
      phase: 'Execute',
      title: 'Audit Execution',
      description: 'On-site or remote audit activities conducted by qualified auditors following established methodology.',
      icon: Users,
      items: ['Opening meeting', 'Document review', 'Interviews & observations', 'Evidence collection']
    },
    {
      phase: 'Report',
      title: 'Audit Reporting',
      description: 'Comprehensive reporting with clear findings, observations, and actionable recommendations.',
      icon: FileCheck,
      items: ['Draft report preparation', 'Client review cycle', 'Final report issuance', 'Findings classification']
    }
  ];

  const principles = [
    {
      title: 'Scope Discipline',
      description: 'Every audit operates within clearly defined, client-approved scope. We do not expand scope without explicit agreement.',
      icon: CheckCircle
    },
    {
      title: 'Independence',
      description: 'Our auditors maintain complete independence from auditees. No commercial relationships or conflicts of interest are permitted.',
      icon: Shield
    },
    {
      title: 'Lead Auditor Accountability',
      description: 'A designated Lead Auditor assumes single-point accountability for every audit, ensuring quality and consistency.',
      icon: Users
    },
    {
      title: 'Transparent Reporting',
      description: 'Findings are reported objectively with clear evidence. We do not soften or exaggerate observations.',
      icon: FileCheck
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="Audit Governance & Methodology"
        subtitle="Our systematic approach to audit planning, execution, and reporting ensures consistent quality and actionable outcomes."
        badge="Governance"
      />

      {/* Audit Lifecycle */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Audit Lifecycle
            </h2>
            <p className="text-muted-foreground">
              Every audit follows a structured lifecycle from planning through reporting, ensuring consistent quality and clear deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {lifecycleSteps.map((step, index) => (
              <div key={step.phase} className="relative">
                {/* Connection line */}
                {index < lifecycleSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent z-0" />
                )}
                
                <div className="relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">{step.phase}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Core Principles
            </h2>
            <p className="text-muted-foreground">
              Our audit methodology is built on foundational principles that ensure objectivity, quality, and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="p-3 bg-accent/10 rounded-lg h-fit flex-shrink-0">
                  <principle.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No CAPA Implementation Statement */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  CAPA Implementation Boundary
                </h3>
                <p className="text-muted-foreground mb-4">
                  GxPify does not implement CAPA (Corrective and Preventive Actions) for audit findings. Our role ends with the delivery of the audit report.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Rationale:</strong> Implementing CAPA for audit findings would compromise our independence for future audits. 
                  Clients are responsible for developing and implementing their own corrective actions based on our findings. 
                  This separation maintains the integrity of subsequent audits and ensures objective assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Statement */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Independence Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Independence is the cornerstone of audit credibility. GxPify auditors have no commercial, financial, or personal relationships 
              with the organizations they audit. We proactively identify and disclose any potential conflicts of interest before engagement.
            </p>
            <p className="text-sm text-muted-foreground">
              Our independence policies are reviewed annually and all auditors sign conflict-of-interest declarations for each engagement.
            </p>
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
            Questions About Our Methodology?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to learn more about our audit governance and how we can support your quality objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Request an Audit Discussion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/faqs">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AuditGovernance;
