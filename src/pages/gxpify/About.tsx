import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const About = () => {
  const values = [
    'Independence and objectivity in all engagements',
    'Transparency in methodology and reporting',
    'Accountability through clear governance',
    'Confidentiality of client information',
    'Continuous improvement of our practices',
  ];

  return (
    <PageLayout>
      <PageHero
        title="About GxPify"
        subtitle="Independent GxP audit services built on principles of integrity, transparency, and accountability."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Founder & Lead Auditor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GxPify was founded with a clear vision: to provide independent, high-quality GxP audit services that global organizations can trust. Our Lead Auditor brings extensive experience in pharmaceutical quality assurance and regulatory compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a deep understanding of global regulatory requirements and practical quality system implementation, we bridge the gap between compliance expectations and operational reality.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Our Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are committed to delivering audit services that are:
              </p>
              <div className="space-y-3">
                {values.map((value) => (
                  <div key={value} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Audit Governance & Accountability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every GxPify audit operates under a clear governance framework with defined accountabilities. The Lead Auditor maintains single-point responsibility for each engagement, ensuring consistent quality and clear communication.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our governance model is designed to provide clients with confidence in our independence, objectivity, and commitment to quality.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                External Auditor & SME Model
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When required by geography, language, or specialized technical expertise, we engage qualified external auditors and subject matter experts. All external resources:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Are vetted and qualified to our standards</li>
                <li>• Operate under GxPify governance</li>
                <li>• Maintain strict confidentiality</li>
                <li>• Report to the Lead Auditor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Ethics, Transparency & Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ethical conduct is the foundation of our practice. We maintain complete independence from auditees, with no commercial or financial relationships that could compromise objectivity. All potential conflicts are disclosed and managed proactively.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Our Principles
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground text-sm">No certification or approval claims</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground text-sm">Complete audit independence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground text-sm">Strict data confidentiality</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground text-sm">Transparent reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to discuss how we can support your audit and quality objectives.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
