// release/v2.0git tag -a v1.0.0 -m "Release version 1.0.0"
"use client"
import AdCard from '@/components/AdsCard';
import React, { useEffect, useState } from 'react';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
// import { HeroArticle } from '@/components/HeroArticle';
// import { FeaturedArticle } from '@/components/FeaturedArticle';
import { timeAgo } from '@/lib/timeAgo';
import { Article } from '@/types';
import LoadingLogoDefault from '@/components/Loading';
import axios from 'axios';
import PublicLayout from '@/components/PublicLayout';
// import AdCardGoogle from '@/components/AdsCardGoogle';
// import { X, Code2, Smartphone, ShoppingBag, Database } from 'lucide-react';
// import Link from 'next/link';

import { Lang, translations } from '@/constanst/translationTest';
// import ContactForm from '@/components/v2/ContactForm/ContactForm';
import Brands from '@/components/v3/NewLanding/Brands';
import CTA from '@/components/v3/NewLanding/CTA';
import ERPSection from '@/components/v3/NewLanding/ERPSection';
import Hero from '@/components/v3/NewLanding/Hero';
import Pricing from '@/components/v3/NewLanding/Pricing';
import Services from '@/components/v3/NewLanding/Services';
import WhyUs from '@/components/v3/NewLanding/WhyUs';


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

  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];

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

  return (
    <PublicLayout>
      <div className="bg-[#181818] text-[#F9FAFB]">
        {!loading ?
          <main className="relative pt-0 pb-0 px-0 bg-[#0D1117]">
            <Hero />
            <Brands />
            <Services />
            <ERPSection />
            <Pricing />
            <WhyUs />
            <CTA />
          </main>
          : <LoadingLogoDefault />}
      </div>
    </PublicLayout >
  );
};

export default Home;