import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { aseanRegions } from '@/data/gxpifyData';

const IndiaAsean = () => {
  const faqItems = [
    {
      question: 'Where are audits executed?',
      answer: 'Audits are executed at supplier and manufacturing sites located in India and ASEAN regions (Singapore, Malaysia, Vietnam). Our teams have local presence and expertise in these markets.',
      category: 'delivery'
    },
    {
      question: 'Who leads the audits?',
      answer: 'Every audit is led by a qualified Lead Auditor who maintains single-point accountability for the engagement. The Lead Auditor oversees all aspects of audit planning, execution, and reporting.',
      category: 'delivery'
    },
    {
      question: 'Do you use local auditors?',
      answer: 'Yes, when required by geography or specialized expertise, we engage qualified local auditors and subject matter experts. All external resources operate under GxPify governance and accountability standards.',
      category: 'delivery'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="India & ASEAN Audit Delivery"
        subtitle="Our audit teams are based in India and ASEAN, providing efficient, high-quality audit delivery for suppliers and manufacturers in these regions."
        badge="Regional Excellence"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Delivery Regions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We maintain audit delivery capability across India and key ASEAN markets, providing coverage where pharmaceutical manufacturing and supply chain activities are concentrated.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {aseanRegions.map((region) => (
                  <div key={region.code} className="p-4 bg-secondary rounded-lg text-center">
                    <span className="text-3xl mb-2 block">{region.flag}</span>
                    <span className="font-medium text-foreground">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Lead Auditor-Led Delivery Model
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every audit engagement is led by a qualified Lead Auditor who takes full accountability for quality and consistency. This model ensures:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Single point of accountability</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Consistent audit methodology</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Quality assurance oversight</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Clear communication with clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              External & Local Auditor / SME Engagement
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When required by geography, language, or specialized technical expertise, we engage qualified external auditors and subject matter experts. All external resources:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Are qualified and vetted to GxPify standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Operate under GxPify governance and confidentiality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Report to the Lead Auditor for the engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Are disclosed to clients when applicable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqItems} />
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Plan Your Next Audit?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to discuss audit requirements for suppliers in India and ASEAN.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/global-coverage">Global Coverage</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndiaAsean;
