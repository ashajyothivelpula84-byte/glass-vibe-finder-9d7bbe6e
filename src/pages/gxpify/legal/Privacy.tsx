import { Link } from 'react-router-dom';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Privacy = () => {
  return (
    <PageLayout>
      <PageHero title="Privacy Policy" compact />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8 text-sm">
              Effective Date: January 2025
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              GxPify ("we", "our", "us") respects the privacy of visitors, clients, and stakeholders accessing our website and services. This Privacy Policy explains how we collect, use, and protect personal information submitted through this website.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This policy applies solely to information collected via the GxPify website and related communications.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We may collect the following information when you voluntarily submit it:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Name</li>
              <li>Organization name</li>
              <li>Email address</li>
              <li>Contact details</li>
              <li>Region / country</li>
              <li>Enquiry details related to audit or CAT engagements</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We do not intentionally collect sensitive personal data, health data, or confidential patient information through this website.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Information collected is used only to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Respond to enquiries</li>
              <li>Evaluate audit or CAT engagement suitability</li>
              <li>Communicate regarding requested services</li>
              <li>Maintain internal records related to professional engagement</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed font-medium">
              We do not sell, rent, or trade personal information.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. Data Sharing
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your information may be shared only when necessary with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Authorized collaborators or local auditors engaged under defined governance</li>
              <li>Service providers supporting website or communication infrastructure</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Such sharing is limited, purpose-specific, and subject to confidentiality expectations.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Reasonable administrative and technical safeguards are used to protect submitted information. However, no internet transmission is entirely secure, and absolute security cannot be guaranteed.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Cookies & Analytics
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This website may use basic cookies or analytics tools for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Website functionality</li>
              <li>Traffic analysis</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              These tools do not collect personally identifiable information.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The GxPify website may contain links to external websites. We are not responsible for the privacy practices or content of those websites.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              8. Your Consent
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              By submitting information through this website, you consent to its use as described in this Privacy Policy.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              9. Policy Updates
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This Privacy Policy may be updated periodically. Continued use of the website constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              10. Contact
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For privacy-related questions, please contact:<br />
              Email: <a href="mailto:contact@gxpify.com" className="text-accent hover:text-accent/80 transition-colors">contact@gxpify.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-muted border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Use
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

export default Privacy;
