'use client'
import Head from "next/head";
// import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
    const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  // const router = useRouter();

  useEffect(() => {
    console.log(params)
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
    const title = encodeURIComponent(document.title);

    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(links[platform], "_blank", "width=600,height=400");
    setIsShareOpen(false);
  };

  return (
    <>
      <Head>
        <title>The Future of AI in Web Development</title>
      </Head>

      <div className="fixed top-0 left-0 h-1 bg-emerald-600" style={{ width: `${scrollProgress}%` }} />

      <main className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Future of AI in Web Development</h1>
          <div className="flex justify-center gap-6 text-gray-500 text-sm">
            <span>Sarah Chen</span>
            <span>March 15, 2024</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="w-full h-64 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl mb-10">
          🤖
        </div>

        <div className="prose max-w-none text-gray-700">
          <p>Artificial Intelligence is no longer a futuristic concept ...</p>
          <h2>The Current State of AI in Web Development</h2>
          <p>One of the most significant impacts of AI in web development is the emergence of intelligent design systems...</p>
          <blockquote>"AI is not replacing web developers; it's augmenting their capabilities..."</blockquote>
          <h3>Key Benefits of AI Integration</h3>
          <p>The benefits of integrating AI into web development are numerous and significant...</p>
        </div>

        <div className="flex items-center gap-4 mt-12 bg-gray-100 p-4 rounded-xl">
          <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">SC</div>
          <div>
            <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-gray-500 text-sm">Senior Web Developer & AI Enthusiast</p>
          </div>
        </div>

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

        <nav className="flex justify-between gap-4 my-12">
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 p-4 rounded-xl text-left">
            <p className="text-xs text-gray-500 mb-1">← Previous Article</p>
            <p className="font-semibold text-gray-900">CSS Grid vs Flexbox</p>
          </button>

          <button className="flex-1 bg-gray-100 hover:bg-gray-200 p-4 rounded-xl text-right">
            <p className="text-xs text-gray-500 mb-1">Next Article →</p>
            <p className="font-semibold text-gray-900">Building Responsive Designs</p>
          </button>
        </nav>
      </main>
    </>
  );
}
