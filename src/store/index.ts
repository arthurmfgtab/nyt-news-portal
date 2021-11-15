import axios from "axios"
import { createStore } from "vuex"
import { validateAndTransformArticles } from "./helpers"
import { Article, ArticlePayload, Sections, Store } from "./types"

export default createStore<Store>({
    state: {
        currentSection: Sections.home,
        searchedResults: [],
        activeArticle: undefined,
        isLoading: false,
        articles: {
            home: [],
            us: [],
            arts: [],
            science: [],
            world: [],
        },
    },
    mutations: {
        setSection(state, section: Sections) {
            state.currentSection = section
        },
        setIsLoading(state, value: boolean) {
            state.isLoading = value
        },
        setActiveArticle(state, article: Article) {
            state.activeArticle = article
        },
        setArticles(state, { results, section }: ArticlePayload) {
            const _section = {
                home: Sections.home,
                "U.S. News": Sections.us,
                Science: Sections.science,
                Arts: Sections.arts,
                "World News": Sections.world,
            }

            state.articles[_section[section]] = results
        },
        setSearchResults(state, results) {
            state.searchedResults = results.data.response.docs
        },
    },
    actions: {
        async getArticlesBySection(context, section: Sections = context.state.currentSection) {
            const apiKey = process.env.VUE_APP_NYT_API_KEY
            const endpoint = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`

            try {
                context.commit("setIsLoading", true)

                const response = await axios.get(endpoint)
                const results = validateAndTransformArticles(response.data.results)

                setTimeout(() => {
                    context.commit("setSection", section)
                    context.commit("setArticles", { ...response.data, results })
                    context.commit("setIsLoading", false)
                }, 1000)
            } catch (error) {
                context.commit("setIsLoading", false)
                console.error(`Error on retrieving ${section} articles: `, error)
            }
        },
        async searchByQuery(context, words) {
            const apiKey = process.env.VUE_APP_NYT_API_KEY
            const endpoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${words}&api-key=${apiKey}`

            try {
                context.commit("setIsLoading", true)

                const response = await axios.get(endpoint)

                context.commit("setSearchResults", response)
                context.commit("setIsLoading", false)
            } catch (error) {
                context.commit("setIsLoading", false)
                console.error(`Error on searching for articles by '${words}'`, error)
            }
        },
    },
    getters: {
        getArticles: state => {
            return (payload: Sections = state.currentSection) => {
                return state.articles[payload]
            }
        },
    },
})
