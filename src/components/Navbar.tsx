import { useState, useEffect } from 'react';
import { Search, MapPin, Menu, X, Heart, Bell, Moon, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl text-primary hidden sm:block">
                sklassics
              </span>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex items-center gap-2 bg-card border border-border rounded-2xl px-2 py-1.5 max-w-xl flex-1 mx-8 shadow-md">
              <div className="flex items-center gap-2 px-3 py-2 flex-1 border-r border-border">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="City, area, or pincode"
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 px-3 py-2 flex-1">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Hostel name, amenities..."
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                />
              </div>
              <Button size="sm" className="rounded-xl">
                Search
              </Button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Theme Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative hidden sm:flex">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative hidden sm:flex">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>

              {/* Profile */}
              <Button variant="outline" size="icon" className="hidden sm:flex">
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-card border border-border rounded-2xl mx-4 mt-2 p-4 shadow-lg transition-all duration-300 lg:hidden ${
          isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-2xl">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="City, area, or pincode"
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-2xl">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Hostel name, amenities..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
            />
          </div>
          <Button className="w-full">
            Search Hostels
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-16 right-4 left-4 bg-card border border-border rounded-2xl p-6 shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            <Button variant="ghost" className="justify-start gap-3">
              <Heart className="w-5 h-5" /> Saved Hostels
              <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">2</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-3">
              <Bell className="w-5 h-5" /> Notifications
              <span className="ml-auto w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" className="justify-start gap-3">
              <User className="w-5 h-5" /> Profile
            </Button>
            <div className="h-px bg-border my-2" />
            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
