<template>
    <div class="main-news-container" v-if="getArticles().length > 0">
        <MainNewsItem
            class="big-article"
            :image="getImage(0)"
            :section="this.getArticles()[0].section"
            :description="getArticles()[0].abstract"
            :title="getArticles()[0].title"
            @goToArticle="goToArticle(0)"
            dataTest="big-article"
        />
        <div class="split-wrapper">
            <MainNewsItem
                :image="getImage(1)"
                :section="this.getArticles()[1].section"
                :description="getArticles()[1].abstract"
                :title="getArticles()[1].title"
                @goToArticle="goToArticle(1)"
                dataTest="upper-small-article"
                smaller
                smallerAbove
            />
            <MainNewsItem
                :image="getImage(2)"
                :section="this.getArticles()[2].section"
                :description="getArticles()[2].abstract"
                :title="getArticles()[2].title"
                @goToArticle="goToArticle(2)"
                dataTest="lower-small-article"
                smaller
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import MainNewsItem from "./MainNewsItem.vue"

export default {
    name: "MainNews",
    components: {
        MainNewsItem,
    },
    computed: {
        ...mapGetters(["getArticles"]),
    },
    async created() {
        try {
            await this.getArticlesBySection()
        } catch (error) {
            console.error("Error on getting articles by section: ", error)
        }
    },
    methods: {
        ...mapMutations(["setActiveArticle"]),
        ...mapActions(["getArticlesBySection"]),
        getImage(index) {
            return `background-image: url(${
                this.getArticles()[index].image
            }); background-repeat: no-repeat; background-size: cover;`
        },
        goToArticle(index) {
            this.setActiveArticle(this.getArticles()[index])
            return this.$router.push({ name: "Article" })
        },
    },
}
</script>

<style scoped>
p {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.3rem;
    font-weight: 500;
}

h2 {
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

h5 {
    font-size: 1.8rem;
    font-weight: 300;
    z-index: 10;
}

.main-news-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 40rem;
}

.overlay {
    flex: 1;
    backdrop-filter: brightness(60%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.split-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 1rem;
}

@media only screen and (max-width: 960px) {
    .big-article {
        display: none;
    }
    .split-wrapper {
        margin-left: 0;
    }
}
</style>
