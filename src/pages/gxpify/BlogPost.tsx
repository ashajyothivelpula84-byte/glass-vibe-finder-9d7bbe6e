import { useParams, Link, useNavigate } from 'react-router-dom';
import { User, Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '@/components/gxpify/PageLayout';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogData';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${post.title} - GxPify Blog`;

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

  // Parse content to add IDs to headings
  const parseContent = (content: string) => {
    return content
      .split('\n')
      .map((line) => {
        if (line.startsWith('## ')) {
          const text = line.replace('## ', '');
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return `<h2 id="${id}" class="text-2xl font-display font-bold text-foreground mt-10 mb-4 scroll-mt-24">${text}</h2>`;
        }
        if (line.startsWith('### ')) {
          const text = line.replace('### ', '');
          return `<h3 class="text-xl font-display font-semibold text-foreground mt-6 mb-3">${text}</h3>`;
        }
        if (line.startsWith('- ')) {
          const text = line.replace('- ', '');
          return `<li class="text-muted-foreground ml-6 mb-2">${text}</li>`;
        }
        if (line.trim() === '') {
          return '';
        }
        return `<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`;
      })
      .join('');
  };

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
            {/* Category */}
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
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
              <div className="lg:sticky lg:top-24">
                {/* Table of Contents */}
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-display font-bold text-foreground mb-4">Table of Contents</h4>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Share Section */}
                <div className="bg-card border border-border rounded-xl p-6">
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
              <div className="rounded-2xl overflow-hidden mb-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
              />

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

              {/* Related Posts CTA */}
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
