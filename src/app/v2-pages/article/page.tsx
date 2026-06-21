'use client';
import PageGuard from '@/components/PageGuard';
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    async function fetchPosts() {
    }

    fetchPosts()
  }, []) 
  return (
    <PageGuard>
      <p>article</p>
    </PageGuard>
  )
}

