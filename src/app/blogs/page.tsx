"use client"
import { useEffect, useState } from 'react';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
import { HeroArticle } from '@/components/HeroArticle';
import { FeaturedArticle } from '@/components/FeaturedArticle';
import { timeAgo } from '@/lib/timeAgo';
import { Article } from '@/types';
import LoadingLogoDefault from '@/components/Loading';
import axios from 'axios';

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

export default function Page() {
  const [posts, setPosts] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  const getTagAll = async (id: string) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_CP}/api/v1/blog/article/tag/all`, {
        article_id: id
      });
      return response.data.result;
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  }
  useEffect(() => {
    getTagAll('1');
  }, []);

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
    <>
      <div className="text-[#181818] bg-[#F9FAFB]">
        {!loading ?
          <>
            <main className="pt-0 pb-8 px-4">
              <section className="card w-full max-w-5xl mx-auto">
                <SectionHeader title="New" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  {[...posts].reverse().map((item) => (
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
                      className="py-0 px-2"
                    />
                  ))}
                </div>

                {/* <SectionHeader title="Featured" /> */}
                <div className="hidden w-full flex flex-wrap md:flex-nowrap items-start gap-4 border-[#2C2C2C] my-4">
                  {posts.length > 0 && (<ArticleCard
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
                    className="w-full h-fit p-0 lg:max-w-[320px] bg-[#181818] text-[#F9FAFB] rounded-2xl border border-[#E4E4E4]"
                  />)}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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

                <div className="mb-12 flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 w-full hidden">
                  {posts.length > 0 && (<HeroArticle
                    imageUrl={posts[0].featured_image || '/assets/placeholder-image.webp'}
                    author={'Brian'}
                    timeAgo={timeAgo(posts[0].published_at)}
                    title={posts[0].title}
                    likes={2300}
                    comments={1000}
                    writerName={'Brian'}
                    writerTitle={'Brian'}
                    writerImage='/assets/placeholder-image.webp'
                    slug={posts[0].slug}
                  />)}

                  <div>
                    {posts.length > 0 && (
                      <FeaturedArticle
                        imageUrl={posts[1].featured_image || '/assets/placeholder-image.webp'}
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

                {/* <div className='!hidden'>
                      <SectionHeader title="Popular Now" />
                      <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 my-6">
                        {posts.length > 0 && (<ArticleCard
                          author={'Brian'}
                          timeAgo={timeAgo(posts[0].published_at)}
                          title={posts[0].title}
                          imageUrl={posts[0].featured_image || '/assets/placeholder-image.webp'}
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
                            imageUrl={posts[0].featured_image || '/assets/placeholder-image.webp'}
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

              <section className="px-6 md:px-4 py-8 border-b border-[#2C2C2C] hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <h2 className="text-5xl font-bold">THE TECH SPOTLIGHT</h2>
                  <p className="text-gray-700 text-lg">
                    <span className="text-purple-500 text-xl mr-2">→</span>
                    More relevant to a tech news context, inviting readers to learn about trends, startups, gadgets, and AI.
                  </p>
                </div>
              </section>
            </main>
          </>
          : <LoadingLogoDefault />}
      </div >
    </>
  );
};