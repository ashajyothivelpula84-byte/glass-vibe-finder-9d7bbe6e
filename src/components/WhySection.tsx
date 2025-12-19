import { valueProps } from '@/data/mockData';
import { Check, Target, Gem, Shield } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '✓': Check,
  '🎯': Target,
  '💎': Gem,
  '🛡️': Shield,
};

export const WhySection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              Why choose{' '}
              <span className="gradient-text">sklassics</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're redefining how you find and choose your next living space
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => {
              const IconComponent = iconMap[prop.icon] || Check;
              return (
                <div
                  key={prop.title}
                  className="group glass-card p-6 lg:p-8 text-center hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
