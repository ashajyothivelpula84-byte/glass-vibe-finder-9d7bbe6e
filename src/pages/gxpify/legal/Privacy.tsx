import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Privacy = () => {
  return (
    <PageLayout>
      <PageHero title="Privacy Policy" compact />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2024
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-muted-foreground mb-4">
              GxPify is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Name and contact information</li>
              <li>Organization details</li>
              <li>Information submitted through contact forms</li>
              <li>Communication records</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Respond to your enquiries</li>
              <li>Provide our audit and training services</li>
              <li>Communicate about our services</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. Information Sharing
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Confidentiality
            </h2>
            <p className="text-muted-foreground mb-4">
              All audit-related information is treated with strict confidentiality in accordance with our professional obligations and contractual agreements.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              7. Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy, please contact us at contact@gxpify.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
