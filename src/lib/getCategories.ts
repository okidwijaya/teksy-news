import { supabase } from "@/lib/supabase";

export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  color: string | null;
  sort_order: number;
  children?: Category[];
};

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select(`
      id,
      name,
      slug,
      icon,
      color,
      sort_order,
      parent_id,
      children:categories!parent_id(
        id,
        name,
        slug,
        icon,
        color,
        sort_order,
        parent_id
      )
    `)
    .is("parent_id", null)
    .eq("is_active", true)
    .order("sort_order");

  if (error || !data) {
    console.error(error);
    throw new Error("Failed to load categories");
  }

  return data;
}
