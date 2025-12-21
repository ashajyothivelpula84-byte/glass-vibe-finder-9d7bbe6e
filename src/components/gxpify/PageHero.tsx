import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
}

const PageHero = ({ title, subtitle, children, compact = false }: PageHeroProps) => {
  return (
    <section className={`bg-primary text-primary-foreground ${compact ? 'py-12 md:py-16' : 'py-16 md:py-24'}`}>
      <div className="container-wide">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in delay-100">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-6 animate-fade-in delay-200">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
