import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Disclaimer = () => {
  return (
    <PageLayout>
      <PageHero title="Disclaimer" compact />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2024
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              General Disclaimer
            </h2>
            <p className="text-muted-foreground mb-4">
              The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              No Regulatory Advice
            </h2>
            <p className="text-muted-foreground mb-4">
              The content on this website does not constitute regulatory, legal, or professional advice. For specific guidance on regulatory compliance, you should consult with qualified professionals and relevant regulatory authorities.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              Independence Statement
            </h2>
            <p className="text-muted-foreground mb-4">
              GxPify provides independent audit services only. We do not certify, accredit, approve, or endorse any organization, product, or service. Our audits are assessments based on defined scope and methodology agreed with clients.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              No Guarantee of Results
            </h2>
            <p className="text-muted-foreground mb-4">
              The use of our services does not guarantee regulatory approval, inspection success, or any particular outcome. Results depend on many factors outside our control.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              External Links
            </h2>
            <p className="text-muted-foreground mb-4">
              This website may contain links to external websites. GxPify is not responsible for the content or practices of linked websites.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              In no event shall GxPify be liable for any damages arising from the use of information on this website or from any services provided.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Disclaimer;
