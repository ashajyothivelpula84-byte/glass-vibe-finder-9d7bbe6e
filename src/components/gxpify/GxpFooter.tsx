import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { footerLinks } from '@/data/gxpifyData';

const GxpFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-lg">G</span>
              </div>
              <span className="font-display text-xl font-semibold">GxPify</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm mb-6">
              Independent GxP audit services for global life sciences organizations. 
              Global mandates. Client-defined scope. Regional execution. Single-point accountability.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@gxpify.com"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* GxPify Column */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">
              GxPify
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} GxPify. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Independent Audit Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GxpFooter;
