import { Link } from 'react-router-dom';
import { ArrowRight, Target, Building2, Globe, Beaker, Shield, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Resources = () => {
  return (
    <PageLayout>
      <PageHero
        title="Resources"
        subtitle="Audit Scope, Governance & Engagement Context"
        badge="Knowledge Hub"
      />

      {/* Section 1: How to Read GxPify Audit Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Understanding Audit Scope at GxPify
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify audits are delivered strictly within the scope under which they are commissioned by sponsors or audit firms.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Audit outcomes are meaningful only when interpreted in the context of:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">The commissioning mandate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">The regulatory intent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">The role of the audited entity within the product lifecycle</span>
              </li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              This scope-anchored approach ensures audit conclusions remain defensible, proportionate, and decision-relevant, rather than generically exhaustive.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/audit-governance" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                Audit Governance & Methodology <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/faqs" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                FAQs → How is audit scope defined? <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vendor Audits vs Site Audits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Vendor Audits and Site Audits — A Practical Distinction
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most audits conducted through GxPify function as vendor audits, supporting sponsor oversight of outsourced activities such as manufacturing, testing, development, distribution, or pharmacovigilance services.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              The distinction lies in decision dependency, not regulatory intensity:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Vendor audits support qualification, reliance, and risk-based decision-making</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Site audits may be commissioned where full site-level governance review is required</span>
              </li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              GxPify does not position vendor audits as regulatory inspections or substitutes for them.
              Each audit is designed to answer specific sponsor or audit-firm questions, not to replicate inspectorate activity.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm mt-8">
              <Link to="/audits/gmp" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                GMP Audit Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/audits/gdp" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                GDP Audit Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/faqs" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                FAQs → Are all audits vendor audits? <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Geographic Delivery & Exceptions */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Primary Delivery Regions and Selective Extensions
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify's primary audit delivery is focused on India and ASEAN, reflecting the concentration of outsourced life sciences activities in these regions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Audit requests outside India and ASEAN — such as China, the Middle East, Africa, or other APAC regions — may be considered selectively, subject to:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Commissioning sponsor or audit-firm mandate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Risk profile and audit complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Feasibility of appropriate governance and oversight</span>
              </li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Such engagements are clarified upfront and governed under defined scope and delivery terms.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/india-asean" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                India & ASEAN Delivery <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/global-coverage" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                Global Coverage <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: GCP & GPvP Scope Clarifications */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Beaker className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Why Some Audit Services Are Deliberately Scoped
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Certain audit services offered by GxPify are intentionally scoped to ensure depth, relevance, and defensibility.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">GCP audits are limited to BA/BE and Phase I activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">GPvP audits are selective and vendor-focused</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Full MAH-level clinical or pharmacovigilance system ownership audits are not undertaken, unless commissioned through a global audit firm under defined oversight</span>
              </li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              This approach avoids dilution of audit quality and aligns services with actual commissioning models.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/audits/gcp" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                GCP Audit Services (Limited) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/audits/gpvp" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                GPvP Audit Services (Selective) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: QMS Strengthening & Audit Independence */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                CAT Framework and Audit Independence
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The CAT Framework (Clarify–Assess–Transfer) is a GxPify-specific approach to QMS strengthening, offered exclusively to small and medium life sciences organizations operating in India and ASEAN.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              To preserve audit independence:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">CAT engagements are not combined with audits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Organizations supported under CAT are not audited for the same scope</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">CAT is not offered to audit firms</span>
              </li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              This separation ensures regulatory credibility and ethical clarity.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/cat-framework" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                CAT Framework (QMS Strengthening) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/audit-governance" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                Audit Governance & Methodology <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Regulatory & Quality Context */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Regulatory Alignment Without Overreach
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GxPify audits are aligned, as applicable, with relevant regulatory and quality expectations, including:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="p-4 bg-card border border-border rounded-lg">
                <span className="text-foreground font-medium">EU GMP / GDP</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <span className="text-foreground font-medium">US FDA expectations</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <span className="text-foreground font-medium">OECD GLP</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <span className="text-foreground font-medium">ICH guidelines</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg sm:col-span-2">
                <span className="text-foreground font-medium">EU GVP modules</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Regulatory focus is always driven by commissioning requirements, not assumed by default.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Discuss a Specific Audit or Scope Question
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to clarify audit requirements, scope considerations, or engagement context.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
            <Link to="/contact">
              Contact
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-muted border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/audits" className="text-muted-foreground hover:text-accent transition-colors">
              Audit Services
            </Link>
            <span className="text-border">|</span>
            <Link to="/india-asean" className="text-muted-foreground hover:text-accent transition-colors">
              India & ASEAN Delivery
            </Link>
            <span className="text-border">|</span>
            <Link to="/audit-governance" className="text-muted-foreground hover:text-accent transition-colors">
              Audit Governance & Methodology
            </Link>
            <span className="text-border">|</span>
            <Link to="/cat-framework" className="text-muted-foreground hover:text-accent transition-colors">
              CAT Framework
            </Link>
            <span className="text-border">|</span>
            <Link to="/faqs" className="text-muted-foreground hover:text-accent transition-colors">
              FAQs
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

export default Resources;
