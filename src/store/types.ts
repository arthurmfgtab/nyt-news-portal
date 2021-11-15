export interface Article {
    title: string
    section: Sections
    abstract: string
    publicationDate: string
    image: string
}

export enum Sections {
    home = "home",
    us = "us",
    arts = "arts",
    science = "science",
    world = "world",
}

export enum RawSections {
    "home" = "home",
    "U.S. News" = "U.S. News",
    "Science" = "Science",
    "Arts" = "Arts",
    "World News" = "World News",
}

export interface ArticlePayload {
    results: Array<Article>
    copyright: string
    section: RawSections
    last_updated: Date
    num_results: number
    status: "OK"
}

export interface Store {
    currentSection: Sections
    searchedResults: Array<Article>
    activeArticle: Article | undefined
    isLoading: boolean
    articles: {
        home: Article[]
        us: Article[]
        arts: Article[]
        science: Article[]
        world: Article[]
    }
}
