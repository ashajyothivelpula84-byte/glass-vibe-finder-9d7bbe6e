import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, ArrowUpRight, Shield } from 'lucide-react';
import { footerLinks } from '@/data/gxpifyData';

const GxpFooter = () => {
  const currentYear = new Date().getFullYear();

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
                <p className="text-primary-foreground/70 text-sm">Independent, scope-driven GxP audits across India and ASEAN.</p>
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
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg shadow-accent/25 group-hover:scale-105 transition-transform">
                  <span className="text-accent-foreground font-display font-bold text-xl">G</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-bold block">GxPify</span>
                  <span className="text-xs text-primary-foreground/60 tracking-wider uppercase">Audit Excellence</span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm mb-8">
                Sponsor / Audit Firm Commissioned GxP Audits delivered across India & ASEAN. 
                Independent, scope-driven audits supporting global life sciences organizations.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:contact@gxpify.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors group">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  contact@gxpify.com
                </a>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  India & ASEAN
                </div>
              </div>

              {/* Social Links */}
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
                  href="mailto:contact@gxpify.com"
                  className="p-3 rounded-xl bg-primary-foreground/10 hover:bg-accent/20 hover:text-accent transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-4">
              <h4 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-accent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
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
            <div className="lg:col-span-3">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
              <span>© {currentYear} GxPify.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-primary-foreground/40 uppercase tracking-wider">
                Independent Audit Services
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-primary-foreground/50">Accepting Engagements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GxpFooter;
