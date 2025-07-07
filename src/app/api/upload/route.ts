// // api/upload/route.ts
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
// import { NextRequest, NextResponse } from 'next/server'

// export const runtime = 'nodejs'

// export async function POST(req: NextRequest) {
//   try {
//     const supabase = createRouteHandlerClient({ cookies })

//     // Check if user is authenticated (if required)
//     const { data: { session } } = await supabase.auth.getSession()
    
//     // Uncomment if you want to require authentication
//     // if (!session) {
//     //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//     // }

//     const formData = await req.formData()
//     const file = formData.get('file') as File

//     if (!file) {
//       return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
//     }

//     const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
//     if (!allowedTypes.includes(file.type)) {
//       return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
//     }

//     const fileName = `${Date.now()}-${file.name}`
//     const arrayBuffer = await file.arrayBuffer()
//     const buffer = Buffer.from(arrayBuffer)

//     const { error } = await supabase.storage
//       .from('article-images')
//       .upload(fileName, buffer, {
//         contentType: file.type,
//         cacheControl: '3600',
//         upsert: false,
//       })

//     if (error) {
//       console.error('Supabase upload error:', error)
//       throw error
//     }

//     const { data } = supabase.storage
//       .from('article-images')
//       .getPublicUrl(fileName)

//     return NextResponse.json({ url: data.publicUrl })
//   } catch (error: unknown) {
//     console.error('Upload error:', error)
//     const errorMessage =
//       error instanceof Error ? error.message : JSON.stringify(error)
//     return NextResponse.json({ error: errorMessage }, { status: 500 })
//   }
// }

// // api/upload/route.ts
import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const supabase = supabaseAdmin

    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
    }

    const fileName = `${Date.now()}-${file.name}`
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { error } = await supabase.storage
      .from('article-images')
      .upload(fileName, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false,
      })

    if (error) {
      console.error('Supabase upload error:', error)
      throw error
    }

    const { data } = supabase.storage
      .from('article-images')
      .getPublicUrl(fileName)

    return NextResponse.json({ url: data.publicUrl })
  } catch (error: unknown) {
    console.error('Upload error:', error)
    const errorMessage =
      error instanceof Error ? error.message : JSON.stringify(error)
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}