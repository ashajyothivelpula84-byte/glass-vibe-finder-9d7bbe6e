import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainNavLinks } from '@/data/gxpifyData';

const GxpNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuditsOpen, setIsAuditsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAuditsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const auditsLink = mainNavLinks.find(link => link.label === 'GxP Audit Services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-professional border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">G</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">GxPify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Audits Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsAuditsOpen(true)}
                onMouseLeave={() => setIsAuditsOpen(false)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                GxP Audit Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isAuditsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAuditsOpen && (
                <div
                  onMouseEnter={() => setIsAuditsOpen(true)}
                  onMouseLeave={() => setIsAuditsOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg py-2 animate-fade-in"
                >
                  {auditsLink?.children?.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {mainNavLinks.filter(link => link.label !== 'GxP Audit Services').map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">Request an Audit</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <div className="py-4 space-y-1">
              {/* Audits Section */}
              <div className="px-4">
                <button
                  onClick={() => setIsAuditsOpen(!isAuditsOpen)}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground"
                >
                  GxP Audit Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAuditsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAuditsOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {auditsLink?.children?.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links */}
              {mainNavLinks.filter(link => link.label !== 'GxP Audit Services').map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 pt-4">
                <Button asChild className="w-full">
                  <Link to="/contact">Request an Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default GxpNavbar;
