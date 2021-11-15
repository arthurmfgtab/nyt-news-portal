<template>
    <div
        @click="this.$emit('goToArticle')"
        class="article"
        :style="[image, smallerAbove ? 'margin-bottom: 1rem;' : '']"
        :data-test="`${dataTest}`"
    >
        <div class="overlay">
            <p :data-test="`${dataTest}-section`">{{ section }}</p>
            <h2 :data-test="`${dataTest}-title`" :style="smaller ? 'font-size: 1.6rem;' : ''">
                {{ title }}
            </h2>
            <h5 :data-test="`${dataTest}-description`" :style="smaller ? 'font-size: 1.1rem;' : ''">
                {{ description.substr(0, 100) + "\u2026" }}
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainNews",
    props: {
        image: String,
        section: String,
        title: String,
        description: String,
        smaller: Boolean,
        smallerAbove: Boolean,
        dataTest: String,
    },
    emits: ["goToArticle"],
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
    font-weight: 600;
    margin-bottom: 1rem;
}

h5 {
    font-size: 2rem;
    font-weight: 300;
    z-index: 10;
}

.article {
    display: flex;
    flex: 1;
    position: relative;
    cursor: pointer;
    background-position: center;
    overflow: hidden;
    border-radius: 0.5rem;
    background-size: 100%;
    transition: all 0.4s ease-out;
}

.article:hover {
    background-size: 108%;
}

.overlay {
    flex: 1;
    backdrop-filter: brightness(70%);
    padding: 2rem;
    display: flex;
    padding-top: 5rem;
    flex-direction: column;
    justify-content: center;
}

@media only screen and (max-width: 960px) {
    .big-article {
        display: none;
    }
    p {
        font-size: 1.5rem !important;
    }
    .overlay > h2 {
        font-size: 2.25rem !important;
    }
    h5 {
        font-size: 1.8rem !important;
    }
}

@media only screen and (max-width: 720px) {
    .big-article {
        display: none;
    }
    p {
        font-size: 1.2rem !important;
    }
    .overlay > h2 {
        font-size: 2rem !important;
    }
    h5 {
        font-size: 1.4rem !important;
    }
}

@media only screen and (max-width: 600px) {
    p {
        font-size: 1.2rem !important;
    }
    .overlay > h2 {
        font-size: 1.8rem !important;
    }
    h5 {
        font-size: 1.2rem !important;
    }
}
</style>
