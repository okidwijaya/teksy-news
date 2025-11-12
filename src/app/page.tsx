"use client"
import AdCard from '@/components/AdsCard';
import React, { useEffect, useState } from 'react';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
import { HeroArticle } from '@/components/HeroArticle';
import { FeaturedArticle } from '@/components/FeaturedArticle';
import { timeAgo } from '@/lib/timeAgo';
import { Article } from '@/types';
import LoadingLogoDefault from '@/components/Loading';
import axios from 'axios';
import PublicLayout from '@/components/PublicLayout';
import AdCardGoogle from '@/components/AdsCardGoogle';
import { X } from 'lucide-react';


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
  const [hideBanner, setHideBanner] = useState(false);

  const services = [
    'Custom Web Themes',
    'Mobile App Development',
    'Shopify Store Setup',
    'SaaS Server Management',
    'Inventory Systems'
  ];

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_CP}/api/v1/blog/articles/all`);
        setPosts(response.data.result)
      } catch (error) {
        console.error(error);
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <PublicLayout>
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
                        author={'Brian'}
                        timeAgo={timeAgo(posts[0].published_at)}
                        title={posts[0].title}
                        likes={2300}
                        comments={1000}
                        writerName={'Brian'}
                        writerTitle={'Brian'}
                        writerImage="/assets/placeholder-image.webp"
                        slug={posts[0].slug}
                      />)}

                      <div>
                        {posts.length > 0 && (<FeaturedArticle
                          imageUrl="/assets/placeholder-image.webp"
                          author={'Brian'}
                          timeAgo={timeAgo(posts[1].published_at)}
                          title={posts[1].title}
                          slug={posts[1].slug}
                        />)}

                        <div className="flex flex-wrap flex-col gap-4 w-full">
                          <div className="space-y-6">
                            {posts.slice(2).map((item) => (
                              <ArticleListItem
                                key={item.id}
                                author={'Brian'}
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
                      {posts.length > 0 && (<ArticleCard
                        author={'Brian'}
                        timeAgo={timeAgo(posts[0].published_at)}
                        title={posts[0].title}
                        excerpt={posts[0].meta_description}
                        // imageUrl="/assets/placeholder-image.webp"
                        date={posts[0].published_at}
                        readTime={posts[0].reading_time !== undefined ? posts[0].reading_time.toString() : undefined}
                        category={posts[0].category_id}
                        showImage={true}
                        showButton={true}
                        slug={posts[0].slug}
                        className="w-full h-fit p-4 lg:max-w-[320px] bg-white rounded-2xl border border-[#EEEEEE]"
                      />)}

                      <div className="flex flex-col gap-4">
                        {posts.map((item) => (
                          <ArticleCard
                            key={item.id}
                            author={'Brian'}
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
                            author={'Brian'}
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
                      {posts.length > 0 && (<ArticleCard
                        author={'Brian'}
                        timeAgo={timeAgo(posts[0].published_at)}
                        title={posts[0].title}
                        // imageUrl="/assets/placeholder-image.webp"
                        showImage={true}
                        slug={posts[0].slug}
                        className="border h-fit p-4 border-[#EEEEEE] rounded-2xl p-0 bg-white w-full max-w-full lg:max-w-[320px]"
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
                        {posts.length > 0 && (<ArticleCard
                          author={'Brian'}
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

                  </section>
                </section>

                <section className="lg:sticky lg:top-[5rem] lg:right-[1rem] w-full lg:max-w-[240px] flex gap-4 flex-col items-start">
                  <AdCardGoogle />

                  <div className="hidden lg:flex flex-col gap-4">
                  {/* <div className="w-full grid gap-4 grid-cols-[200px_200px_200px] lg:grid-cols-1 overflow-x-scroll lg:overflow-x-hidden min-h-fit"> */}
                    {/* service add */}
                    <div
                      className={`${hideBanner ? 'hidden' : 'flex'} w-full h-[175px] lg:h-[400px] max-w-full lg:max-w-[240px] bg-[#121212] p-6 flex-col items-center justify-between text-white rounded-2xl shadow-2xl relative overflow-hidden`}
                    >
                      <button className='absolute top-1 right-2 z-10' onClick={() => setHideBanner(true)}>
                        <X className="h-4 w-4 text-white" />
                      </button>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                      </div>

                      <div className="relative z-10 mb-4 md:mb-0 w-full">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">
                          Premium Web Solutions
                        </h2>
                        <p className="text-xs md:text-sm opacity-90 mb-3">
                          Transform your business with cutting-edge development.
                        </p>
                        <ul className="hidden lg:block space-y-1 text-xs opacity-90">
                          {services.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">✦</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => alert('Contact us to get started with your project!')}
                        className="relative z-10 font-semibold px-5 py-2 rounded-xl transition duration-300 text-white hover:text-[#121212] border border-white hover:bg-white bg-[#121212]"
                      >
                        Get Started Today
                      </button>
                    </div>
                    <AdCard gradient />
                    <AdCard />
                  </div>
                </section>
              </div>
            </main>
          </>
          : <LoadingLogoDefault />}
      </div>
    </PublicLayout>
  );
};

export default Home;