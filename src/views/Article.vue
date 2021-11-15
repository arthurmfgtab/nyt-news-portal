<template>
    <div class="article-container">
        <section>
            <h1>{{ activeArticle?.title }}</h1>

            <div class="wrapper">
                <span>{{ activeArticle?.publicationDate }}</span>
                <div class="image" :style="getImage(activeArticle?.image)" />
            </div>

            <p>{{ activeArticle?.abstract }}</p>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "Article",
    computed: {
        ...mapState(["activeArticle", "isLoading"]),
    },
    created() {
        if (!this.activeArticle) {
            return this.$router.push({ name: "Home" })
        }
    },
    methods: {
        getImage(url) {
            return `background-image: url(${url}); background-repeat: no-repeat; background-size: cover;`
        },
    },
}
</script>

<style scoped>
* {
    color: #333;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.article-container {
    background-color: rgba(245, 245, 245, 0.776);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
}

h1 {
    font-size: 2.75rem;
    margin-bottom: 3rem;
    text-align: center;
}

span {
    font-size: 0.75rem;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 80%;
    height: 30rem;
}

.image {
    height: 100%;
    width: 100%;
    background-position: center;
    overflow: hidden;
    background-size: 100%;
    border-radius: 0.25rem;
}

p {
    font-size: 1.4rem;
    width: 70%;
    margin: 3rem;
}

@media only screen and (max-width: 600px) {
    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.4rem;
    }
}

@media only screen and (max-width: 500px) {
    .wrapper {
        height: 15rem;
    }
}
</style>
