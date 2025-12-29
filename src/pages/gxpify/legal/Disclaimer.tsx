import { Link } from 'react-router-dom';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Disclaimer = () => {
  return (
    <PageLayout>
      <PageHero title="Disclaimer" compact />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. General Disclaimer
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The information provided on this website is for general informational purposes only and should not be construed as professional, regulatory, or legal advice.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. No Regulatory Authority
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              GxPify:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Is not a regulatory authority</li>
              <li>Does not conduct inspections</li>
              <li>Does not act on behalf of regulators</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              All audits are Sponsor / Audit Firm Commissioned and conducted under defined scope.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. No Assurance or Certification
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Audit services do not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Certify compliance</li>
              <li>Guarantee inspection outcomes</li>
              <li>Replace regulatory inspections</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Audit conclusions are limited to the agreed scope and timeframe.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. Independence & Boundaries
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              GxPify does not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Implement CAPAs</li>
              <li>Deploy QMS within audit scope</li>
              <li>Provide regulatory representation</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              QMS strengthening under the CAT Framework is governed separately.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Limitation of Reliance
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Users should not rely solely on website content for decision-making. Engagement-specific advice is provided only under formal contract.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Contact
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For clarification regarding this Disclaimer, contact:<br />
              Email: <a href="mailto:contact@gxpify.com" className="text-accent hover:text-accent/80 transition-colors">contact@gxpify.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-muted border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Use
            </Link>
            <span className="text-border">|</span>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Disclaimer;
