'use client'

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import { createClientComponentClient } from "@/lib/supabase";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Article = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  featured_image: string | null;
  published_at: string;
  updated_at?: string;
  reading_time: number;
  author_id: string;
  slug: string;
  meta_description?: string;
  keywords?: string;
  category?: string;
  tags?: string[];
  author: {
    name: string;
    avatar: string | null;
    bio?: string;
    social_links?: {
      twitter?: string;
      linkedin?: string;
      website?: string;
    };
  } | null;
};

export default function Page() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : '';
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchArticle = async () => {
      console.log("=== Starting fetchArticle ===");
      console.log("Slug value:", slug);

      if (!slug || slug === '') {
        console.log("No slug provided, stopping loading");
        setLoading(false);
        setError("No article slug provided");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        console.log("Making Supabase query for slug:", slug);

        const timeoutId = setTimeout(() => {
          console.log("Query timeout - forcing loading to stop");
          setLoading(false);
          setError("Request timed out");
        }, 10000);

        const { data: articleData, error: articleError } = await supabase
          .from("articles")
          .select(`
            *,
            authors (
              name,
              avatar,
              bio,
              social_links
            )
          `)
          .eq("slug", slug)
          .eq("status", "published")
          .maybeSingle();

        console.log("slug:", slug);
        console.log("data:", articleData);
        console.log("error:", articleError);


        clearTimeout(timeoutId);

        console.log("=== Query Results ===");
        console.log("Article data:", articleData);
        console.log("Article error:", articleError);

        if (articleError) {
          console.error("Article error details:", articleError);
          setError(`Database error: ${articleError.message}`);
          return;
        }

        if (!articleData) {
          console.log("No article found");
          setError("Article not found");
          return;
        }

        console.log("Article found, setting data...");
        setArticle(articleData);

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: articleData.title,
            page_location: window.location.href,
            content_group1: articleData.category || 'Article'
          });
        }

      } catch (err) {
        console.error("Catch block error:", err);
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(`An unexpected error occurred: ${errorMessage}`);
      } finally {
        console.log("=== Finishing fetchArticle - setting loading to false ===");
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);


  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      const articleElement = document.querySelector('article');
      if (articleElement) {
        const articleTop = articleElement.offsetTop;
        const articleHeight = articleElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        const articleProgress = Math.min(
          100,
          Math.max(0, ((scrollTop + windowHeight - articleTop) / articleHeight) * 100)
        );

        setReadingProgress(articleProgress);

        if (articleProgress >= 25 && articleProgress < 26) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: '25% read',
              value: 25
            });
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const shareOn = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || document.title);
    const excerpt = encodeURIComponent(article?.excerpt || '');

    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=YourSite`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${excerpt}`,
      whatsapp: `https://wa.me/?text=${title} ${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${title}`,
    };

    if (links[platform]) {
      window.open(links[platform], "_blank", "width=600,height=400");

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'share', {
          method: platform,
          content_type: 'article',
          item_id: article?.id
        });
      }
    }
    setIsShareOpen(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'share', {
          method: 'clipboard',
          content_type: 'article',
          item_id: article?.id
        });
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
    setIsShareOpen(false);
  };


  const generateStructuredData = () => {
    if (!article) return null;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.meta_description || article.excerpt,
      "image": article.featured_image ? [article.featured_image] : [],
      "datePublished": article.published_at,
      "dateModified": article.updated_at || article.published_at,
      "author": {
        "@type": "Person",
        "name": article.author?.name || "Unknown Author",
        "image": article.author?.avatar,
        "description": article.author?.bio
      },
      "publisher": {
        "@type": "Organization",
        "name": "Your Site Name",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yoursite.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": typeof window !== 'undefined' ? window.location.href : ''
      },
      "wordCount": article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
      "timeRequired": `PT${article.reading_time}M`,
      "keywords": article.keywords || article.tags?.join(', '),
      "articleSection": article.category,
      "inLanguage": "en-US"
    };

    return structuredData;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        <span className="ml-3 text-gray-600">Loading article...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-gray-500 text-xl mb-4">📄 Article not found</div>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const publishedDate = new Date(article.published_at);
  const updatedDate = article.updated_at ? new Date(article.updated_at) : null;

  return (
    <>
      <Head>
        <title>{article.title} | Your Site Name</title>
        <meta name="description" content={article.meta_description || article.excerpt} />
        <meta name="keywords" content={article.keywords || article.tags?.join(', ')} />
        <meta name="author" content={article.author?.name || 'Unknown Author'} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="revisit-after" content="7 days" />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.meta_description || article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:site_name" content="Your Site Name" />
        <meta property="og:locale" content="en_US" />
        {article.featured_image && (
          <>
            <meta property="og:image" content={article.featured_image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={article.title} />
          </>
        )}
        <meta property="article:published_time" content={article.published_at} />
        {article.updated_at && (
          <meta property="article:modified_time" content={article.updated_at} />
        )}
        <meta property="article:author" content={article.author?.name || 'Unknown Author'} />
        {article.category && <meta property="article:section" content={article.category} />}
        {article.tags && article.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.meta_description || article.excerpt} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        {article.featured_image && (
          <meta name="twitter:image" content={article.featured_image} />
        )}

        <meta name="theme-color" content="#10b981" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />

        {generateStructuredData() && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateStructuredData())
            }}
          />
        )}
      </Head>

      <div
        className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="max-w-4xl mx-auto p-6">
        <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-emerald-600">Home</Link>
            </li>
            <li>
              <span className="mx-2">›</span>
              <Link href="/articles" className="hover:text-emerald-600">Articles</Link>
            </li>
            {article.category && (
              <li>
                <span className="mx-2">›</span>
                <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-emerald-600">
                  {article.category}
                </Link>
              </li>
            )}
            <li>
              <span className="mx-2">›</span>
              <span className="text-gray-400">{article.title}</span>
            </li>
          </ol>
        </nav>

        <header className="text-center mb-10">
          {article.category && (
            <div className="mb-4">
              <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex justify-center gap-6 text-gray-500 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              {article.author?.avatar && (
                <Image
                  width={24}
                  height={24}
                  src={article.author.avatar}
                  alt={article.author.name || 'Author'}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <span>{article.author?.name || 'Unknown Author'}</span>
            </div>
            <time dateTime={article.published_at} className="flex items-center gap-1">
              📅 {publishedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {updatedDate && updatedDate.getTime() !== publishedDate.getTime() && (
              <time dateTime={article.updated_at} className="flex items-center gap-1">
                🔄 Updated {updatedDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            <span className="flex items-center gap-1">
              ⏱️ {article.reading_time} min read
            </span>
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {article.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {article.featured_image && (
          <figure className="w-full h-64 md:h-80 lg:h-96 rounded-xl bg-gray-200 mb-10 relative overflow-hidden shadow-lg">
            <Image
              width={1200}
              height={630}
              src={article.featured_image}
              alt={article.title}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </figure>
        )}

        {article.content.includes('<h2>') && (
          <div className="bg-gray-50 p-6 rounded-xl mb-10 border">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h2>
            <div className="prose prose-sm max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/g)
                    ?.map((heading) => {
                      const level = parseInt(heading.match(/<h([2-3])/)?.[1] || '2');
                      const text = heading.replace(/<[^>]*>/g, '');
                      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                      return `<div style="margin-left: ${(level - 2) * 20}px"><a href="#${id}" class="text-emerald-600 hover:text-emerald-800">${text}</a></div>`;
                    }).join('') || ''
                }}
              />
            </div>
          </div>
        )}

        <article
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-6 prose-img:rounded-lg prose-img:shadow-md prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-16 p-6 bg-gray-50 rounded-xl border">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Continue Reading</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/articles" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              View All Articles
            </Link>
            {article.category && (
              <Link href={`/category/${article.category.toLowerCase()}`} className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                More in {article.category}
              </Link>
            )}
          </div>
        </div>

        {article.author && (
          <div className="flex items-start gap-4 mt-12 bg-gray-50 p-6 rounded-xl border">
            <div className="relative flex-shrink-0">
              <Image
                width={80}
                height={80}
                src={article.author.avatar || '/default-avatar.png'}
                alt={article.author.name || 'Author'}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                {article.author.name || 'Unknown Author'}
              </h4>
              {article.author.bio && (
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {article.author.bio}
                </p>
              )}
              {article.author.social_links && (
                <div className="flex gap-3">
                  {article.author.social_links.twitter && (
                    <Link
                      href={article.author.social_links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                      Twitter
                    </Link>
                  )}
                  {article.author.social_links.linkedin && (
                    <Link
                      href={article.author.social_links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 text-sm"
                    >
                      LinkedIn
                    </Link>
                  )}
                  {article.author.social_links.website && (
                    <Link
                      href={article.author.social_links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      Website
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center gap-4 my-10 border-t border-b py-6">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${isLiked
              ? "bg-red-100 text-red-600 hover:bg-red-200"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            aria-label={isLiked ? "Unlike article" : "Like article"}
          >
            <span>{isLiked ? "❤️" : "🤍"}</span>
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-all"
              aria-label="Share article"
            >
              <span>🔗</span>
              <span>Share</span>
            </button>
            {isShareOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border rounded-lg shadow-lg p-3 mt-2 z-10 min-w-[180px]">
                <button
                  onClick={() => shareOn("twitter")}
                  className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100 rounded"
                >
                  🐦 Twitter
                </button>
                <button
                  onClick={() => shareOn("facebook")}
                  className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100 rounded"
                >
                  📘 Facebook
                </button>
                <button
                  onClick={() => shareOn("linkedin")}
                  className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100 rounded"
                >
                  💼 LinkedIn
                </button>
                <button
                  onClick={() => shareOn("whatsapp")}
                  className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100 rounded"
                >
                  📱 WhatsApp
                </button>
                <button
                  onClick={() => shareOn("telegram")}
                  className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100 rounded"
                >
                  ✈️ Telegram
                </button>
                <button
                  onClick={copyToClipboard}
                  className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100 rounded"
                >
                  📋 Copy Link
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${isBookmarked
              ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
          >
            <span>{isBookmarked ? "🔖" : "📑"}</span>
            <span>{isBookmarked ? "Saved" : "Save"}</span>
          </button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold mb-2">Debug Info:</h3>
            <pre className="text-xs overflow-auto">
              {JSON.stringify({
                slug,
                articleId: article.id,
                authorId: article.author_id,
                authorData: article.author,
                readingProgress: Math.round(readingProgress)
              }, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </>
  );
}