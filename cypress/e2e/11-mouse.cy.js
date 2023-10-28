describe('Mouse buttons', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}buttons`)
    });
    
    it('Double Click', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible')
    });
    
    it('Right Click', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible')
    });
});
