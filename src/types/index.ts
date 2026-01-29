export type Author = {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
};

export type Article = {
  category: string;
  data: Article;
  id: string;
  title: string;
  slug: string;
  content: string;
  status?: 'draft' | 'published' | 'scheduled';
  meta_description?: string;
  published_at: string;
  reading_time?: number;
  category_id?: string;
  author: Author;
  featured_image?: string;
};

export interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

export interface Tag {
    id: number;
    text: string;
}

export interface BlogPost {
    title: string;
    content: string;
    summary: string;
    publishDate: string;
    status: 'draft' | 'publish' | 'scheduled';
    pageTitle: string;
    metaDescription: string;
    urlHandle: string; 
    tags?: Tag[];
    category?: string; 
    categoryId?: string; 
    keywords?: string; 
    featuredImage?: File; 
    isFeatured?: boolean; 
    views?: number; 
    readingTime?: number;
    authorId?: string;
    featuredImageUrl?: string;
  }
  // allowComments: boolean;