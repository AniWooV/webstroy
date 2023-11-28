import { api } from "./baseApi";

export async function getTitles(slug: string) {
    const response = await api.get(`/titles?filters[slug][$eq]=${slug}&populate=localizations`)

    return response.data.data[0].attributes
}