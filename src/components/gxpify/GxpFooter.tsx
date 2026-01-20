import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowUpRight, Shield } from 'lucide-react';
import gxpifyLogo from '@/assets/gxpify/gxpify_logo.png';

const GxpFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    auditServices: [
      { label: 'GxP Audit Services', href: '/audits' },
      { label: 'GMP Audit Services', href: '/audits/gmp' },
      { label: 'GDP Audit Services', href: '/audits/gdp' },
      { label: 'GLP Audit Services', href: '/audits/glp' },
      { label: 'GCP Audit Services', href: '/audits/gcp' },
      { label: 'GPvP Audit Services', href: '/audits/gpvp' },
    ],
    governanceContext: [
      { label: 'Audit Governance & Methodology', href: '/audit-governance' },
      { label: 'Global Coverage', href: '/global-coverage' },
      { label: 'India & Regional Audit Delivery', href: '/india-asean' },
    ],
    insightReference: [
      { label: 'Resources', href: '/resources' },
      { label: 'Global FAQs', href: '/faqs' },
    ],
    aboutContact: [
      { label: 'About GxPify', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Disclaimer', href: '/terms' },
    ],
  };

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Top Wave Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container-wide relative z-10">
        {/* CTA Section */}
        <div className="py-12 border-b border-primary-foreground/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/20 rounded-xl">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Ready to Discuss Your Audit Requirement?</h3>
                <p className="text-primary-foreground/70 text-sm">Independent, scope-driven GxP audits across life-sciences environments.</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-all duration-300 shadow-lg shadow-accent/25"
            >
              Contact GxPify
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-6 group">
                <img 
                  src={gxpifyLogo} 
                  alt="GxPify - Life Sciences Audits" 
                  className="h-12 w-auto brightness-0 invert group-hover:opacity-90 transition-opacity"
                />
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm mb-8">
                Founder-led, audit-first GxP audit practice delivering commissioned audits under defined scope and governed execution across life-sciences environments.
              </p>
              
              {/* Professional Presence */}
              <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-accent">
                Professional Presence
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary-foreground/10 hover:bg-accent/20 hover:text-accent transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary-foreground/10 hover:bg-accent/20 hover:text-accent transition-all duration-300 group"
                  aria-label="Instagram - Audit Thinking & Metaphors"
                  title="Audit Thinking & Metaphors"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Audit Services Column */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-accent">
                Audit Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.auditServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance & Context Column */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-accent">
                Governance & Context
              </h4>
              <ul className="space-y-3">
                {footerLinks.governanceContext.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insight & Reference + About & Contact Column */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-accent">
                Insight & Reference
              </h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.insightReference.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-accent">
                About & Contact
              </h4>
              <ul className="space-y-3">
                {footerLinks.aboutContact.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-accent">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-primary-foreground/50">
                © {currentYear} GxPify. All rights reserved.
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-primary-foreground/50">Accepting Engagements</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs text-primary-foreground/40 leading-relaxed max-w-3xl">
                All audits are commissioned engagements delivered under client-approved scope and governed execution. GxPify does not provide consulting, remediation ownership, or operational services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GxpFooter;
