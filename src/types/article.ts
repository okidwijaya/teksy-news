export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}
