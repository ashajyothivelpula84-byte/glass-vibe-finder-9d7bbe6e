import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { globalCoverageCountries, faqs } from '@/data/gxpifyData';

const GlobalCoverage = () => {
  const coverageFaqs = faqs.filter(f => f.category === 'coverage');

  return (
    <PageLayout>
      <PageHero
        title="Global Coverage"
        subtitle="Serving life sciences organizations worldwide. Audits are commissioned globally and executed by our Lead Auditor-led teams in India and ASEAN."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Who Commissions Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              GxPify serves global pharmaceutical and life sciences organizations, including sponsors, audit firms, and quality teams across major markets. Our clients commission audits to assess suppliers, manufacturing sites, and service providers in India and ASEAN.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {globalCoverageCountries.map((country) => (
              <div key={country.code} className="p-6 bg-card border border-border rounded-lg text-center">
                <span className="text-4xl mb-3 block">{country.flag}</span>
                <h3 className="font-display font-semibold text-foreground">{country.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Global Mandate, Regional Execution Model
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our delivery model combines global standards with regional expertise. Audits are commissioned by organizations worldwide and executed by qualified teams in India and ASEAN, ensuring consistent quality and local knowledge.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Global quality standards maintained</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Regional expertise and local knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Lead Auditor accountability</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Transparent governance</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Why This Model Works
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By combining global audit standards with regional delivery capability, we provide efficient, high-quality audits that meet the expectations of international regulators and your quality teams.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Cost-effective without compromising quality</li>
                <li>• Local language and cultural understanding</li>
                <li>• Time zone alignment with Asia-Pacific suppliers</li>
                <li>• Consistent methodology across all engagements</li>
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
            <FAQAccordion faqs={coverageFaqs} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Ready to Discuss Your Audit Requirements?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to learn more about how we can support your global audit program.
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

export default GlobalCoverage;
