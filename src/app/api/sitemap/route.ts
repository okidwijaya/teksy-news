import { NextResponse } from 'next/server';
import api from '@/lib/api';

interface BlogPost {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
}

const DEFAULT_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
    : 'https://www.kitadevelopers.com');

export async function GET() {
  try {
    // Mock data for testing - replace this with your actual API call
    const posts = [
      {
        id: '1',
        title: 'Sample Blog Post 1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Sample Blog Post 2',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    // TODO: Uncomment and modify this when API is ready
    // const response = await api.get('/posts');
    // if (!response.data) {
    //   throw new Error('No data received from API');
    // }
    // const posts = response.data;

    // Validate posts data
    if (!Array.isArray(posts)) {
      throw new Error('Invalid posts data format');
    }

    // Generate sitemap XML with proper formatting
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Static Routes -->
      <url>
        <loc>${DEFAULT_DOMAIN}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${DEFAULT_DOMAIN}/blogs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>

      <!-- Dynamic Blog Posts -->
      ${(posts as BlogPost[]).map((post: BlogPost) => {
        // Ensure we have valid dates
        const lastmod = post.updatedAt || post.createdAt || new Date().toISOString();
        return `
        <url>
          <loc>${DEFAULT_DOMAIN}/blogs/${post.id}</loc>
          <lastmod>${new Date(lastmod).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>`;
      }).join('')}
    </urlset>`;

    // Return the XML with proper content type and caching headers
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error('Error details:', error.message, error.stack);
    }
    
    // Return a proper XML error response
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Error occurred, falling back to static routes -->
      <url>
        <loc>${DEFAULT_DOMAIN}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
      </url>
    </urlset>`;

    return new NextResponse(errorXml, {
      status: 200, // Still return 200 but with minimal sitemap
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}