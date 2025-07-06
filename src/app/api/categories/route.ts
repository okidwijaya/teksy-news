import { getCategories } from '@/lib/getCategories'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const categories = await getCategories()
        return NextResponse.json({ data: categories })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to load categories' }, { status: 500 })
    }
}
