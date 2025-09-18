export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  color: string | null;
  sort_order: number;
  children?: Category[];
};