import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import PageLayout from '@/components/gxpify/PageLayout';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { faqs } from '@/data/gxpifyData';
import faqsHeroImage from '@/assets/gxpify/faqs_primary_01.jpg';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'general', label: 'General Audits' },
    { id: 'independence', label: 'Independence & Governance' },
    { id: 'vendor', label: 'Vendor & Supplier Audits' },
    { id: 'coverage', label: 'Global Coverage & Delivery' },
    { id: 'cat', label: 'CAT Framework' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <PageLayout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={faqsHeroImage} 
            alt="Frequently asked questions about GxP audit services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Support & Help</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Find answers to common questions about our audit services, methodology, and approach.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V24C240 42 480 51 720 42C960 33 1200 12 1440 24V60H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Filter */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="flex-1">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  {categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <FAQAccordion faqs={filteredFaqs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQs;
