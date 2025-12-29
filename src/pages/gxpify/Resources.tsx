import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Scale, Users, Layers, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Resources = () => {
  const resources = [
    {
      id: 'audit-governance',
      title: 'Audit Governance Notes',
      description: 'Understanding the principles and practices that govern independent GxP audits. Learn about scope discipline, Lead Auditor accountability, and reporting standards.',
      icon: FileText,
      topics: ['Audit lifecycle management', 'Scope definition best practices', 'Evidence-based reporting', 'Audit quality metrics'],
      link: '/audit-governance'
    },
    {
      id: 'vendor-qualification',
      title: 'Vendor Qualification Perspectives',
      description: 'Insights on vendor and supplier qualification in the pharmaceutical supply chain. Risk-based approaches to vendor selection and ongoing monitoring.',
      icon: Users,
      topics: ['Risk-based vendor assessment', 'Qualification vs. audit', 'Supply chain oversight', 'Quality agreements'],
      link: '/audits/gmp'
    },
    {
      id: 'independence-ethics',
      title: 'Independence & Ethics Explained',
      description: 'The importance of auditor independence and ethical conduct in maintaining audit credibility. Conflict of interest management and disclosure practices.',
      icon: Scale,
      topics: ['Auditor independence', 'Conflict of interest', 'Ethical boundaries', 'Objectivity principles'],
      link: '/audit-governance'
    },
    {
      id: 'cat-boundaries',
      title: 'CAT vs Audit Boundaries',
      description: 'Understanding the clear separation between CAT Framework services (consulting, assessment, training) and independent audit services. Why this separation matters.',
      icon: Layers,
      topics: ['Service separation', 'Cooling-off periods', 'Independence preservation', 'Regional applicability'],
      link: '/cat-framework'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="Resources"
        subtitle="Perspectives and insights on GxP auditing, vendor qualification, independence principles, and quality management."
        badge="Knowledge Hub"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-accent/10 rounded-xl w-fit group-hover:bg-accent/20 transition-colors">
                        <resource.icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {resource.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {resource.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={resource.link}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Content Placeholder */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Articles & Insights
            </h2>
            <p className="text-muted-foreground mb-6">
              We're developing additional resources including articles on regulatory trends, audit best practices, 
              and industry insights. Check back soon for new content.
            </p>
            <Link to="/blog" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 transition-colors">
              Visit Our Blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Contact us to discuss your audit requirements or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/faqs">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
