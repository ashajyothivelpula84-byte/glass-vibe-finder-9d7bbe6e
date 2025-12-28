import { useState } from 'react';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import FAQAccordion from '@/components/gxpify/FAQAccordion';
import { faqs } from '@/data/gxpifyData';

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
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our audit services, methodology, and approach."
        badge="Support & Help"
      />

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
