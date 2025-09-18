'use client';
import React, { useEffect } from 'react';

export default function Page() {
  // const [posts, setPosts] = useState<unknown[]>([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
     
    }

    fetchPosts()
  }, []) 
  // console.log('posts', posts, loading, error)
  return (
    <>
      <p>article</p>
    </>
  )
}

