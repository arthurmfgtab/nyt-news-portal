export function validateAndTransformArticles(articles: any) {
    const validatedArticle = validateArticles(articles)
    const validatedAndFormattedArticle = transformArticles(validatedArticle)
    return validatedAndFormattedArticle
}

export function validateArticles(articles: any) {
    return articles.filter((item: any) => {
        const hasTitle = item.title && item.title !== ""
        const hasSection = item.section && item.section !== ""
        const hasAbstract = item.abstract && item.abstract !== ""
        const hasPublicationDate = item.published_date && item.published_date !== ""
        const hasImage =
            item?.multimedia && item.multimedia[0]?.url && item.multimedia[0]?.url !== ""

        return hasTitle && hasSection && hasAbstract && hasPublicationDate && hasImage
    })
}

export function transformArticles(articles: any) {
    return articles.map((item: any) => {
        return {
            title: item.title,
            section: item.section,
            abstract: item.abstract,
            publicationDate: item.published_date,
            image: item.multimedia[0].url,
        }
    })
}
