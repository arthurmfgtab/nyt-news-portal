<template>
    <div class="search-container">
        <input
            data-test="search-input"
            v-model="queryWords"
            @keyup.enter="onSearch"
            placeholder="Search"
            type="text"
        />
    </div>
</template>

<script>
export default {
    name: "SearchIcon",
    data() {
        return {
            queryWords: "",
        }
    },
    methods: {
        onSearch() {
            if (this.queryWords === "") {
                return alert("Please, provide something to query for")
            }

            this.$emit("onSearch", this.queryWords)
        },
    },
}
</script>

<style scoped>
.search-container {
    display: flex;
    justify-content: flex-end;
}

input {
    background-color: var(--secondary-color);
    border: none;
    height: 2rem;
    border-radius: 0.4rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: white;
}

input:hover {
    transform: scale(1.025);
    transition: all 0.3s ease;
}

input:focus,
input:active {
    background-color: whitesmoke;
    color: black !important;
}

input::placeholder {
    color: whitesmoke;
    opacity: 1; /* Firefox */
}

@media only screen and (max-width: 960px) {
    input {
        font-size: 0.9rem;
    }
}

@media only screen and (max-width: 720px) {
    input {
        width: 7.5rem;
        height: 1.75rem;
        font-size: 0.75rem;
    }
}

@media only screen and (max-width: 500px) {
    input {
        font-size: 0.75rem;
        width: 6rem;
        height: 1.5rem;
    }
}
</style>
