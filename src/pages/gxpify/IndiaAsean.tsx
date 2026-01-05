import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import indiaAseanHeroImage from '@/assets/gxpify/delivery_india_asean_01.jpg';

const IndiaAsean = () => {
  const deliveryFocus = [
    'High concentration of APIs, formulations, CROs, CDMOs, PV vendors, and logistics providers',
    'Sponsor need for regionally grounded, regulator-aligned audit oversight',
    'Practical execution across complex, multi-tier supply chains',
  ];

  // No country flags per image rules - using region names only
  const coreRegions = [
    { name: 'India', region: 'South Asia' },
    { name: 'Singapore', region: 'ASEAN' },
    { name: 'Malaysia', region: 'ASEAN' },
    { name: 'Vietnam', region: 'ASEAN' },
    { name: 'Thailand', region: 'ASEAN' },
  ];

  const deliveryModelPoints = [
    'Single-point accountability for audit judgment and reporting',
    'Consistent audit methodology and interpretation',
    'Direct sponsor or audit-firm communication',
  ];

  const localAuditorPoints = [
    'Defined tasking and scope',
    'GxPify audit methodology',
    'Lead Auditor oversight and final judgment',
  ];

  const pageFaqs = [
    {
      question: 'Do you use local auditors in India?',
      answer: 'Audits in India are typically delivered directly. Local auditors may support ASEAN engagements where required by scope or logistics.',
    },
    {
      question: 'Can you support audits outside India & ASEAN?',
      answer: 'Primary delivery is India & ASEAN. Other regions may be considered selectively under defined governance.',
    },
  ];

  const footerLinks = [
    { label: 'Global Coverage', href: '/global-coverage' },
    { label: 'Audit Governance & Methodology', href: '/audit-governance' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={indiaAseanHeroImage} 
            alt="India and ASEAN audit delivery regions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Regional Delivery</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              India & ASEAN Delivery
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Primary Audit Execution Regions
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              GxPify's audit execution is primarily delivered across India and ASEAN, supporting global life sciences organizations and audit firms that outsource regulated activities to this region.
            </p>
            
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
              This delivery focus reflects:
            </h2>
            <ul className="space-y-3 mb-10">
              {deliveryFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
              Core delivery regions include:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {coreRegions.map((region) => (
                <div key={region.name} className="p-4 bg-secondary border border-border rounded-lg text-center group hover:border-accent/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground text-sm block">{region.name}</span>
                  <span className="text-xs text-muted-foreground">{region.region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Delivery Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              All audits are delivered under a Founder-led / Lead Auditor–led model, ensuring:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mb-10">
              <ul className="space-y-4">
                {deliveryModelPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Local Auditor Support
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Where required by scope, language, or local access, delivery may be supported by qualified local auditors, primarily within ASEAN, operating under:
                  </p>
                  <ul className="space-y-2">
                    {localAuditorPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
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
            Discuss Audit Delivery for Your Region
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to discuss audit requirements for suppliers in India and ASEAN.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Request an Audit Discussion
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-secondary border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {footerLinks.map((link) => (
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

export default IndiaAsean;
