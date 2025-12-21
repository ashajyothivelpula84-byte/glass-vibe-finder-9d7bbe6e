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

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Ready to Plan Your Next Audit?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to discuss audit requirements for suppliers in India and ASEAN.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Request an Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndiaAsean;
