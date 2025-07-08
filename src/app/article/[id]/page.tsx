'use client'

import { useEffect, useState } from "react";
import Head from "next/head";
import { createClientComponentClient } from "@/lib/supabase"; // adjust this path

type Props = {
  params: Promise<{ id: string }>;
};

type Article = {
  title: string;
  content: string;
  excerpt: string;
  featured_image: string | null;
  published_at: string;
  reading_time: number;
  author: {
    name: string;
    avatar: string | null;
  };
};

export default function Page({ params }: Props) {
  const [id, setId] = useState<string>('');
  const [article, setArticle] = useState<Article | null>(null);

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const supabase = createClientComponentClient();

  // Extract ID from params
  useEffect(() => {
    params.then(resolvedParams => {
      setId(resolvedParams.id);
    });
  }, [params]);

  // Fetch Article Data
  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`
          title,
          content,
          excerpt,
          featured_image,
          published_at,
          reading_time,
          author:author_id (
            name,
            avatar
          )
        `)
        .eq('id', id)
        .single();

      if (error) console.error(error);
      else setArticle(data as unknown as Article);
    };

    fetchArticle();
  }, [id, supabase]);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shareOn = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || document.title);

    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(links[platform], "_blank", "width=600,height=400");
    setIsShareOpen(false);
  };

  if (!article) {
    return <div className="p-6">Loading article...</div>;
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>

      <div className="fixed top-0 left-0 h-1 bg-emerald-600" style={{ width: `${scrollProgress}%` }} />

      <main className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <div className="flex justify-center gap-6 text-gray-500 text-sm">
            <span>{article.author?.name || 'Unknown Author'}</span>
            <span>{new Date(article.published_at).toLocaleDateString()}</span>
            <span>{article.reading_time} min read</span>
          </div>
        </header>

        {article.featured_image && (
          <div className="w-full h-64 rounded-xl bg-gray-200 mb-10 relative overflow-hidden">
            <img src={article.featured_image} alt={article.title} className="object-cover w-full h-full" />
          </div>
        )}

        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="flex items-center gap-4 mt-12 bg-gray-100 p-4 rounded-xl">
          <img src={article.author?.avatar || '/default-avatar.png'} alt={article.author?.name} className="w-12 h-12 rounded-full" />
          <div>
            <h4 className="font-semibold text-gray-900">{article.author?.name}</h4>
            <p className="text-gray-500 text-sm">Author</p>
          </div>
        </div>

        {/* Like / Share / Save */}
        <div className="flex justify-center gap-6 my-10 border-t border-b py-6">
          <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isLiked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500"}`}>
            <span>{isLiked ? "❤️ Liked" : "🤍 Like"}</span>
          </button>

          <div className="relative">
            <button onClick={() => setIsShareOpen(!isShareOpen)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg">
              🔗 Share
            </button>
            {isShareOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border rounded-lg shadow-lg p-3 mt-2">
                <button onClick={() => shareOn("twitter")} className="block w-full text-left text-sm py-1">🐦 Twitter</button>
                <button onClick={() => shareOn("facebook")} className="block w-full text-left text-sm py-1">📘 Facebook</button>
                <button onClick={() => shareOn("linkedin")} className="block w-full text-left text-sm py-1">🔗 LinkedIn</button>
              </div>
            )}
          </div>

          <button onClick={() => setIsBookmarked(!isBookmarked)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isBookmarked ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
            <span>{isBookmarked ? "🔖 Saved" : "📑 Save"}</span>
          </button>
        </div>
      </main>
    </>
  );
}
