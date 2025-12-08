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
import { X, Code2, Smartphone, ShoppingBag, Database } from 'lucide-react';
import Link from 'next/link';


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
  // [#F9FAFB] [#121212] [#DDDDDD]
  //   Background: #181818 (dark gray)
  // Primary Text: #F7F7F7 (off-white)
  // Accent 1: #FF5722 (vibrant orange)
  // Accent 2: #673AB7 (deep purple)
  // Hover Effects: #FFEB3B (bright yellow)
  //   Background: #2C2C2C (slate gray)
  // Primary Text: #E4E4E4 (light gray)

  //   Background: #121212 (charcoal black)
  // Primary Text: #E0E0E0 (light gray)
  // Secondary Text: #B0B0B0 (medium gray)
  // Borders/Dividers: #444444 (dark gray)
  // Accent: #888888 (soft gray)
  return (
    <PublicLayout>
      <div className="bg-[#181818] text-[#F9FAFB]">
        {!loading ?
          <>
            <main className="relative pt-0 pb-8 px-0">
              <div className="px-4 lg:px-0 relative overflow-hidden bg-gradient-to-br from-[#F7F7F7] via-[#181818] to-[#181818] border-b border-b-[#2C2C2C]">

                <div className="pt-12 justify-start max-w-7xl mx-auto px-0">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                    <span className="text-[#F9FAFB] text-sm font-medium tracking-wide">
                      Professional Development Services
                    </span>
                  </div>
                </div>

                <div className="max-w-7xl mx-auto px-0 py-6 lg:py-12 relative">
                  <div className="max-w-3xl">

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4 lg:mb-8">
                      <span className="block text-[#F9FAFB] italic font-serif">Build</span>
                      <span className="block text-[#F9FAFB]">your digital</span>
                      <span className="block text-[#F9FAFB] italic font-serif">excellence.</span>
                    </h1>

                    <p className="mb-4 lg:mb-10 max-w-xl leading-relaxed">
                      Your software is your strongest competitive advantage.
                      We&apos;ll help you realize it, embed it deeply into your
                      business, and transform it into genuine momentum.
                    </p>

                    <Link href="/services" className="px-6 py-2 bg-[#F9FAFB] text-[#121212] rounded-full font-medium hover:bg-gray-200 transition-all group">
                      Discover how
                    </Link>
                  </div>

                  <div className="absolute bottom-8 right-2 hidden lg:block">
                    <div className="w-80 bg-[#FF4500] rounded-2xl p-8 shadow-2xl border border-[#444444]">

                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-[#121212]" />
                      </div>

                      <p className="text-[#F9FAFB] text-sm leading-relaxed mb-6">
                        We are the strategic backbone for ambitious businesses ready to scale with cutting-edge technology.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <Code2 className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Web Dev</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <Smartphone className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Mobile</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <ShoppingBag className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Themes</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <Database className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">POS SaaS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden mt-16">
                    <div className="bg-[#FF4500] rounded-2xl p-8 shadow-2xl border border-[#444444]">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-[#121212]" />
                      </div>

                      <p className="text-[#F9FAFB] text-sm leading-relaxed mb-6">
                        We are the strategic backbone for ambitious businesses ready to scale with cutting-edge technology.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <Code2 className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Web Dev</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <Smartphone className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Mobile</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <ShoppingBag className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Themes</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#444444]">
                          <Database className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">POS SaaS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-8 w-fit mx-auto items-start justify-center flex-col-reverse lg:flex-row pt-6 lg:pt-16 px-4 lg:px-0">
                <section className="card w-full max-w-[1024px] mx-auto lg:mr-0">
                  <section className="card w-full max-w-[1024px] mx-auto lg:mr-0">
                    <div className="mb-12 flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 w-full">
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
                        {posts.length > 0 && (
                          <FeaturedArticle
                            imageUrl="/assets/placeholder-image.webp"
                            author={'Brian'}
                            timeAgo={timeAgo(posts[1].published_at)}
                            title={posts[1].title}
                            slug={posts[1].slug}
                          />
                        )}

                        <div className="flex flex-wrap flex-col gap-4 w-full">
                          <div className="space-y-6">

                            <ArticleListItem
                              key={posts[2].id}
                              author={'Brian'}
                              timeAgo={formatPublishDate(posts[2].published_at)}
                              title={posts[2].title}
                              slug={posts[2].slug}
                            />

                            <ArticleListItem
                              key={posts[3].id}
                              author={'Brian'}
                              timeAgo={formatPublishDate(posts[3].published_at)}
                              title={posts[3].title}
                              slug={posts[3].slug}
                            />

                            <ArticleListItem
                              key={posts[4].id}
                              author={'Brian'}
                              timeAgo={formatPublishDate(posts[4].published_at)}
                              title={posts[4].title}
                              slug={posts[4].slug}
                              className='border-none'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <SectionHeader title="Recommended" />
                    <div className="w-full flex flex-wrap md:flex-nowrap items-start gap-4 border-[#2C2C2C] my-4">
                      {posts.length > 0 && (<ArticleCard
                        author={'Brian'}
                        timeAgo={timeAgo(posts[5].published_at)}
                        title={posts[5].title}
                        excerpt={posts[5].meta_description}
                        imageUrl="/assets/placeholder-image.webp"
                        date={posts[5].published_at}
                        readTime={posts[5].reading_time !== undefined ? posts[5].reading_time.toString() : undefined}
                        category={posts[5].category_id}
                        showImage={true}
                        showButton={true}
                        slug={posts[5].slug}
                        className="w-full h-fit p-0 lg:max-w-[320px] bg-[#181818] text-[#F9FAFB] rounded-2xl border border-[#444444]"
                      />)}

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {posts.slice(6).map((item) => (
                          <ArticleCard
                            key={item.id}
                            author={'Brian'}
                            timeAgo={formatPublishDate(item.published_at)}
                            title={item.title}
                            date={formatPublishDate(item.published_at)}
                            readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                            category={item.category_id}
                            slug={item.slug}
                            // showButton={true}
                            // likes={890}
                            // comments={78}
                            showMetrics={false}
                            className="p-4"
                          />
                        ))}
                      </div>
                    </div>

                    {/* <div className='!hidden'>
                      <SectionHeader title="Popular Now" />
                      <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 my-6">
                        {posts.length > 0 && (<ArticleCard
                          author={'Brian'}
                          timeAgo={timeAgo(posts[0].published_at)}
                          title={posts[0].title}
                          imageUrl="/assets/placeholder-image.webp"
                          showImage={true}
                          slug={posts[0].slug}
                          className="border h-fit p-4 border-[#EEEEEE] rounded-2xl bg-white w-full max-w-full lg:max-w-[320px]"
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
                            showImage={true}
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
                    </div> */}
                  </section>

                  <section className="px-6 md:px-4 py-8 border-b border-[#2C2C2C] !hidden">
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
                      className={`${hideBanner ? 'hidden' : 'flex'} border border-[#FFEB3B] w-full h-[175px] lg:h-[400px] max-w-full lg:max-w-[240px] bg-[#121212] p-6 flex-col items-center justify-between text-[#F9FAFB] rounded-2xl shadow-2xl relative overflow-hidden`}
                    >
                      <button className='absolute top-1 right-2 z-10' onClick={() => setHideBanner(true)}>
                        <X className="h-4 w-4 text-[#F9FAFB]" />
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
                        className="relative z-10 font-semibold px-5 py-2 rounded-xl transition duration-300 text-[#F9FAFB] hover:text-[#F9FAFB] border border-white hover:bg-white bg-[#121212]"
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