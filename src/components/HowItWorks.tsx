import { howItWorks } from '@/data/mockData';
import { Search, Sparkles, Home } from 'lucide-react';

const stepIcons: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Search,
  2: Sparkles,
  3: Home,
};

export const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to your perfect hostel
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2 rounded-full" />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
              {howItWorks.map((step, index) => {
                const IconComponent = stepIcons[step.step];
                return (
                  <div
                    key={step.step}
                    className="relative group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="glass-card p-6 lg:p-8 text-center hover-lift h-full">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-20 h-20 mx-auto rounded-3xl bg-accent flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-bold text-xl mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for desktop */}
                    {index < 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          →
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
