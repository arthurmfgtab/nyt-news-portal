<template>
    <Spinner v-show="isLoading" />

    <MainNews v-show="!isLoading" />
    <NewsList v-show="!isLoading" />
</template>

<script>
import { mapState } from "vuex"
import MainNews from "./../components/MainNews.vue"
import NewsList from "./../components/NewsList.vue"
import Spinner from "./../components/Spinner.vue"

export default {
    components: {
        MainNews,
        NewsList,
        Spinner,
    },
    computed: {
        ...mapState(["isLoading"]),
    },
}
</script>
