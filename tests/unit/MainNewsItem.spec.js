import { mount } from "@vue/test-utils"
import MainNewsItem from "@/components/MainNewsItem.vue"
import Home from "@/views/Home.vue"
import Article from "@/views/Article.vue"
import SearchResults from "@/views/SearchResults.vue"
import store from "./../../src/store"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/search-results",
            name: "SearchResults",
            component: SearchResults,
        },
        {
            path: "/article",
            name: "Article",
            component: Article,
        },
    ],
})

describe("MainNewsItem.vue", () => {
    it("checks big article text content", async () => {
        const bigArticleSection = "us"
        const bigArticleTitle =
            "How the U.S. Hid an Airstrike That Killed Dozens of Civilians in Syria"
        const bigArticleDescription =
            "The military never conducted an independent investigation into a 2019 bombing on the last bastion of…"

        const wrapper = mount(MainNewsItem, {
            global: {
                plugins: [store, router],
            },
            props: {
                image: "",
                section: bigArticleSection,
                title: bigArticleTitle,
                description: bigArticleDescription,
                smaller: false,
                smallerAbove: false,
                dataTest: "big-article",
            },
        })

        await router.isReady()

        expect(wrapper.find("[data-test='big-article-section']").text()).toBe(bigArticleSection)
        expect(wrapper.find("[data-test='big-article-title']").text()).toBe(bigArticleTitle)
        expect(wrapper.find("[data-test='big-article-description']").text()).toBe(
            bigArticleDescription,
        )
    })

    it("checks upper small article text content", async () => {
        const upperSmallArticleSection = "science"
        const upperSmallArticleTitle = "Sign Up for the Science Times Newsletter"
        const upperSmallArticleDescription =
            "Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos."

        const wrapper = mount(MainNewsItem, {
            global: {
                plugins: [store, router],
            },
            props: {
                image: "",
                section: upperSmallArticleSection,
                title: upperSmallArticleTitle,
                description: upperSmallArticleDescription,
                smaller: true,
                smallerAbove: true,
                dataTest: "upper-small-article",
            },
        })

        await router.isReady()

        expect(wrapper.find("[data-test='upper-small-article-section']").text()).toBe(
            upperSmallArticleSection,
        )
        expect(wrapper.find("[data-test='upper-small-article-title']").text()).toBe(
            upperSmallArticleTitle,
        )
        expect(wrapper.find("[data-test='upper-small-article-description']").text()).toBe(
            "Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmo…",
        )
    })

    it("checks lower small article text content", async () => {
        const lowerSmallArticleSection = "politics"
        const lowerSmallArticleTitle = "Menace Enters the Republican Mainstream"
        const lowerSmallArticleDescription =
            "Threats of violence have become commonplace among a significant part of the party, as historians and those who study democracy warn of a dark shift in American politics."

        const wrapper = mount(MainNewsItem, {
            global: {
                plugins: [store, router],
            },
            props: {
                image: "",
                section: lowerSmallArticleSection,
                title: lowerSmallArticleTitle,
                description: lowerSmallArticleDescription,
                smaller: true,
                smallerAbove: false,
                dataTest: "lower-small-article",
            },
        })

        await router.isReady()

        expect(wrapper.find("[data-test='lower-small-article-section']").text()).toBe(
            lowerSmallArticleSection,
        )
        expect(wrapper.find("[data-test='lower-small-article-title']").text()).toBe(
            lowerSmallArticleTitle,
        )
        expect(wrapper.find("[data-test='lower-small-article-description']").text()).toBe(
            "Threats of violence have become commonplace among a significant part of the party, as historians and…",
        )
    })
})
