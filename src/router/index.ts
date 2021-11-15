import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import Home from "../views/Home.vue"
import SearchResults from "../views/SearchResults.vue"
import Article from "../views/Article.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/search-results",
        name: "SearchResults",
        component: SearchResults,
    },
    {
        path: "/article",
        name: "Article",
        component: Article,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
