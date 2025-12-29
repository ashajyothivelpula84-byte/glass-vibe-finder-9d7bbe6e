import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const IndiaAsean = () => {
  const deliveryFocus = [
    'High concentration of APIs, formulations, CROs, CDMOs, PV vendors, and logistics providers',
    'Sponsor need for regionally grounded, regulator-aligned audit oversight',
    'Practical execution across complex, multi-tier supply chains',
  ];

  const coreRegions = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Thailand', flag: '🇹🇭' },
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
      <PageHero
        title="India & ASEAN Delivery"
        subtitle="Primary Audit Execution Regions"
        badge="Regional Delivery"
      >
        <div className="flex items-center gap-3 mt-4">
          <MapPin className="w-8 h-8 text-accent" />
        </div>
      </PageHero>

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
                <div key={region.name} className="p-4 bg-secondary border border-border rounded-lg text-center">
                  <span className="text-3xl mb-2 block">{region.flag}</span>
                  <span className="font-medium text-foreground text-sm">{region.name}</span>
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
              Contact Us
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
