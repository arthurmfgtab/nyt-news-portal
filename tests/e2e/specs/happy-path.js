// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />

describe("Test features in the homepage", () => {
    beforeEach(() => {
        cy.interceptAndStubSearchResults()
        cy.interceptAndStubHomepageArticles()
    })

    after(() => null)

    it("visits home screen, checks pagination and goes to main article", () => {
        cy.visit("/")
        cy.get("[data-test=header-section-chooser]").click()
        cy.get("[data-test=section-option-science]").trigger("click")
        cy.get("[data-test=header-section-chooser]").click()

        cy.scrollTo("bottom")

        cy.get("[data-test=pagination-item-2]").click()
        cy.get("[data-test=pagination-item-3]").click()
        cy.get("[data-test=pagination-item-5]").click()
        cy.get("[data-test=pagination-item-1]").click()

        cy.scrollTo("top")
    })

    it("checks article title and content", () => {
        const articleTitle = "Sign Up for the Science Times Newsletter"
        const articleContent =
            "Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos."

        cy.get("[data-test=big-article]").click()
        cy.scrollTo("top")
        cy.contains(articleTitle)
        cy.scrollTo("bottom")
        cy.contains(articleContent)
        cy.scrollTo("top")
    })

    it("searches for 'Jumia', clicks on the first result item and check article", () => {
        const articleTitle =
            "Today’s Scuttlebot: Instagram Messaging, and Room Reservations Courtesy of Twitter"
        const articleContent =
            "Friday’s highlights from around the web include a new feature from Instagram that may be seen as an answer to Snapchat. Plus, people can now book hotel rooms with one chain by tweeting to @Loews_Hotels with the hashtag #BookLoews."

        cy.get("[data-test=search-input]").focus().type("{enter}")

        cy.get("[data-test=search-input]").type("Jumia").type("{enter}")
        cy.scrollTo("bottom")
        cy.scrollTo("top")
        cy.get("[data-test=article-result-1]").click()
        cy.contains(articleTitle)
        cy.scrollTo("bottom")
        cy.contains(articleContent)
        cy.scrollTo("top")
    })

    it("comes back to homepage", () => {
        cy.get("[data-test=header-logo]").click()
        const articleTitle = "Sign Up for the Science Times Newsletter"
        cy.contains(articleTitle)
    })
})
