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
        badge="Worldwide Reach"
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
            Ready to Discuss Your Audit Requirements?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to learn more about how we can support your global audit program.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/india-asean">India & ASEAN Delivery</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlobalCoverage;
