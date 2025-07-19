"use client"
import React, { useEffect, useState } from 'react';
import Accordion from '@/components/Accordion';
import AdCard from '@/components/AdsCard';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
import { HeroArticle } from '@/components/HeroArticle';
import { FeaturedArticle } from '@/components/FeaturedArticle';
import { supabase } from '@/lib/supabase';
import { timeAgo } from '@/lib/timeAgo';
import { Article } from '@/types';
import LoadingLogoDefault from '@/components/Loading';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';


const formatPublishDate = (date: string) => {
  const dateIso = new Date(date);
  const formattedID = dateIso.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return formattedID;
};


const Home: React.FC = () => {
  const [posts, setPosts] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('articles')
        .select(`
    *,
    author:author_id (
      id,
      name,
      bio,
      avatar
    )
  `)
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
        console.error('Error fetching posts:', error.message)
      } else {
        setPosts(data as Article[])
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])

  const mappedArticles = posts.map((article) => ({
    ...article,
    author: {
      ...article.author,
      id: typeof article.author.id === 'string' ? Number(article.author.id) : article.author.id,
    },
  }));

  const accordionItems = [
    {
      title: "Web & Mobile Experience design",
      articles: mappedArticles,
    },
    {
      title: "3D design and animation",
      articles: mappedArticles,
    },
    {
      title: "Motion design and video",
      articles: mappedArticles,
    },
  ];

  console.log(error)

  return (
    <div className="bg-[#F9FAFB] text-[#121212]">
      {!loading ?
        <>
          <main className="relative p-4">
            <div className="flex flex-wrap md:flex-nowrap gap-8 w-fit mx-auto items-start justify-center flex-col-reverse lg:flex-row">
              <section className="card w-full max-w-[1024px] mx-auto lg:mr-0">
                <section className="card w-full max-w-[1024px] mx-auto lg:mr-0">
                  <div className="mb-12 border-[#DDDDDD] flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 w-full">
                    {posts.length > 0 && (<HeroArticle
                      imageUrl="/assets/placeholder-image.webp"
                      author={posts[0].author.name}
                      timeAgo={timeAgo(posts[0].published_at)}
                      title={posts[0].title}
                      likes={2300}
                      comments={1000}
                      writerName={posts[0].author.name}
                      writerTitle={posts[0].author.name}
                      writerImage="/assets/placeholder-image.webp"
                      slug={posts[0].slug}
                    />)}

                    <div>
                      {posts && (<FeaturedArticle
                        imageUrl="/assets/placeholder-image.webp"
                        author={posts[1].author.name}
                        timeAgo={timeAgo(posts[1].published_at)}
                        title={posts[1].title}
                        slug={posts[1].slug}
                      />)}

                      <div className="flex flex-wrap flex-col gap-4 w-full">
                        <div className="space-y-6">
                          {posts.slice(2).map((item) => (
                            <ArticleListItem
                              key={item.id}
                              author={item.author.name}
                              timeAgo={formatPublishDate(item.published_at)}
                              title={item.title}
                              slug={item.slug}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <SectionHeader title="Recommended" />
                  <div className="w-full flex flex-wrap md:flex-nowrap items-start gap-4 border-[#DDDDDD] my-4">
                    {posts && (<ArticleCard
                      author={posts[0].author.name}
                      timeAgo={timeAgo(posts[0].published_at)}
                      title={posts[0].title}
                      excerpt={posts[0].meta_description}
                      imageUrl="/assets/placeholder-image.webp"
                      date={posts[0].published_at}
                      readTime={posts[0].reading_time !== undefined ? posts[0].reading_time.toString() : undefined}
                      category={posts[0].category_id}
                      showImage={true}
                      showButton={true}
                      slug={posts[0].slug}
                      className="w-full h-fit lg:max-w-[320px] bg-white rounded-2xl p-0 border border-[#EEEEEE]"
                    />)}

                    <div className="flex flex-col gap-4">
                      {posts.map((item) => (
                        <ArticleCard
                          key={item.id}
                          author={item.author.name}
                          timeAgo={formatPublishDate(item.published_at)}
                          title={item.title}
                          date={formatPublishDate(item.published_at)}
                          readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                          category={item.category_id}
                          slug={item.slug}
                          likes={890}
                          comments={78}
                          showMetrics={true}
                          className="p-4"
                        />
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      {posts.map((item) => (
                        <ArticleCard
                          key={item.id}
                          author={item.author.name}
                          timeAgo={formatPublishDate(item.published_at)}
                          title={item.title}
                          date={formatPublishDate(item.published_at)}
                          readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                          category={item.category_id}
                          slug={item.slug}
                          likes={890}
                          comments={78}
                          showMetrics={true}
                          className="p-4"
                        />
                      ))}
                    </div>
                  </div>

                  <SectionHeader title="Popular Now" />
                  <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 my-6">
                    {posts && (<ArticleCard
                      author={posts[0].author.name}
                      timeAgo={timeAgo(posts[0].published_at)}
                      title={posts[0].title}
                      imageUrl="/assets/placeholder-image.webp"
                      showImage={true}
                      slug={posts[0].slug}
                      className="border h-fit border-[#EEEEEE] rounded-2xl p-0 bg-white w-full max-w-full lg:max-w-[320px]"
                    />)}

                    <div className="space-y-6 w-full max-w-lg">
                      {posts.slice(1).map((item) => (
                        <ArticleListItem
                          key={item.id || item.slug}
                          author={item.author?.name ?? 'Anon'}
                          timeAgo={formatPublishDate(item.published_at ?? '')}
                          title={item.title}
                          slug={item.slug}
                          className="min-w-full w-full max-w-full lg:max-w-full"
                        />
                      ))}
                    </div>
                  </div>

                  <SectionHeader title="Sponsored Article" />
                  <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 my-6">
                    <div className="flex flex-col flex-wrap gap-4">
                      {posts && (<ArticleCard
                        author={posts[0].author.name}
                        timeAgo={timeAgo(posts[0].published_at)}
                        title={posts[0].title}
                        excerpt={posts[0].meta_description}
                        imageUrl="/assets/placeholder-image.webp"
                        date={posts[0].published_at}
                        readTime={posts[0].reading_time !== undefined ? posts[0].reading_time.toString() : undefined}
                        category={posts[0].category_id}
                        slug={posts[0].slug}
                        showButton={true}
                        className="border border-[#EEEEEE] h-fit w-full max-w-full lg:max-w-[320px] bg-white rounded-2xl p-6 mb-8"
                      />)}
                    </div>

                    <div className="space-y-6 w-full max-w-lg">
                      {posts.slice(1).map((item) => (
                        <ArticleListItem
                          key={item.id || item.slug}
                          author={item.author?.name ?? 'Anon'}
                          timeAgo={formatPublishDate(item.published_at ?? '')}
                          title={item.title}
                          slug={item.slug}
                          className="min-w-full w-full max-w-full lg:max-w-full"
                        />
                      ))}
                    </div>
                  </div>
                </section>

                <section className="px-6 md:px-4 py-8 border-b border-[#DDDDDD]">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <h2 className="text-5xl font-bold">THE TECH SPOTLIGHT</h2>
                    <p className="text-gray-700 text-lg">
                      <span className="text-purple-500 text-xl mr-2">→</span>
                      More relevant to a tech news context, inviting readers to learn about trends, startups, gadgets, and AI.
                    </p>
                  </div>
                  <Accordion items={accordionItems} />
                </section>
              </section>
              <section className="lg:sticky lg:top-[5rem] lg:right-[1rem] w-full lg:max-w-[240px] flex gap-4 flex-col items-start">
                <AdCard gradient />
                <AdCard />
              </section>
            </div>
          </main>
        </>
        : <LoadingLogoDefault />}
    </div>
  );
};

export default Home;