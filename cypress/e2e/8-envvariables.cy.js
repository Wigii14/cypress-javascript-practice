describe('Environment Variables', () => {
    it('Demo', () => {
        cy.log(`Printing environment variable value: ${Cypress.env("demoVar")}`)
    });
});