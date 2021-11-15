Cypress.Commands.add("interceptAndStubHomepageArticles", () => {
    const baseUrl = Cypress.env("CYPRESS_NYT_BASE_URL")

    const getUrl = section => `${baseUrl}/topstories/v2/${section}.json*`
    const getFixturePath = section => `fixture:homepage-articles/${section}.json`

    cy.server()
    cy.route(getUrl("home"), getFixturePath("topviewed"))
    cy.route(getUrl("arts"), getFixturePath("arts"))
    cy.route(getUrl("science"), getFixturePath("science"))
    cy.route(getUrl("us"), getFixturePath("unitedstates"))
    cy.route(getUrl("world"), getFixturePath("world"))
})

Cypress.Commands.add("interceptAndStubSearchResults", () => {
    const baseUrl = Cypress.env("CYPRESS_NYT_BASE_URL")

    const getUrl = query => `${baseUrl}/search/v2/articlesearch.json?q=${query}*`
    const getFixturePath = query => `fixture:search-results/${query}.json`

    cy.server()
    cy.route(getUrl("Jumia"), getFixturePath("jumia"))
})
