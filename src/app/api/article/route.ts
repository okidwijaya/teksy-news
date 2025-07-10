import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

async function createAuthor(supabase: ReturnType<typeof createServerClient>, userId: string, name: string, email: string) {
  const { data, error } = await supabase
    .from('authors')
    .insert([{ user_id: userId, name, email }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

async function createTag(supabase: ReturnType<typeof createServerClient>, name: string) {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') 
    .replace(/[\s_-]+/g, '-') 
    .replace(/^-+|-+$/g, ''); 

  const { data, error } = await supabase
    .from('tags')
    .insert([{ name, slug }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

async function createCategory(supabase: ReturnType<typeof createServerClient>, name: string) {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const { data, error } = await supabase
    .from('categories')
    .insert([{ name, slug }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

function normalizeStatus(status: string): string {
  const statusMap: { [key: string]: string } = {
    'publish': 'published',
    'published': 'published',
    'draft': 'draft',
    'pending': 'pending',
    'archived': 'archived'
  };

  return statusMap[status.toLowerCase()] || 'draft'; 
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error('Auth failed:', authError);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      content,
      summary,
      publishDate,
      status,
      pageTitle,
      metaDescription,
      urlHandle,
      tags = [], // Default empty array
      featured_image,
      category, 
    } = body;

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    // Get user name with fallback
    let userName = 'Unknown User';
    
    if (user.user_metadata?.full_name) {
      userName = user.user_metadata.full_name;
    } else if (user.user_metadata?.name) {
      userName = user.user_metadata.name;
    } else if (user.user_metadata?.display_name) {
      userName = user.user_metadata.display_name;
    } else if (user.email) {
      userName = user.email.split('@')[0];
    }

    if (!userName || userName.trim() === '') {
      userName = 'Unknown User';
    }

    const userEmail = user.email || 'no-email@example.com';
    const normalizedStatus = normalizeStatus(status);

    // Get or create author
    const { data: foundAuthor, error: authorError } = await supabase
      .from('authors')
      .select('id')
      .eq('user_id', user.id)
      .maybeSingle();

    if (authorError) throw new Error(authorError.message);
    const author = foundAuthor ?? await createAuthor(supabase, user.id, userName, userEmail);

    // Handle category
    let categoryId: string;
    if (category && category.trim()) {
      const categorySlug = category
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

      const { data: foundCategory, error: categoryError } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', categorySlug)
        .maybeSingle();

      if (categoryError) throw new Error(categoryError.message);
      const categoryData = foundCategory ?? await createCategory(supabase, category);
      categoryId = categoryData.id;
    } else {
      // Use default category
      const { data: defaultCategory, error: defaultCategoryError } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', 'uncategorized')
        .maybeSingle();

      if (defaultCategoryError) throw new Error(defaultCategoryError.message);
      
      if (defaultCategory) {
        categoryId = defaultCategory.id;
      } else {
        const newDefaultCategory = await createCategory(supabase, 'Uncategorized');
        categoryId = newDefaultCategory.id;
      }
    }

    // Handle tags
    const tagIds: string[] = [];
    if (Array.isArray(tags) && tags.length > 0) {
      for (const tagName of tags) {
        if (!tagName || !tagName.trim()) continue;
        
        const tagSlug = tagName
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

        const { data: foundTag, error: tagError } = await supabase
          .from('tags')
          .select('id')
          .eq('slug', tagSlug) 
          .maybeSingle();

        if (tagError) throw new Error(tagError.message);
        const tag = foundTag ?? await createTag(supabase, tagName);
        tagIds.push(tag.id);
      }
    }

    // Create article
    const { data: article, error: articleError } = await supabase
      .from('articles')
      .insert([{
        title,
        slug: urlHandle,
        content,
        excerpt: summary,
        author_id: author.id,
        category_id: categoryId, 
        status: normalizedStatus,
        published_at: publishDate || new Date().toISOString(),
        meta_title: pageTitle,
        meta_description: metaDescription,
        featured_image: featured_image || null,
      }])
      .select()
      .single();

    if (articleError) throw new Error(articleError.message);

    // Link tags to article
    if (tagIds.length > 0) {
      for (const tagId of tagIds) {
        const { error: tagLinkError } = await supabase
          .from('article_tags')
          .insert([{ article_id: article.id, tag_id: tagId }]);

        if (tagLinkError) throw new Error(tagLinkError.message);
      }
    }

    return NextResponse.json({ 
      message: 'Article created successfully', 
      article: {
        id: article.id,
        title: article.title,
        slug: article.slug,
        status: article.status
      }
    });

  } catch (error) {
    console.error('Error creating article:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}