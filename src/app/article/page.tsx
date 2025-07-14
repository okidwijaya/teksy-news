'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Page() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
        console.error('Error fetching posts:', error.message)
      } else {
        setPosts(data as any[])
      }
      setLoading(false)
    }

    fetchPosts()
  }, []) 
  return (
    <div>article</div>
  )
}

