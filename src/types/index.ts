// export interface Article {
//     id: string;
//     title: string;
//     author: string;
//     timestamp: string;
//     content?: string;
//     readMoreLink: string;
//     link: string;
// }

export type Author = {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  meta_description?: string;
  published_at: string;
  reading_time?: number;
  category_id?: string;
  author: Author;
};

export interface AccordionItem {
    title: string;
    content: React.ReactNode;
}