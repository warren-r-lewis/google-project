describe("Google Search Page", () => {
    beforeEach(function () {
        cy.visit("http://localhost:3000/google.html");
    });

    it("Should have an exernal CSS file", () => {
        cy.get("link").invoke("attr", "href").should("eq", "google.css");
    });

    it("Should have Google title", () => {
        cy.title().should("eq", "Google");
    });

    it("Should have an input", () => {
        let element = cy.get("input[type=text]");
        element.invoke("attr", "type").should("eq", "text");
    });

    // Focus test not working
    // it("Should have the input defaulted to focus", () => {
    //   cy.focused().should("have.attr", "name", "search");
    // });

    it("Should have Google logo", () => {
        cy.get(".google-image")
            .invoke("attr", "src")
            .should(
                "eq",
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            );
    });

    it("Should have Google Search button", () => {
        cy.get(".button-wrapper").children().first().contains("Google Search");
    });

    it("Should have I'm Feeling Lucky button", () => {
        cy.get(".button-wrapper")
            .children()
            .first()
            .next()
            .contains("I'm Feeling Lucky");
    });

    it("Should have the appropriate left footer nav links", () => {
        cy.get(".left").children().should("have.length", 3);
    });

    it("Should have the Advertising footer nav link", () => {
        cy.get(".left").children().first().contains("Advertising");
    });

    it("Should have the Business footer nav link", () => {
        cy.get(".left").children().first().next().contains("Business");
    });

    it("Should have the How Search works footer nav link", () => {
        cy.get(".left").children().last().contains("How Search works");
    });

    it("Should have the Privacy footer nav link", () => {
        cy.get(".right").children().first().contains("Privacy");
    });

    it("Should have the Terms footer nav link", () => {
        cy.get(".right").children().first().next().contains("Terms");
    });

    it("Should have the Settings footer nav link", () => {
        cy.get(".right").children().last().contains("Settings");
    });
});
