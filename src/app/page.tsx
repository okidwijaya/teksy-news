import React from 'react';
import Accordion from '@/components/Accordion';
import Navbar from '@/components/Navbar';
import AdCard from '@/components/AdsCard';
import Footer from '@/components/Footer';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
import { HeroArticle } from '@/components/HeroArticle';
import { FeaturedArticle } from '@/components/FeaturedArticle';

const Home: React.FC = () => {
  const sampleArticles = [
    {
      author: "Brandon",
      timeAgo: "8 mins ago",
      title: "7 Simple Habits That Can Transform Your Daily Productivity"
    },
    {
      author: "Clare Run",
      timeAgo: "36 mins ago",
      title: "The Power of Mindful Eating: How It Impacts Your Health and Well-Being"
    },
    {
      author: "Matthew",
      timeAgo: "29 mins ago",
      title: "The Future of Work: How AI and Automation Will Reshape Our Care..."
    }
  ];

  const accordionItems = [
    {
      title: "Web & Mobile Experience design",
      articles: [
        { author: "Brandon", time: "8 mins ago", title: "7 Simple Habits That Can Transform Your Daily Productivity" },
        { author: "Clare Run", time: "36 mins ago", title: "The Power of Mindful Eating: How It Impacts Your Health and Well-Being" },
        { author: "Matthew", time: "29 mins ago", title: "The Future of Work: How AI and Automation Will Reshape Our Care..." },
      ],
    },
    {
      title: "3D design and animation",
      articles: [
        { author: "Brandon", time: "8 mins ago", title: "7 Simple Habits That Can Transform Your Daily Productivity" },
        { author: "Clare Run", time: "36 mins ago", title: "The Power of Mindful Eating: How It Impacts Your Health and Well-Being" },
        { author: "Matthew", time: "29 mins ago", title: "The Future of Work: How AI and Automation Will Reshape Our Care..." },
      ],
    },
    {
      title: "Motion design and video",
      articles: [
        { author: "Brandon", time: "8 mins ago", title: "7 Simple Habits That Can Transform Your Daily Productivity" },
        { author: "Clare Run", time: "36 mins ago", title: "The Power of Mindful Eating: How It Impacts Your Health and Well-Being" },
        { author: "Matthew", time: "29 mins ago", title: "The Future of Work: How AI and Automation Will Reshape Our Care..." },
      ],
    },
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#121212]">
      <Navbar />
      <main className="relative p-4">
        <div className="flex flex-wrap md:flex-nowrap gap-8 w-fit mx-auto items-start justify-center flex-col-reverse lg:flex-row">
          <section className="card w-full max-w-[1024px] mx-auto lg:mr-0">
            <section className="card w-full max-w-[1024px] mx-auto lg:mr-0">
              <div className="mb-12 border-[#DDDDDD] flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 w-full">
                <HeroArticle
                  imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  author="Brandon"
                  timeAgo="8 mins ago"
                  title="7 Simple Habits That Can Transform Your Daily Productivity"
                  likes={2300}
                  comments={1000}
                  writerName="Alex Haslam"
                  writerTitle="Reputable writer"
                  writerImage="https://randomuser.me/api/portraits/men/45.jpg"
                />

                <div>
                  <FeaturedArticle
                    imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
                    author="Sarah D."
                    timeAgo="20 mins ago"
                    title="TennisHub is the ultimate destination for tennis enthusias..."
                  />

                  <div className="flex flex-wrap flex-col gap-4 w-full">
                    <div className="space-y-6">
                      {sampleArticles.map((article, index) => (
                        <ArticleListItem
                          key={index}
                          author={article.author}
                          timeAgo={article.timeAgo}
                          title={article.title}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <SectionHeader title="Recommended" />
              <div className="w-full flex flex-wrap md:flex-nowrap items-start gap-4 border-[#DDDDDD] my-4">
                <ArticleCard
                  author="Alex Haslam"
                  timeAgo="20 mins ago"
                  title="Office Plants: A Cure for Burnout? Study Shows They Boost Productivity."
                  excerpt="A study from the University of Queensland shows that adding plants to the workplace can increase productivity..."
                  imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
                  date="Apr 17, 2025"
                  readTime="5 min reads"
                  category="Lifestyle"
                  showImage={true}
                  showButton={true}
                  className="w-full h-fit lg:max-w-[320px] bg-white rounded-2xl p-0 border border-[#EEEEEE]"
                />

                <div className="flex flex-col gap-4">
                  {[...Array(3)].map((_, index) => (
                    <ArticleCard
                      key={index}
                      author="Felix"
                      timeAgo="15 mins ago"
                      title="TennisHub has quickly become a leading name in the world of tennis shopping, offer..."
                      date="Apr 17, 2025"
                      readTime="5 min reads"
                      category="Lifestyle"
                      likes={890}
                      comments={78}
                      showMetrics={true}
                      className="p-4"
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  {[...Array(3)].map((_, index) => (
                    <ArticleCard
                      key={index}
                      author="Felix"
                      timeAgo="15 mins ago"
                      title="TennisHub has quickly become a leading name in the world of tennis shopping, offer..."
                      date="Apr 17, 2025"
                      readTime="5 min reads"
                      category="Lifestyle"
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
                <ArticleCard
                  author="Sara"
                  timeAgo="34 mins ago"
                  title="Customer Service Trends Take Center Stage in Indonesian Cin..."
                  imageUrl="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                  showImage={true}
                  className="border h-fit border-[#EEEEEE] rounded-2xl p-0 bg-white max-w-full lg:max-w-xs"
                />

                <div className="space-y-6">
                  {[...sampleArticles, sampleArticles[2]].map((article, index) => (
                    <ArticleListItem
                      key={index}
                      author={article.author}
                      timeAgo={article.timeAgo}
                      title={article.title}
                    />
                  ))}
                </div>
              </div>

              {/* Event Announcements */}
              <SectionHeader title="Sponsored Article" />
              <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 my-6">
                <div className="flex flex-col flex-wrap gap-4">
                  <ArticleCard
                    author="Alex Haslam"
                    timeAgo="20 mins ago"
                    title="Office Plants: A Cure for Burnout? Study Shows They Boost Productivity."
                    excerpt="A study from the University of Queensland shows that adding plants to the workplace can increase productivity..."
                    date="Apr 17, 2025"
                    readTime="5 min reads"
                    category="Lifestyle"
                    showButton={true}
                    className="border border-[#EEEEEE] w-full h-fit max-w-[320px] bg-white rounded-2xl p-6 mb-8"
                  />
                </div>

                <div className="space-y-6">
                  {[...sampleArticles, sampleArticles[2]].map((article, index) => (
                    <ArticleListItem
                      key={index}
                      author={article.author}
                      timeAgo={article.timeAgo}
                      title={article.title}
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
      <Footer />
    </div>
  );
};

export default Home;