<template>
    <div class="news-list-container">
        <main>
            <div
                v-for="article in getCurrentArticles()"
                :key="article.title"
                @click="goToArticle(article)"
                class="article-wrapper"
            >
                <div>
                    <img :src="article.image" alt="article.abstract" />
                </div>
                <section class="text">
                    <h6>{{ article.section }}</h6>
                    <h2>{{ article.title }}</h2>
                    <p>{{ article.abstract }}</p>
                    <span>{{ article.publicationDate }}</span>
                </section>
            </div>
        </main>
        <section class="pagination">
            <div v-for="(_, index) in Array(articlesPerPage)" :key="_">
                <button
                    :data-test="`pagination-item-${index + 1}`"
                    :style="getSelectedPageStyle(index + 1)"
                    @click="paginate(index + 1)"
                >
                    {{ index + 1 }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
    name: "NewsList",
    data() {
        return {
            currentPage: 1,
            articlesPerPage: 5,
        }
    },
    computed: {
        ...mapGetters(["getArticles"]),
    },
    methods: {
        ...mapMutations(["setActiveArticle"]),
        goToArticle(article) {
            this.setActiveArticle(article)
            return this.$router.push({ name: "Article" })
        },
        getSelectedPageStyle(index) {
            return this.currentPage === index
                ? "color: white; font-weight: 600; background-color: var(--primary-color)"
                : ""
        },
        getSlicedListOfArticles() {
            return this.getArticles().slice(3, this.getArticles().length)
        },
        paginate(pageNumber) {
            this.currentPage = pageNumber
        },
        getIndexOfLastArticle() {
            return this.currentPage * this.articlesPerPage
        },
        getIndexOfFirstArticle() {
            return this.getIndexOfLastArticle() - this.articlesPerPage
        },
        getCurrentArticles() {
            return this.getSlicedListOfArticles().slice(
                this.getIndexOfFirstArticle(),
                this.getIndexOfLastArticle(),
            )
        },
    },
}
</script>

<style scoped>
.news-list-container {
    background-color: rgba(245, 245, 245, 0.489);
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    border-radius: 0.4rem;
}

main > .article-wrapper {
    display: flex;
    margin-bottom: 3rem;
    cursor: pointer;
}

main > .article-wrapper:hover {
    transform: scale(1.025);
    transition: all 0.4s ease-out;
}

main > .article-wrapper > .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.2rem 1rem;
    max-height: 15rem;
    max-width: 40rem;
}

img {
    border-radius: 0.25rem;
    width: 25rem;
    height: 15rem;
    object-fit: cover;
    object-position: top;
}

h6 {
    color: rgb(62, 61, 61);
    font-size: 1rem;
}

h2 {
    font-size: 1.75rem;
    color: var(--secondary-color);
    margin-bottom: 0.4rem;
}

p {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

span {
    font-size: 0.8rem;
    color: rgb(106, 106, 106);
}

.pagination {
    display: flex;
}

.pagination > div {
    display: flex;
    margin-right: 0.75rem;
    width: 2.75rem;
    height: 2.5rem;
    overflow: hidden;
    border-radius: 0.2rem;
    box-shadow: rgba(118, 118, 118, 0.35) 1px 1px 3px;
}

.pagination > * button {
    border-radius: 0.2rem;
    border: 0.5px solid #ccc;
    flex: 1;
    font-size: 1rem;
    color: rgb(147, 147, 147);
    cursor: pointer;
    transition: all 0.2s ease-out;
}

.pagination > * button:hover {
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
}

@media only screen and (max-width: 1020px) {
    h2 {
        font-size: 1.4rem;
        margin-bottom: 0.25rem;
    }
    h6 {
        margin-bottom: 0;
    }
    p {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    img {
        width: 20rem;
        height: 12rem;
    }
}

@media only screen and (max-width: 800px) {
    img {
        width: 12rem;
        height: 10rem;
    }
    h6 {
        font-size: 0.75rem;
    }
    h2 {
        font-size: 1rem;
    }
    p {
        font-size: 0.8rem;
    }
    span {
        font-size: 0.75rem;
    }
    .pagination > div {
        margin-right: 0.75rem;
        width: 2.2rem;
        height: 2.2rem;
    }
}

@media only screen and (max-width: 550px) {
    img {
        display: none;
    }
    .pagination > div {
        width: 1.75rem;
        height: 1.75rem;
    }
    h6 {
        font-size: 0.75rem;
    }
    h2 {
        font-size: 1rem;
    }
}
</style>
