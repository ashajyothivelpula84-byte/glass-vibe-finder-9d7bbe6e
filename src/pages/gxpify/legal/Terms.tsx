import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Terms = () => {
  return (
    <PageLayout>
      <PageHero title="Terms of Use" compact />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2024
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. Services Description
            </h2>
            <p className="text-muted-foreground mb-4">
              GxPify provides independent GxP audit services and related training and QMS enablement services. All services are provided under separate contractual agreements. The information on this website is for general informational purposes only.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. No Certification or Approval
            </h2>
            <p className="text-muted-foreground mb-4">
              GxPify does not certify, accredit, or provide regulatory approval. Our audit services are independent assessments only. Any references to compliance or quality should not be construed as certification.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of GxPify and is protected by applicable intellectual property laws.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              GxPify shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or the information contained herein.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Governing Law
            </h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Use shall be governed by and construed in accordance with applicable laws.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              7. Contact
            </h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Use, please contact us at contact@gxpify.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
