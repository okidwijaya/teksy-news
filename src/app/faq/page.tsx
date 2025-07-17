'use client'
import React, { useEffect, useState } from 'react'
import Accordion from '@/components/Accordion'
import { Article } from '@/types';
import { supabase } from '@/lib/supabase';

export default function Page() {
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

    console.log('posts', posts, loading, error)

    return (
        <>
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
        </>
    )
}
