<template>
    <Header />
    <main>
        <router-view />
    </main>
    <Footer v-show="!isLoading" />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { mapState } from "vuex"

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    computed: {
        ...mapState(["isLoading"]),
    },
}
</script>

<style scoped>
main {
    padding: 2rem 4rem;
    height: 100%;
}

@media only screen and (max-width: 1020px) {
    main {
        padding: 1.75rem 2rem;
    }
}

@media only screen and (max-width: 720px) {
    main {
        padding: 1.5rem 1.75rem;
    }
}

@media only screen and (max-width: 600px) {
    main {
        padding: 1rem 1rem;
    }
}
</style>
