import { useParams, Link, useNavigate } from 'react-router-dom';
import { User, Calendar, ArrowLeft, Share2, Twitter, Linkedin, Facebook, Copy, Check, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/gxpify/PageLayout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const API_BASE = "https://sklassicsacademy.com";

interface BlogSection {
  type: 'heading' | 'paragraph' | 'image';
  content: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4';
}

interface BlogData {
  id: string | number;
  title: string;
  author?: string;
  author_id?: number;
  card_image?: string;
  sections?: BlogSection[];
  created_at?: string;
  published_at?: string;
  updated_at?: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/api/view_blog/${slug}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        if (!data?.id || !data?.title) throw new Error("Invalid blog data structure");

        const processed: BlogData = {
          ...data,
          card_image: data.card_image ? `${API_BASE}/${data.card_image}` : null,
          sections: data.sections?.map((s: BlogSection) => ({
            ...s,
            content: s.type === "image" ? `${API_BASE}/${s.content}` : s.content,
          })) || [],
        };

        if (!cancel) setBlog(processed);
      } catch (err) {
        if (!cancel) setError((err as Error).message);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchBlog();
    return () => { cancel = true; };
  }, [slug]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = blog ? `${blog.title} - GxPify Blog` : 'GxPify Blog';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually from your browser.",
        variant: "destructive",
      });
    }
  };

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateSectionId = (content: string, index: number): string => {
    return `section-${index}-${content.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30)}`;
  };

  // Loading State
  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="ml-3 text-muted-foreground">Loading article...</span>
        </div>
      </PageLayout>
    );
  }

  // Error State
  if (error) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="bg-destructive/10 text-destructive px-6 py-4 rounded-xl inline-block mb-6">
              Error: {error}
            </div>
            <div>
              <Button asChild>
                <Link to="/blog">Back to Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Not Found State
  if (!blog) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const author = blog.author || (blog.author_id ? `Author ${blog.author_id}` : 'GxPify Team');
  const dateStr = blog.created_at || blog.published_at || blog.updated_at;
  const formattedDate = dateStr 
    ? new Date(String(dateStr).replace(" ", "T")).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : '';
  
  const hasToc = blog.sections?.some((s) => s.type === "heading") || false;

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-wide relative z-10">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <div className="max-w-4xl">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <User className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">{author}</span>
              </div>
              {formattedDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formattedDate}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                {hasToc && (
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h4 className="font-display font-bold text-foreground mb-4 pb-3 border-b border-border">
                      Table of Contents
                    </h4>
                    <nav className="space-y-2">
                      {blog.sections?.map((section, index) => {
                        if (section.type !== 'heading') return null;
                        const sectionId = generateSectionId(section.content, index);
                        const indent = 
                          section.size === 'h1' ? '' :
                          section.size === 'h2' ? 'pl-3' :
                          section.size === 'h3' ? 'pl-6' :
                          section.size === 'h4' ? 'pl-9' : '';
                        
                        return (
                          <button
                            key={index}
                            onClick={() => scrollToSection(sectionId)}
                            className={`block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 ${indent}`}
                          >
                            {section.content}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Share Section */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this article
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare('twitter')}
                      className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare('linkedin')}
                      className="hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare('facebook')}
                      className="hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2]"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopyLink}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Featured Image */}
              {blog.card_image && (
                <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                  <img
                    src={blog.card_image}
                    alt={blog.title}
                    className="w-full h-auto max-h-[420px] object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=400&fit=crop";
                    }}
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {blog.sections?.map((section, index) => {
                  const sectionId = generateSectionId(section.content, index);

                  if (section.type === 'heading') {
                    const Tag = section.size || 'h2';
                    const headingClasses = {
                      h1: 'text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-5 scroll-mt-24',
                      h2: 'text-2xl md:text-3xl font-display font-bold text-foreground mt-10 mb-4 scroll-mt-24',
                      h3: 'text-xl md:text-2xl font-display font-semibold text-foreground mt-8 mb-3 scroll-mt-24',
                      h4: 'text-lg md:text-xl font-display font-semibold text-foreground mt-6 mb-3 scroll-mt-24',
                    };
                    
                    return (
                      <Tag
                        key={index}
                        id={sectionId}
                        className={headingClasses[section.size || 'h2']}
                      >
                        {section.content}
                      </Tag>
                    );
                  }

                  if (section.type === 'paragraph') {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-5 whitespace-pre-line">
                        {section.content}
                      </p>
                    );
                  }

                  if (section.type === 'image') {
                    return (
                      <div key={index} className="my-8">
                        <img
                          src={section.content}
                          alt="Blog content"
                          className="w-full max-h-[420px] object-contain rounded-xl shadow-md"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=400&fit=crop";
                          }}
                        />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Bottom Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-foreground font-medium">Enjoyed this article? Share it!</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyLink}
                    >
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-12 flex flex-wrap gap-4 items-center justify-between">
                <Button asChild variant="ghost">
                  <Link to="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Link>
                </Button>
                <Button onClick={handleCopyLink} className="bg-gradient-to-r from-primary to-accent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share article
                </Button>
              </div>

              {/* Related CTA */}
              <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  Want to learn more?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore more articles on GxP compliance and audit best practices.
                </p>
                <Button asChild>
                  <Link to="/blog">Browse All Articles</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPost;
