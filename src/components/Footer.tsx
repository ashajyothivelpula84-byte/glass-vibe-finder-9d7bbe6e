import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const links = {
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Safety', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
    hostels: [
      { label: 'List Your Property', href: '#' },
      { label: 'Partner with Us', href: '#' },
      { label: 'Affiliate Program', href: '#' },
      { label: 'Resources', href: '#' },
    ],
  };

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-secondary/50 pt-16 lg:pt-24 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl">sklassics</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Redefining the way you find your perfect living space. Smart matching, 
              verified listings, and a community that cares.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Hostels</h4>
            <ul className="space-y-3">
              {links.hostels.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card p-6 lg:p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-bold text-xl mb-2">
                Stay in the loop
              </h4>
              <p className="text-muted-foreground">
                Get the latest hostel listings and offers delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              hello@sklassics.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bangalore, India
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 sklassics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
