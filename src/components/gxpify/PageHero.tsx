import { ReactNode } from 'react';
import { Shield } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
  badge?: string;
}

const PageHero = ({ title, subtitle, children, compact = false, badge }: PageHeroProps) => {
  return (
    <section className={`relative bg-primary text-primary-foreground overflow-hidden ${compact ? 'py-16 md:py-20' : 'py-20 md:py-32'}`}>
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary-foreground)/0.08)_0%,transparent_50%)]" />
        
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 border border-primary-foreground/10 rounded-full animate-pulse" />
        <div className="absolute top-20 right-24 w-40 h-40 border border-accent/20 rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-accent/20 rounded-full animate-pulse" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">{badge}</span>
            </div>
          )}

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in max-w-3xl" style={{ animationDelay: '100ms' }}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60V24C240 42 480 51 720 42C960 33 1200 12 1440 24V60H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;