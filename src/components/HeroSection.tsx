import { Button } from '@/components/ui/button';
import { Check, Shield, DollarSign, Zap } from 'lucide-react';

export const HeroSection = () => {
  const trustBadges = [
    { icon: Check, label: 'Verified Listings' },
    { icon: DollarSign, label: 'Transparent Pricing' },
    { icon: Shield, label: 'Safe & Secure' },
    { icon: Zap, label: 'Quick Move-in' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 animate-fade-in shadow-md">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              1000+ students found their perfect hostel this month
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-balance leading-tight">
            Find hostels that
            <br />
            <span className="text-primary">match your lifestyle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up [animation-delay:200ms] opacity-0 text-balance">
            Search by location, vibe, or amenities — our smart matching algorithm finds 
            the perfect living space for you, anywhere in the city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up [animation-delay:400ms] opacity-0">
            <Button variant="hero" size="xl">
              Explore Hostels
            </Button>
            <Button variant="hero-outline" size="xl">
              Filter Preferences
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 animate-fade-in-up [animation-delay:600ms] opacity-0">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <badge.icon className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Card */}
        <div className="mt-16 max-w-sm mx-auto animate-fade-in-up [animation-delay:800ms] opacity-0">
          <div className="glass-card p-4 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-lg">🔥</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Trending in your area</p>
                <p className="text-xs text-muted-foreground">Based on recent searches</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Koramangala, Bangalore</p>
                <p className="text-sm text-muted-foreground">45 hostels available</p>
              </div>
              <Button size="sm">View</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120V60C240 90 480 105 720 90C960 75 1200 30 1440 60V120H0Z"
            className="fill-secondary/30"
          />
        </svg>
      </div>
    </section>
  );
};
