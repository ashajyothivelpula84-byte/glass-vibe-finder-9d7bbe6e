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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-blob opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000 opacity-70" />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              1000+ students found their perfect hostel this month
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-balance leading-tight">
            Find hostels that
            <br />
            <span className="gradient-text">match your lifestyle.</span>
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
                className="flex items-center gap-2 px-4 py-2 glass rounded-full"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-accent flex items-center justify-center">
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
              <Button variant="gradient" size="sm">View</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120V60C240 90 480 105 720 90C960 75 1200 30 1440 60V120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
