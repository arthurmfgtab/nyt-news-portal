<template>
    <header data-test="header">
        <div class="menu">
            <p data-test="header-section-chooser" @click="toggleModal">
                {{ getSectionTitle() }}
                <i :class="getIconClass()" />
            </p>
            <SectionChoosingModal class="test" @onToggle="toggleModal" :isOpen="isModalOpened" />
        </div>
        <div class="logo">
            <router-link to="/">
                <h1 data-test="header-logo">Vue <span>News</span></h1>
            </router-link>
        </div>
        <div class="search-icon">
            <SearchIcon @onSearch="onSearch" />
        </div>
    </header>
</template>

<script>
import SearchIcon from "./SearchIcon.vue"
import SectionChoosingModal from "./SectionChoosingModal.vue"
import { mapActions, mapState } from "vuex"

export default {
    name: "Header",
    components: {
        SearchIcon,
        SectionChoosingModal,
    },
    data() {
        return {
            isModalOpened: false,
        }
    },
    computed: {
        ...mapState(["currentSection"]),
    },
    methods: {
        ...mapActions(["searchByQuery"]),
        async onSearch(words) {
            await this.searchByQuery(words)
            return this.$router.push({ name: "SearchResults" })
        },
        getSectionTitle() {
            return this.currentSection === "home"
                ? "Top Viewed"
                : this.currentSection === "us"
                ? "United States"
                : this.currentSection
        },
        getIconClass() {
            return `fas fa-chevron-${this.isModalOpened ? "up" : "down"}`
        },
        toggleModal() {
            this.isModalOpened = !this.isModalOpened
        },
    },
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    height: 4rem;
    background-color: var(--primary-color);
}

p:hover {
    transform: scale(1.025);
    transition: all 0.3s ease;
}

h1 {
    cursor: pointer;
    font-weight: 300;
}

span {
    font-weight: 700;
    font-size: 2rem;
}

.menu {
    flex: 1;
    cursor: pointer;
    position: relative;
}

.menu p {
    display: inline-block;
    text-transform: capitalize;
}

.logo {
    flex: 1;
    display: flex;
    justify-content: center;
}

.search-icon {
    flex: 1;
}

h1:hover {
    transform: scale(1.025);
    transition: all 0.3s ease;
}

@media only screen and (max-width: 780px) {
    header {
        padding: 0 1.75rem;
    }

    .logo * {
        font-size: 1.75rem;
    }

    .menu p {
        font-size: 0.9rem;
    }
}

@media only screen and (max-width: 550px) {
    header {
        padding: 0 1rem;
    }

    .logo * {
        font-size: 1.25rem;
    }
}

@media only screen and (max-width: 500px) {
    .menu p {
        font-size: 0.85rem;
    }
}

@media only screen and (max-width: 400px) {
    header {
        padding: 0 0.5rem;
    }

    .logo * {
        font-size: 1rem;
    }

    .menu p {
        font-size: 0.75rem;
    }
}
</style>
