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
import AdCardGoogle from '@/components/AdsCardGoogle';
import { X, Code2, Smartphone, ShoppingBag, Database } from 'lucide-react';
import Link from 'next/link';

import { Lang, translations } from '@/constanst/translationTest';
// import ContactForm from '@/components/v2/ContactForm/ContactForm';

// import Navbar from "@/components/LandingPageLts/components/Navbar";
import Hero from "@/components/LandingPageLts/components/Hero";
import Brands from "@/components/LandingPageLts/components/Brands";
import Services from "@/components/LandingPageLts/components/Services";
import ERPSection from "@/components/LandingPageLts/components/ERPSection";
import Pricing from "@/components/LandingPageLts/components/Pricing";
import WhyUs from "@/components/LandingPageLts/components/WhyUs";
import CTA from "@/components/LandingPageLts/components/CTA";
// import Footer from "@/components/LandingPageLts/components/Footer";
import JsonLd from "@/components/LandingPageLts/components/JsonLd";
import { professionalServiceSchema } from "@/lib/schema";
import CapabilityStrip from '@/components/LandingPageLts/components/CapabilityStrip';



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
        {!loading ?
          <>
            <section className="relative pt-0 pb-0 px-0">
              <JsonLd schema={professionalServiceSchema} />
              <Hero />
              <CapabilityStrip />
              <Brands />
              <Services />
              <ERPSection />
              <Pricing />
              <WhyUs />
              <CTA />
            </section>
          </>
          : <LoadingLogoDefault />}
    </PublicLayout >
  );
};

export default Home;