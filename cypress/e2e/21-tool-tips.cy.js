describe('Handling tool tips', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}tool-tips`)
    });

    it('Get tool tip', () => {
        cy.get('#toolTipButton').realHover()
    });
});