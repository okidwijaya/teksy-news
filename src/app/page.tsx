"use client"
import AdCard from '@/components/AdsCard';
import React, { useEffect, useState } from 'react';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
import { HeroArticle } from '@/components/HeroArticle';
// import { FeaturedArticle } from '@/components/FeaturedArticle';
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
  const [isFetchError, setIsFetchError] = useState(false);

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
        const sortedPosts = response.data.result.filter((post: Article) => post.status === 'published');
        setPosts(sortedPosts);
        console.log('Fetched posts:', sortedPosts.length);
      } catch (error) {
        setIsFetchError(true);
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isFetchError) {
    console.error('Error fetching posts');
  }

  console.log('Rendering Home with posts:', posts);

  return (
    <PublicLayout>
      <div className="bg-[#181818] text-[#F9FAFB]">
        {!loading ?
          <>
            <main className="relative pt-0 pb-0 px-0">
              <div className="hidden px-4 lg:px-4 relative overflow-hidden bg-gradient-to-br from-[#F7F7F7] via-[#181818] to-[#181818] border-b border-b-[#2C2C2C]">

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
                    <div className="w-80 bg-[#FF4500] rounded-2xl p-8 shadow-2xl border border-[#E4E4E4]">

                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-[#121212]" />
                      </div>

                      <p className="text-[#F9FAFB] text-sm leading-relaxed mb-6">
                        We are the strategic backbone for ambitious businesses ready to scale with cutting-edge technology.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Code2 className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Web Dev</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Smartphone className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Mobile</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <ShoppingBag className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Themes</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Database className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">POS SaaS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden mt-16">
                    <div className="bg-[#FF4500] rounded-2xl p-8 shadow-2xl border border-[#E4E4E4]">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-[#121212]" />
                      </div>

                      <p className="text-[#F9FAFB] text-sm leading-relaxed mb-6">
                        We are the strategic backbone for ambitious businesses ready to scale with cutting-edge technology.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Code2 className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Web Dev</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Smartphone className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Mobile</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <ShoppingBag className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Themes</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Database className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">POS SaaS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-4 lg:gap-8 mx-auto pb-8 items-start bg-[#F9FAFB] w-full justify-center flex-col-reverse lg:flex-row pt-0 lg:pt-0 px-4 lg:px-0">
                <section className="card w-full max-w-5xl mx-auto lg:mr-0 px-4">
                  <SectionHeader title="Recommended" />
                  <div className="w-full flex flex-wrap md:flex-nowrap items-start gap-4 border-[#2C2C2C] my-4">
                    {posts.length >= 5 ? <ArticleCard
                      author={'Brian'}
                      timeAgo={timeAgo(posts[5].published_at)}
                      title={posts[5].title}
                      excerpt={posts[5].meta_description}
                      imageUrl={posts[5].featured_image || '/assets/placeholder-image.webp'}
                      date={posts[5].published_at}
                      readTime={posts[5].reading_time !== undefined ? posts[5].reading_time.toString() : undefined}
                      category={posts[5].category_id}
                      showImage={true}
                      showButton={true}
                      slug={posts[5].slug}
                      className="w-full h-fit p-0 lg:max-w-[320px] text-[#181818] bg-[#F9FAFB] rounded-2xl border border-[#E4E4E4]"
                    /> :
                      <div className='h-75 w-full flex justify-start items-start flex-col'>
                        <h4 className='w-fit text-center text-[#121212]'>
                          No Post Available
                        </h4>
                      </div>
                    }

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {posts.length > 0 ?
                        posts.slice(1, 5).map((item) => (
                          <ArticleCard
                            key={item.id}
                            author={'Brian'}
                            timeAgo={formatPublishDate(item.published_at)}
                            title={item.title}
                            date={formatPublishDate(item.published_at)}
                            readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                            category={item.category_id}
                            slug={item.slug}
                            excerpt={item.meta_description}
                            // showButton={true}
                            // likes={890}
                            // comments={78}
                            showMetrics={false}
                            className="p-4"
                          />
                        )) :
                        <div className='h-75 w-full flex justify-center items-center flex-col'>
                          <h4 className='w-fit mx-auto'>
                            No Post Available
                          </h4>
                        </div>}
                    </div>
                  </div>

                  <SectionHeader title="Latest Update" />
                  <div className="mb-4 flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 w-full">
                    {posts.length > 0 ?
                      posts.map((item) => (
                        <ArticleCard
                          key={item.id}
                          author={'Brian'}
                          timeAgo={formatPublishDate(item.published_at)}
                          title={item.title}
                          date={formatPublishDate(item.published_at)}
                          readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                          category={item.category_id}
                          slug={item.slug}
                          excerpt={item.meta_description}
                          // showButton={true}
                          // likes={890}
                          // comments={78}
                          showMetrics={false}
                          className="p-4"
                        />
                      )) :
                      <div className='h-75 w-full flex justify-center items-center flex-col'>
                        <h4 className='w-fit mx-auto'>
                          No Post Available
                        </h4>
                      </div>}
                    {/* {posts.length >= 6 ?
                      <HeroArticle
                        imageUrl={posts[6].featured_image || '/assets/placeholder-image.webp'}
                        author={'Brian'}
                        timeAgo={timeAgo(posts[6].published_at)}
                        title={posts[6].title}
                        likes={236}
                        comments={6}
                        writerName={'Brian'}
                        writerTitle={'Brian'}
                        writerImage='/assets/placeholder-image.webp'
                        slug={posts[6].slug}
                      /> :
                      <div className='h-75 w-full flex justify-start items-start flex-col'>
                        <h4 className='w-fit text-center text-[#121212]'>
                          No Post Available
                        </h4>
                      </div>
                    } */}

                    {/* <FeaturedArticle
                      imageUrl={posts[1].featured_image || '/assets/placeholder-image.webp'}
                      author={'Brian'}
                      timeAgo={timeAgo(posts[1].published_at)}
                      title={posts[1].title}
                      slug={posts[1].slug}
                    /> */}

                    <div className='grid grid-cols-1 w-full gap-2'>
                      {posts.length >= 7 && posts.length >= 10 ?
                        posts.slice(7, 10).map((item) => (
                          <ArticleListItem
                            key={item.id}
                            author={'Brian'}
                            timeAgo={formatPublishDate(item.published_at)}
                            title={item.title}
                            slug={item.slug}
                          />
                        )) :
                        <div className='h-75 w-full flex justify-center items-center flex-col'>
                          <h4 className='w-fit mx-auto'>
                            No Post Available
                          </h4>
                        </div>
                      }
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.length > 0 && posts.slice(11).map((item) => (
                      <ArticleCard
                        key={item.id}
                        author={'Brian'}
                        timeAgo={formatPublishDate(item.published_at)}
                        title={item.title}
                        date={formatPublishDate(item.published_at)}
                        readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                        category={item.category_id}
                        slug={item.slug}
                        excerpt={item.meta_description}
                        // showButton={true}
                        // likes={890}
                        // comments={78}
                        showMetrics={false}
                        className="p-4"
                      />
                    ))}
                  </div>
                </section>

                <section className="lg:sticky lg:top-[5rem] lg:right-[1rem] w-full lg:max-w-[240px] flex gap-4 flex-col items-start">
                  <AdCardGoogle />

                  <div className="hidden lg:flex flex-col gap-4">
                    {/* <div className="w-full grid gap-4 grid-cols-[200px_200px_200px] lg:grid-cols-1 overflow-x-scroll lg:overflow-x-hidden min-h-fit"> */}
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
                      <Link href={'/services'}
                        className="relative z-10 font-semibold px-5 py-2 rounded-xl transition duration-300 text-[#F9FAFB] hover:text-[#181818] border border-white hover:bg-white bg-[#121212]"
                      >
                        Get Started Today
                      </Link>
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
    </PublicLayout >
  );
};

export default Home;