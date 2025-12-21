import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';

const Contact = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState<'audit' | 'training'>('audit');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. We will get back to you within 2 business days.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      <PageHero
        title="Contact GxPify"
        subtitle="Get in touch to discuss your audit requirements or training and QMS enquiries."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:contact@gxpify.com" className="text-muted-foreground hover:text-primary">
                      contact@gxpify.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Delivery Regions</h3>
                    <p className="text-muted-foreground text-sm">
                      India & ASEAN<br />
                      (Singapore, Malaysia, Vietnam)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Response Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all enquiries within 2 business days. For urgent matters, please indicate in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {/* Form Type Toggle */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setFormType('audit')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    formType === 'audit'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Request an Audit
                </button>
                <button
                  onClick={() => setFormType('training')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    formType === 'training'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Training & QMS Enquiry
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Organization *
                    </label>
                    <Input id="organization" name="organization" required placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                      Country *
                    </label>
                    <Input id="country" name="country" required placeholder="Your country" />
                  </div>
                </div>

                {formType === 'audit' && (
                  <div>
                    <label htmlFor="auditType" className="block text-sm font-medium text-foreground mb-2">
                      Audit Type of Interest
                    </label>
                    <select
                      id="auditType"
                      name="auditType"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    >
                      <option value="">Select audit type</option>
                      <option value="glp-gcp">GLP / GCP Audits</option>
                      <option value="gmp">GMP Audits</option>
                      <option value="vendor">Vendor & Supply Chain Audits</option>
                      <option value="gdp">GDP Audits</option>
                      <option value="gpvp">GPvP Audits</option>
                      <option value="specialized">Specialized Audits</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                {formType === 'training' && (
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> CAT Framework services (Consult · Assess · Train) are available in India and ASEAN only.
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={
                      formType === 'audit'
                        ? "Please describe your audit requirements, including scope, location, and timing if known..."
                        : "Please describe your training or QMS support requirements..."
                    }
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
