import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Send, Info, ClipboardCheck, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  organization: z.string().trim().min(1, "Organization is required").max(200, "Organization must be less than 200 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  region: z.string().trim().min(1, "Region/Country is required").max(100, "Region must be less than 100 characters"),
  enquiryType: z.enum(["audit", "cat"], { required_error: "Please select an enquiry type" }),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [enquiryType, setEnquiryType] = useState<'audit' | 'cat'>('audit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      organization: formData.get('organization') as string,
      email: formData.get('email') as string,
      region: formData.get('region') as string,
      enquiryType: enquiryType,
      message: formData.get('message') as string,
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: "Validation Error",
        description: "Please check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. We will review and respond within 2 business days.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const enquiryTypes = [
    {
      id: 'audit' as const,
      icon: ClipboardCheck,
      title: 'GxP Audit',
      description: 'Sponsor / Audit Firm Commissioned Audits'
    },
    {
      id: 'cat' as const,
      icon: Layers,
      title: 'CAT Framework',
      description: 'QMS Strengthening (India & ASEAN SMEs)'
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="Contact GxPify"
        subtitle="Submit your enquiry for GxP audits or CAT Framework services"
        badge="Get in Touch"
      />

      {/* Contact Purpose */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Contact Purpose
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GxPify accepts enquiries related to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">Sponsor / Audit Firm Commissioned GxP audits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground">CAT Framework (QMS Strengthening) for small to medium life sciences organizations operating in India & ASEAN</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              All enquiries are reviewed for scope clarity, eligibility, and governance alignment before engagement discussions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Options */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Contact Options
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:contact@gxpify.com"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      contact@gxpify.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional visibility channel
                    </p>
                  </div>
                </a>
              </div>

              {/* Transparency Note */}
              <div className="mt-8 p-5 bg-secondary rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Transparency Note</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Submitting an enquiry does not establish an auditor–client relationship. Formal engagements commence only upon execution of a written agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Submit Your Enquiry
                </h2>

                {/* Enquiry Type Toggle */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {enquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setEnquiryType(type.id)}
                      className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all ${
                        enquiryType === type.id
                          ? 'bg-accent/10 border-accent'
                          : 'bg-background border-border hover:border-muted-foreground/30'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 mt-0.5 ${
                        enquiryType === type.id ? 'text-accent' : 'text-muted-foreground'
                      }`} />
                      <div>
                        <span className={`block font-medium ${
                          enquiryType === type.id ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {type.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {type.description}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {enquiryType === 'cat' && (
                  <div className="p-4 bg-accent/10 rounded-lg mb-6 border border-accent/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> CAT Framework services are available to small and medium life sciences organizations in India and ASEAN only.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        maxLength={100}
                        placeholder="Your name" 
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                        Organization *
                      </label>
                      <Input 
                        id="organization" 
                        name="organization" 
                        required 
                        maxLength={200}
                        placeholder="Company name" 
                        className={errors.organization ? 'border-destructive' : ''}
                      />
                      {errors.organization && <p className="text-sm text-destructive mt-1">{errors.organization}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        maxLength={255}
                        placeholder="you@company.com" 
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-foreground mb-2">
                        Region / Country *
                      </label>
                      <Input 
                        id="region" 
                        name="region" 
                        required 
                        maxLength={100}
                        placeholder="e.g., United States, India, Singapore" 
                        className={errors.region ? 'border-destructive' : ''}
                      />
                      {errors.region && <p className="text-sm text-destructive mt-1">{errors.region}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Brief Description of Requirement *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      rows={5}
                      placeholder={
                        enquiryType === 'audit'
                          ? "Please describe your audit requirements, including scope, auditee location, regulatory focus, and timing if known..."
                          : "Please describe your QMS strengthening requirements, areas of focus, and any relevant context..."
                      }
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
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
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-6 bg-muted border-t border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Use
            </Link>
            <span className="text-border">|</span>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
