'use client';
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    async function fetchPosts() {
    }

    fetchPosts()
  }, []) 
  return (
    <>
      <p>article</p>
    </>
  )
}

