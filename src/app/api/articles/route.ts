import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const {
      title,
      content,
      summary,
      author,
      publishDate,
      status,
      pageTitle,
      metaDescription,
      urlHandle,
      tags,
    } = await req.json();

    // 1. Ensure Author exists
    const { data: foundAuthor, error: authorError } = await supabase
      .from('authors')
      .select('id')
      .eq('name', author)
      .maybeSingle();

    if (authorError) throw new Error(authorError.message);

    const authorRecord = foundAuthor ?? (await createAuthor(author));

    // 2. Ensure Tags exist and collect their IDs
    const tagIds: string[] = [];

    for (const tagName of tags) {
      const { data: foundTag, error: tagError } = await supabase
        .from('tags')
        .select('id')
        .eq('name', tagName)
        .maybeSingle();

      if (tagError) throw new Error(tagError.message);

      const tagRecord = foundTag ?? (await createTag(tagName));
      tagIds.push(tagRecord.id);
    }

    // 3. Insert the Article
    const { data: article, error: articleError } = await supabase
      .from('articles')
      .insert([
        {
          title,
          slug: urlHandle,
          content,
          excerpt: summary,
          author_id: authorRecord.id,
          status,
          is_featured: false,
          published_at: publishDate,
          meta_title: pageTitle,
          meta_description: metaDescription,
        },
      ])
      .select()
      .single();

    if (articleError) throw new Error(articleError.message);

    // 4. Link Article with Tags
    const linkTagPromises = tagIds.map((tagId) =>
      supabase.from('article_tags').insert([{ article_id: article.id, tag_id: tagId }])
    );

    await Promise.all(linkTagPromises);

    return NextResponse.json({ message: 'Article created successfully', article });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

async function createAuthor(name: string) {
  const { data: newAuthor, error } = await supabase
    .from('authors')
    .insert([{ name }])
    .select()
    .single();

  if (error || !newAuthor) throw new Error(error?.message || 'Failed to create author');

  return newAuthor;
}

async function createTag(name: string) {
  const { data: newTag, error } = await supabase
    .from('tags')
    .insert([{ name }])
    .select()
    .single();

  if (error || !newTag) throw new Error(error?.message || 'Failed to create tag');

  return newTag;
}
