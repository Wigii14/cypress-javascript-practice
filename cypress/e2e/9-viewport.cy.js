describe('Viewport test', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('angular')}/angularjs-protractor-practice-site`)
    });
    it('hamburger', () => {
        cy.viewport("iphone-6")
        cy.get('#mobile_menu_toggle').should("be.visible")
    });
});