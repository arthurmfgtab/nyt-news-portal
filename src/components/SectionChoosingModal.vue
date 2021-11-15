<template>
    <div v-show="isOpen" class="category-modal-container" @mouseleave="this.$emit('onToggle')">
        <ul>
            <li @click="setSection('home')">
                <p data-test="section-option-topviewed">Top Viewed</p>
                <i class="fas fa-chevron-right" />
            </li>
            <hr />
            <li @click="setSection('us')">
                <p data-test="section-option-us">United States</p>
                <i class="fas fa-chevron-right" />
            </li>
            <hr />
            <li @click="setSection('science')">
                <p data-test="section-option-science">Science</p>
                <i class="fas fa-chevron-right" />
            </li>
            <hr />
            <li @click="setSection('arts')">
                <p data-test="section-option-arts">Arts</p>
                <i class="fas fa-chevron-right" />
            </li>
            <hr />
            <li @click="setSection('world')">
                <p data-test="section-option-world">World</p>
                <i class="fas fa-chevron-right" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: "SectionChoosingModal",
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
        toggle: {
            type: Function,
        },
    },
    methods: {
        setSection(section) {
            this.getArticlesBySection(section)
        },
        ...mapActions(["getArticlesBySection"]),
    },
    emits: ["onToggle"],
}
</script>

<style scoped>
.category-modal-container > * {
    background-color: whitesmoke;
    width: 15rem;
    position: absolute;
    top: 2.5rem;
    left: 0;
    z-index: 100;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;
}

ul {
    list-style-type: none;
}

li {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}

li p {
    color: black;
}

li:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
}

li:active {
    transform: scale(0.95);
    transition: all 0.3s ease-out;
}

i {
    color: black;
}

@media only screen and (max-width: 500px) {
    li {
        font-size: 0.9rem;
        padding: 0.7rem;
    }

    .category-modal-container > * {
        width: 12rem;
    }
}
</style>
