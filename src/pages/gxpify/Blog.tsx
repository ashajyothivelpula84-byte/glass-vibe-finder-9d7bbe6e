import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ArrowRight, Loader2 } from 'lucide-react';
import PageLayout from '@/components/gxpify/PageLayout';
import PageHero from '@/components/gxpify/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const API_BASE = "https://sklassicsacademy.com";
const LIST_ENDPOINT = `${API_BASE}/api/blogs`;

interface BlogSection {
  type: 'heading' | 'paragraph' | 'image';
  content: string;
  size?: string;
}

interface BlogPost {
  id: string | number;
  title: string;
  author?: string;
  author_id?: number;
  card_image?: string;
  sections?: BlogSection[];
  created_at?: string;
  published_at?: string;
  updated_at?: string;
  featured?: boolean;
  is_featured?: boolean;
  tag?: string;
}

function normalizeList(data: unknown): BlogPost[] {
  if (Array.isArray(data)) return data;
  if (data && typeof data === 'object' && 'blogs' in data && Array.isArray((data as { blogs: BlogPost[] }).blogs)) {
    return (data as { blogs: BlogPost[] }).blogs;
  }
  return [];
}

function firstParagraph(blog: BlogPost): string {
  return blog?.sections?.find((s) => s.type === "paragraph")?.content || "";
}

function getPreview(blog: BlogPost): string {
  return String(firstParagraph(blog)).replace(/\s+/g, " ").trim();
}

function imgSrc(blog: BlogPost): string {
  return blog?.card_image ? `${API_BASE}/${blog.card_image}` : "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=400&fit=crop";
}

function authorOf(blog: BlogPost): string {
  return blog?.author || (blog?.author_id ? `Author ${blog.author_id}` : "GxPify Team");
}

function parseDate(blog: BlogPost): number {
  const raw = blog?.created_at || blog?.published_at || blog?.updated_at;
  if (!raw) return -Infinity;
  const ts = Date.parse(String(raw).replace(" ", "T"));
  return Number.isNaN(ts) ? -Infinity : ts;
}

function formatDate(blog: BlogPost): string {
  const raw = blog?.created_at || blog?.published_at || blog?.updated_at;
  if (!raw) return '';
  const date = new Date(String(raw).replace(" ", "T"));
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(LIST_ENDPOINT, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const list = normalizeList(data).filter(Boolean);
        if (!cancel) setBlogs(list);
      } catch (e) {
        if (!cancel) setError((e as Error)?.message || "Failed to load blogs");
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => { cancel = true; };
  }, []);

  // Sort: featured → newest → title
  const sorted = useMemo(() => {
    const copy = [...blogs];
    copy.sort((a, b) => {
      const aFeat = !!(a?.featured || a?.is_featured || a?.tag === "featured");
      const bFeat = !!(b?.featured || b?.is_featured || b?.tag === "featured");
      if (aFeat !== bFeat) return aFeat ? -1 : 1;

      const aTs = parseDate(a);
      const bTs = parseDate(b);
      if (aTs !== bTs) return bTs - aTs;
      return String(a?.title || "").localeCompare(String(b?.title || ""));
    });
    return copy;
  }, [blogs]);

  // Filter by query
  const filteredPosts = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    if (!term) return sorted;
    return sorted.filter((b) =>
      [b?.title, authorOf(b), getPreview(b)]
        .map((x) => String(x || "").toLowerCase())
        .some((s) => s.includes(term))
    );
  }, [sorted, searchQuery]);

  return (
    <PageLayout>
      <PageHero
        badge="Insights & Resources"
        title="Our Blog"
        subtitle="Stay updated with the latest insights on GxP compliance, audit best practices, and regulatory updates from our team of experts."
      />

      <section className="py-16 md:py-24">
        <div className="container-wide">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles (title, author, content)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-border bg-card"
                />
              </div>
              <Button type="submit" className="h-12 px-8">Search</Button>
            </form>
            
            {/* Results count */}
            {!loading && !error && (
              <p className="text-center text-muted-foreground mt-4">
                {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Loading articles...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="bg-destructive/10 text-destructive px-6 py-4 rounded-xl inline-block">
                {error}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && !error && filteredPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const isFeatured = !!(post?.featured || post?.is_featured || post?.tag === "featured");
                
                return (
                  <article
                    key={post.id}
                    className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {/* Featured Badge */}
                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Featured
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={imgSrc(post)}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=400&fit=crop";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title || 'Untitled'}
                      </h3>

                      {/* Author */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <User className="w-4 h-4" />
                        <span>{authorOf(post)}</span>
                      </div>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 min-h-[2.5rem]">
                        {getPreview(post) || 'Read this article to learn more...'}
                      </p>

                      {/* Date */}
                      {formatDate(post) && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {formatDate(post)}
                        </p>
                      )}

                      {/* Read More Button */}
                      <Button asChild variant="outline" className="w-full group/btn">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
