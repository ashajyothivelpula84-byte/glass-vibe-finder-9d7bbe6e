import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import ServiceCard from '@/components/gxpify/ServiceCard';
import ValuePropCard from '@/components/gxpify/ValuePropCard';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { auditServices, valueProps, howItWorksSteps, faqs, globalCoverageCountries } from '@/data/gxpifyData';

const GxpHome = () => {
  const generalFaqs = faqs.filter(f => f.category === 'general').slice(0, 3);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in">
              Independent GxP Audit Services for Global Life Sciences Organizations
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
              Global mandates. Client-defined scope. Regional execution. Single-point audit accountability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request an Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/cat-framework">Training & QMS (ASEAN)</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/10">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Independent & Objective
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Risk-Based Methodology
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Lead Auditor Accountability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Audit Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive GxP audit services across the pharmaceutical and life sciences value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/audits">
                View All Audit Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How We Deliver Audits
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent, client-focused approach from scope definition to final report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-display font-semibold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GxPify */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why GxPify
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets our audit services apart from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <ValuePropCard key={prop.title} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Global Coverage & Delivery
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                We serve global clients across major pharmaceutical markets. Audits are commissioned by organizations worldwide and executed by our Lead Auditor-led teams in India and ASEAN regions.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {globalCoverageCountries.map((country) => (
                  <span
                    key={country.code}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm"
                  >
                    <span>{country.flag}</span>
                    {country.name}
                  </span>
                ))}
              </div>
              <Button variant="secondary" asChild>
                <Link to="/global-coverage">
                  Learn About Our Coverage
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-primary-foreground/5 rounded-lg p-8 border border-primary-foreground/10">
              <h3 className="font-display text-xl font-semibold mb-4">
                Regional Execution Model
              </h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Lead Auditor accountability for every engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Qualified local auditors and SMEs when required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Consistent global standards across all regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Transparent governance and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAT Framework Teaser */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                  India & ASEAN Only
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  CAT Framework
                </h2>
                <p className="text-muted-foreground mb-6">
                  Consult · Assess · Train — Our integrated framework for training and QMS enablement, separate from audit services to maintain independence.
                </p>
                <Button asChild>
                  <Link to="/cat-framework">
                    Explore CAT Framework
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <span className="font-display font-semibold text-accent">C</span>
                  <div>
                    <p className="font-medium text-foreground">Consult</p>
                    <p className="text-sm text-muted-foreground">Context for Training & QMS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <span className="font-display font-semibold text-accent">A</span>
                  <div>
                    <p className="font-medium text-foreground">Assess</p>
                    <p className="text-sm text-muted-foreground">Gap & Lifecycle Readiness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <span className="font-display font-semibold text-accent">T</span>
                  <div>
                    <p className="font-medium text-foreground">Train</p>
                    <p className="text-sm text-muted-foreground">Role-Based GxP Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={generalFaqs} defaultOpen="item-0" />
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/faqs">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us to discuss your audit requirements. We'll work with you to define a scope that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Training & QMS Enquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GxpHome;
