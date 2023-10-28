Cypress.config("pageLoadTimeout", 100000);

describe("Broken images challenge", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}broken`);
    });

    it("Not Broken Image", () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]')
            .should("be.visible")
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });

    it("Broken Image", () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
            .should("be.visible")
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });
});

describe.only("Broken Images Challenge", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}broken_images`);
    });

    it("Broken Images first() review", () => {
        cy.get("div.example img")
            .first()
            .should("be.visible")
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });

    it("Broken Images last() review", () => {
        cy.get("div.example img")
            .last()
            .should("be.visible")
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });
});
