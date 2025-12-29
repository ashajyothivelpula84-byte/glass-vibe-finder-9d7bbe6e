import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ClipboardCheck, Shield, Ban, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AuditGovernance = () => {
  const auditFocus = [
    'System behavior',
    'Risk control effectiveness',
    'Regulatory intent',
  ];

  const auditFlow = [
    { step: 1, title: 'Commissioning & scope confirmation' },
    { step: 2, title: 'Pre-audit planning and document review' },
    { step: 3, title: 'Audit execution (on-site or remote)' },
    { step: 4, title: 'Observation development' },
    { step: 5, title: 'Final audit report issuance' },
  ];

  const independenceBoundaries = [
    'No CAPA implementation',
    'No QMS deployment within audit scope',
    'No bundled training',
    'CAT Framework maintained separately',
  ];

  const pageFaqs = [
    {
      question: "Why don't you implement CAPAs?",
      answer: 'To preserve audit independence and regulatory credibility.',
    },
    {
      question: 'Do you use technical specialists?',
      answer: 'Specialist inputs may be used under Lead Auditor oversight where scope requires.',
    },
  ];

  const footerLinks = [
    { label: 'Audit Services', href: '/audits' },
    { label: 'CAT Framework', href: '/cat-framework' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQs', href: '/faqs' },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Audit Governance & Methodology"
        subtitle="Structured. Scope-Driven. Defensible."
        badge="Governance"
      >
        <div className="flex items-center gap-3 mt-4">
          <ClipboardCheck className="w-8 h-8 text-accent" />
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              All GxPify audits follow a structured, scope-driven methodology, designed to produce defensible, decision-relevant outcomes.
            </p>
            
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
              Audits focus on:
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {auditFocus.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-secondary border border-border rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Rather than checklist accumulation.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Audit Flow */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Standard Audit Flow
            </h2>
            
            <div className="space-y-4">
              {auditFlow.map((item) => (
                <div key={item.step} className="flex items-center gap-4 p-5 bg-card border border-border rounded-lg group hover:border-accent/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Independence & Boundaries */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Independence & Boundaries
                </h2>
                <p className="text-muted-foreground">
                  To preserve audit integrity:
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {independenceBoundaries.map((item) => (
                <div key={item} className="flex items-center gap-3 p-5 bg-secondary border border-border rounded-lg">
                  <Ban className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {pageFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:bg-background"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            View Audit Services
          </h2>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/audits">
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-secondary border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {footerLinks.map((link, index) => (
              <>
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span key={`sep-${index}`} className="text-border">|</span>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AuditGovernance;
