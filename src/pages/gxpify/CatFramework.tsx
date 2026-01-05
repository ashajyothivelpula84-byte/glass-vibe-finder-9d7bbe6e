import { Link } from 'react-router-dom';
import { ArrowRight, Layers, ShieldCheck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import catHeroImage from '@/assets/gxpify/cat_primary_01.jpg';
import catSupportingImage from '@/assets/gxpify/cat_supporting_qms_01.jpg';

const CatFramework = () => {
  const catSteps = [
    {
      letter: 'C',
      title: 'Clarify',
      description: 'Understand regulatory context, organizational needs, and scope requirements.',
    },
    {
      letter: 'A',
      title: 'Assess',
      description: 'Structured gap assessment against applicable GxP and ISO requirements.',
    },
    {
      letter: 'T',
      title: 'Transfer',
      description: 'Knowledge transfer, capability building, and QMS implementation support.',
    },
  ];

  const whatCatSupports = [
    'GxP and ISO gap assessments',
    'EU GMP / FDA readiness (mock audits)',
    'Data Integrity, Annex 11, Annex 1, CCS',
    'QMS deployment, optimization, harmonization',
    'R&D → Site → Corporate → PV integration (as applicable)',
  ];

  const governancePoints = [
    'CAT and audits are never combined',
    'Same scope is not audited post-CAT',
    'Cooling-off applied before audit eligibility',
  ];

  const pageFaqs = [
    {
      question: 'Can CAT clients later be audited?',
      answer: 'Yes, subject to cooling-off and scope separation.',
    },
    {
      question: 'Is CAT offered globally?',
      answer: 'No. CAT is limited to India & ASEAN SMEs.',
    },
  ];

  const footerLinks = [
    { label: 'Audit Governance', href: '/audit-governance' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={catHeroImage} 
            alt="Quality Management System Strengthening - Clarify, Assess, Transfer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <Layers className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">QMS Strengthening</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              CAT Framework
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mb-4">
              Clarify – Assess – Transfer
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 text-primary-foreground text-sm font-medium rounded-full">
              India & ASEAN Only
            </span>
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The CAT Framework is a GxPify-specific approach to QMS strengthening, offered exclusively to:
            </p>
            <ul className="space-y-2 text-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Small to medium life sciences organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Operating in India & ASEAN</span>
              </li>
            </ul>
            <div className="bg-secondary border border-border rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> CAT is not an audit service and not offered to audit firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAT Steps */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {catSteps.map((step) => (
              <div key={step.letter} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-display font-bold text-xl mb-4">
                  {step.letter}
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h2>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What CAT Supports */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              What CAT Supports
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatCatSupports.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary border border-border rounded-lg p-4">
                  <ShieldCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Governance
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <ul className="space-y-4">
                {governancePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Image Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <img 
              src={catSupportingImage} 
              alt="QMS documentation and gap assessment report" 
              className="w-full h-auto rounded-xl shadow-lg border border-border"
            />
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
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:bg-secondary"
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
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Discuss QMS Strengthening (CAT)
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to explore how the CAT Framework can support your organization's quality system development.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Discuss QMS Strengthening
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
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CatFramework;
