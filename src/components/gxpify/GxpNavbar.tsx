import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNavLinks } from '@/data/gxpifyData';
import gxpifyLogo from '@/assets/gxpify/gxpify_logo.png';

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

  const auditsLink = mainNavLinks.find(link => link.label === 'Audit Services');

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
          <Link to="/" className="flex flex-col">
            <img 
              src={gxpifyLogo} 
              alt="GxPify - Life Sciences Audits" 
              className="h-8 lg:h-10 w-auto"
            />
            <span className="hidden md:block text-[10px] lg:text-xs text-muted-foreground font-medium mt-0.5">
              Independent, scope-disciplined GxP audits
            </span>
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
                Audit Services
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
            {mainNavLinks.filter(link => link.label !== 'Audit Services' && link.label !== 'Home').map((link) => (
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
                  Audit Services
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
              {mainNavLinks.filter(link => link.label !== 'Audit Services' && link.label !== 'Home').map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default GxpNavbar;
