import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Globe, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import ServiceCard from '@/components/gxpify/ServiceCard';
import ValuePropCard from '@/components/gxpify/ValuePropCard';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { auditServices, valueProps, howItWorksSteps, faqs, globalCoverageCountries } from '@/data/gxpifyData';
import heroPharma from '@/assets/hero-pharma.jpg';

const GxpHome = () => {
  const generalFaqs = faqs.filter(f => f.category === 'general').slice(0, 3);

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary-foreground)/0.08)_0%,transparent_50%)]" />
          
          {/* Geometric shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 border border-primary-foreground/10 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-48 h-48 border border-accent/20 rounded-full" />
          <div className="absolute bottom-20 left-10 w-64 h-64 border border-primary-foreground/5 rounded-full" />
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-accent/20 rounded-full animate-pulse" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 animate-fade-in">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground/90">Independent Audit Practice</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Independent GxP Audit Services for{' '}
                <span className="text-accent">Global Life Sciences</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-in max-w-xl">
                Global mandates. Client-defined scope. Regional execution. Single-point audit accountability.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-in">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
                  <Link to="/contact">
                    Request an Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/cat-framework">Training & QMS (ASEAN)</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 animate-fade-in">
                {[
                  { icon: CheckCircle, text: 'Independent & Objective' },
                  { icon: Target, text: 'Risk-Based Methodology' },
                  { icon: Award, text: 'Lead Auditor Accountability' },
                ].map((item, index) => (
                  <span 
                    key={item.text}
                    className="flex items-center gap-2 text-sm text-primary-foreground/80"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="w-4 h-4 text-accent" />
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image with Stats Overlay */}
            <div className="relative animate-fade-in">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroPharma} 
                  alt="Pharmaceutical laboratory audit professionals" 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Stats overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-primary/80 backdrop-blur-md border border-primary-foreground/20 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-primary/90 transition-all duration-300">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                      <p className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">5+</p>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/70">Countries Served</p>
                    </div>
                    
                    <div className="bg-primary/80 backdrop-blur-md border border-primary-foreground/20 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-primary/90 transition-all duration-300">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                      <p className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">6</p>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/70">GxP Domains</p>
                    </div>
                    
                    <div className="bg-primary/80 backdrop-blur-md border border-primary-foreground/20 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-primary/90 transition-all duration-300">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                      <p className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">100%</p>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/70">Client-Defined Scope</p>
                    </div>
                    
                    <div className="bg-primary/80 backdrop-blur-md border border-primary-foreground/20 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-primary/90 transition-all duration-300">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                      <p className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">1</p>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/70">Lead Auditor Accountability</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements - hidden on mobile */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-xl -z-10 hidden sm:block" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary-foreground/10 rounded-xl -z-10 hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 100V40C240 70 480 85 720 70C960 55 1200 20 1440 40V100H0Z"
              className="fill-background"
            />
          </svg>
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
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-64 h-64 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-accent/20 rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary-foreground/20 rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Global Coverage & Delivery
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-lg">
                We serve global clients across major pharmaceutical markets. Audits are commissioned by organizations worldwide and executed by our Lead Auditor-led teams in India and ASEAN regions.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {globalCoverageCountries.map((country) => (
                  <span
                    key={country.code}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-sm"
                  >
                    <span>{country.flag}</span>
                    {country.name}
                  </span>
                ))}
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
                <Link to="/global-coverage">
                  Learn About Our Coverage
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20">
              <h3 className="font-display text-xl font-bold mb-6">
                Regional Execution Model
              </h3>
              <ul className="space-y-4 text-primary-foreground/80">
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
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary-foreground/20 rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
            Contact us to discuss your audit requirements. We'll work with you to define a scope that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
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
