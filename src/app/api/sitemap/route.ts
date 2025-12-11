import { NextResponse } from "next/server";

interface BlogPost {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
}

const DEFAULT_DOMAIN =
  process.env.NEXT_PUBLIC_API_CP ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.kitadevelopers.com");

export async function GET() {
  try {
    const posts = [
      {
        id: "1",
        title: "Sample Blog Post 1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Sample Blog Post 2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    if (!Array.isArray(posts)) {
      throw new Error("Invalid posts data format");
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <!-- Static Routes -->\n  <url>\n    <loc>${DEFAULT_DOMAIN}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>${DEFAULT_DOMAIN}/blogs</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n  <!-- Dynamic Blog Posts -->\n  ${(
      posts as BlogPost[]
    )
      .map((post: BlogPost) => {
        const lastmod =
          post.updatedAt || post.createdAt || new Date().toISOString();
        return `<url>\n    <loc>${DEFAULT_DOMAIN}/blogs/${
          post.id
        }</loc>\n    <lastmod>${new Date(
          lastmod
        ).toISOString()}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
      })
      .join("")}\n</urlset>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);

    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack);
    }

    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <!-- Error occurred, falling back to static routes -->\n  <url>\n    <loc>${DEFAULT_DOMAIN}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <priority>1.0</priority>\n  </url>\n</urlset>`;

    return new NextResponse(errorXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  }
}
