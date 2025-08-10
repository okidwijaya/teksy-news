import api from "@/lib/api"
import { Article } from "@/types"

export const getArticles = async (): Promise<Article[]> => {
    const response = await api.get<Article[]>("/articles")
    return response.data
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
    const response = await api.get<Article>(`/blog/articles-detail/${slug}`)
    return response.data
}

export const addArticles = async (payload: Article) => {
    const response = await api.post<Article[]>("/articles", payload)
    return response.data
}

