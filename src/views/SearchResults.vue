<template>
    <main>
        <div
            v-show="!isLoading"
            v-for="(result, index) in searchedResults"
            :key="result.title"
            @click="goToArticle(result)"
            :data-test="`article-result-${index}`"
        >
            <span>{{ result.section_name }}</span>
            <div>
                <h1>{{ result.headline.main }}</h1>
                <p>{{ result.abstract.substr(0, 300) + "\u2026" }}</p>
            </div>
        </div>
        <Spinner v-show="isLoading" />
    </main>
</template>

<script>
import { mapMutations, mapState } from "vuex"
import Spinner from "./../components/Spinner.vue"

export default {
    name: "SearchResults",
    components: {
        Spinner,
    },
    created() {
        if (this.searchedResults.length == 0) {
            return this.$router.push({ name: "Home" })
        }
        return
    },
    computed: {
        ...mapState(["searchedResults", "isLoading"]),
    },
    methods: {
        ...mapMutations(["setActiveArticle"]),
        goToArticle(article) {
            const articleImagePartialUrl = article.multimedia.find(item => item.url !== "").url

            const formattedArticle = {
                title: article.headline.main,
                section: article.section_name,
                abstract: article.abstract,
                publicationDate: article.article,
                image: `https://static01.nyt.com/${articleImagePartialUrl}`,
            }

            this.setActiveArticle(formattedArticle)
            return this.$router.push({ name: "Article" })
        },
    },
}
</script>

<style scoped>
* {
    color: #444;
}

main > div {
    background-color: rgba(245, 245, 245, 0.701);
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 7.5rem;
    height: 13rem;
    padding-right: 4rem;
    cursor: pointer;
    box-shadow: rgba(123, 123, 123, 0.35) 1px 1px 8px;
}

main > div:hover {
    transform: scale(1.025);
    transition: all 0.4s ease-out;
}

h1 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.1rem;
}

span {
    margin-bottom: 1rem;
}

@media only screen and (max-width: 960px) {
    main > div {
        padding-right: 2rem;
    }

    main {
        padding: 0;
    }

    h1 {
        font-size: 1.5rem;
    }

    span {
        margin-bottom: 0.25rem;
    }
}

@media only screen and (max-width: 700px) {
    p {
        font-size: 1.05rem;
    }

    h1 {
        font-size: 1.25rem;
    }

    main > div {
        padding-right: 1rem;
    }
}

@media only screen and (max-width: 500px) {
    p {
        font-size: 0.9rem;
    }

    h1 {
        font-size: 1rem;
    }

    main > div {
        padding-right: 0.75rem;
    }

    span {
        font-size: 0.75rem;
    }
}
</style>
