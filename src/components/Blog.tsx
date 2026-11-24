import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Search,
  X,
  PhoneCall,
  Check,
  Copy,
  BookOpen,
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogCategory, BlogPost, ServiceOption } from '../types';

interface BlogProps {
  onSelectService: (service: ServiceOption) => void;
}

const CATEGORIES: BlogCategory[] = [
  'All',
  'Web Design',
  'Social Media',
  'AI Automation',
  'Local SEO',
];

interface CoverVisualProps {
  post: BlogPost;
  className?: string;
}

const CoverVisual: React.FC<CoverVisualProps> = ({ post, className = '' }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (post.coverImage && !imgFailed) {
    return (
      <div className={`relative overflow-hidden bg-neutral-100 ${className}`}>
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  // Editorial dark architectural cover fallback / primary visual for AI Automation
  return (
    <div
      className={`relative overflow-hidden bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-8 ${className}`}
      aria-label={post.coverAlt}
    >
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
        <span>{post.category}</span>
        <PhoneCall className="w-4 h-4 text-neutral-300" />
      </div>
      <div className="relative my-auto py-6">
        <div className="text-xs font-mono text-neutral-400 mb-2">
          RESPONSE WINDOW: &lt; 60 SEC
        </div>
        <div className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-white max-w-md">
          24/7 Inquiry Capture &amp; Guided Scheduling
        </div>
      </div>
      <div className="relative flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-neutral-400 pt-4 border-t border-neutral-800">
        <span>DesigntightMedia Insights</span>
        <span className="text-white">OKC Small Business</span>
      </div>
    </div>
  );
};

export const Blog: React.FC<BlogProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activePost) {
        setActivePost(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePost]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      !normalizedQuery ||
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.excerpt.toLowerCase().includes(normalizedQuery) ||
      post.category.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  const showFeaturedLayout =
    activeCategory === 'All' && !normalizedQuery && filteredPosts.length > 1;
  const featuredPost = showFeaturedLayout
    ? filteredPosts.find((p) => p.featured) || filteredPosts[0]
    : null;
  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  const handleCopySummary = (post: BlogPost) => {
    const text = `${post.title}\nBy ${post.author} (${post.date}) — DesigntightMedia\n\n${post.excerpt}\n\nKey Takeaways:\n${post.keyTakeaways
      .map((t) => `- ${t}`)
      .join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNavigatePost = (direction: 'prev' | 'next') => {
    if (!activePost) return;
    const currentIndex = blogPosts.findIndex((p) => p.id === activePost.id);
    if (currentIndex === -1) return;
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % blogPosts.length
        : (currentIndex - 1 + blogPosts.length) % blogPosts.length;
    setActivePost(blogPosts[nextIndex]);
  };

  const handleBookFromArticle = (post: BlogPost) => {
    setActivePost(null);
    onSelectService(post.recommendedService);
  };

  return (
    <section id="blog" className="py-20 md:py-24 bg-white border-b border-neutral-200">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Insights &amp; Guides
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.08] mb-3 [text-wrap:balance]">
              Practical ideas to help local businesses get noticed.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Playbooks on conversion-focused websites, consistent social marketing, local SEO, and AI workflows for Oklahoma City teams.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-72 shrink-0">
            <label htmlFor="blog-search" className="sr-only">
              Search blog articles
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="blog-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-9 py-2.5 text-sm border border-neutral-300 rounded-xs bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-black"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-black cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 border border-neutral-200 rounded-xs w-fit mb-10"
          role="tablist"
          aria-label="Filter articles by topic"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 text-xs font-bold tracking-wide rounded-xs transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white shadow-2xs'
                    : 'text-neutral-600 hover:text-black hover:bg-white/70'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 ? (
          <div className="border border-neutral-200 bg-neutral-50 rounded-sm p-10 text-center">
            <BookOpen className="w-7 h-7 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-black mb-1">
              No matching articles found
            </h3>
            <p className="text-sm text-neutral-600 mb-5">
              Try clearing your search term or switching back to all topics.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 rounded-xs cursor-pointer transition-colors"
            >
              Show All Articles
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Article Split Card */}
            {featuredPost && (
              <article
                onClick={() => setActivePost(featuredPost)}
                className="group border border-neutral-200 hover:border-black rounded-sm bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch transition-colors duration-150 cursor-pointer"
              >
                <div className="lg:col-span-6 min-h-[260px] lg:min-h-[340px]">
                  <CoverVisual post={featuredPost} className="w-full h-full" />
                </div>

                <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    {/* Quiet unboxed metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500 mb-3">
                      <span className="text-black font-bold uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-snug mb-3 group-hover:underline decoration-2 underline-offset-4 [text-wrap:balance]">
                      {featuredPost.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <div className="text-xs text-neutral-500">
                      By <strong className="text-neutral-900">{featuredPost.author}</strong>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap shrink-0">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* Grid of Articles */}
            {gridPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {gridPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setActivePost(post)}
                    className="group border border-neutral-200 hover:border-black rounded-sm bg-white overflow-hidden flex flex-col justify-between transition-colors duration-150 cursor-pointer"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full border-b border-neutral-100">
                        <CoverVisual post={post} className="w-full h-full" />
                      </div>

                      <div className="p-6">
                        {/* Quiet unboxed metadata */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-2.5">
                          <span className="font-bold text-neutral-900">
                            {post.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{post.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug mb-2.5 group-hover:underline decoration-1 underline-offset-4 [text-wrap:balance]">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-500 font-medium">
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-black whitespace-nowrap shrink-0">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Distraction-Free Article Reader Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          onClick={() => setActivePost(null)}
        >
          <div
            className="bg-white border border-neutral-300 rounded-sm w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Reader Top Bar */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-500 truncate">
                <span className="font-bold text-black uppercase tracking-wider">
                  {activePost.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activePost.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activePost.readTime}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopySummary(activePost)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-black border border-neutral-200 hover:border-black rounded-xs transition-colors cursor-pointer"
                >
                  {copiedId === activePost.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy Summary</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="p-1.5 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-xs transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-6 sm:p-10">
              <h2
                id="article-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight mb-4 [text-wrap:balance]"
              >
                {activePost.title}
              </h2>

              <div className="text-xs sm:text-sm text-neutral-600 mb-7 pb-6 border-b border-neutral-200">
                Written by <strong className="text-black">{activePost.author}</strong>{' '}
                <span aria-hidden="true">·</span> {activePost.authorRole}
              </div>

              <div className="aspect-[16/9] w-full rounded-xs overflow-hidden border border-neutral-200 mb-8">
                <CoverVisual post={activePost} className="w-full h-full" />
              </div>

              {/* Key Takeaways Box (Clean hairline border, no thick left bar) */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xs p-5 sm:p-6 mb-8">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 mb-3">
                  Key Takeaways
                </div>
                <ul className="space-y-2.5">
                  {activePost.keyTakeaways.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm text-neutral-800 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-black shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Sections */}
              <div className="space-y-7 max-w-[68ch]">
                {activePost.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold text-black tracking-tight mb-3">
                      {section.heading}
                    </h3>
                    <div className="space-y-3.5 text-[15px] sm:text-base text-neutral-700 leading-[1.7]">
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contextual Conversion Callout */}
              <div className="mt-10 bg-[#080808] text-white p-6 sm:p-8 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Put this into practice
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Want help implementing this for your Oklahoma City business?
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => handleBookFromArticle(activePost)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <span>{activePost.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Next / Previous Article Navigation */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleNavigatePost('prev')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Article</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigatePost('next')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black cursor-pointer transition-colors"
                >
                  <span>Next Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
