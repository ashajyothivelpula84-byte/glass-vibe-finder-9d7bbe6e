import { Link } from 'react-router-dom';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Terms = () => {
  return (
    <PageLayout>
      <PageHero title="Terms of Use" compact />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8 text-sm">
              Effective Date: January 2025
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use this website.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. Website Purpose
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This website provides general information about GxPify's audit services, delivery model, and governance framework.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              It does not constitute:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Regulatory advice</li>
              <li>Legal advice</li>
              <li>Audit opinions</li>
              <li>Professional assurance</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Formal services are provided only under written agreement.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. Use of Content
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              All content on this website is the property of GxPify and may not be:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Reproduced</li>
              <li>Distributed</li>
              <li>Modified</li>
              <li>Used for commercial purposes</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              without prior written consent.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. No Client Relationship
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Use of this website or submission of an enquiry does not establish:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Auditor–client relationship</li>
              <li>Consultant–client relationship</li>
              <li>Professional engagement</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Such relationships arise only upon execution of a formal agreement.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              GxPify is not liable for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Errors or omissions in website content</li>
              <li>Decisions made based on website information</li>
              <li>Indirect or consequential damages</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Website content is provided "as is".
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Links to third-party sites are provided for convenience only. GxPify does not endorse or control such sites.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              7. Governing Law
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              These Terms are governed by the laws of India, without regard to conflict-of-law principles.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              GxPify reserves the right to update these Terms at any time. Continued use constitutes acceptance.
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
            <Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors">
              Disclaimer
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

export default Terms;
